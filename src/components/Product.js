import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import {useState} from 'react';


import NumberFormat from 'react-number-format';

const Product = ({id,title,price,description,category,image}) => {

    const [rating] = useState(Math.floor((Math.random() * 5) + 1))

    const [isPrime] = useState(Math.random() <0.5)

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-5 sm:p-10" >
            <Image src={image} width={200} height={200} objectFit="contain"/>
            <p>{title}</p>
            <div className="flex">
            {Array(rating).fill().map((_,i)=>(<StarIcon className="h-5 text-yellow-500"/>))}
          
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div>
            <NumberFormat  value={price} isNumericString={true} prefix={'$'} className="mb-5" />
          
            </div>
             {isPrime && 
             <div className="flex items-center mx-2 -mt-5">
                 <img src="https://links.papareact.com/fdw" alt="" objectFit="contain" className="w-12 "/>
                 <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>} 
            <button className="mt-auto button">Add to Basket</button>
        </div>
    );
}

export default Product;