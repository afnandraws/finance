import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";

const Finances = React.lazy(() => import("./components/Finances/Finances"));

function App() {
  const success = useSelector((state) => state.auth.success);

  return (
    <Routes>
      <Route path="/finances" element={<Finances />} />
      <Route
        path="/"
        element={
          success === "success" ? (
            <Navigate replace to="/finances" />
          ) : (
            <Welcome />
          )
        }
      />
    </Routes>

    // <>
    //   <div>
    //     {success === "loggedIn" && (
    //       <Suspense fallback={<p>loading...</p>}>
    //         <Finances />
    //       </Suspense>
    //     )}
    //   </div>
    //   <div>{success !== "loggedIn" && <Welcome />}</div>
    // </>
  );
}

export default App;
