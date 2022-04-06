import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import SleepCycle from "./SleepCycle";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <SleepCycle />
  </BrowserRouter>
);
