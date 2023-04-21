import "./restaurant.styles.scss";
import MainWrapper from "../Common/Main/main";
import { useParams } from "react-router-dom";
import restaurants from "../../Data/dummyData.json";
import Rating from "../Common/Rating/rating";
const Restaurant = () => {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  const { name, isOpen, rating, reviewsCount, attributes, description } =
    restaurant;

  return (
    <MainWrapper>
      <section className="restaurant">
        <h1>{name}</h1>
        <p>{isOpen ? "Open" : "Closed"}</p>
        <Rating rating={rating} />
        <p>Reviews - {reviewsCount}</p>
        <p>{description}</p>
        <ul>
          {attributes.map((attr, index) => (
            <li key={index}>{attr}</li>
          ))}
        </ul>
      </section>
    </MainWrapper>
  );
};

export default Restaurant;
