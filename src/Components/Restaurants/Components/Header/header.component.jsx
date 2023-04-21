import "./header.styles.scss";
import Button from "../../../Common/Button/button";
import { Search, Filter } from "../../../../Assets/_index";
const RestaurantsHeader = () => {
  return (
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
  );
};

export default RestaurantsHeader;
