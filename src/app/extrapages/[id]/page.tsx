import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

// Define the Product type
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

// Define the Params type for dynamic route
interface Params extends ParsedUrlQuery {
  id: string;
}

// getStaticPaths function
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://example.com/api/products');
  const products: Product[] = await res.json(); // Type the API response

  const paths = products.map((product) => ({
    params: { id: product.id }, // Ensure `id` is a string
  }));

  return { paths, fallback: false };
};

// getStaticProps function
export const getStaticProps: GetStaticProps<{ product: Product }, Params> = async (context) => {
  const { id } = context.params!; // `params` will always be defined when fallback is false
  const res = await fetch(`https://example.com/api/products/${id}`);
  const product: Product = await res.json(); // Type the API response

  return { props: { product } };
};

// React component to render the product
const ProductPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
    </div>
  );
};

export default ProductPage;
