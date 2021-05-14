import React, { useState } from "react";
import "./index.css";
import Login from "./components/LoginModal";
import Contact from "./components/CONTACT/Contact";
import Home from "./components/HOME/Home";
import Navbar from "./components/NAVBAR/Navbar";
import Laptop from "./components/LAPTOP/Laptop";
import Mobile from "./components/MOBILE/mobile";
import Television from "./components/TELEVISION/Television";
import Earphones from "./components/EARPHONES/Earphone";
import Tablet from "./components/TABLETS/Tab";
import Open from "./components/OPTIONLIST/Open";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, showLoginModal } from "./components/redux/actions/auth";

const App = () => {
  const login = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <Router>
        <Navbar />
        <Open />
        <Login
          show={login.showLogin}
          handleClose={() => dispatch(showLoginModal(!login.showLogin))}
          handleLogin={() => {
            dispatch(loginUser());
            dispatch(showLoginModal(false));
          }}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/laptop" exact component={Laptop} />
          <Route path="/mobile" exact component={Mobile} />
          <Route path="/earphone" exact component={Earphones} />
          <Route path="/television" exact component={Television} />
          <Route path="/tab" exact component={Tablet} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Error} />
        </Switch>
        <footer>
          <Contact />
        </footer>
      </Router>
    </>
  );
};

export default App;
