import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postSignUp } from "../../store/auth-slice";
import classes from "./SignUp.module.css";

const SignUp = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postSignUp({
        name: nameRef,
        email: emailRef,
        password: passwordRef,
      })
    );
  };

  const changeToLoginHandler = () => {
    props.onChange();
  };

  return (
    <div className={classes.signup}>
      <h3>Make a new account</h3>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input ref={nameRef} name="name" />
        <br />
        <label>Email</label>
        <input ref={emailRef} type="email" name="email" />
        <br />
        <label>Password</label>
        <input ref={nameRef} type="password" name="password" />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={changeToLoginHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
