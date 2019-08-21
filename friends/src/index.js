import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { friendReducer } from "./reducers/friendReducer";
import { Provider } from "react-redux";

const store = createStore(friendReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
