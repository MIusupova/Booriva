import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    allProductBasket: 0
  },
  
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload
    },
    setAllProductBasket: (state, { payload }) => {
      state.allProductBasket = payload
    }
    
  },
})

export const { setCart, setAllProductBasket } = cartSlice.actions
export default cartSlice.reducer