import React, { createContext } from 'react'

export const currencyContext=createContext();

export const currencyConverterToINR=(price)=>{

    return parseInt(price*88);
}

export const Currency = props => {
    return <currencyContext.Provider value={currencyConverterToINR}>
        {props.children}
    </currencyContext.Provider>
}
