import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(reduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
