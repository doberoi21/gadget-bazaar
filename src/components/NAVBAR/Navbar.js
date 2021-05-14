import React, { useState } from "react";
import "./Navbar.css";
import cartLogo from "./cartLogo.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, showLoginModal } from "../redux/actions/auth";
import SearchBar from "../Search";
// import Login from '../LoginModal';
const Nav = (props) => {
  const [term, setTerm] = useState("");
  const login = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="nav-bar">
        <div className="w-name">
          <div style={{ color: "white" }}>GADGET-BAZAAR</div>
        </div>

        <div>
          <SearchBar
            placeholder="Search your product..."
            handleChange={(e) => setTerm(console.log(e.target.value))}
          />
        </div>

        <div className="side">
          <ul className="links">
            <NavLink
              exact
              className="b"
              activeClassName="active_class"
              to="/"
              id="login"
            >
              <Button
                className="login-btn"
                style={{ background: "#e8e51a" }}
                onClick={() =>
                  login.userLoggedIn
                    ? dispatch(logoutUser())
                    : dispatch(showLoginModal(!login.showLogin))
                }
              >
                <b>{login.userLoggedIn ? "Logout" : "Login"}</b>
              </Button>
            </NavLink>
            <NavLink
              exact
              className="b"
              activeClassName="active_class"
              to="/cart"
            >
              <img src={cartLogo} />
            </NavLink>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default Nav;
