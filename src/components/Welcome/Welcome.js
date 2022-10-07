import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Welcome = () => {
  const [changeToSignUp, setChangeToSignUp] = useState(false);

  const changeHandler = () => {
    setChangeToSignUp((prevState) => !prevState);
    console.log("changed");
  };

  return (
    <>
      {!changeToSignUp && <Login onChange={changeHandler} />}
      {changeToSignUp && <SignUp onChange={changeHandler} />}
    </>
  );
};

export default Welcome;
