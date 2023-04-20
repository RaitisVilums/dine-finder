import "./section-features.styles.scss";
import {
  List,
  ArrowRight,
  Person,
  Book,
  Star,
  Info,
} from "../../../../Assets/_index";
const SectionFeatures = () => {
  return (
    <section className="features">
      <h1 className="features__title">Our Features</h1>
      <div className="features__container">
        <h2 className="features__container--title">
          DineFinder offers a variety of features to enhance your dining
          experience:
        </h2>
        <div className="features__container--wrapper">
          <div className="features__container--item">
            <List className="features__container--item__icon" />
            <h2 className="features__container--item__title">
              Comprehensive restaurant listings:
            </h2>
            <p>
              Explore our extensive selection of restaurants, from local hidden
              gems to upscale establishments.
            </p>
          </div>
          <ArrowRight className="features__container--icon" />
          <div className="features__container--item">
            <Person className="features__container--item__icon" />
            <h2 className="features__container--item__title">
              Personalized recommendations:
            </h2>
            <p>
              Set up a user profile and receive customized dining suggestions
              based on your preferences and favorite cuisines.
            </p>
          </div>
          <ArrowRight className="features__container--icon" />
          <div className="features__container--item">
            <Book className="features__container--item__icon" />
            <h2 className="features__container--item__title">
              Simple reservation management:
            </h2>
            <p>
              Book your table effortlessly through our platform and easily
              manage your reservations.
            </p>
          </div>
          <ArrowRight className="features__container--icon" />
          <div className="features__container--item">
            <Star className="features__container--item__icon" />
            <h2 className="features__container--item__title">
              Honest reviews and ratings:
            </h2>
            <p>
              Contribute to our community of food enthusiasts by sharing your
              dining experiences and rating the restaurants you visit.
            </p>
          </div>
          <ArrowRight className="features__container--icon" />
          <div className="features__container--item">
            <Info className="features__container--item__icon" />
            <h2 className="features__container--item__title">Stay informed:</h2>
            <p>
              Receive the latest updates on restaurant promotions, special
              events, and food news in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
