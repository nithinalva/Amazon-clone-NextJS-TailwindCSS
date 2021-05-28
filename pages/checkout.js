import {React,useState} from 'react'
import Header from '../src/components/Header'
import Image from 'next/image'


const Checkout = ({products}) => {


    return (
        <>

          <div className="bg-gray-100">
            <Header products={products}/>
            {/* leftside */}
          <main className="lg:flex max-w-screen-2xl mx-auto">

                  <div className="flex-grow m-5 shadow-sm">
                  <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain"/>

                  <div className="flex flex-col p-5 space-y-10 bg-white">
                  <h1 className="text-xl border-b pb-4">Your Shopping basket</h1>
                  </div>
                 
                 
                 
                 
                  </div>




            <div>  {/* righside */}

            </div>
          </main>

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

