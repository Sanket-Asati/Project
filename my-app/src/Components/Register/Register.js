import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    date:"",
    mobileNumber:"",
    userName: "",
    password: "",
    cpassword: "",
    address : "",
    pincode : ""
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
     var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
     var MobileNumberRegex = /^(\+91|0)?[6789]\d{9}$/;
    if (!values.fname) {
      error.fname = "First Name is required";
    }
    if (!values.lname) {
      error.lname = "Last Name is required";
    }
    // if (!values.email) {
    //   error.email = "Email is required";
    // } else if (!regex.test(values.email)) {
    //   error.email = "This is not a valid email format!";
    // }
    if (!MobileNumberRegex.test(values.mobileNumber)) {
      error.mobileNumber="Invalid mobile number !.";
  }
    if(!values.userName){
      error.userName = "User Name is required";
    } else if(!usernameRegex.test(values.userName)){
      error.userName="This is not valid format !.";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:9191/user/signup", user).then((res) => {
        alert("User register sucessfully")
        navigate("/", { replace: true });
      });
    }
  });
  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Create your account</h1>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.fname}
            autoFocus
          />
          <p className={basestyle.error}>{formErrors.fname}</p>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lname}
          />
          <p className={basestyle.error}>{formErrors.lname}</p>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Mobile number"
            onChange={changeHandler}
            value={user.mobileNumber}
          />
          <p className={basestyle.error}>{formErrors.mobileNumber}</p>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="User Name"
            onChange={changeHandler}
            value={user.userName}
          />
          <p className={basestyle.error}>{formErrors.userName}</p>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date of Birth"
            onChange={changeHandler}
            value={user.date}
            />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className={basestyle.error}>{formErrors.password}</p>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
          <p className={basestyle.error}>{formErrors.cpassword}</p>
          <textarea
            name="address"
            id="address"
            placeholder="Address"
            onChange={changeHandler}
            value={user.address}
          />
          <input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="6 digit pincode"
            onChange={changeHandler}
            value={user.pincode}
          />
          <p className={basestyle.error}>{formErrors.cpassword}</p>
          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};
export default Register;
