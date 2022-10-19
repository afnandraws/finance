import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSignIn } from "../../store/auth-slice";
import classes from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(
      postSignIn({
        email: email,
        password: password,
      })
    );
  };

  const changeToSignUpHandler = () => {
    props.onChange();
  };

  return (
    <div className={classes.login}>
      <h3>Login to your account</h3>
      <form onSubmit={formHandler}>
        <label>Email</label>
        <input ref={emailRef} type="email" name="email" />
        <br />
        <label>Password</label>
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <NavLink to="/finances">
          <button type="submit">Submit</button>
        </NavLink>
        <button type="button" onClick={changeToSignUpHandler}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
