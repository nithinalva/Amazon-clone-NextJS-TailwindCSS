import {createSlice} from '@reduxjs/toolkit'

const initialState={
    products:[],
}

export const productSlice= createSlice({

        name:"globalProduct",
        initialState,
        reducers:{

            addProducts:(state,action)=>{
                // state.products=[...state.products,action.payload]
           
                state.products=state.products.findIndex(prod=>prod.id==action.payload.id)>=0?
                state.products:[...state.products,action.payload]
            }
        }

})

export const {addProducts}=productSlice.actions;

export const selectProducts=(state)=>state.globalProduct.products;

export default productSlice.reducer;