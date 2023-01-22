import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

const LoginInput = ({ login }) => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  };
  return (
    <form className="input-login" onSubmit={onSubmitHandler}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" onChange={handleEmailChange} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={handlePasswordChange} />
      <button>Login</button>
    </form>
  );
};
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
export default LoginInput;