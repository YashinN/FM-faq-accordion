import { useState, useReducer } from "react";
import styles from "./FaqAccordion.module.scss";
import AccordionItem from "./AccordionItem";
import { accordionContent } from "./AccordionData";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.faqAccordion}>
      <img className={styles.faqAccordion__icon} src="" alt="" />
      <h1 className={styles.faqAccordion__heading}>FAQs</h1>
      <section>
        {accordionContent.map((item, index) => (
          <AccordionItem
            question={item.question}
            answer={item.answer}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};

export default FaqAccordion;
