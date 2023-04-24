import "./reviews.styles.scss";
import Rating from "../../../Common/Rating/rating";
import Logo from "../../../../Assets/logo.png";
import ReviewsItem from "./reviews-item.component";
const Reviews = ({ rating, description }) => {
  return (
    <div className="restaurant__reviews">
      <h1 className="restaurant__reviews--title">Reviews</h1>
      <div className="restaurant__reviews--stats"></div>
      <div className="restaurant__reviews--container">
        <ReviewsItem rating={rating} description={description} />
      </div>
    </div>
  );
};

export default Reviews;
