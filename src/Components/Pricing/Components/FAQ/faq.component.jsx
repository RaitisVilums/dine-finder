import "./faq.styles.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { faq } from "../../../../Data/faq";
import Button from "../../../Common/Button/button";
import { ArrowDown } from "../../../../Assets/_index";

const FAQ = () => {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="faq">
      <h1 className="faq__title">FAQ</h1>

      <div className="faq__container">
        {faq.map((item) => {
          const { id, question, answer } = item;
          const isExpanded = expanded[id] ?? false;
          const rotateDegree = isExpanded ? 180 : 0;

          return (
            <div className="faq__container--item" key={id}>
              <h1 className="faq__container--item__question">{question}</h1>
              <motion.p
                className="faq__container--item__answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {answer}
              </motion.p>
              <Button
                className={`btn btn-secondary btn-faq`}
                onClick={() => toggleExpand(id)}
              >
                <ArrowDown
                  className="faq__container--item__icon"
                  style={{ transform: `rotate(${rotateDegree}deg)` }}
                />
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
