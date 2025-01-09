import { NextResponse } from "next/server";
import Shippo from "shippo";

const shippo = Shippo(process.env.SHIPPO_TEST_TOKEN as string);

export async function GET(request: Request, { params }: { params: { trackingId: string } }) {
  const { trackingId } = params;

  if (!trackingId) {
    return NextResponse.json(
      { success: false, error: "Tracking ID is required." },
      { status: 400 }
    );
  }

  try {
    // Fetch tracking updates using Shippo
    const tracking = await shippo.track.get_status(trackingId);

    // Check if tracking data is available
    if (!tracking || !tracking.tracking_status) {
      return NextResponse.json(
        { success: false, error: "No tracking data found." },
        { status: 404 }
      );
    }

    // Format the response
    const formattedResponse = {
      status: tracking.tracking_status.status,
      location: tracking.tracking_status.location,
      date: tracking.tracking_status.status_date,
      details: tracking.tracking_history.map((event: any) => ({
        status: event.status,
        location: event.location,
        date: event.status_date,
      })),
    };

    return NextResponse.json({ success: true, tracking: formattedResponse }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching tracking updates:", error);

    // Handle Shippo API errors
    if (error.response && error.response.data) {
      return NextResponse.json(
        { success: false, error: error.response.data },
        { status: error.response.status || 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}