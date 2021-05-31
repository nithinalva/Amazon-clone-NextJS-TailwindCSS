
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid';
import NumberFormat from 'react-number-format';
import {useDispatch} from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import CurrencyFormat from 'react-currency-format';

const CheckoutProduct = ({id,title,price,description,category,image,rating,isPrime}) => {

    const dispatch=useDispatch();

    const addItemToBasket=()=>{

        const product={
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            isPrime
        }

        dispatch(addToBasket(product))

    }
const removeItemFromBasket=()=>{
    ///removing the item from redux


    dispatch(removeFromBasket({id}))
}



    return(
    <div className="grid grid-cols-5">

                <Image src={image} height={200} width={200}  objectFit="contain"/>
                {/* Middle layer*/}
              <div className="col-span-3 mx-10">
                <p className="font-bold">{title}</p>
                     <div className="flex">
                {Array(rating).fill().map(( _,i)=>(
                    <StarIcon className="h-5 text-yellow-500"/>
                ))}
                    </div>
                    <p className="line-clamp-3 my-2 text-xs text-gray-600">{description}</p>
                             <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-xl"  />
                    {isPrime && 
             <div className="flex items-center mx-2 ">
                 <img src="https://links.papareact.com/fdw" alt="" objectFit="contain" className="w-12  "/>
                 <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>} 
                
              </div>
                 {/* 3rd layer*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button">Add to Basket</button>
                <button onClick={()=>removeItemFromBasket()} className="button">Remove from Basket</button>
            </div>
            
            
        </div>
            
         
            
  
    );
}

export default CheckoutProduct;