import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'
import Banner from '../src/components/Banner';
import Productsfeed from '../src/components/Productsfeed';
import {useRouter} from 'next/router'
import Checkout from './checkout';
import Footer from '../src/components/Footer';
import { Currency } from '../src/Currency';
import { getSession } from 'next-auth/client';



export default function Home({products,location}) {


 console.log(location)
 
  return (
<div className="bg-gray-100">
  <head>
    <title>
      AMAZON 2.0
    </title>
  
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </head>
  {/* <h1>hey nithin alva</h1> */}
  
  <Header products={products}/>

    <main className="max-w-screen-2xl mx-auto " >



    <Banner/>
    <Productsfeed products={products}/>


    </main>
    <Footer/>

 



</div>
  )
}


export async function  getServerSideProps(context){
  const session=await getSession(context)
  const products=await fetch('https://fakestoreapi.com/products')
                      .then(res=>res.json())


           const location= await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?')   
            .then(res=>res.json())


return{

  props:{
    products,
    location,
    session
  
  }
 
}



}