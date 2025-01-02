// "use client"
// import React from 'react'
// import { Button } from './ui/button'
// import { useShoppingCart } from 'use-shopping-cart'
// import { FiShoppingCart } from 'react-icons/fi'
// import { urlFor } from '@/sanity/lib/image'
// import { ProductCart } from './AddToCart'

// // export interface ProductCart {
// //     name: string;
// //     description: string;
// //     price: number;
// //     image: any;
// //     currency: string;
// //     price_id: string;
// // }

// const CheckOutNow = ({currency,description,name,price,image,price_id}:ProductCart) => {
//     const {checkoutSingleItem} = useShoppingCart()

//     function buyNow(priceId:string){
//         checkoutSingleItem(priceId);
//     }
//     const product ={
//         name: name,
//         description: description,
//         price: price,
//         image: urlFor(image).url(),
//         currency: currency,
//         id:"product",
//         price_id : price_id,
//     };
//   return (
//     <Button onClick={()=>{
//        buyNow(product.price_id);
//     }} className=' h-[63px] hover:bg-[#272343] w-[212px] rounded-[8px] bg-[#029FAE] text-white flex justify-center items-center mt-[40px] gap-3'><FiShoppingCart className='h-[29px] w-[29px]' /> Add To cart</Button>
//   )
// }

// export default CheckOutNow