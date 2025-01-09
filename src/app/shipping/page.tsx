"use client";
import { useState } from 'react';

interface Address {
  name: string;
  street1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface Parcel {
  length: string;
  width: string;
  height: string;
  weight: string;
}

interface FormData {
  addressFrom: Address;
  addressTo: Address;
  parcel: Parcel;
}

export default function ShippingForm() {
  const [formData, setFormData] = useState<FormData>({
    addressFrom: { name: '', street1: '', city: '', state: '', zip: '', country: '' },
    addressTo: { name: '', street1: '', city: '', state: '', zip: '', country: '' },
    parcel: { length: '', width: '', height: '', weight: '' },
  });

  const [labelUrl, setLabelUrl] = useState<string | null>(null);
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const response = await fetch('/api/createShipment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      // Show label image or download link
      if (data.label && data.label.label_url) {
        setLabelUrl(data.label.label_url);
      }

      // Show tracking number
      setTrackingNumber(data.trackingNumber);
    } else {
      console.error('Error:', data.error);
      alert('Error creating shipment: ' + data.error);
    }

    setLoading(false); // End loading
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, section: 'addressFrom' | 'addressTo' | 'parcel') => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: e.target.value,
      },
    }));
  };

  return (
    <form className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h1 className="text-3xl text-[#072343] font-bold text-center mb-6">Shipping Form</h1>

      {/* Sender Address */}
      <h2 className="text-2xl text-[#072343] font-semibold mb-4">Sender Address</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => handleChange(e, 'name', 'addressFrom')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Street"
        onChange={(e) => handleChange(e, 'street1', 'addressFrom')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) => handleChange(e, 'city', 'addressFrom')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="State"
        onChange={(e) => handleChange(e, 'state', 'addressFrom')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Zip"
        onChange={(e) => handleChange(e, 'zip', 'addressFrom')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => handleChange(e, 'country', 'addressFrom')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />

      {/* Recipient Address */}
      <h2 className="text-2xl text-[#072343] font-semibold mb-4">Recipient Address</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => handleChange(e, 'name', 'addressTo')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Street"
        onChange={(e) => handleChange(e, 'street1', 'addressTo')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) => handleChange(e, 'city', 'addressTo')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="State"
        onChange={(e) => handleChange(e, 'state', 'addressTo')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Zip"
        onChange={(e) => handleChange(e, 'zip', 'addressTo')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => handleChange(e, 'country', 'addressTo')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />

      {/* Parcel Details */}
      <h2 className="text-2xl text-[#072343] font-semibold mb-4">Parcel Details</h2>
      <input
        type="text"
        placeholder="Length"
        onChange={(e) => handleChange(e, 'length', 'parcel')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Width"
        onChange={(e) => handleChange(e, 'width', 'parcel')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Height"
        onChange={(e) => handleChange(e, 'height', 'parcel')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder="Weight"
        onChange={(e) => handleChange(e, 'weight', 'parcel')}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
      />

      {/* Submit Button */}
      <button type="submit" className="w-full p-3 bg-[#072343] text-white font-semibold rounded-lg hover:bg-[#054b71]" disabled={loading}>
        {loading ? 'Creating Shipment...' : 'Create Shipment'}
      </button>

      {/* Show Label URL */}
      {labelUrl && (
        <div className="mt-4">
          <h3 className="text-xl text-[#072343] font-semibold">Shipment Label</h3>
          <a href={labelUrl} target="_blank" rel="noopener noreferrer">
            Download Label
          </a>
        </div>
      )}

      {/* Show Tracking Number */}
      {trackingNumber && (
        <div className="mt-4">
          <h3 className="text-xl text-[#072343] font-semibold">Tracking Number</h3>
          <p>{trackingNumber}</p>
        </div>
      )}
    </form>
  );
}
