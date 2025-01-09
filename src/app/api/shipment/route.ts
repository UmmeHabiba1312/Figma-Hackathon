import { NextResponse } from "next/server";
import shippoClient from "@/lib/shippoClient";

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

interface ShipmentRequestBody {
  addressFrom: Address;
  addressTo: Address;
  parcel: Parcel;
}

export async function POST(request: Request) {
  try {
    const { addressFrom, addressTo, parcel } = (await request.json()) as ShipmentRequestBody;

    // Create shipment using Shippo
    const shipment = await shippoClient.shipment.create({
      address_from: addressFrom,
      address_to: addressTo,
      parcels: [parcel],
      async: false, // Synchronous request
    });

    // Return the shipment data
    return NextResponse.json({ success: true, shipment }, { status: 200 });
  } catch (error: any) {
    console.error("Error creating shipment:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}