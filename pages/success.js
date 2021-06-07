import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import {useRouter} from 'next/router';
import {useEffect} from 'react'

const success = () => {
  


    const router=useRouter();

   
    return (
        <>
        <div className="bg-gray-100 h-screen">
           <Header/>
           <main className="max-w-screen-lg mx-auto ">
                <div className="bg-white flex flex-col p-10">
                
                        <div className="flex items-center space-x-3 mb-5">

                         <CheckCircleIcon className="text-green-500 h-10"/>
                             <h1 className="text-lg sm:text-3xl font-bold">Thank you,your order has been confirmed!!</h1>
                            </div>
                            <p>Thank you for Shopping with us .we'll send a confirmation of items has shipped,if you would like to check the status of your order(s). please press the below link</p>
                            <button className="button mt-8" onClick={()=>{{router.push('/orders')};localStorage.clear()}}>Go to My orders</button>
                </div>
               
           </main>
          
        </div>
        <Footer/>
        </>
        
    );
}

export default success;