import { client } from '@/sanity/lib/client';

// Define the type for the product data
interface SimplifiedProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
}

// Function to fetch product data
export async function getProductData(): Promise<SimplifiedProduct[]> {
  const query = `*[_type == 'product'][0...4] | order(_createdAt asc) {
    _id,
    name,
    description,
    price,
    "slug": slug.current,
    "imageUrl": Images[0].asset->url,
  }`;

  const data = await client.fetch(query);
  return data;
}