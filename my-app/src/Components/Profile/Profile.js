import React from "react";
import basestyle from "../Base.module.css";
import profileStyle from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
const Profile = ({fname, lname, address, date, mobileNumber, pincode, currentTime}) => {
  const navigate = useNavigate();
  var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// Convert hours to 12-hour format
var amPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours === 0 ? 12 : hours;

var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

  const logoutHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={profileStyle.profile}>
      <h1>Welcome {fname} {lname} !...</h1>
      <hr></hr>
      <div>
        <h2>User Details</h2>
        <p><b>User Name:</b> {fname} {lname}</p>
        <p><b>Date of Birth:</b> {date}</p>
        <p><b>Phone Number:</b> {mobileNumber}</p>
        <p><b>Address:</b> {address}</p>
        <p><b>Pincode:</b> {pincode}</p>
        <p><b>Current Time:</b> {formattedTime}</p>
      </div>
      <button className={basestyle.button_common} onClick={logoutHandler}>
        {" "}
        Logout
      </button>
    </div>
  );
};
export default Profile;
