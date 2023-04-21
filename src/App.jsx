import "./global.styles.scss";

import { Route, Routes } from "react-router-dom";
import MainPage from "./Routes/Main/main.route";
import Main from "./Components/Main/main.component";
import About from "./Components/About/about.component";
import Pricing from "./Components/Pricing/pricing.component";
import Restaurants from "./Components/Restaurants/restaurants.component";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/restaurants" element={<Restaurants />}>
          <Route path=":id" />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
