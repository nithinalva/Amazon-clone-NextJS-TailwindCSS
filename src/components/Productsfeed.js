import { useContext } from "react";
import { currencyContext } from "../Currency";
import Product from "./Product";


const Productsfeed = ({products}) => {
    const currency=useContext(currencyContext)
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto  ">
            
            {products.slice(0,4).map(({id,title,price,description,category,image})=>(<Product 
            key={id} id={id} title={title} price={currency(price)} description={description} category={category} image={image} 

            
            />
            
            )
        )}

        <img className="w-auto   mx-auto md:col-span-full  " src="https://links.papareact.com/dyz"/>

        <div className="md:col-span-2">
        {products.slice(4,5).map(({id,title,price,description,category,image})=>(<Product 
            key={id} id={id} title={title} price={currency(price)} description={description} category={category} image={image} 
            description={description} category={category} image={image}

            
            />)
        )}
            
        </div>
        {products.slice(5,products.length).map(({id,title,price,description,category,image})=>(<Product 
            key={id} id={id} title={title} price={currency(price)} description={description} category={category} image={image} 
            description={description} category={category} image={image}

            
            />)
        )}
        
        </div>
    );
}

export default Productsfeed;