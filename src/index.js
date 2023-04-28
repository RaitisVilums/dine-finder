import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestaurantsProvider } from "./Contexts/restaurants.context";
import { AuthContextProvider } from "./Contexts/auth.context";
import { FormContextProvider } from "./Contexts/form.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantsProvider>
        <AuthContextProvider>
          <FormContextProvider>
            <App />
          </FormContextProvider>
        </AuthContextProvider>
      </RestaurantsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
