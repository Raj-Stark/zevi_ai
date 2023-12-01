import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FashionContext } from "./context/AppContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrandList from "./pages/BrandList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FashionContext>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/brands" element={<BrandList/>}></Route>
        </Routes>
      </FashionContext>
    </BrowserRouter>
  </React.StrictMode>
);
