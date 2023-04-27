import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestaurantsProvider } from "./Contexts/restaurants.context";
import { AuthContextProvider } from "./Contexts/auth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantsProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </RestaurantsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
