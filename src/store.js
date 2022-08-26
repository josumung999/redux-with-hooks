import { createStore } from "redux";

const initialState = {
  amount: "15.00",
  currencyCode: "JPY"
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'AMOUNT_CHANGED':
      return {
        ...state,
        amount: action.payload
      }
    case 'CURRENCY_CODE_CHANGED':
      return {
        ...state,
        currencyCode: action.payload
      }
    default:
      return state;
  }
}

export const store =  createStore(reducer);