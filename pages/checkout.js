import {React,useState} from 'react'
import Header from '../src/components/Header'
import Image from 'next/image'
import { selectItemPrice, selectItems } from '../src/slices/basketSlice'
import {useSelector } from 'react-redux';
import CheckoutProduct from '../src/components/CheckoutProduct';
import {useSession} from 'next-auth/client'
import Footer from '../src/components/Footer';
import CurrencyFormat from 'react-currency-format';
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios';
const stripePromise=loadStripe(process.env.stripe_public_key)


const Checkout = ({products}) => {

  

//pulling items from the redux stores
const items = useSelector(selectItems)
const totalPrice=useSelector(selectItemPrice)
const [session]=useSession();


const createCheckoutSession=async () => {
  const stripe= await stripePromise;
  //call the bACKEND TO CREATE TO CREATE A CHECKOUT SESSION

  const checkoutSession=await axios.post('/api/create-checkout-session',
  //request
  {
    items:items,
    email:session.user.email,
  
    
  })

const result=await stripe.redirectToCheckout({

    sessionId:checkoutSession.data.id,
})

if(result.error){ alert(result.error.message)}


}



    return (
        <>

          <div className="bg-gray-100 h-full">
            <Header products={products}/>
            {/* leftside */}
          <main className="lg:flex max-w-screen-2xl mx-auto h-full   flex-grow">

                  <div className="flex-grow m-5 shadow-sm">
                         <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain"/>

                             <div className="flex flex-col p-5 space-y-10 bg-white">
                                  <h1 className="text-xl font-bold border-b pb-4">{items.length==0?"Your Shopping basket is empty":"Shopping Basket"}</h1>

                               {items.map((item,i)=>(

                  // <CheckoutProduct key={i} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image}/>
                                    <CheckoutProduct  key={i} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} rating={item.rating} isPrime={item.isPrime}  />

              ))}
                
                          </div>
                 
                 
                 
                 
                  </div>




              {/* righside */}
                {items.length>0 && 
              <div className="flex flex-col bg-white p-10">  
                
                  <>
                    <h2 className="whitespace-nowrap font-bold text-lg border-b">Subtotal ({items.length} items): { " "}
                    <span className="font-bold"></span>
                    <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-lg"  />
                    </h2>
                    <button disabled={!session}  role="link" className={`button whitespace-nowrap  mt-2 ${!session && `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:bg-gray-300 `}`} onClick={createCheckoutSession}>
                    {!session? "Sign in to checkout":"Proceed to checkout"}
                    </button>
                  </>
                  
                  
            </div>
}

        </main>
     
    </div>
       <Footer/>
        </>
    )




    
}

Checkout.getInitialProps = async (context) => {


  const products=await fetch('https://fakestoreapi.com/products')
                      .then(res=>res.json())

return{

    products
  }

} 
export default Checkout

