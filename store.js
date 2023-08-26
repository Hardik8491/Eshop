import { configureStore } from '@reduxjs/toolkit';
 import basketReducer from './basketSlice';
 //ThGlobal Store Setup 
  
export const store=configureStore({
    reducer:{
        basket:basketReducer,
    }


});