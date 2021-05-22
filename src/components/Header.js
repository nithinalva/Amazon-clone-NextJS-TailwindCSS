import Image from 'next/image'
import { SearchIcon,MenuIcon,ShoppingCartIcon } from '@heroicons/react/outline'


const Header = () => {
    return (
        <header>
            {/* top nav */}
                <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 flex-wrap">       

                    <div className=" w-24 sm:mt-2 flex items-center flex-grow sm:flex-grow-0  ">
                             <Image
                            src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className="cursor-pointer"/>
                    
                    </div>
              
                     <div className="  flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500  order-last sm:order-none  ">    {/*  search-bar */}

                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                   
                    </div>

                     <div className="mx-6 flex items-center text-xs space-x-6  whitespace-nowrap">
                             <div className= "link">       {/* right side of container*/}
                                <p className="text-white md:text-xs">Hello, Nithin Alva</p>
                                <p className="hidden sm:inline text-white font-bold md:text-xs">Accounts & Lists</p>
                            </div>
                            

                            <div className= "hidden sm:link" >       {/* right side of container*/}
                                <p className="text-white ">Returns</p>
                                <p className="text-white font-bold md:text-xs ">& Orders</p>
                            </div>



                            <div className= "relative flex items-center link">       {/* right side of container*/}
                            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">0</span>
                                <ShoppingCartIcon className="h-10 text-white"/>
                                <p className=" hidden md:inline text-white font-bold  md:text-xs mt-2">Basket</p>
                            </div>
                        
                        </div>
                        

                </div>

    {/* 
 bottom nav */}           
                 <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-xs">
                        <p className="flex link items-center">
                        <MenuIcon className="h-6 mr-1"/>
                        All
                        </p>
                        <p className="link ">Fresh</p>
                        <p className="link">Gift cards</p>
                        <p className="link">Amazon Pay</p>
                        <p className="link hidden md:inline-flex">Pet Supplies</p>
                        <p className="link hidden md:inline-flex">Kindle eBooks</p>
                        <p className="link hidden md:inline-flex">Electronics</p>

                </div>

            
        </header>
    )
}

export default Header;