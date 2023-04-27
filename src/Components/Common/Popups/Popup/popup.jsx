import "./popup.styles.scss";
import { useNavigate } from "react-router-dom";

const PopupWrapper = ({ children }) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate(-1);
  };

  const childrenClickHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <section className="popup" onClick={() => closeHandler()}>
      <div
        className="popup-content"
        onClick={(event) => childrenClickHandler(event)}
      >
        {children}
      </div>
    </section>
  );
};

export default PopupWrapper;
