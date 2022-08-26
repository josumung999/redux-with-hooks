import { createStore } from "redux";

const initialState = {
  amount: "15.00",
  currencyCode: "JPY"
}

const reducer = (state = initialState, action) => {                  
  return state;
}

export const store =  createStore(reducer);