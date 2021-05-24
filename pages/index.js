import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'
import Banner from '../src/components/Banner';
import Productsfeed from '../src/components/Productsfeed';

export default function Home({products}) {
  return (
<div className="bg-gray-100" >
  <head>
    <title>
      AMAZON 2.0
    </title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </head>
  {/* <h1>hey nithin alva</h1> */}
  <Header products={products}/>
    <main className="max-w-screen-2xl my-36 md:my-28 mx-auto">



    <Banner/>
    <Productsfeed products={products}/>


    </main>






</div>
  )
}


export async function  getServerSideProps(conext){

  const products=await fetch('https://fakestoreapi.com/products')
                      .then(res=>res.json())

return{

  props:{
    products
  }
}

}