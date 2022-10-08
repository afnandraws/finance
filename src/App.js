import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Welcome from "./components/Welcome/Welcome";

const Finances = React.lazy(() => import("./components/Finances/Finances"));

function App() {
  const success = useSelector((state) => state.auth.status);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/finances" element={<Finances />} />
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
