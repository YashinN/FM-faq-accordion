import { useState } from "react";
import styles from "./FaqAccordion.module.scss";
import AccordionItem from "./AccordionItem";

const accordionContent = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor Free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

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
