import {React,useState} from 'react'
import Header from '../src/components/Header'
import Image from 'next/image'
import { selectItemPrice, selectItems } from '../src/slices/basketSlice'
import {useSelector } from 'react-redux';
import CheckoutProduct from '../src/components/CheckoutProduct';
import {useSession} from 'next-auth/client'
import Footer from '../src/components/Footer';
import CurrencyFormat from 'react-currency-format';

const Checkout = ({products}) => {


//pulling items from the redux stores
const items = useSelector(selectItems)
const totalPrice=useSelector(selectItemPrice)
const [session]=useSession();

    return (
        <>

          <div className="bg-gray-100">
            <Header products={products}/>
            {/* leftside */}
          <main className="lg:flex max-w-screen-2xl mx-auto">

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
              <div className="flex flex-col bg-white p-10">  
                  {items.length>0 && 
                  <>
                    <h2 className="whitespace-nowrap font-bold text-lg border-b">Subtotal ({items.length} items): { " "}
                    <span className="font-bold"></span>
                    <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-lg"  />
                    </h2>
                    <button disabled={!session} className={`button whitespace-nowrap  mt-2 ${!session && `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:bg-gray-300 `}`}>
                    {!session? "Sign in to checkout":"Proceed to checkout"}
                    </button>
                  </>
                  
                  }
            </div>


        </main>
        <Footer/>
    </div>
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

