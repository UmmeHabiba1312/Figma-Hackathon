const createAddress = async () => {
    try {
      const response = await fetch('https://api.goshippo.com/addresses/', {
        method: 'POST',
        headers: {
          'Authorization': `ShippoToken ${process.env.NEXT_PUBLIC_SHIPPO_TEST_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "Shawn Ippotle",
          company: "Shippo",
          street1: "215 Clayton St.",
          city: "San Francisco",
          state: "CA",
          zip: "94117",
          country: "US",
          phone: "+1 555 341 9393",
          email: "shippotle@shippo.com",
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create address: ${response.statusText}`);
      }
  
      const addressFrom = await response.json();
      console.log("Address created successfully:", addressFrom);
      return addressFrom;
    } catch (error) {
      console.error("Error creating address:", error);
      throw error;
    }
  };
  
  export default createAddress;