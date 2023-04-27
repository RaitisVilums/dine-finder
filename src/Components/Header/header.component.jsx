import "./header.styles.scss";
import HeaderWrapper from "../Common/Header/header";
import Navigation from "./Components/navigation.component";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useContexts.hook";
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrapper>
      <div className="logo-nav__wrapper">
        <img src={Logo} alt="logo" />
        <Navigation />
      </div>
      <div className="header__buttons">
        {isLoggedIn ? (
          <Link className="btn btn-primary" to={`profile`}>
            Profile
          </Link>
        ) : (
          <>
            <Link to={"login"} className={`btn btn-primary`}>
              Login In
            </Link>
            <Link to={"register"} className={`btn btn-secondary`}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
