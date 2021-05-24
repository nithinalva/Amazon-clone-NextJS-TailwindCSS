import Image from 'next/image'
import {useState} from 'react'
import { SearchIcon,MenuIcon,ShoppingCartIcon,LocationMarkerIcon,ChevronRightIcon} from '@heroicons/react/outline'
import {UserIcon} from '@heroicons/react/solid'
import {Drawer} from '@material-ui/core'


const Header = ({products}) => {


    const [open, setopen] = useState(false)


    const sideBarHandler=()=>{

        setopen(true)
    }
    // const [products1, setproducts] = useState([{products}])


    return (
        <header className="w-full fixed z-50 top-0">
            {/* top nav */}
                <div className=" flex items-center bg-amazon_blue p-1 flex-grow  flex-wrap  ">       

                    <div className=" w w-24 sm:w-auto mt-2 flex items-center flex-grow sm:flex-grow-0  ">
                             <Image
                            src="https://links.papareact.com/f90" width={150} height={50} objectFit="contain" className="cursor-pointer"/>
                    
                    </div>
                  


                    <div className="hidden md:inline-flex items-center p-4 link ">
                 
                      <div>
                  
                       <p className=" leading-3 text-tiny text-white flex items-center mx-6 ">Deliver to Nithin</p>
                        <p className="text-white text-sm font-bold flex items-center ">
                        <LocationMarkerIcon className="text-white  h-6"/>Bengaluru 560078</p>
                     </div>

                    </div>




                     <div className="flex-shrink-0 w-80 flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500  order-last sm:order-none  ">    {/*  search-bar */}

                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                   
                    </div>

                     <div className="mx-6 flex items-center text-sm space-x-6  whitespace-nowrap">
                             <div className= "link">       {/* right side of container*/}
                                <p className="text-white md:text-sm leading-3">Hello, Nithin</p>
                                <p className="hidden sm:inline text-white font-bold md:text-sm">Accounts & Lists</p>
                            </div>
                            

                            <div className= "hidden sm:link" >       {/* right side of container*/}
                                <p className="text-white ">Returns</p>
                                <p className="text-white font-bold md:text-xs ">& Orders</p>
                            </div>



                            <div className= "relative flex items-center link">       {/* right side of container*/}
                            <span className="absolute top-0 right-0 md:right-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black">0</span>
                                <ShoppingCartIcon className="h-10 text-white"/>
                                <p className=" hidden md:inline text-white font-bold  md:text-sm mt-2">Basket</p>
                            </div>
                        
                        </div>
                        

                </div>

    {/* 
 bottom nav */}           
                 <div className=" flex-shrink-0 w-90 flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white text-xs lg:text-lg">
                        <p className="flex link items-center " onClick={()=>sideBarHandler()}>
                        <MenuIcon className="h-6 mr-1"/>
                        All
                        </p>
                        <p className="link ">Fresh</p>
                        <p className="link">Gift cards</p>
                        <p className="link">Amazon Pay</p>
                        
                        <p className="link hidden md:inline-flex">Pet Supplies</p>
                        <p className="link hidden md:inline-flex">Kindle eBooks</p>
                        <p className="link hidden md:inline-flex">Electronics</p>
                        <p className="link hidden md:inline-flex">Home Improvement</p>
                        <p className="link hidden md:inline-flex">Gift Ideas</p>
                        <p className="link hidden md:inline-flex">Gift Cards</p>
                        <p className="link hidden md:inline-flex">Sports,Fitness & Outdoors</p>
                        <p className="link hidden md:inline-flex">AmazonBasics</p>

                </div>

                    <Drawer anchor="left"open={open} onClose={()=>setopen(false)}>

                                        <div className=" w-72 sm:w-96 flex-col pr-2 ">

                                            <div className="flex bg-amazon_blue-light h-14 ">
                                                <p className="text-white font-bold text-2xl flex items-center mx-8"><UserIcon className="h-6 mr-1"/> Hello, Nithin</p>
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
                                                <p className="text-amazon_blue-light mx-8 flex items-center w-full flex-shrink">Sign out</p>
                                            
                                            
                                            </div>
                                            


                                            </div>
                </Drawer>
        </header>
    )
}

export default Header;