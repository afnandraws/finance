import { useSelector } from "react-redux";
import Finances from "./components/Finances/Finances";
import Welcome from "./components/Welcome/Welcome/Welcome";

function App() {
  const success = useSelector((state) => state.auth.status);

  return (
    <>
      <div>{success === "success" && <Finances />}</div>
      <div>{success !== "success" && <Welcome />}</div>
    </>
  );
}

export default App;
