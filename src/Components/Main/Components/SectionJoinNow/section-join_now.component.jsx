import "./section-join_now.syles.scss";
import Button from "../../../Common/Button/button";
import Chef from "../../../../Assets/chew.png";

const SectionJoinNow = () => {
  return (
    <section className="main__join-now">
      <h1 className="main__join-now--title">Join us now!</h1>
      <div className="main__join-now--wrapper">
        <div className="main__join-now--users">
          <h2 className="main__join-now--sub-heading">For users:</h2>
          <ul className="main__join-now--description">
            <li>
              Discover a world of culinary delights with DineFinder, your go-to
              platform for finding, booking, and reviewing the best restaurants
              in your country.
            </li>
            <li>
              Create your personalized profile, save your favorite restaurants,
              and explore new dining experiences based on your preferences.
            </li>
            <li>
              Share your reviews and recommendations with fellow food
              enthusiasts, and stay updated on the latest restaurant promotions
              and special events.
            </li>
            <li>
              Sign up now and embark on a gastronomic journey like never before.
            </li>
          </ul>
          <div className="main__join-now--buttons">
            <Button className="btn btn-primary">Join now</Button>
            <Button className={`btn btn-secondary`}>Search</Button>
          </div>
        </div>
        <div className="main__join-now--image-wrapper">
          <img src={Chef} alt="chef" />
        </div>
        <div className="main__join-now--users">
          <h2 className="main__join-now--sub-heading">
            For restaurant owners:
          </h2>

          <ul className="main__join-now--description">
            <li>
              Elevate your restaurant's visibility and reach a broader audience
              with DineFinder, the ultimate platform for showcasing your
              culinary offerings.
            </li>
            <li>
              Attract new customers, manage reservations, and receive valuable
              feedback to enhance your guests' dining experience.
            </li>
            <li>
              Benefit from our promotional tools, including targeted marketing
              campaigns, special events, and more.
            </li>
            <li>
              Join our thriving community of restaurant owners today and watch
              your business flourish.
            </li>
          </ul>

          <div className="main__join-now--buttons">
            <Button className="btn btn-primary">Join now</Button>
            <Button className={`btn btn-secondary`}>Pricing</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionJoinNow;
