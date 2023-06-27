import React, { useState } from "react";
import basestyle from "../Base.module.css";
import profileStyle from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
const Profile = ({id, userName, password, fname, lname, address, date, mobileNumber, pincode, currentTime}) => {
  const navigate = useNavigate();
  var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// Convert hours to 12-hour format
var amPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours === 0 ? 12 : hours;

var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

const [isEditing, setIsEditing] = useState(false);

  const logoutHandler = () => {
    navigate("/", { replace: true });
  };

  const editHandler=() => {
    
    setIsEditing(true);
  };
  
  return (
    <div className={profileStyle.profile}>
      {isEditing ? (
        <EditProfile
          id={id}
          userName={userName}
          password={password}
          fname={fname}
          lname={lname}
          address={address}
          date={date}
          mobileNumber={mobileNumber}
          pincode={pincode}
          onCancel={() => setIsEditing(false)}
          onSave={(updatedData) => {
            // Handle saving of updatedData
            // Update the main profile component's state or send data to the server
            setIsEditing(false);
          }}
        />
      ) : (
        <div>
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
      <button className={profileStyle.edit_button} onClick={editHandler}>
        Edit
      </button>
      <button className={basestyle.button_common} onClick={logoutHandler}>
        {" "}
        Logout
      </button>
      </div>
      )}
    </div>
  );
};
export default Profile;

