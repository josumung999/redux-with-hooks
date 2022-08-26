import { createStore } from "redux";

const initialState = {
  amount: "15.00",
  currencyCode: "JPY"
}

const reducer = (state = initialState, action) => {
  if (action.type === "AMOUNT_CHANGED") {
    return {
      ...state,
      amount: action.payload
    }
  }                  
  return state;
}

export const store =  createStore(reducer);