import styles from "./FinanceItems.module.css";
let styling = "";

const FinanceItems = (props) => {
  switch (props.type) {
    case "Expense":
      styling = `${styles.card} ${styles.expense}`;
      break;
    case "Food":
      styling = `${styles.card} ${styles.expense}`;
      break;
    case "Entertainment":
      styling = `${styles.card} ${styles.expense}`;
      break;
    case "Utilities":
      styling = `${styles.card} ${styles.expense}`;
      break;

    default:
      break;
  }

  // if (props.type === "Expense") {
  //   styling = `${styles.card} ${styles.red}`;
  // }

  return (
    <div className={styling}>
      <h2>{props.title}</h2>
      <h4> £{props.price}</h4>
    </div>
  );
};

export default FinanceItems;
