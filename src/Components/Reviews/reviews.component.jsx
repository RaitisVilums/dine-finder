import "./reviews.styles.scss";
import PopupWrapper from "../Common/Popups/Popup/popup";
import Rating from "../Common/Rating/rating";
import Input from "../Common/Input/input";
import Button from "../Common/Button/button";
import { useForm } from "../../Hooks/useContexts.hook";
import { useNavigate } from "react-router-dom";
const Reviews = () => {
  const navigate = useNavigate();
  const { handleReviewSubmit } = useForm();

  const closeHandler = () => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      rating: 5,
      title: "Example Title",
      message: "Example Message",
    };

    handleReviewSubmit(data);
    closeHandler();
  };
  return (
    <PopupWrapper>
      <div className="review">
        <Button className={`btn-close btn-primary`} onClick={closeHandler}>
          x
        </Button>
        <h1 className="review__title">Write a review</h1>
        <form className="review__form" onSubmit={handleSubmit}>
          <Rating rating={5} />
          <Input
            label="Title"
            name="title"
            type="text"
            readOnly={true}
            className={"review__form--input"}
          />
          <div className="review__form--group">
            <label>Message</label>
            <textarea name="message" placeholder="Enter your message here" />
          </div>
          <Button className={`btn-secondary`} type={`submit`}>
            Submit
          </Button>
        </form>
      </div>
    </PopupWrapper>
  );
};

export default Reviews;
