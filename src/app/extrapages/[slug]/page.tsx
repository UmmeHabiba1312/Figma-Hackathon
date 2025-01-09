import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import ImageGallery from '@/components/ImageGallery';
import AddToCart from '@/components/AddToCart';

interface FullProduct {
  _id: string;
  Images: any;
  price: number;
  name: string;
  description: string;
  slug: string;
  price_id: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    Images,
    price,
    name,
    description,
    "slug": slug.current,
    price_id,
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function Page({ params }: PageProps) {
  const data: FullProduct = await getData(params.slug);

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <main className='max-w-screen-2xl mx-auto h-auto w-full mb-[80px] px-8'>
      {/* Product Details */}
      <div className='h-auto w-auto mt-[60px] mb-[60px] lg:flex'>
        <ImageGallery Images={data.Images} />
        <div className="two h-auto flex-1 lg:pl-[80px] pl-[6px] pt-[80px] lg:pt-14">
          <h2 className='text-[#272343] text-[40px] sm:text-[60px] leading-[70px] font-bold'>{data.name}</h2>
          <button className='h-[44px] w-[144px] bg-[#029FAE] rounded-full text-white mt-[40px]'>{data.price}$</button>
          <hr className='mt-[30px]' />
          <p className='text-[22px] leading-[33px] text-[#272343] mt-[60px]'>{data.description}</p>
          <AddToCart
            id={data._id}
            name={data.name}
            price={data.price}
            key={data._id}
            description={data.description}
            currency='USD'
            price_id={data.price_id}
            image={data.Images[0]}
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className='h-auto w-full'>
        <div className='flex justify-between'>
          <h2 className='text-[28px] leading-[34px] text-[#000000]'>Featured Products</h2>
          <button
            type="submit"
            className="border-b-2 hover:border-[#029FAE] border-[#000000] text-gray-900 focus:border-[#029FAE] focus:outline-none transition-all duration-300 px-4"
          >
            <Link href="/product" className='hover:text-[#029FAE]'>View All</Link>
          </button>
        </div>

        {/* Product Cards */}
        <div className='h-auto w-full grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[100px]'>
          {/* Repeat this block for each featured product */}
          <div>
            <Image
              className='h-[286px] sm:w-auto w-full rounded-[6px]'
              height={100}
              width={100}
              src='/insta1.png'
              alt='ProductImg'
            />
            <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
              <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
              <span className='text-[#0000000] text-[14px] leading-[17px]'>{`$99`}</span>
            </div>
          </div>

          {/* Two */}
          <div>
            <Image
              className='h-[286px] sm:w-auto w-full rounded-[6px]'
              height={100}
              width={100}
              src='/insta2.png'
              alt='ProductImg'
            />
            <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
              <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
              <span className='text-[#0000000] text-[14px] leading-[17px]'>{`$99`}</span>
            </div>
          </div>

          {/* Three */}
          <div>
            <Image
              className='h-[286px] sm:w-auto w-full rounded-[6px]'
              height={100}
              width={100}
              src='/product4.png'
              alt='ProductImg'
            />
            <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
              <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
              <span className='text-[#0000000] text-[14px] leading-[17px]'>{`$99`}</span>
            </div>
          </div>

          {/* Four */}
          <div>
            <Image
              className='h-[286px] sm:w-auto w-full rounded-[6px]'
              height={100}
              width={100}
              src='/product1.png'
              alt='ProductImg'
            />
            <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
              <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
              <span className='text-[#0000000] text-[14px] leading-[17px]'>{`$99`}</span>
            </div>
          </div>

          {/* Five */}
          <div>
            <Image
              className='h-[286px] sm:w-auto w-full rounded-[6px]'
              height={100}
              width={100}
              src='/cat3.png'
              alt='ProductImg'
            />
            <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
              <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
              <span className='text-[#0000000] text-[14px] leading-[17px]'>{`$99`}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}