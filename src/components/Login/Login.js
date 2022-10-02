import { useDispatch } from "react-redux";
import { getUserData } from "../../store/auth-slice";

const Login = () => {
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
  return (
    <form onSubmit={formHandler}>
      <label>Username</label>
      <input name="username" />
      <label>Password</label>
      <input type="password" name="password" />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
