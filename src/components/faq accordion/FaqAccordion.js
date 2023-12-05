import { useReducer } from "react";
import styles from "./FaqAccordion.module.scss";
import AccordionItem from "./AccordionItem";
import { accordionContent } from "./AccordionData";
import starIconMobile from "../images/icon-star-mobile.svg";
import starIconDesktop from "../images/icon-star-desktop.svg";

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
      <div className={`${styles.faqAccordion__title} ${styles.title}`}>
        <picture>
          <source media="(max-width:600px)" srcSet={starIconMobile} />
          <img
            className={styles.title__icon}
            src={starIconDesktop}
            alt="purple star icon"
          />
        </picture>
        <h1 className={styles.title__heading}>FAQs</h1>
      </div>
      <section className={styles.faqAccordion__faq}>
        {accordionContent.map((item, index) => (
          <AccordionItem
            key={item.question}
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
