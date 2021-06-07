import {buffer} from 'micro'
import * as admin from 'firebase-admin'

const serviceAccount = require("../../permisions.json");


//Securing a connection to firebase

//prevent the Admin SDK from initializing multiple times
const app=!admin.apps.length? admin.initializeApp({

    credential:admin.credential.cert(serviceAccount),
})

:admin.app()
  

//establish a connection to stripe
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)

const endPointSecrets=process.env.STRIPE_SIGNING_SECRET

//storing into firebase
const fullfillOrder=async(session)=>{
   
    console.log('fullfilllin order',session)

    return app.firestore().collection('user').doc(session.metadata.email).collection("orders").doc(session.id).set({
        amount:session.amount_total/100 ,//subcurrency to normal currency
        amount_shipping:session.total_details.amount_shipping/100,
        images:JSON.parse(session.metadata.images),
        timestamps:admin.firestore.FieldValue.serverTimestamp(),//time of upload
    

    }).then(()=>{

        console.log(`Success:order ${session.id} has been added to DB`)
       
    }).catch((err)=>res.status(400).send(`webhook_error: ${err.message}`))
        
}


export default async (req,res)=>{
 if(req.method==='POST'){
    const requestBuffer=await buffer(req);
    const payload=requestBuffer.toString();
    const sig=req.headers["stripe-signature"]

    let event;

    //verifying if the event is posted from stripe
    try{
        event=stripe.webhooks.constructEvent(payload,sig,endPointSecrets)
    }catch(err){
        console.log('ERROR',err.message)
        return res.status(400).send(`Webhook error:${err.message}`)
    }
    ///handle the special checkout session complete event
    if(event.type==='checkout.session.completed') {

        const session=event.data.object
        //full fill order
        return fullfillOrder(session)
        .then(()=>
            res.status(200)
        ).catch((err)=>res.status(400).send(`webhook_error: ${err.message}`))
        
    }
 }
}

export const config={

    api:{
        bodyParser:false,
        externalResolver:true,
    },
} 