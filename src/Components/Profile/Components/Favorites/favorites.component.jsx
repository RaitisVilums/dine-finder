import "./favorites.styles.scss";
import Button from "../../../Common/Button/button";
import chew from "../../../../Assets/chew.png";

const Favorites = () => {
  return (
    <div className="profile__container--item">
      <div className="favorites">
        <h1>Favorites</h1>
        <div className="favorites__container">
          <div className="favorites__container--item">
            <img src={chew} alt="" />
            <h2>Name</h2>
            <div className="favorites__container--item__buttons">
              <Button className={"btn-secondary"}>Remove</Button>
              <Button className={"btn-secondary"}>Review</Button>
            </div>
          </div>
          <div className="favorites__container--item">
            <img src={chew} alt="" />
            <h2>Name</h2>
            <div className="favorites__container--item__buttons">
              <Button className={"btn-secondary"}>Remove</Button>
              <Button className={"btn-secondary"}>Review</Button>
            </div>
          </div>
          <div className="favorites__container--item">
            <img src={chew} alt="" />
            <h2>Name</h2>
            <div className="favorites__container--item__buttons">
              <Button className={"btn-secondary"}>Remove</Button>
              <Button className={"btn-secondary"}>Review</Button>
            </div>
          </div>
          <div className="favorites__container--item">
            <img src={chew} alt="" />
            <h2>Name</h2>
            <div className="favorites__container--item__buttons">
              <Button className={"btn-secondary"}>Remove</Button>
              <Button className={"btn-secondary"}>Review</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
