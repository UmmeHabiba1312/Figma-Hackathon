import { useState, useEffect } from "react";

const fetchTrackingDetails = async (trackingId: string) => {
  try {
    const response = await fetch(`/api/trackShipment/${trackingId}`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to fetch tracking details.");
    }

    return data.tracking;
  } catch (error) {
    console.error("Error fetching tracking details:", error);
    throw error;
  }
};

const TrackingComponent = ({ trackingId }: { trackingId: string }) => {
  const [trackingDetails, setTrackingDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const details = await fetchTrackingDetails(trackingId);
      setTrackingDetails(details);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [trackingId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Tracking Details</h2>
      {trackingDetails ? (
        <div>
          <p><strong>Status:</strong> {trackingDetails.status}</p>
          <p><strong>Location:</strong> {trackingDetails.location}</p>
          <p><strong>Date:</strong> {trackingDetails.date}</p>
          <h3>Tracking History</h3>
          <ul>
            {trackingDetails.details.map((event: any, index: number) => (
              <li key={index}>
                <p><strong>Status:</strong> {event.status}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {event.date}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tracking details found.</p>
      )}
    </div>
  );
};

export default TrackingComponent;

// import React, { useState } from 'react';

// const TrackShipment = () => {
//   const [trackingNumber, setTrackingNumber] = useState('');
//   const [trackingStatus, setTrackingStatus] = useState<string | null>(null);

//   // Function to handle tracking shipment
//   const handleTrackShipment = async (trackingNumber: string) => {
//     try {
//       // Call the backend API to track the shipment
//       const response = await fetch(`/api/trackShipment?trackingNumber=${trackingNumber}`);
//       const data = await response.json();

//       if (data.success) {
//         // Set the tracking status if the tracking is successful
//         setTrackingStatus(`Tracking status: ${data.tracking.status}`);
//       } else {
//         // Show error if tracking fails
//         alert('Error tracking shipment: ' + data.error);
//       }
//     } catch (error) {
//       console.error('Error tracking shipment:', error);
//       alert('An error occurred while tracking the shipment.');
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleTrackShipment(trackingNumber);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold text-center text-[#072343]">Track Your Shipment</h2>
//       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//         <div>
//           <label htmlFor="trackingNumber" className="block text-sm font-medium text-[#072343]">Tracking Number</label>
//           <input
//             id="trackingNumber"
//             type="text"
//             value={trackingNumber}
//             onChange={(e) => setTrackingNumber(e.target.value)}
//             className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//             placeholder="Enter your tracking number"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-[#072343] text-white p-2 rounded-md hover:bg-blue-600">
//           Track Shipment
//         </button>
//       </form>

//       {trackingStatus && (
//         <div className="mt-4 p-2 bg-green-100 text-[#072343] border border-green-300 rounded-md">
//           <p>{trackingStatus}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackShipment;
