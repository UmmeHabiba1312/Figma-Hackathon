import shippoClient from './shippoClient';

const createAddress = async () => {
  try {
    const addressFrom = await shippoClient.addresses.create({
      name: "Shawn Ippotle",
      company: "Shippo",
      street1: "215 Clayton St.",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
      country: "US",
      phone: "+1 555 341 9393",
      email: "shippotle@shippo.com",
    });

    console.log("Address created successfully:", addressFrom);
    return addressFrom;
  } catch (error) {
    console.error("Error creating address:", error);
    throw error;
  }
};

export default createAddress;