import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state:any,action) => {
      state.items = [...state.items, action.payload];
    },  
    removeFromBasket: (state, action) => {
      // const itemId = action.payload;
      console.log(action.payload, "payload remove pressed");
      const index = state.items.findIndex((basketItem: any) => basketItem.id === action.payload.id)
      let newBasket=[...state.items];
      if(index>=0){
           newBasket.splice(index,1)
      }
      else{
        console.warn(
          `Cant Remove Product (id: ${action.payload.id}) as iss not In `
        )
      }
      state.items=newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state:any) => state.basket.items;
export const selectTotal =(state:any)=>
state.basket.items.reduce((total:any,item:any)=> total + item.price,0);

export default basketSlice.reducer;
