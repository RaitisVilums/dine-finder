import Loader from "../../../Common/Loader/loader";
import "./loading.styles.scss";

const LoadingElement = () => {
  return (
    <div className="restaurants__loading">
      <Loader />
    </div>
  );
};

export default LoadingElement;
