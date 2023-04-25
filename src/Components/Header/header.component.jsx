import "./header.styles.scss";
import HeaderWrapper from "../Common/Header/header";
import Navigation from "./Components/navigation.component";
import { useState } from "react";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <HeaderWrapper>
      <div className="logo-nav__wrapper">
        <img src={Logo} alt="logo" />
        <Navigation />
      </div>
      <div className="header__buttons">
        {isLoggedIn ? (
          <>
            <Link to={"login"} className={`btn btn-primary`}>
              Login In
            </Link>
            <Link to={"register"} className={`btn btn-secondary`}>
              Sign Up
            </Link>
          </>
        ) : (
          <Link className="btn btn-primary" to={`profile`}>
            Profile
          </Link>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
