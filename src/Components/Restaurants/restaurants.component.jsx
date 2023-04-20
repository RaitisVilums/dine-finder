import "./restaurants.styles.scss";
import { Link } from "react-router-dom";
import MainWrapper from "../Common/Main/main";
import { Search, Filter } from "../../Assets/_index";
import Button from "../Common/Button/button";
import Restaurant from "../../Assets/restaurant.jpg";
const Restaurants = () => {
  return (
    <MainWrapper>
      <section className="restaurants">
        <div className="restaurants__header">
          <div className="restaurants__header--search">
            <input className="restaurants__header--search__input" type="text" />
            <Button className={`btn-search`}>
              <Search className="restaurants__header--search__icon" />
            </Button>
          </div>
          <Button className={`btn-filter`}>
            <Filter className="restaurants__header--search__icon" />
          </Button>
        </div>
        <div className="restaurants__wrapper">
          <div className="restaurants__container">
            <div className="restaurants__container--item">
              <img src={Restaurant} alt="restaurant" />
              <div className="restaurants__container--item__content">
                <h2 className="restaurants__container--item__title">
                  Restaurant Name
                </h2>
                <div className="restaurants__container--item__rating">
                  <p>Rating</p> <p>Reviews Count</p>
                </div>
                <p className="restaurants__container--item__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam iure quibusdam omnis praesentium vel architecto
                  voluptas, magnam assumenda asperiores quasi placeat dolores
                  doloribus? Cum ducimus, quam recusandae, nesciunt odit fugit,
                  id magnam aut veniam cumque ipsa minus adipisci maxime quae.
                </p>
                <div className="restaurants__container--item__filter-attributes">
                  <ol>
                    <li>attribute</li>
                    <li>attribute</li>
                    <li>attribute</li>
                    <li>attribute</li>
                  </ol>
                  <Link
                    className="btn btn-primary restaurants__container--item__link"
                    // to={`restaurant/${id}`}
                  >
                    view
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <aside className="restaurants__promotions">
            <h1 className="restaurants__promotions--title">Check this out!</h1>
            <hr />
            <div className="restaurants__promotions--item">Promotions</div>
          </aside>
        </div>
      </section>
    </MainWrapper>
  );
};

export default Restaurants;
