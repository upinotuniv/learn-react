import toolkit, { createAction, createReducer } from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// save the state
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("Create Store: ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

const action = { type: "ADD_TO_CART", payload: { id: 1, qty: 5 } };
store.dispatch(action);
store.dispatch(login());
