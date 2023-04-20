import "./section-header.styles.scss";
import MainImage from "../../../../Assets/restourant.png";

const SectionHeader = () => {
  return (
    <section className="main__header">
      <div className="main__header--wrapper">
        <h1 className="main__header--title">
          We are <span>DineFinder</span>
        </h1>
        <h2 className="main__header--slogan">
          "Discover Your Next Culinary Adventure"
        </h2>
        <p className="main__header--description">
          <span>DineFinder</span> is a cutting-edge platform that connects food
          lovers with exceptional dining experiences in your country. Our
          mission is to make it simple and enjoyable for users to find, book,
          and review the best restaurants in town. With an extensive database of
          eateries covering various cuisines, locations, and price ranges,
          DineFinder aims to become the go-to resource for food enthusiasts
          nationwide.
        </p>
      </div>
      <div className="main__header--image">
        <img src={MainImage} alt="restaurant" />
      </div>
    </section>
  );
};

export default SectionHeader;
