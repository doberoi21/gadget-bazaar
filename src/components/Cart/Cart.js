import React from "react";
import ear from "./ear.jpg";
import "./Cart.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/actions/cart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartListItem = (item, index) => {
    return (
      <div className="container-card">
        <div className="card container">
          <div className="imgBx">
            <img src={ear} style={{ height: "200px", padding: "10px" }} />
          </div>
          <div className="content">
            <div className="cart-header">
              <h2>{item.Pdt_name}</h2>
              <Button
                variant="primary"
                onClick={() =>
                  dispatch(updateCart(item, cart.cartItems, "remove"))
                }
              >
                REMOVE
              </Button>
            </div>
            <p>PRICE</p>
            <p>BRAND</p>
            <p>
              ABC cgbslyuwebg7 guyegf6i7waf fbcuyaewgof7W G FUYEWG FC7Fwf
              gfeyw7f 87awgebudygv beufwyago fewygoc hbcfoeuagf fgwrh6w
              ddbhckyEWIFYCVoewvfoywGFOYAGF gfo8egpf89e
            </p>
            <div className="counter">
              <div
                style={{ color: "white", fontWeight: "bold" }}
                onClick={() => {
                  if (item.count == 1) {
                    dispatch(updateCart(item, cart.cartItems, "remove"));
                  } else {
                    item.count -= 1;
                    dispatch(updateCart(item, cart.cartItems, "update"));
                  }
                }}
              >
                -
              </div>
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                  borderLeft: "2px solid grey",
                  borderRight: "2px solid grey",
                  padding: "0 20px",
                }}
              >
                {item.count}
              </div>
              <div
                style={{ color: "white", fontWeight: "bold" }}
                onClick={() => {
                  item.count += 1;
                  dispatch(updateCart(item, cart.cartItems, "update"));
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ height: 300 }}>
      {cart.cartItems.length ? (
        <>
          <h2 style={{ textAlign: "center" }}>Your cart is ready</h2>
          cart.cartItems.map(cartListItem)
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            margin: "10px 0",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          No item in cart
        </div>
      )}
    </div>
  );
};

export default Cart;
