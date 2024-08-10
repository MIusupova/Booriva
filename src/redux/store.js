import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice/cartSlice'

export const store = configureStore({
    reducer: {cart},
})