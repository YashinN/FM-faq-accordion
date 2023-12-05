import styles from "./AccordionItem.module.scss";
import IconMinus from "./IconMinus";
import IconPlus from "./IconPlus";

const AccordionItem = ({ dispatch, openIndex, index, accordionContent }) => {
  const { question, answer } = accordionContent;

  return (
    <div
      className={`${styles.accordionItem} ${
        index == 3 && styles.removeBorder
      } `}
    >
      <div
        className={`${styles.accordionItem__titleContainer} ${
          styles.titleContainer
        } ${index === 3 && styles.titleContainer_removePadding}`}
      >
        <h2
          className={`custom_cursor ${
            index === 3
              ? styles.titleContainer__question_removeSpacing
              : styles.titleContainer__question
          } 
          }`}
          onClick={() => dispatch({ type: "toggle", payload: index })}
        >
          {question}
        </h2>

        <button
          className={`${styles.titleContainer__button} custom_cursor`}
          onClick={() => dispatch({ type: "toggle", payload: index })}
          aria-label="toggle faq"
        >
          {openIndex === index ? <IconMinus /> : <IconPlus />}
        </button>
      </div>

      {openIndex === index && (
        <p
          className={`${styles.accordionItem__answer} ${
            index === 3 && styles.accordionItem__answer_marginTop
          }`}
        >
          {answer}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
