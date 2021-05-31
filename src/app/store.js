import {configureStore} from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';
import productReducer from '../slices/productSlice'


//global store setup
export const store =configureStore({

    reducer:{
        basket:basketReducer, //one slice 
        globalProduct:productReducer
       
    }
});




