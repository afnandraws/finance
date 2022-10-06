import { useRef } from "react";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const entEmail = emailRef.current.value;
    const entPassword = passwordRef.current.value;
  };

  return (
    <form onSubmit={submitHandler}>
      <label>email</label>
      <input ref={emailRef} type="email" />
      <label>password</label>
      <input ref={passwordRef} type="password" />
      <button type="submit"></button>
    </form>
  );
};

export default SignUp;
