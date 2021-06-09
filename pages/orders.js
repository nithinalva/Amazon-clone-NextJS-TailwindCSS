import Header from "../src/components/Header";
import {getSession, useSession} from 'next-auth/client'
import firebaseDb from "../firebase";
import moment from "moment";
import { Order } from "../src/components/Order";
import Footer from '../src/components/Footer'
import {useSelector} from 'react-redux'
import { selectProducts} from '../src/slices/productSlice';
import {useEffect} from 'react'
const orders = ({orders}) => {
    
 useEffect(() => {
    
 }, [{orders}])

    const [session]=useSession()

    const globalProducts=useSelector(selectProducts)

    return (
        <div className="bg-gray-200  h-full">
            <Header products={globalProducts}/>
            <main className="max-w-screen-lg mx-auto p-10">

                <div className="bg-white p-2">
                     <h1 className="text-3xl">
                    Your Orders
                     </h1>
                     <p className="border-b mb-2 pb-2 border-yellow-400 text-red-800 text-xs">please refresh the page if your recent orders are not  Updated!!</p>
                    {session?
                    <h1 className="font-bold">{orders.length} Orders</h1>:<h2>please sign in to see your order</h2>
                    }

                         <div className="space-y-5 mt-5 ">
                            {orders?.map(({id,amount,amountShipping,images,timestamps,items})=>(
                                <Order key={id} id={id} amount={amount} amountShipping={amountShipping} images={images} timestamps={timestamps} items={items}/>
                            ))}

                         </div>

                </div>
              
            </main>
            <Footer/>
        </div>
      
    );
}

export default orders;

export async function getServerSideProps(context){      //nodejs

    const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)
    //get users logged in credentials

    const session=await getSession(context)       //req,res= context

    if(!session){       
        return {
            props:{}
        }
    }
    //getting order from firebase db

    const stripeOrders=await firebaseDb.collection('user').doc(session.user.email).collection("orders").orderBy("timestamps","desc").get();
    console.log(stripeOrders.docs)
    //going through every single doc in firebase
    //1. each one is async request
    const orders=await Promise.all(

        stripeOrders.docs.map(async (order)=>({

            id:order.id,
            amount:order.data().amount,
            amountShipping:order.data().amount_shipping,
            images:order.data().images,
            //while sending the timestamp from db !! becarefull its isnt that easy bcz there's a chances it might change so use unix
            timestamps:moment(order.data().timestamps.toDate()).unix(),

            items:( await stripe.checkout.sessions.listLineItems(order.id, {limit:100})).data,

                   
            


        }))
    )

    return {
        props:{
            orders
        }
    }

}