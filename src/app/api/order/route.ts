import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const order = {
      _type: 'order',
      customerName: 'John Doe', // Replace with actual data
      totalAmount: 1000, // Replace with actual data
      products: [
        {
          name: 'Product 1',
          quantity: 1,
          price: 1000,
        },
      ],
      paymentIntentId: '12345', // Replace with actual data
    };

    const result = await client.create(order);
    console.log('Order created:', result);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating order:', error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    } else {
      console.error('An unknown error occurred:', error);
      return NextResponse.json(
        { success: false, error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
}