import Image from 'next/image'
import {useState,useEffect} from 'react'

import { SearchIcon,MenuIcon,ShoppingCartIcon,LocationMarkerIcon,ChevronRightIcon} from '@heroicons/react/outline'
import {UserIcon} from '@heroicons/react/solid'
import {Card, Drawer} from '@material-ui/core'
import {signIn,useSession,signOut, signin} from 'next-auth/client'
import {useRouter} from 'next/router'
import { Autocomplete} from '@material-ui/lab'
import TextField from '@material-ui/core/TextField';
import { selectItems } from '../slices/basketSlice'
import {useSelector} from 'react-redux'
import Link from 'next/link'
import axios from 'axios'
import { spacing } from '@material-ui/system';
import CircularProgress from '@material-ui/core/CircularProgress';
//day03
const Header = ({products}) => {

    const theme = {
        spacing: [0, 2, 3, 5, 8],
      }


    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading,setloading]=useState(false)
    const [Address,setAddress]=useState(JSON.parse(window.sessionStorage.getItem("loc")))

   

const [session]=useSession();       //session.user.name session.user.image

    const [open, setopen] = useState(false)

    const [productsmatch, setproductsmatch] = useState([])

    const router=useRouter();


    const items = useSelector(selectItems);




    const sideBarHandler=()=>{

        setopen(true)
    }
    // const [products1, setproducts] = useState([{products}])

    const username=(fullname)=>{

        let name = fullname.split(' ');
        return name[0]
    }

    const searchProducts=(text)=>{
        if(!text){
           return setproductsmatch([])
        }
        let matches=products.filter((prod)=>{

            const regex= new RegExp(`${text}`,"g");
            return prod.title.match(regex) 

        });

       setproductsmatch(matches)

    

    }



    const resetInputField = () => {
       searchProducts("");
      };


      const getLocation = () => {
        if (!navigator.geolocation) {
          return setStatus('Geolocation is not supported by your browser');
        } 
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
       
        
    
    
    
    }

    useEffect( () => {
        
        // if(!Address===null){
            
        // return setloading(true)
        // }

        
        const fetchData= async()=>{
    
          await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,{

          params:{
              lat:lat,
              lon:lng
          }
          })
          .then(response => { 
            // console.log(response.data.address.city,response.data.address.postcode)

            setAddress({
                city:response.data.address.city,
                postcode:response.data.address.postcode
            })
            // setloading(true)
            window.sessionStorage.setItem("loc",JSON.stringify(Address))
        
        })
        .catch(error => {
            // console.log(error)
            console.log( error.response.request._response );
        });
      
    
    }
    // setAddress(JSON.parse(window.sessionStorage.getItem("loc")))
    fetchData()

    if(Address!==null){
        setloading(true)
        // console.log("not empty")
    }
        
    //     console.log(loading)
    // console.log(Address)
    }, [getLocation])
    
 

    return (
        <header className="sticky top-0 z-50">
            {/* top nav */}
                <div className=" flex items-center bg-amazon_blue p-1 flex-grow  flex-wrap  ">       
                    <MenuIcon className="inline h-10 mx-1 mb-3 text-white items-center sm:hidden" onClick={()=>sideBarHandler()}/>
                    <div className=" w w-24 sm:w-auto mt-2 flex items-center flex-grow sm:flex-grow-0  ">
                             <Image
                            src="https://links.papareact.com/f90" width={150} height={50} objectFit="contain" className="cursor-pointer" onClick={()=>router.push('/')}/>
                    
                    </div>
                  

                    {session && 
                    <div className="hidden sm:inline-flex items-center p-4 link ">
                 
                      <div>
                  
                       <p className=" leading-3 text-tiny text-white flex items-center mx-6 ">Deliver to {session.user.name}</p>
                       {Address===null?<p className="text-white text-lg font-bold flex items-center mx-6 link " onClick={()=>getLocation()}>Add location</p>

                       :loading?
                       <p className="text-white text-sm font-bold flex items-center ">
                      <LocationMarkerIcon className="text-white  h-6"/>{Address.city} {Address.postcode}</p>:<p className="  italic text-white mx-6 tx-xs items-center flex space-x-3  "> <CircularProgress color="inherit" size="1rem" m={8} ></CircularProgress>  ...Fetching Location</p> }
                     </div>

                    </div>

                    }


                     <div className=" relative flex-shrink-0 w-72 flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500  order-last sm:order-none  ">    {/*  search-bar */}
                   
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" onChange={(e)=>searchProducts(e.target.value)} list="productName"/> 
{productsmatch.length>0? 
                    
                    <div className=" absolute top-11 bg-white  max-h-72 w-full overflow-y-scroll p-3 shadow-xl">
                    {productsmatch && productsmatch.map((item,index)=>(
                        
                    
                        <div key={index} className=" text-tiny  flex-wrap  font-bold mx-auto my-4 hover:bg-gray-100 flex items-center border-b "  onClick={() => {router.push(`/product/${item.id}`); resetInputField();}}>{item.title}  <p className="hidden sm:inline mx-1 text-sm text-gray-500 font-light">{item.category}</p></div>
                    
                         ))}
                   <h1></h1> 
     
                    </div>:null

                    }

             {/* <Autocomplete className="bg-white p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 outline-none" id="productName" options={products} onChange={(e)=>searchProducts(e.target.value)} getOptionLabel={(products) => products.title}  renderInput={(params) => <TextField {...params}/> } />  */}

                    {/* <datalist id="productName">
                
                    {productsmatch && productsmatch.map((item,index)=>(
                        
                       
                   <option key={index} className="text-gray-500 flex-wrap">{item.title}</option>
                 
                    ))}
                    
                  
    </datalist> */}
  
                  
                    <SearchIcon className="h-12 p-4"/>
                   
                    </div>

                     <div className="mx-3 sm:mx-6 flex items-center text-sm space-x-0 sm:space-x-6  whitespace-nowrap">
                             <div className= "link" onClick={signin}>       {/* right side of container*/}
                                <p className="text-white md:text-sm leading-3">{session?`Hello,${username(session.user.name)}`: `Sign In`}</p>
                                <p className="hidden sm:inline text-white font-bold md:text-sm">Accounts & Lists</p>
                            </div>
                            

                            <div className= "hidden sm:flex flex-col link" onClick={()=>router.push('/orders')} >       {/* right side of container*/}
                                <p className="text-white ">Returns</p>
                                <p className="text-white font-bold md:text-sm ">& Orders</p>
                            </div>



                            <div className= "relative flex items-center link" onClick={()=>router.push('/checkout')}>       {/* right side of container*/}
                            <span className="absolute top-0 right-0 md:right-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black">{items.length}</span>
                                <ShoppingCartIcon className="h-10 text-white"/>
                                <p className=" hidden md:inline text-white font-bold  md:text-sm mt-2"  >Basket</p>
                            </div>
                        
                        </div>
                        

                </div>

    {/* 
 bottom nav */}           
                 <div className=" flex-shrink-0 w-90 flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white text-xs lg:text-lg">
                        <p className="flex link items-center " onClick={()=>sideBarHandler()}>
                        <MenuIcon className="hidden sm:inline h-6 mr-1"/>
                        All
                        </p>
                        <p className="link ">Fresh</p>
                        <p className="link">Gift cards</p>
                        <p className="link">Amazon Pay</p>
                        
                        <p className="link hidden md:inline-flex">Pet Supplies</p>
                        <p className="link hidden md:inline-flex">Kindle eBooks</p>
                        <p className="link hidden md:inline-flex">Electronics</p>
                        <p className="link hidden md:inline-flex">Home Improvement</p>
                        <p className="link hidden xl:inline-flex">Gift Ideas</p>
                        <p className="link hidden xl:inline-flex">Gift Cards</p>
                        <p className="link hidden xl:inline-flex">Sports,Fitness & Outdoors</p>
                        <p className="link hidden xl:inline-flex">AmazonBasics</p>

                </div>

                {session &&
                <div className=" bg-amazon_blue-light1 h-11 flex-shrink sm:hidden items-center hover:bg-amazon_blue-light ">
                 
                     <div className="flex items-center mx-2 ">
                     {Address===null?
                     <p className=" leading-3 text-sm text-white flex items-center mx-3  my-4 link " onClick={()=>getLocation()} >Add your current location?</p>:loading?
                   <p className="text-white text-center  flex items-center text-sm my-2 truncate"><LocationMarkerIcon className="text-white  h-6"/> Deliver to {username(session.user.name)}-{Address.city} {Address.postcode}</p>
                   :<p className="leading-3 text-sm text-white flex items-center mx-2  my-3 italic"><CircularProgress color="inherit" size="1rem" m={8} ></CircularProgress>...Fetching your Live Location</p>

                     }
                </div>
                
                
                 


                </div>
                }



                    <Drawer anchor="left"open={open} onClose={()=>setopen(false)}>

                                        <div className=" w-72 sm:w-96 flex-col  ">

                                            <div className="flex bg-amazon_blue-light h-14 ">
                                                <p className="text-white font-bold text-2xl flex items-center mx-8"><UserIcon className="h-6 mr-1"/>{session?`Hello, ${username(session.user.name)}`: `Hello, User`}</p>
                                            </div>
                                            <div className="flex h-14">
                                                <p className="font-bold flex  items-center mx-8 text-amazon_blue-light text-xl ">Trending</p>
                                            </div>
                                            <div className="flex w-full h-10 items-center  hover:bg-gray-200 cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8">Best Sellers</p>
                                            </div>
                                            <div className="flex h-10 items-center hover:bg-gray-200 cursor-pointer ">
                                                <p className="text-amazon_blue-light mx-8">New Releases</p>
                                            </div>
                                            <div className="flex h-10 items-center hover:bg-gray-200 cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8">Movies & Shakers</p>
                                            
                                            </div>

                                            <div className="w-full my-4 bg-gray-300 h-0.5"/>
                                            
                                            <div className="flex h-14">
                                                <p className="font-bold flex  items-center mx-8 text-amazon_blue-light text-xl">Digital Content And Devices</p>
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200 cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 w-full flex-shrink">Echo & Alexa</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200 cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 w-full flex-shrink">Fire TV</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 w-full flex-shrink">Kindle E-Reader & eBooks</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200 cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 w-full flex-shrink">Audible Audiobooks</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200 cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex item w-full flex-shrink">Amazon Prime Video</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Amazon Prime Music </p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>
                                            <div className="w-full my-4 bg-gray-300 h-0.5"/>
                                            <div className="flex h-14">
                                                <p className="font-bold flex  items-center mx-8 text-amazon_blue-light text-xl">Shop By Department</p>
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Amazon Mobiles,Computers</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Tv,Appliances,Electronics</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>
                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Men's Fashion</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Women's Fashion</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>

                                            <div className="w-full my-4 bg-gray-300 h-0.5"/>

                                            <div className="flex h-14">
                                                <p className="font-bold flex  items-center mx-8 text-amazon_blue-light text-xl">Programs & Features</p>
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Gift Card's & Mobile Recharges</p>
                                                <ChevronRightIcon className="h-8 text-gray-500 "/>
                                            
                                            </div>


                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Flight Tickets</p>
                                            
                                            
                                            </div>


                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Amazon Assistant</p>
                                            
                                            
                                            </div>

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Full Store Delivery</p>
                                            
                                            
                                            </div>



                                            <div className="w-full my-4 bg-gray-300 h-0.5"/>

                                            <div className="flex h-14">
                                            <p className="font-bold flex  items-center mx-8 text-amazon_blue-light text-xl">Helps & Settings</p>
                                            </div>

                                                <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Your Account</p>
                                            
                                            
                                            </div>
                                            

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Customer Service</p>
                                            
                                            
                                            </div>
                                            

                                            <div className="flex h-10 items-center hover:bg-gray-200  cursor-pointer">
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink" onClick={() =>   {signOut();localStorage.clear();}}>Sign out</p>
                                            
                                            
                                            </div>
                                            


                                            </div>
                </Drawer>


              
        </header>
        
    )
}

export default Header;