import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


const Modale = (props) => {

  return (
    <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.headerTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <img src={props.headerimg} style={{height:"150px",width:"150px"}} />
        <h4>{props.headerPrice}</h4>
        <h4>{props.headerBrand}</h4>
        <h4>{props.headerRate}</h4>
        <h4 style={{fontSize:"19px"}}>{props.headerdescription}</h4>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <NavLink to="/cart">
      <Button variant="primary" onClick={props.handleClose}>
        Add to Cart
      </Button>
      </NavLink>
      
    </Modal.Footer>
  </Modal>
  );
};

export default Modale;
