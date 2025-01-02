import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface imagesType {
    Images:any;
}

export default function ImageGallery({Images}:imagesType){
    
    return (
        <div className='h-auto w-auto mt-[60px] mb-[60px] lg:flex'>
            {Images.map((image:any, index:any) => (
                <div key={index} className="one flex-1 h-auto">
                    <Image
                    className="h-[607px] sm:w-[675px] w-auto md:w-full lg:w-[675px] md:px-6 lg:px-0 rounded-[10px] object-cover cursor-pointer"
                        src={urlFor(image).url()}
                        alt='photo'
                        height={100}
                        width={100}
                    />
                </div>
            ))}
        </div>
    )
}