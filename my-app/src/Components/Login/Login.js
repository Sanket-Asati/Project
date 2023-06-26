import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    // const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.email) {
    //   error.email = "Email is required";
    // } else if (!regex.test(values.email)) {
    //   error.email = "Please enter a valid email address";
    // }
    if(!values.userName){
      error.userName="User Name required"
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:9191/user/login", user).then((res) => {
        //alert(res.data.message);
        console.table(res.data)
        setUserState(res.data);
        navigate("/profile", { replace: true });
      });
    }
  });
  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="User Name"
          onChange={changeHandler}
          value={user.userName}
          autoFocus
        />
        <p className={basestyle.error}>{formErrors.userName}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
