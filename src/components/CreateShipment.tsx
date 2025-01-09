"use client"; // Mark this component as a Client Component

import { useState } from 'react';

const CreateShipment = () => {
  const [shipment, setShipment] = useState<any>(null);

  const handleCreateShipment = async () => {
    const response = await fetch('/api/shipment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        addressFrom: {
          name: 'Sender Name',
          street1: '123 Main St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94107',
          country: 'US',
        },
        addressTo: {
          name: 'Recipient Name',
          street1: '456 Market St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94107',
          country: 'US',
        },
        parcel: {
          length: '10',
          width: '8',
          height: '4',
          distance_unit: 'in',
          weight: '2',
          mass_unit: 'lb',
        },
      }),
    });

    const data = await response.json();
    setShipment(data.shipment);
    console.log('Shipment created:', data.shipment);
  };

  return (
    <div>
      <h1>Create Shipment</h1>
      <button onClick={handleCreateShipment}>Create Shipment</button>
      {shipment && (
        <div>
          <h2>Shipment Details</h2>
          <pre>{JSON.stringify(shipment, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateShipment;