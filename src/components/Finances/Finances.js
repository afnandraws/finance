import AddFinances from "./AddFinances";
import FinanceItems from "./FinanceItem";

const Finances = (props) => {
  const finances = [];
  return (
    <div>
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
