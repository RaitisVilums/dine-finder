import "./book.styles.scss";
import PopupWrapper from "../Common/Popups/Popup/popup";
import Calendar from "../Common/Calendar/calendar";
import Button from "../Common/Button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "../../Hooks/useContexts.hook";

const Booking = () => {
  const navigate = useNavigate();
  const { handleBookingSubmit } = useForm();

  const closeHandler = () => {
    navigate(-1);
  };

  const submitFakeData = () => {
    const fakeData = {
      peopleCount: 2,
      date: "2023-05-01",
      time: "16:40",
      name: "John Doe",
      email: "johndoe@example.com",
    };

    handleBookingSubmit(fakeData);
    closeHandler();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <PopupWrapper>
      <motion.div
        className="book"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Button
          className={`btn-primary btn-book`}
          onClick={() => closeHandler()}
        >
          x
        </Button>
        <h1 className="book__title">Restaurant name</h1>
        <div className="book__attribute">
          <h2>Available people count</h2>
          <div className="book__attribute--wrapper">
            <input
              className="book__attribute--input"
              type="radio"
              id="1"
              name="count"
              value={"1"}
            />
            <label className="book__attribute--label" htmlFor="1" name="time">
              1
            </label>
          </div>
        </div>
        <Calendar />
        <div className="book__attribute">
          <h2>Available times</h2>
          <div className="book__attribute--wrapper">
            <input
              className="book__attribute--input"
              type="radio"
              id="time1"
              name="time"
              value={"16:40"}
            />
            <label
              className="book__attribute--label"
              htmlFor="time1"
              name="time"
            >
              16:40
            </label>
          </div>
        </div>
        <Button className={`btn-primary`} onClick={submitFakeData}>
          Book
        </Button>
      </motion.div>
    </PopupWrapper>
  );
};

export default Booking;
