import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootEle = document.getElementById("root");
const modelStr = rootEle?.getAttribute("data-model");
const dataModel = !!modelStr ? JSON.parse(modelStr) : {};

ReactDOM.render(
  <React.StrictMode>
    <App data={dataModel} />
  </React.StrictMode>,
  rootEle
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
