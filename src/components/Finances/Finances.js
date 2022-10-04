import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFinanceData } from "../../store/item-slice";
import AddFinances from "./AddFinances";
import FinanceItems from "./FinanceItem";

const Finances = () => {
  const dispatch = useDispatch();

  const dispatchHandler = () => {
    dispatch(
      getFinanceData({
        username: "test",
      })
    );
  };

  return (
    <div>
      <button onClick={dispatchHandler}>refresh</button>
      <h1>Finances</h1>
      <AddFinances />
      <ul>
        {/* {finances.map((items) => (
          <FinanceItems
            key={items.id}
            title={items.title}
            type={items.type}
            price={items.price}
            genre={items.genre}
          />
        ))} */}
      </ul>
    </div>
  );
};

export default Finances;
