import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FashionContext } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FashionContext>
      <App />
    </FashionContext>
  </React.StrictMode>
);
