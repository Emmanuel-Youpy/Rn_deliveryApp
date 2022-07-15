import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.item = [...state.item, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.item.findIndex(
        (items) => items.id === action.payload.id
      );

      let newBasket = [...state.item];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in basket!`
        );
      }

      state.item = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.item;
export const selectBasketWithId = (state, id) =>
  state.basket.item.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.item.reduce((total, items) => (total += items.price), 0);

export default basketSlice.reducer;
