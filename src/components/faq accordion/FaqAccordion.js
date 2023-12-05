import { useState, useReducer } from "react";
import styles from "./FaqAccordion.module.scss";
import AccordionItem from "./AccordionItem";
import { accordionContent } from "./AccordionData";
import starIcon from "../images/icon-star.svg";

const initialState = {
  openIndex: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        openIndex: state.openIndex !== action.payload ? action.payload : null,
      };

    default:
      throw new Error("Action not recognized");
  }
};

const FaqAccordion = () => {
  const [{ openIndex }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.faqAccordion}>
      <img
        className={styles.faqAccordion__icon}
        src={starIcon}
        alt="purple star icon"
      />
      <h1 className={styles.faqAccordion__heading}>FAQs</h1>
      <section className={styles.faqAccordion__faq}>
        {accordionContent.map((item, index) => (
          <AccordionItem
            accordionContent={item}
            index={index}
            dispatch={dispatch}
            openIndex={openIndex}
          />
        ))}
      </section>
    </div>
  );
};

export default FaqAccordion;
