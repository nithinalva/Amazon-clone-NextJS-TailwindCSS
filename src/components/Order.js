import React from 'react'
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

export const Order = ({id,amount,amountShipping,images,timestamps,items}) => {
    return (
        <div className="text-xs sm:text-xl relative border rounded-md p-2">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-gray-600 ">    
            {/* first row */}
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamps).format("DD MMM YYYY")}</p>
                </div>

                
                <div>
                    <p className="text-xs font-bold">TOTAL PRICE: </p>
                    <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'INR '}/> - Next Delivery-{" "}<CurrencyFormat value={amountShipping} displayType={'text'} thousandSeparator={true} prefix={'INR '}/>
                </div>

                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500"> {items.length} items</p>
               
                
            </div>
            <div className="flex items-center whitespace-nowrap border-b">
            <p className=" p-2 font-bold">Your Order id: </p><p className="truncate">{id}</p>
            </div>

                <div className="p-5 sm:p-10">
                    <div className="flex space-x-10 items-center overflow-x-auto">
                        {images.map((img)=>(
                            <img src={img} className="h-20 object-contain sm:h-36 my-auto"/>
                        ))}
                    </div>

                </div>
                
        </div>
    )
}
