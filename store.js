import { configureStore } from '@reduxjs/toolkit';
 import basketReducer from '../eshop/basketSlice';
 //ThGlobal Store Setup 
  
export const store=configureStore({
    reducer:{
        basket:basketReducer,
    }


});