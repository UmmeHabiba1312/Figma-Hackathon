import Shippo from "shippo";

// Initialize Shippo client
const shippo = Shippo("shippo_test_f82354a196a201a6faac82d3d7637d714af1fd1e");

export const createShipment = async (orderDetails: any) => {
  try {
    // Create a shipment
    const shipment = await shippo.shipment.create({
      address_from: {
        name: "Your Store Name",
        street1: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94107",
        country: "US",
      },
      address_to: {
        name: orderDetails.customerName,
        street1: orderDetails.shippingAddress.street,
        city: orderDetails.shippingAddress.city,
        state: orderDetails.shippingAddress.state,
        zip: orderDetails.shippingAddress.zip,
        country: "US",
      },
      parcels: [
        {
          length: "10",
          width: "8",
          height: "4",
          distance_unit: "in",
          weight: "2",
          mass_unit: "lb",
        },
      ],
      async: false,
    });

    // Purchase the shipment and get the tracking ID
    const transaction = await shippo.transaction.create({
      shipment: shipment,
      rate: shipment.rates[0].object_id, // Use the first available rate
      label_file_type: "PDF",
      async: false,
    });

    // Return the tracking ID
    return transaction.tracking_number;
  } catch (error) {
    console.error("Error creating shipment with Shippo:", error);
    return null;
  }
};