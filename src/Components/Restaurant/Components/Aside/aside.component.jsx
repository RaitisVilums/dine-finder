import "./aside.styles.scss";

const AsideMap = ({ location, phone, webpage }) => {
  return (
    <div className="restaurant__map">
      <div className="map" />
      <div className="restaurant__map--info">
        <p>{location}</p>
        <p>{phone}</p>
        <p>{webpage}</p>
      </div>

      <div className="restaurant__map--media">
        <p>Twitter</p>
        <p>Instagram</p>
        <p>TikTok</p>
      </div>
    </div>
  );
};

export default AsideMap;
