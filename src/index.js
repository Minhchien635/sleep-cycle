import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "./css/index.css";
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(  
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
