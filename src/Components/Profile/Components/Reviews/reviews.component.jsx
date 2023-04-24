import "./review.styles.scss";
import Rating from "../../../Common/Rating/rating";

const Reviews = () => {
  return (
    <div className="profile__container--item">
      <div className="reviews">
        <h1>Reviews</h1>
        <div className="reviews__container">
          <div className="reviews__container--item">
            <div className="reviews__container--item__rating">
              <Rating rating={5} />
              <p>Date</p>
            </div>
            <div className="reviews__container--item__content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                fuga! Sequi suscipit soluta cum mollitia dolore ad ipsa
                doloremque ipsum ipsam voluptatem maxime, accusamus corporis
                quod nesciunt praesentium laboriosam? Ipsum.
              </p>
            </div>
            <div className="reviews__container--item__like">Likes 20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
