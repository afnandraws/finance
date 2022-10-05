import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Welcome from "./components/Welcome/Welcome/Welcome";

const Finances = React.lazy(() => import("./components/Finances/Finances"));

function App() {
  const success = useSelector((state) => state.auth.status);

  return (
    <>
      <div>
        {success === "success" && (
          <Suspense fallback={<p>loading...</p>}>
            <Finances />
          </Suspense>
        )}
      </div>
      <div>{success !== "success" && <Welcome />}</div>
    </>
  );
}

export default App;
