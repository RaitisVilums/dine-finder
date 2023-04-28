import { useState } from "react";
import "./restaurants.styles.scss";
import MainWrapper from "../Common/Main/main";
import RestaurantsHeader from "./Components/Header/header.component";
import RestaurantsItems from "./Components/RestaurantsItems/restaurants-items.component";
import AsideItems from "./Components/Aside/aside.component";
import LoadingElement from "./Components/Loading/loading.component";
import { motion } from "framer-motion";

import { useRestaurants } from "../../Hooks/useContexts.hook";
import Button from "../Common/Button/button";

const PAGE_SIZE = 3;

const Restaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { restaurants, isLoading } = useRestaurants();

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const displayedRestaurants = restaurants.slice(startIndex, endIndex);
  const totalPages = Math.ceil(restaurants.length / PAGE_SIZE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading)
    return (
      <MainWrapper>
        <section className="restaurants">
          <RestaurantsHeader />
          <div className="restaurants__wrapper">
            <div className="restaurants__container">
              <LoadingElement />
              <LoadingElement />
              <LoadingElement />
            </div>
            <aside className="restaurants__promotions">
              <h1 className="restaurants__promotions--title">
                Check this out!
              </h1>
              <hr />
              <LoadingElement />
              <LoadingElement />
              <LoadingElement />
            </aside>
          </div>
        </section>
      </MainWrapper>
    );

  return (
    <MainWrapper>
      <section className="restaurants">
        <RestaurantsHeader />
        <div className="restaurants__wrapper">
          <div className="restaurants__container">
            {displayedRestaurants.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <RestaurantsItems data={item} />
              </motion.div>
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
        <div className="restaurants__pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <Button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            )
          )}
        </div>
      </section>
    </MainWrapper>
  );
};

export default Restaurants;
