import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

const RegisterInput = ({ register }) => {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirm, handleConfirmChange] = useInput("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== confirm) {
      alert("Password and password confirm must be same.");
    } else {
      register({
        name: name,
        email: email,
        password: password,
      });
    }
  };
  return (
    <form className="input-register" onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" onChange={handleNameChange} />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" onChange={handleEmailChange} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" autoComplete="current-password" onChange={handlePasswordChange} />
      <label htmlFor="confirm">Confirm Password</label>
      <input id="confirm" type="password" autoComplete="current-password" onChange={handleConfirmChange} />
      <button>Register</button>
    </form>
  );
};
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterInput;