const initialState = {
  fullName: 'Josué Munganga',
  loggedIn: false
}

export function userReducer(state = initialState, action) {
  return state;
}

// selectors
export const getName = state => state.user.fullName.split(" ")[0]