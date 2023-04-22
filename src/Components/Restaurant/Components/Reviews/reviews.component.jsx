import "./reviews.styles.scss";
import Rating from "../../../Common/Rating/rating";
import Logo from "../../../../Assets/logo.png";
const Reviews = ({ rating, description }) => {
  return (
    <div className="restaurant__reviews">
      <h1 className="restaurant__reviews--title">Reviews</h1>
      <div className="restaurant__reviews--stats">
        <Rating rating={rating} />
      </div>
      <div className="restaurant__reviews--container">
        <div className="restaurant__reviews--container__item">
          <img src={Logo} alt="" />
          <div className="container__item--content">
            <div className="user-info">
              <h3 className="user-info__user">User User</h3>
              <Rating rating={rating} />
              <p className="user-info__date">23/4/23</p>
            </div>
            <p className="user-info__description">{description}</p>
          </div>
        </div>
        <div className="restaurant__reviews--container__item">
          <img src={Logo} alt="" />
          <div className="container__item--content">
            <div className="user-info">
              <h3 className="user-info__user">User User</h3>
              <Rating rating={rating} />
              <p className="user-info__date">23/4/23</p>
            </div>
            <p className="user-info__description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
