import "./menu.styles.scss";
import PopupWrapper from "../Common/Popups/Popup/popup";
import food from "../../Assets/food.png";
import Button from "../Common/Button/button";
import { useNavigate } from "react-router-dom";
import MenuItem from "./menu-item.component";
import { useState } from "react";
import menuItems from "../../Data/menuItems.json";
import { motion } from "framer-motion";

const Menu = ({}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isOpen, setIsOpen] = useState(true);

  const closeHandler = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const openHandler = () => {
    setIsOpen(true);
  };

  const totalPages = Math.ceil(menuItems.items.length / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

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
    <PopupWrapper>
      <motion.div
        className="menu"
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <Button
          className={`btn-menu btn-primary`}
          onClick={isOpen ? closeHandler : openHandler}
        >
          {isOpen ? "x" : "Menu"}
        </Button>
        <h1>Our Menu</h1>
        <div className="menu__container">
          {menuItems.items
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  price={item.price}
                  picture={food}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
        </div>
        <div className="menu__pagination">
          {pages.map((page) => (
            <Button
              key={page}
              className={`btn-page ${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>
      </motion.div>
    </PopupWrapper>
  );
};

export default Menu;
