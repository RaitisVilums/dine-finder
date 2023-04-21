import "./restaurants.styles.scss";
import MainWrapper from "../Common/Main/main";
import RestaurantsHeader from "./Components/Header/header.component";
import RestaurantsItems from "./Components/RestaurantsItems/restaurants-items.component";
import AsideItems from "./Components/Aside/aside.component";
import restaurants from "../../Data/dummyData.json";
const Restaurants = () => {
  return (
    <MainWrapper>
      <section className="restaurants">
        <RestaurantsHeader />
        <div className="restaurants__wrapper">
          <div className="restaurants__container">
            {restaurants.map((item) => (
              <RestaurantsItems key={item.id} data={item} />
            ))}
          </div>
          <aside className="restaurants__promotions">
            <h1 className="restaurants__promotions--title">Check this out!</h1>
            <hr />
            {restaurants.map((item) => (
              <AsideItems data={item} />
            ))}
          </aside>
        </div>
      </section>
    </MainWrapper>
  );
};

export default Restaurants;
