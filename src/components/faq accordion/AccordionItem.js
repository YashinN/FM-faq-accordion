import styles from "./AccordionItem.module.scss";
import plusIcon from "../images/icon-plus.svg";

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
        >
          {openIndex === index ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#301534"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#AD28EB"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
              />
            </svg>
          )}
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
