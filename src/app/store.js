import {configureStore} from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';
import productReducer from '../slices/productSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers} from "redux"; 
import storageSession from 'redux-persist/lib/storage/session'
const reducers = combineReducers({
    basket:basketReducer, //one slice 
    globalProduct:productReducer
          
   });

   const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['basket']
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store =configureStore({

        reducer:persistedReducer
});




