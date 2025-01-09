import { client } from "@/sanity/lib/client";

interface OrderData {
  customerName: string;
  totalAmount: number;
  products: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  paymentIntentId: string;
}

/**
 * Create an order in Sanity.
 * @param {OrderData} orderData - The order data to be saved.
 * @returns {Promise<Object>} - The created order document.
 */
export const createOrder = async (orderData: OrderData) => {
  try {
    const result = await client.create({
      _type: 'order',
      ...orderData,
    });
    console.log('Order created:', result);
    return result;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};