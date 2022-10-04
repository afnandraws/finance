import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFinanceData } from "../../store/item-slice";
import AddFinances from "./AddFinances";
import FinanceItems from "./FinanceItem";

const Finances = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getFinanceData({
        username: "test",
      })
    );
  }, [dispatch]);

  return (
    <div>
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
