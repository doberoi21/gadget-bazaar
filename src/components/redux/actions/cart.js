import { UPDATE_CART } from "./types";

export const updateCart = (item, cart, type) => (dispatch) => {
  if (type == "add") {
    item.count = 1;
    const tempCart = [...cart];
    tempCart.push(item);
    dispatch({ type: UPDATE_CART, payload: tempCart });
  } else if (type == "remove") {
    const tempCart = cart.filter((d) => item.Pdt_name != d.Pdt_name);
    dispatch({ type: UPDATE_CART, payload: tempCart });
  } else if (type == "update") {
    const elementIndex = cart.findIndex((d) => item.Pdt_name == d.Pdt_name);
    const tempCart = [...cart];
    tempCart[elementIndex] = item;
    dispatch({
      type: UPDATE_CART,
      payload: tempCart,
    });
  }
};
