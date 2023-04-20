import "./header.styles.scss";
import HeaderWrapper from "../Common/Header/header";
import Navigation from "./Components/navigation.component";
import Button from "../Common/Button/button";
import Logo from "../../Assets/logo.png";
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo-nav__wrapper">
        <img src={Logo} alt="logo" />
        <Navigation />
      </div>
      <div className="header__buttons">
        <Button className={`btn-primary`}>Login In</Button>
        <Button className={`btn-secondary`}>Sign Up</Button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
