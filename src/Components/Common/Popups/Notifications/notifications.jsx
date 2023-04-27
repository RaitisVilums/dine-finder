import React, { useState, useEffect } from "react";
import "./notifications.styles.scss";
import { motion } from "framer-motion";

const Notification = ({ message, onClearMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClearMessage();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClearMessage]);

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.2,
      transition: { duration: 0.1 },
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.2,
      transition: { ease: "easeOut", duration: 0.15 },
    },
    hover: { scale: 1.05, transition: { duration: 0.1 } },
  };

  return (
    <motion.div
      className={`notification`}
      variants={variants}
      whileHover="hover"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {message}
    </motion.div>
  );
};

export default Notification;
