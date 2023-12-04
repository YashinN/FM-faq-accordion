import styles from "./FaqAccordion.module.scss";

const FaqAccordion = ({ children }) => {
  return (
    <div className={styles.faqAccordion}>
      <img className={styles.faqAccordion__icon} src="" alt="" />
      <h1 className={styles.faqAccordion__heading}>FAQs</h1>
      <section>{children}</section>
    </div>
  );
};

export default FaqAccordion;
