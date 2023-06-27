// EditProfile component
import React, { useState } from 'react';
import registerstyle from "../Register/Register.module.css";
import basestyle from "../Base.module.css";
import axios from "axios";

const EditProfile = ({ id,userName,password,fname, lname, address, date, mobileNumber, pincode, onCancel, onSave }) => {
    const [formData, setFormData] = useState({
        id,
        userName,
        password,
        fname,
        lname,
        address,
        date,
        mobileNumber,
        pincode,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleSave = () => {
        axios
            .put('http://localhost:9191/user/update', formData)
            .then((response) => {
                // Handle success
                onSave(formData);
            })
            .catch((error) => {
                // Handle error
                alert(error);
            });
        onSave(formData);
    };

    return (
        <div className={registerstyle.register}>

            <h1>Edit Data</h1>
            <form>
                <label>
                    First Name:
                    <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <label>
                    Mobile Number:
                    <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>
                    Pincode:
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                </label>

                <button className={basestyle.button_common} onClick={handleSave}>Save</button>
                <button className={basestyle.button_common} onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EditProfile;
