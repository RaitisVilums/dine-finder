import "./restaurant.styles.scss";
import MainWrapper from "../Common/Main/main";
import { useParams } from "react-router-dom";
import restaurants from "../../Data/dummyData.json";
import Gallery from "./Components/Gallery/gallery.component";
import Info from "./Components/Info/info.component";
import AsideMap from "./Components/Aside/aside.component";
import Reviews from "./Components/Reviews/reviews.component";
const Restaurant = () => {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  const {
    name,
    isOpen,
    rating,
    reviewsCount,
    attributes,
    description,
    location,
    phone,
    webpage,
    slogan,
  } = restaurant;

  return (
    <MainWrapper>
      <section className="restaurant">
        <Info
          name={name}
          isOpen={isOpen}
          rating={rating}
          attributes={attributes}
          slogan={slogan}
          description={description}
        />
        <AsideMap location={location} phone={phone} webpage={webpage} />
        <Gallery />
        <Reviews rating={rating} description={description} />
      </section>
    </MainWrapper>
  );
};

export default Restaurant;
