import { combineReducers } from "redux";
import { loginReducer } from "./auth";
import { cartReducer } from "./cart";

export default combineReducers({
  auth: loginReducer,
  cart: cartReducer,
});
