import "./restaurant.styles.scss";
import MainWrapper from "../Common/Main/main";
import { useParams } from "react-router-dom";
import restaurants from "../../Data/dummyData.json";
import Gallery from "./Components/Gallery/gallery.component";
import Info from "./Components/Info/info.component";
import AsideMap from "./Components/Aside/aside.component";
import Logo from "../../Assets/logo.png";
import Rating from "../Common/Rating/rating";
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
      </section>
    </MainWrapper>
  );
};

export default Restaurant;
