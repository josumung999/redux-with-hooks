import { createStore } from "redux";

const initialState = {
  amount: "12.00",
  currencyCode: "USD"
}

const reducer = (state = initialState, action) => {                  
  return state;
}

export const store =  createStore(reducer);