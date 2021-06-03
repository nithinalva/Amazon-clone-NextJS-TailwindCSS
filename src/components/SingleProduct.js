import React from 'react';
import Image from 'next/image'
import NumberFormat from 'react-number-format';
import { StarIcon } from '@heroicons/react/solid';
import {addToBasket} from '../slices/basketSlice'
import {useDispatch} from 'react-redux'
import CurrencyFormat from 'react-currency-format';

export const SingleProduct = ({id,title,image,description,price,rating,category,isPrime}) => {

    const dispatch = useDispatch();


    const addItemsToBasket=()=>{
        //pushing item into store
        
            const product={
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            isPrime
        
        };
        //sending the product as an action to redux store... the basket slice
            dispatch(addToBasket(product))
        
            }


    return (
        <div className="my-2 sm:my-28 mx-6 sm:mx-2 flex-grow bg-white shadow-sm grid grid-cols-5 p-3">

        {/*Responsive visible title and description */}
        <div className=" inline sm:hidden col-span-5">
            <h1 className="
            text-xl sm:text-3xl font-bold border-b ">{title}</h1>
                <p className="my-1 text-gray-500 text-xl">{category}</p>
            <div className="flex">
                 
                            {Array(rating).fill().map((_,i)=>(<StarIcon className="h-7 text-yellow-500 my-0"/>))}
                            </div>
            <p className="my-3 sm:my-10 md:my-2 lg:my-10  line-clamp-4">{description}</p>
           
        </div>
            
               {/*Image */}
            <div className="col-span-5 sm:col-span-2 border-gray-400 border rounded-md  p-10 sm:p-1 mx-auto ">
            <Image src={image} width={580} height={400} objectFit="contain" />
            </div>
           

            <div className="col-span-5 sm:col-span-3 mx-0 sm:mx-10 my-3">
                 <h1 className=" hidden sm:flex text-xl md:text-2xl font-bold border-b ">{title}</h1>
                    <div className="hidden sm:inline">
                            <p className="my-1 text-gray-500 text-xl">{category}</p>
                            <div className="flex">
                            {Array(rating).fill().map((_,i)=>(<StarIcon className="h-8 text-yellow-500 my-2"/>))}
                            </div>
                         <p className="my-4 md:my-2 border-b lg:text-xl line-clamp-4 ">{description}</p>
                    </div>
           
                        <div className="my-2 md:my-10 flex items-center ">
                            {/* <NumberFormat  value={price} isNumericString={true} prefix={'$'}  className="font-bold text-2xl" /> */}
                            <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-2xl"  />
                            {isPrime && 
             <div className="flex items-center mx-2 -mt-5">
                 <img src="https://links.papareact.com/fdw" alt="" objectFit="contain" className="w-10 sm:w-16 "/>
                 <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>} 
                        </div>
                            <div className="">

                            <button className="button text-sm sm:text-xl w-full sm:w-52 " onClick={()=>addItemsToBasket()} >Add to Basket</button>
                             </div>
        
      
         
            </div>
         
                {/* */}
        </div>
    )
}
