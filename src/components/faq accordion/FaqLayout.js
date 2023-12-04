import styles from "./FaqLayout.module.scss";

const FaqLayout = ({ children }) => {
  return (
    <div className={styles.faqLayout}>
      <img className={styles.faqLayout__icon} src="" alt="" />
      <h1 className={styles.faqLayout__heading}>FAQs</h1>
      {children}
    </div>
  );
};

export default FaqLayout;
