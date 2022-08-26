const initialState = {
  amount: "15.00",
  currencyCode: "USD"
}

export function ratesReducer (state = initialState, action) {
  switch(action.type) {
    case 'RATES/AMOUNT_CHANGED':
      return {
        ...state,
        amount: action.payload
      }
    case 'RATES/CURRENCY_CODE_CHANGED':
      return {
        ...state,
        currencyCode: action.payload
      }
    default:
      return state;
  }
}