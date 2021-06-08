import {signin,useSession} from 'next-auth/client'
import React, { useEffect, useState } from "react";
const Footer = () => {
    const [session]=useSession();
    const [isVisible, setIsVisible] = useState(false);
    const username=(fullname)=>{

        let name = fullname.split(' ');
        return name[0]
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);
    return (
        <div className="">
                <div className="bg-amazon_blue-light1 flex items-center h-10 flex-grow hover:bg-amazon_blue-light cursor-pointer" onClick={scrollToTop}>
               <p className="mx-auto text-white">Back to top</p>
                </div>

                <div className="bg-amazon_blue-light flex  border-b flex-grow p-3">
                        <div className="flex  space-x-10 mx-auto text-lg   my-4 ">

                            <div className="text-white hidden sm:inline   ">
                                <p className="font-bold  link">Get to Know us</p>
                                <p className=" link">About us</p>
                                <p className="link">Career</p>
                                <p className="link">Press Release</p>
                                <p className="link">Amazon cares</p>


                            </div>
 
                            <div className="text-white hidden sm:inline  ">
                                <p className="font-bold">Connect with us</p>
                                <p className="link">Facebook</p>
                                <p className="link">Twitter</p>
                                <p className="link">Instagram</p>
                             


                            </div>



                            
                            <div className="text-white hidden sm:inline   ">
                                <p className="font-bold">Make money with us</p>
                                <p className="link">Sell on Amazon</p>
                                <p className="link">Sell under Amazzon Accelerator</p>
                                <p className="link">Amazon Global Selling</p>
                                <p className="link">Become an Affiliate</p>
                                <p className="link">Fullfillment by Amazon</p>
                                <p className="link">Advertise Your Products</p>
                                <p className="link">Amazon Paye on Merchants</p>


                            </div>

                            <div className="text-white hidden sm:inline   ">
                                <p className="font-bold">Let us Help You</p>
                                <p className="link">Your Account</p>
                                <p className="link">Returns Centre</p>
                                <p className="link">100% Purchase Protection</p>
                                <p className="link">Amazzon App DOwnload</p>
                                <p className="link">Fullfillment by Amazon</p>
                                <p className="link">Amazon Assistant Download</p>
                                <p className="link">Help</p>


                            </div>

                                <div className="text-sm inline sm:hidden text-white my-2">
                                <p className="link font-bold" onClick={signin}> {session? `${username(session.user.name)}'s Amazon.in`:"Sign In User "}</p>
                                <p className="link">Amazon Pay</p>
                                <p className="link">Wish List</p>
                                <p className="link">Your Account</p>
                                <p className="link">Customer Service</p>
                                </div>

                                <div className="text-sm inline sm:hidden my-2  text-white">

                                <p className="link">Your Orders</p>
                                <p className="link">Amazon App Download</p>
                                <p className="link">Find a Wish List</p>
                                <p className="link">Sell</p>
                                <p className="link">Help</p>
                                </div>

                        </div> {/* PC Responsive*/}
                        

                </div>



                <div className="bg-amazon_blue p-3 ">
                    <h1 className="text-center text-white text-lg ">Developed By Nithin Alva</h1>
                    

                </div>
        </div>

    );
}

export default Footer;