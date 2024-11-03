import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: {
    wish: localStorage.getItem("wish")
      ? JSON.parse(localStorage.getItem("wish"))
      : [],
      allProductWishlist: 0
    
    
  },
  reducers: {
    setWish: (state, { payload }) => {
      state.wish = payload;
    },
    setAllProductWislist: (state, { payload }) => {
      state.allProductWishlist = payload
    },
   

    addWishList: (state, { payload }) => {
      if (state.wish.includes(payload)) {
        state.wish = state.wish.filter((wishId) => wishId !== payload);
      } else {
        localStorage.setItem("wish", JSON.stringify([...state.wish, payload]));
        //setisActive((prev) => !prev);
        state.wish = localStorage.getItem("wish")
          ? JSON.parse(localStorage.getItem("wish"))
          : [];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWish, addWishList,setAllProductWislist} = wishSlice.actions;

export default wishSlice.reducer;