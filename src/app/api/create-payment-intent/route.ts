import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia', // Use the correct API version
});

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the request body
    const { amount } = body; // Extract amount from the body

    // Create a PaymentIntent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents (e.g., $10.00 = 1000)
      currency: 'usd', // Change to your currency
      description: 'Test payment', // Optional
    });

    // Return the client secret to the frontend
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}