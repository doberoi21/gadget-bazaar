import { LOGIN_ACTION, LOGIN_USER, LOGOUT_USER } from "./types";

export const showLoginModal = (type) => (dispatch) => {
  dispatch({ type: LOGIN_ACTION, payload: type });
};

export const loginUser = () => (dispatch) => {
  dispatch({ type: LOGIN_USER });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
