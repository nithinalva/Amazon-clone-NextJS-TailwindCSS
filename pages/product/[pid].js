import { useRouter } from 'next/router'
import Header from '../../src/components/Header'
import {React,useState,useEffect} from 'react'
import { SingleProduct } from '../../src/components/SingleProduct'
import {useSelector} from 'react-redux'
import { selectProducts } from '../../src/slices/productSlice'
import { func } from 'prop-types'
import { useSession} from 'next-auth/client';
import Footer from '../../src/components/Footer'
import { selectItemPrice, selectItems } from '../../src/slices/basketSlice'
import CurrencyFormat from 'react-currency-format'
const Product = ( ) => {


const globalProducts=useSelector(selectProducts)

const items=useSelector(selectItems)
const totalPrice=useSelector(selectItemPrice)

const [session]=useSession();
  const [product, setproduct] = useState([])

  const router = useRouter()
  const { pid } = router.query

  // console.log(pid)

  useEffect(() => {

    const SingleProduct=globalProducts.filter((item)=>(item.id==pid))
    setproduct(SingleProduct)
 
   
    
  },[pid])




  


  return (<div className="bg-gray-100">

   <Header products={globalProducts}/>
  

   {/* {product.map((item)=>(
     <h1>{item.title}</h1>
   ))} */}
   <main className="lg:flex max-w-screen-2xl mx-auto">

   {product.map((item)=>(
     <SingleProduct key={item.id} id={item.id} title={item.title} image={item.image} description={item.description} price={item.price} rating={item.rating} category={item.category} isPrime={item.isPrime}/>
   ))}
     

        {/*actualproduct Container */}

  
    <div className="bg-white flex flex-col p-10">
      {/* <p>hello</p> */}
      {items.length>0 &&
      <>
        <h2 className="whitespace-nowrap font-bold text-lg border-b">Subtotal({items.length} items): {" "}
         <span className="font-bold"></span>
                    <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-lg"  />

        
        </h2>
        <button className={`button mt-2 whitespace-nowrap ${!session && `from-gray-300 to-gray-500 border-gray-500 text-gray-300 cursor-not-allowed hover:bg-gray-300`}`}>
        {!session? "Sign in to checkout":"Proceed to checkout"}
        </button>
        
        </>}
    </div>
  
   </main>



<Footer/> 

  </div>)
  // <p>Post: {pid}</p>
}

// Product.getInitialProps = async (context) => {


//   const products=await fetch('https://fakestoreapi.com/products')
//                       .then(res=>res.json())

// return{

//     products
//   }

// } 

export default Product