import styles from "./FinanceItems.module.css";

const FinanceItems = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <h4> £{props.price}</h4>
    </div>
  );
};

export default FinanceItems;
