import "./section-about.styles.scss";
import { Explore, Mission } from "../../../../Assets/_index";

const SectionAbout = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__content--wrapper">
          <h2 className="about__content--title">
            About DineFinder <Explore className="about__content--icon" />
          </h2>
          <p className="about__content--description">
            Welcome to DineFinder, your ultimate guide to the finest dining
            experiences in your country. Founded by a team of passionate food
            enthusiasts, DineFinder was created to bridge the gap between
            discerning diners and exceptional restaurants. Our commitment to
            providing a user-friendly platform and an extensive database of
            eateries has made us the go-to resource for food lovers nationwide.
          </p>
        </div>
        <div className="about__content--wrapper">
          <h2 className="about__content--title">
            Our Mission <Mission className="about__content--icon" />
          </h2>
          <p className="about__content--description">
            At DineFinder, our mission is to simplify the process of
            discovering, booking, and reviewing top-notch dining experiences for
            our users. We strive to become the leading platform for food
            enthusiasts, offering up-to-date information on a wide variety of
            cuisines, locations, and price ranges to suit every taste and
            budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
