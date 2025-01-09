import { client } from '@/sanity/lib/client';

// Function to fetch hero data
export async function getHeroData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}