import "./restaurants-items.styles.scss";
import { Link } from "react-router-dom";
import Restaurant from "../../../../Assets/restaurant.jpg";

const RestaurantsItems = ({ data }) => {
  const { name, isOpen, rating, reviewsCount, attributes, id, description } =
    data;
  return (
    <div className="restaurants__container--item" key={id}>
      <p
        className={`${
          isOpen
            ? "restaurants__container--item__isopen"
            : " restaurants__container--item__isclosed"
        }`}
      >
        {isOpen ? "Open" : "Closed"}
      </p>
      <img src={Restaurant} alt="restaurant" />
      <div className="restaurants__container--item__content">
        <h2 className="restaurants__container--item__title">{name}</h2>
        <div className="restaurants__container--item__rating">
          <p>{rating}</p> <p>{reviewsCount}</p>
        </div>
        <p className="restaurants__container--item__description">
          {description}
        </p>
        <div className="restaurants__container--item__filter-attributes">
          <ol className="restaurants__container--item__attributes">
            {Array.isArray(attributes) &&
              attributes.map((attr, index) => (
                <li
                  className="restaurants__container--item__attributes--item"
                  key={index}
                >
                  {attr}
                </li>
              ))}
          </ol>
          <Link
            className="btn btn-primary restaurants__container--item__link"
            to={`${id}`}
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsItems;
