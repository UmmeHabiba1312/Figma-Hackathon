"use client"; // Mark this component as a Client Component

import { useState, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { client } from "@/sanity/lib/client";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartDetails, totalPrice } = useShoppingCart();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [deliveryCharges, setDeliveryCharges] = useState(0);

  // State for form fields
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  // State for form errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Convert cartDetails to an array of items
  const cartItems = Object.values(cartDetails || {});

  // Handle undefined totalPrice by providing a fallback value
  const safeTotalPrice = totalPrice ?? 0; // Fallback to 0 if totalPrice is undefined
  const displayTotalPrice = safeTotalPrice.toFixed(2); // Format the total price

  // Calculate delivery charges based on the selected option
  const calculateDeliveryCharges = () => {
    switch (deliveryOption) {
      case "standard":
        setDeliveryCharges(5.0); // $5 for standard delivery
        break;
      case "express":
        setDeliveryCharges(10.0); // $10 for express delivery
        break;
      default:
        setDeliveryCharges(0);
    }
  };

  // Update delivery charges when the delivery option changes
  useEffect(() => {
    calculateDeliveryCharges();
  }, [deliveryOption]);

  // Validate the form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!fullName) errors.fullName = "Full name is required";
    if (!address) errors.address = "Address is required";
    if (!city) errors.city = "City is required";
    if (!state) errors.state = "State is required";
    if (!zipCode) errors.zipCode = "ZIP code is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePayment = async () => {
    // Validate the form before proceeding
    if (!validateForm()) {
      return;
    }
  
    if (!stripe || !elements) {
      return;
    }
  
    setLoading(true); // Disable the button
    setErrorMessage(null); // Clear any previous error message
  
    try {
      // Fetch the client secret from the backend
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: (safeTotalPrice + deliveryCharges) * 100 }), // Amount in cents (including delivery charges)
      });
  
      const data = await response.json();
      console.log("Backend Response:", data);
  
      if (!data.clientSecret) {
        throw new Error("No client secret returned from the backend.");
      }
  
      // Confirm the card payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });
  
      if (result.error) {
        console.error("Payment Error:", result.error);
        setErrorMessage(result.error.message || "Payment failed. Please try again.");
      } else {
        // Step 1: Generate a trackingId (example: using a random string)
        const trackingId = `TRACK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  
        // Step 2: Save order details to Sanity (including trackingId)
        const order = {
          _type: "order",
          customerName: fullName,
          totalAmount: safeTotalPrice + deliveryCharges,
          trackingId, // Include the trackingId
          shippingAddress: {
            street: address,
            city: city,
            state: state,
            zip: zipCode,
          },
          products: cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        };
  
        // Create the order in Sanity and get the orderId
        const createdOrder = await client.create(order);
        const orderId = createdOrder._id; // Get the orderId from the created order
  
        // Step 3: Redirect to success page with orderId
        window.location.href = `/success?orderId=${orderId}`;
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Re-enable the button
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {/* Display error message */}
        {errorMessage && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMessage}
          </div>
        )}

        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-between border-t pt-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">${displayTotalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery & Handling</span>
              <span className="text-gray-600">${deliveryCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">
                ${(safeTotalPrice + deliveryCharges).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="123 Main St"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {formErrors.address && (
                <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="San Francisco"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {formErrors.city && (
                <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="CA"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                {formErrors.state && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ZIP Code</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="94107"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                {formErrors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.zipCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Options */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="deliveryOption"
                value="standard"
                checked={deliveryOption === "standard"}
                onChange={() => setDeliveryOption("standard")}
              />
              Standard Delivery ($5.00) - 3-5 business days
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="deliveryOption"
                value="express"
                checked={deliveryOption === "express"}
                onChange={() => setDeliveryOption("express")}
              />
              Express Delivery ($10.00) - 1-2 business days
            </label>
          </div>
        </div>

        {/* Payment Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <div className="space-y-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePayment}
          disabled={loading} // Disable the button when loading
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

// Wrap the CheckoutForm in the Elements provider
export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}