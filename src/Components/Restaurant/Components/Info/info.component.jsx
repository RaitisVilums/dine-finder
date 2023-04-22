import "./info.styles.scss";
import Rating from "../../../Common/Rating/rating";
import RestaurantImage from "../../../../Assets/restaurant.jpg";
import { Link } from "react-router-dom";
const Info = ({ name, rating, isOpen, slogan, description, attributes }) => {
  return (
    <div className="restaurant__info">
      <div className="restaurant__info--container">
        <h1 className="restaurant__info--title">{name}</h1>
        <div className="restaurant__info--rating">
          <Rating rating={rating} />
        </div>
        <div className="restaurant__info--cta">
          <Link className="btn btn-primary">Menu</Link>
          <Link className="btn btn-primary">Book</Link>
          <Link className="btn btn-primary">Review</Link>
        </div>
        <p
          className={`${
            isOpen ? "restaurant__info--isopen" : "restaurant__info--isclosed"
          }`}
        >
          {isOpen ? "open" : "closed"}
        </p>
      </div>

      <div className="restaurant__info--description">
        <div className="restaurant__info--image">
          <img src={RestaurantImage} alt="restaurant-main" />
          <div className="restaurant__info--image__content">
            <p className="slogan">"{slogan}"</p>
            <p className="description">{description}</p>

            <ol className="restaurant__info--image__conent--attributes">
              {attributes.map((item) => (
                <li className="restaurant__info--image__conent--attribute">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;