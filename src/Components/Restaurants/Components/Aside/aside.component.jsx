import "./aside.styles.scss";
import { Link } from "react-router-dom";
import Restaurant from "../../../../Assets/restaurant.jpg";
import Rating from "../../../Common/Rating/rating";

const AsideItems = ({ data }) => {
  const { promo, id, name, rating } = data;
  if (!promo) {
    return null;
  }

  return (
    <div className="restaurants__promotions--item">
      <div className="restaurants__promotions--item__backdrop" />
      <Link className="restaurants__promotions--item__link" to={`${id}`} />
      <img src={Restaurant} alt="restaurant" />
      <h1 className="restaurants__poromotions--item__title">{name}</h1>
      <div className="restaurants__poromotions--item__rating">
        <Rating rating={rating} />
      </div>
      <p className="restaurants__poromotions--item__promo">Promo</p>
    </div>
  );
};

export default AsideItems;
