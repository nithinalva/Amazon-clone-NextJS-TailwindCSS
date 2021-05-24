import Image from 'next/image'
import { SearchIcon,MenuIcon,ShoppingCartIcon,LocationMarkerIcon} from '@heroicons/react/outline'


const Header = () => {
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
                        <p className="flex link items-center ">
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

            
        </header>
    )
}

export default Header;