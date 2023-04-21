import { useState } from "react";
import "./restaurants.styles.scss";
import MainWrapper from "../Common/Main/main";
import RestaurantsHeader from "./Components/Header/header.component";
import RestaurantsItems from "./Components/RestaurantsItems/restaurants-items.component";
import AsideItems from "./Components/Aside/aside.component";
import restaurants from "../../Data/dummyData.json";

const PAGE_SIZE = 3;

const Restaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const displayedRestaurants = restaurants.slice(startIndex, endIndex);
  const totalPages = Math.ceil(restaurants.length / PAGE_SIZE);

  // event handler for page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainWrapper>
      <section className="restaurants">
        <RestaurantsHeader />
        <div className="restaurants__wrapper">
          <div className="restaurants__container">
            {displayedRestaurants.map((item) => (
              <RestaurantsItems key={item.id} data={item} />
            ))}
          </div>
          <aside className="restaurants__promotions">
            <h1 className="restaurants__promotions--title">Check this out!</h1>
            <hr />
            {restaurants.map((item) => (
              <AsideItems key={item.id} data={item} />
            ))}
          </aside>
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      </section>
    </MainWrapper>
  );
};

export default Restaurants;
