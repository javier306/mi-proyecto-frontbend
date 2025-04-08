import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/MapPage.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/MapWorld">
    <App />
  </BrowserRouter>
);
