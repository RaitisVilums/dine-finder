import "./navigation.styles.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__wrapper">
        <Link className="navigation__wrapper--item" to={`/`}>
          Home
        </Link>
        <Link className="navigation__wrapper--item" to={`about`}>
          About
        </Link>
        <Link className="navigation__wrapper--item" to={`pricing`}>
          Pricing
        </Link>
        <Link className="navigation__wrapper--item" to={`restaurants`}>
          Restaurants
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
