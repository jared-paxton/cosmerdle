import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  container
);
