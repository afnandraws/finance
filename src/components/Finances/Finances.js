import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFinanceData } from "../../store/item-slice";
import AddFinances from "./AddFinances";
import FinanceItems from "./FinanceItem";
import styles from "./Finances.module.css";

const Finances = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getFinanceData({
        username: "test",
      })
    );
  }, [dispatch]);

  const finances = useSelector((state) => state.finance.finances);

  return (
    <div className={styles.finances}>
      {/* <button onClick={dispatchHandler}>refresh</button> */}
      <h1>Finances</h1>
      <AddFinances />
      <ul>
        {finances.map((items) => (
          <FinanceItems
            key={items.id}
            title={items.title}
            type={items.type}
            price={items.price}
            genre={items.genre}
          />
        ))}
      </ul>
    </div>
  );
};

export default Finances;
