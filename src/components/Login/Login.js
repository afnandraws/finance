import { useDispatch } from "react-redux";
import { getUserData } from "../../store/old-auth-slice";
import classes from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();

    dispatch(
      getUserData({
        username: e.target.username.value,
        password: e.target.password.value,
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
        <input type="email" name="email" />
        <br />
        <label>Password</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={changeToSignUpHandler}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
