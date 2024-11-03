import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice/cartSlice'
import wish from './wishSlice/wishSlice'


export const store = configureStore({
    reducer: {cart}, 
    reducer: {wish},
})