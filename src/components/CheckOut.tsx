"use client";
import { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "creditCard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the payment and order
    console.log("Order placed successfully", formData);
    // Redirect to a confirmation page
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#072343] mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#072343] font-semibold">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#072343] font-semibold">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#072343] font-semibold">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#072343] font-semibold">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#072343] font-semibold">Payment Method</label>
          <select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#072343] text-white font-semibold rounded-lg hover:bg-[#054b71]"
        >
          Complete Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
