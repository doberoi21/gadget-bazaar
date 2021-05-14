import { LOGIN_ACTION, LOGIN_USER, LOGOUT_USER } from "../actions/types";

const INITIAL_STATE = {
  showLogin: false,
  userLoggedIn: false,
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, showLogin: action.payload };
    case LOGIN_USER:
      return { ...state, userLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, userLoggedIn: false };
    default:
      return state;
  }
};
