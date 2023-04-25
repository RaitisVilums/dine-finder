import "./restaurant.styles.scss";
import MainWrapper from "../Common/Main/main";
import { useParams } from "react-router-dom";
import Gallery from "./Components/Gallery/gallery.component";
import Info from "./Components/Info/info.component";
import AsideMap from "./Components/Aside/aside.component";
import Reviews from "./Components/Reviews/reviews.component";
import { useRestaurants } from "../../Hooks/useContexts.hook";
import { useEffect } from "react";
import LoadingPage from "./Components/Loading/loading.component";

const Restaurant = () => {
  const { id } = useParams();
  const { fetchRestaurantById, restaurant } = useRestaurants();

  useEffect(() => {
    fetchRestaurantById(id);
  }, []);
  if (!restaurant) {
    return (
      <MainWrapper>
        <section className="restaurant">
          <LoadingPage />
        </section>
      </MainWrapper>
    );
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
    workingHours,
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
          workingHours={workingHours}
        />
        <AsideMap location={location} phone={phone} webpage={webpage} />
        <Gallery />
        <Reviews rating={rating} description={description} />
      </section>
    </MainWrapper>
  );
};

export default Restaurant;
