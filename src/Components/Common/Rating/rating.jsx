import { EmptyStar, HalfStar, FilledStar } from "../../../Assets/_index";
import "./rating.styles.scss";

const Rating = ({ rating, className }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const filledStarElements = Array.from({ length: filledStars }, (_, i) => (
    <FilledStar key={i} className={`filled-star ${className}`} />
  ));
  const emptyStarElements = Array.from({ length: emptyStars }, (_, i) => (
    <EmptyStar key={i} className={`empty-star ${className}`} />
  ));
  const halfStarElement = hasHalfStar ? (
    <HalfStar className={`half-star ${className}`} />
  ) : null;

  return (
    <div className="overall-rating">
      {filledStarElements}
      {halfStarElement}
      {emptyStarElements}
    </div>
  );
};

export default Rating;
