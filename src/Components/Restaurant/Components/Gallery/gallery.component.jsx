import "./gallery.styles.scss";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../../../Common/Button/button";
import Restaurant from "../../../../Assets/restaurant.jpg";
import { Next, Prev } from "../../../../Assets/_index";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryWrapperRef = useRef(null);
  const IMAGES_COUNT = 20;

  const handlePrevClick = () => {
    galleryWrapperRef.current.scrollTo({
      left:
        galleryWrapperRef.current.scrollLeft -
        galleryWrapperRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    galleryWrapperRef.current.scrollTo({
      left:
        galleryWrapperRef.current.scrollLeft +
        galleryWrapperRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="restaurant__gallery">
      <Button className={`btn-primary`} onClick={handlePrevClick}>
        <Prev className="restaurant__gallery--icon" />
      </Button>
      <motion.div
        className="restaurant__gallery--wrapper"
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        ref={galleryWrapperRef}
      >
        {[...Array(IMAGES_COUNT)].map((_, index) => (
          <div key={index} className="restaurant__gallery--image">
            <img src={Restaurant} alt="image" />
          </div>
        ))}
      </motion.div>
      <Button className={`btn-primary`} onClick={handleNextClick}>
        <Next className="restaurant__gallery--icon" />
      </Button>
    </div>
  );
};

export default Gallery;
