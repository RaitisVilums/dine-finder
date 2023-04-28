import "./global.styles.scss";

import { Route, Routes } from "react-router-dom";
import MainPage from "./Routes/Main/main.route";
import Main from "./Components/Main/main.component";
import About from "./Components/About/about.component";
import Pricing from "./Components/Pricing/pricing.component";
import Restaurants from "./Components/Restaurants/restaurants.component";
import Login from "./Components/Login/login.component";
import Register from "./Components/Register/register.component";
import Restaurant from "./Components/Restaurant/restaurant.component";
import Profile from "./Components/Profile/profile.component";
import Menu from "./Components/Menu/menu.component";
import Booking from "./Components/Booking/book.component";
import Reviews from "./Components/Reviews/reviews.component";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<Restaurant />}>
          <Route path="menu" element={<Menu />} />
          <Route path="book" element={<Booking />} />
          <Route path="review" element={<Reviews />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
