import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

export const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    login(state, action) {
      state.status = true;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

console.log("Create Store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 10, qty: 10 }));
store.dispatch(login());
