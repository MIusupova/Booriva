import { createSlice } from '@reduxjs/toolkit'

const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    cart: [],
    isBasketOpen: false
  },
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload
     
    },
    
  },
})

export const { setCart } = wishSlice.actions
export default wishSlice.reducer