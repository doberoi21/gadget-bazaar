import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <footer className="contact-foot" >
      <div className="footer">
        <div className="footer-left">
          <h2
            style={{ color: "white", marginBottom: "0.5%", fontWeight: "bold" }}
          >
            GADGET BAZZAR
          </h2>
          <p style={{ color: "white", marginTop: "0.5%" }}>
            Gadget Bazzar is online gadget selling organization.Lorem ipsum
            dolor aut
            <br /> nostrum explicabo reprehenderit optio amet ab temporibus
            asperiores
            <br /> quasi cupiditate. Voluptatum ducimus voluptates{" "}
          </p>
        </div>
        <div>
          <h3
            style={{ color: "white", marginBottom: "0.5%", fontWeight: "bold" }}
          >
            Product
          </h3>
          <ul className="box">
            <li>
              <NavLink to="/mobile" style={{color:"white"}}>Smartphones</NavLink>
            </li>
            <li>
              <NavLink to="/tab" style={{color:"white"}}>Tablet</NavLink>
            </li>
            <li>
              <NavLink to="/television" style={{color:"white"}}>Television</NavLink>
            </li>
            <li>
              <NavLink to="/earphone" style={{color:"white"}}>Earphone</NavLink>
            </li>
            <li>
              <NavLink to="/laptop" style={{color:"white"}}>Laptop</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3
            style={{ color: "white", marginBottom: "0.5%", fontWeight: "bold" }}
          >
            Address
          </h3>

          <div style={{display:"flex",flexDirection:"column",color:"white"}}>
            <div>
              <NavLink to="/mobile" style={{color:"white"}}>ABC 1 colony,New Delhi</NavLink>
            </div>
            <div>
              <NavLink to="/tab" style={{color:"white"}}>ABC 2 colony,Banglore </NavLink>
            </div>
            <div>
              <NavLink to="/television" style={{color:"white"}}>ABC 3 colony,Mumbai</NavLink>
            </div>

            <div>
              <NavLink to="/earphone" style={{color:"white"}}>Abc 4 colony,Kolkata</NavLink>
            </div>
          </div>
        </div>
        <div>
          <h3
            style={{ color: "white", marginBottom: "5%", fontWeight: "bold" }}
          >
            For any query
          </h3>
          <div style={{color:"white"}}><b style={{color:"white"}}>Mail us: </b> abcquery@gmail.com</div>
          <div style={{color:"white"}}><b style={{color:"white"}}>Call us: </b>1234567809</div>
        </div>
        </div>
        <div>
            <h6 style={{textAlign:"center",color:"white",marginBottom:"0",paddingBottom:"1%"}}>Copyright © 2021, made with ♥ by divyanshi. All Rights Reserved.</h6>
        </div>
      </footer>
     
    </div>
  );
};

export default Contact;
