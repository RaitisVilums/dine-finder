import "./menu-item.styles.scss";
import { motion } from "framer-motion";

const MenuItem = ({ price, name, description, picture }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="menu__container--item"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={picture} alt="food" />
      <div className="menu__container--item__wrapper">
        <h2>{name}</h2>
        <h2>{price}</h2>
        <h3>{description}</h3>
      </div>
    </motion.div>
  );
};

export default MenuItem;
