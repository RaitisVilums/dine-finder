import "./section-pricing.styles.scss";
import Button from "../../../Common/Button/button";
import { Fragment } from "react";

const SectionPricing = () => {
  return (
    <Fragment>
      <section className="pricing">
        <h1 className="pricing__title">Pricing Plans for Restaurant Owners</h1>
        <h2 className="pricing__sub-title">
          "Choose the plan that best suits your needs and grow your business
          with DineFinder"
        </h2>
      </section>
      <section className="plans">
        <div className="plans__container">
          <h1 className="plans__container--title">Basic Plan</h1>
          <h2 className="plans__container--sub-title">Price : Free</h2>
          <p className="plans__container--features">Features:</p>
          <ul className="plans__container--features__list">
            <li className="plans__container--features__list--item">
              Basic restaurant listing
            </li>
            <li className="plans__container--features__list--item">
              Limited number of photos
            </li>
            <li className="plans__container--features__list--item">
              Customer reviews and ratings
            </li>
            <li className="plans__container--features__list--item">
              Basic reservation management
            </li>
            <li className="plans__container--features__list--item">
              Limited access to performance analytics (insights on their
              listing's performance)
            </li>
            <li className="plans__container--features__list--item">
              Social media integration (e.g., Facebook, Instagram, Twitter)
            </li>
          </ul>
          <Button className={`btn btn-primary`}>Subscribe</Button>
        </div>
        <div className="plans__container">
          <h1 className="plans__container--title">Standard Plan</h1>
          <h2 className="plans__container--sub-title">
            Price: $49/month or $499/year
          </h2>
          <p className="plans__container--features">Features:</p>
          <ul className="plans__container--features__list">
            <li className="plans__container--features__list--item">
              Enhanced restaurant listing
            </li>
            <li className="plans__container--features__list--item">
              Unlimited photos
            </li>
            <li className="plans__container--features__list--item">
              Customer reviews and ratings
            </li>
            <li className="plans__container--features__list--item">
              Reservation management
            </li>
            <li className="plans__container--features__list--item">
              Access to customer insights and analytics
            </li>
            <li className="plans__container--features__list--item">
              Exposure to personalized recommendations
            </li>
          </ul>
          <Button className={`btn btn-primary`}>Subscribe</Button>
        </div>
        <div className="plans__container">
          <h1 className="plans__container--title">Premium Plan</h1>
          <h2 className="plans__container--sub-title">
            Price: $99/month or $999/year
          </h2>
          <p className="plans__container--features">Features:</p>
          <ul className="plans__container--features__list">
            <li className="plans__container--features__list--item">
              All features from the Standard Plan
            </li>
            <li className="plans__container--features__list--item">
              Featured placement in search results
            </li>
            <li className="plans__container--features__list--item">
              Social media promotion
            </li>
            <li className="plans__container--features__list--item">
              Customizable restaurant profile
            </li>
            <li className="plans__container--features__list--item">
              Dedicated account manager
            </li>
            <li className="plans__container--features__list--item">
              Exclusive access to promotions and special events
            </li>
          </ul>
          <Button className={`btn btn-primary`}>Subscribe</Button>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionPricing;
