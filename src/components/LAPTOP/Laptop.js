import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LaptopItems } from "./LaptopList";
import { NavLink } from "react-router-dom";
import lap from "./lap.jpg";
import Modale from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/actions/cart";

const Laptop = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Laptoplist(item, index) {
    return (
      <div>
        <Card style={{ width: "18rem", margin: "4% 1%" }} key={index}>
          <Card.Img src={lap} />
          <Card.Body style={{ margin: "0 0.3%" }}>
            <Card.Title>
              <b style={{ fontSize: "17px" }}>{item.Pdt_name}</b>
            </Card.Title>
            <Card.Text>
              <h4 style={{ fontSize: "16px", color: "grey" }}>
                {item.Pdt_Price}
              </h4>
              <h5>{item.Pdt_brand}</h5>
              <em>
                <h5>{item.Pdt_rate}</h5>
              </em>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                setSelect(item);
                setShow(true);
              }}
            >
              View Details
            </Button>
            <NavLink to="/cart">
              <Button
                variant="primary"
                className="ml-2"
                onClick={() =>
                  dispatch(updateCart(item, cart.cartItems, "add"))
                }
              >
                Add to Cart
              </Button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="container-fluid"
      style={{
        display: "grid",
        padding: "2%",
        gridTemplateColumns: "repeat(4,1fr)",
      }}
    >
      {LaptopItems.map(Laptoplist)}
      <div>
        <Modale
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          headerTitle={select ? select.Pdt_name : ""}
          headerPrice={select ? select.Pdt_Price : ""}
          headerBrand={select ? select.Pdt_brand : ""}
          headerRate={select ? select.Pdt_rate : ""}
          headerdescription={select ? select.Pdt_description : ""}
          headerimg={select ? select.ear : ""}
        />
      </div>
    </div>
  );
};

export default Laptop;
