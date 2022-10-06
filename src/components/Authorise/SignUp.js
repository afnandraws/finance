import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postSignUp } from "../../store/auth-slice";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const entEmail = emailRef.current.value;
    const entPassword = passwordRef.current.value;
    dispatch(
      postSignUp({
        email: entEmail,
        password: entPassword,
      })
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <label>email</label>
      <input ref={emailRef} type="email" />
      <label>password</label>
      <input ref={passwordRef} type="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
