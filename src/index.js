import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestaurantsProvider } from "./Contexts/restaurants.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantsProvider>
        <App />
      </RestaurantsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
