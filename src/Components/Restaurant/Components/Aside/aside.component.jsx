import "./aside.styles.scss";
import { Phone, WebPage, Location } from "../../../../Assets/_index";

const AsideMap = ({ location, phone, webpage }) => {
  return (
    <div className="restaurant__map">
      <div className="map" />
      <div className="restaurant__map--info">
        <p>
          <Location className="restaurant__map--icon" />
          {location}
        </p>
        <p>
          <Phone className="restaurant__map--icon" />
          {phone}
        </p>
        <p>
          <WebPage className="restaurant__map--icon" /> {webpage}
        </p>
      </div>
    </div>
  );
};

export default AsideMap;
