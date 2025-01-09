"use client"; // Ensure this is at the top

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Define the type for order
interface Order {
  customerName: string;
  totalAmount: number;
  trackingId?: string; // Make trackingId optional
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  products: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

const SuccessPage = () => {
  const [order, setOrder] = useState<Order | null>(null); // Define type for order
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Define type for error

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      // Extract order ID from URL
      const orderId = new URLSearchParams(window.location.search).get("orderId");
      console.log("Order ID from URL:", orderId); // Debugging line

      if (orderId) {
        const fetchOrderDetails = async () => {
          try {
            // Fetch order details from Sanity
            const query = `*[_type == "order" && _id == "${orderId}"]{
              customerName,
              totalAmount,
              trackingId,
              shippingAddress,
              products
            }`;
            const order = await client.fetch(query);

            // Log fetched data for debugging
            console.log("Fetched Order:", order);

            if (order && order.length > 0) {
              setOrder(order[0]); // Set the fetched order
            } else {
              setError("Order not found in the database."); // Set error if no order is found
            }
          } catch (error) {
            console.error("Error fetching order details:", error);
            setError("Failed to fetch order details."); // Set error message
          } finally {
            setLoading(false); // Disable loading
          }
        };

        fetchOrderDetails();
      } else {
        setLoading(false); // If no orderId is found, stop loading
        setError("Order ID not found in URL."); // Set error message
      }
    }
  }, []);

  // Display loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  // Display order not found state
  if (!order) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold">Order not found.</p>
        </div>
      </div>
    );
  }

  // Display order details
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Order Successful!</h1>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <p>
            <strong>Customer Name:</strong> {order.customerName}
          </p>
          <p>
            <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
          </p>
          <p>
            <strong>Tracking ID:</strong> {order.trackingId || "Not available"}
          </p>
          <div>
            <h3 className="text-lg font-semibold">Shipping Address</h3>
            <p>{order.shippingAddress.street}</p>
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.zip}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Products</h3>
            {order.products.map((product, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <p>
                  <strong>Name:</strong> {product.name}
                </p>
                <p>
                  <strong>Quantity:</strong> {product.quantity}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;








// // pages/success.js
// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// // Define the type for order
// interface Order {
//   customerName: string;
//   totalAmount: number;
//   trackingId: string;
//   shippingAddress: {
//     street: string;
//     city: string;
//     state: string;
//     zip: string;
//   };
//   products: {
//     name: string;
//     quantity: number;
//     price: number;
//   }[];
// }

// const SuccessPage = () => {
//   const [order, setOrder] = useState<Order | null>(null); // Define type for order
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null); // Define type for error

//   // Extract order ID from URL
//   const orderId = new URLSearchParams(window.location.search).get("orderId");

//   useEffect(() => {
//     if (orderId) {
//       const fetchOrderDetails = async () => {
//         try {
//           const query = `*[_type == "order" && _id == "${orderId}"]{
//             customerName,
//             totalAmount,
//             trackingId,
//             shippingAddress,
//             products
//           }`;
//           const order = await client.fetch(query);
//           setOrder(order[0]); // Set the fetched order
//         } catch (error) {
//           setError("Failed to fetch order details."); // Set error message
//         } finally {
//           setLoading(false); // Disable loading
//         }
//       };

//       fetchOrderDetails();
//     }
//   }, [orderId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!order) return <div>Order not found.</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-6">Order Successful!</h1>
//         <div className="space-y-4">
//           <h2 className="text-xl font-semibold">Order Details</h2>
//           <p><strong>Customer Name:</strong> {order.customerName}</p>
//           <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
//           <p><strong>Tracking ID:</strong> {order.trackingId}</p>
//           <div>
//             <h3 className="text-lg font-semibold">Shipping Address</h3>
//             <p>{order.shippingAddress.street}</p>
//             <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">Products</h3>
//             {order.products.map((product, index) => (
//               <div key={index} className="border-b pb-4 mb-4">
//                 <p><strong>Name:</strong> {product.name}</p>
//                 <p><strong>Quantity:</strong> {product.quantity}</p>
//                 <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessPage;











// "use client"; // Mark this component as a Client Component

// import { useSearchParams } from "next/navigation";

// export default function SuccessPage() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId"); // Fetch the order ID from the URL

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
//         <p className="text-gray-600">Thank you for your purchase.</p>
//         {orderId && (
//           <div className="mt-4">
//             <p className="text-gray-600">Your order ID is: <strong>{orderId}</strong></p>
//             <p className="text-gray-600">We have sent the order details to your email.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }










// // import { useRouter } from "next/router";

// // export default function SuccessPage() {
// //   const router = useRouter();
// //   const { trackingId } = router.query; // URL se tracking ID fetch karein

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-lg shadow-lg text-center">
// //         <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
// //         <p className="text-gray-600">Thank you for your purchase.</p>
// //         {trackingId && (
// //           <div className="mt-4">
// //             <p className="text-gray-600">Your tracking ID is: <strong>{trackingId}</strong></p>
// //             <p className="text-gray-600">We have sent the tracking details to your email.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }