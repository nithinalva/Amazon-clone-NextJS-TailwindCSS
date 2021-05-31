import {createSlice} from "@reduxjs/toolkit"

const initialState={
    items:[],
};

export const basketSlice=createSlice({

    name:"basket",
    initialState,
    reducers:{
        //ACTIONS 
        addToBasket:(state,action)=>{
            state.items=[...state.items,action.payload]        //cart
        },
        removeFromBasket:(state,action)=>{
            const index=state.items.findIndex(basketItem=>basketItem.id===action.payload.id);
             let newBasket=[...state.items]
             if(index>=0){      //
                 //then item exists
                 newBasket.splice(index,1)      //removes
             }else{
                 console.warn("cant remove the product")
             }
             state.items=newBasket;
        },
    }
});
export const {addToBasket,removeFromBasket}=basketSlice.actions;
//SELECTORS SELECTING THE ITEM
export const selectItems=(state)=>state.basket.items;
export const selectItemPrice=(state)=>state.basket.items.reduce((total,item)=>total+item.price,0)
export default basketSlice.reducer;

