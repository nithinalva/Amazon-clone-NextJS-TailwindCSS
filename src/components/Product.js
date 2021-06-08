import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import {useState, useEffect} from 'react';
import {addToBasket} from '../slices/basketSlice'
import {addProducts} from '../slices/productSlice'
import {useDispatch} from 'react-redux'
import NumberFormat from 'react-number-format';
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link'

const Product = ({id,title,price,description,category,image}) => {
  
    //1. dispatching it to action(redux)
         const dispatch = useDispatch();

    const [rating] = useState(Math.floor(Math.random() * 5-1 + 1))

    const [isPrime] = useState(Math.random() <0.5);

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



const addProductsToGlobal=()=>{

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

 dispatch(addProducts(product))

}


useEffect(() => {
    
    return addProductsToGlobal()
    
},[])


    return (
       
        <div className="relative flex flex-col m-5 bg-white z-30 p-5 sm:p-10"  >
             <Link href={`/product/${id}`}>
            <Image src={image} width={200} height={200} objectFit="contain" className="cursor-pointer transform hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-700"/></Link>
            <p>{title}</p>
         
            <div className="flex">
            {Array(rating).fill().map((_,i)=>(<StarIcon className="h-5 text-yellow-500"/>))}
          
            </div>
      
            <p className="text-xs my-2 line-clamp-2">{description}</p>
        
            <div>
                
            {/* <NumberFormat  value={price} isNumericString={true} prefix={'$'} className="mb-5" />
           */}
           <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} className="text-lg"  />
                           
            </div>
             {isPrime && 
             <div className="flex items-center mx-2 np">
                 <img src="https://links.papareact.com/fdw" alt="" objectFit="contain" className="w-12 "/>
                 <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>} 
            <button onClick={()=>addItemsToBasket()} className="mt-auto button">Add to Basket</button>
        </div>
       
    );
}

export default Product;
