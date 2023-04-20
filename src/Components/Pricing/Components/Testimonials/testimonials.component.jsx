import "./testimonials.styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../Common/Button/button";
import Founder from "../../../../Assets/founder.png";
import { Next, Prev } from "../../../../Assets/_index";
import { testimonials } from "../../../../Data/testimonials";
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <h1 className="testimonials__title">Feedback</h1>
      <div className="testimonials__container">
        <Button className="btn btn-secondary" onClick={handlePrev}>
          <Prev className="testimonials__container--icon" />
        </Button>
        <AnimatePresence mode="wait">
          <motion.div
            className="testimonials__container--item"
            key={activeIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              type: "linear",
              duration: 0.2,
            }}
          >
            <img src={Founder} alt="user" />
            <h2 className="testimonials__container--item__title">
              {testimonials[activeIndex].name}
            </h2>
            <p className="testimonials__container--item__description">
              {testimonials[activeIndex].message}
            </p>
          </motion.div>
        </AnimatePresence>
        <Button className="btn btn-secondary" onClick={handleNext}>
          <Next className="testimonials__container--icon" />
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
