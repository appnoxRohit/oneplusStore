import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] ,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price,imageUri, category, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      console.log(state.items)
      if (existingItem) {
        existingItem.quantity += quantity; 
        
      } else {
        state.items.push({ id, name,imageUri, price, category, quantity }); 
      }

      state.totalQuantity += quantity; 
    //   console.log('====================================');
    // //   console.log(state.totalQuantity);
    //   console.log('====================================');
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id); 
        
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
