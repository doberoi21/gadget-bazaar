import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/redux/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const Main = () => {
  return (
    <Provider store={createStore(reducer,applyMiddleware(thunk,logger))}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
