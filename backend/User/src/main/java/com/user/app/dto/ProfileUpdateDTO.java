package com.user.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

public class ProfileUpdateDTO {
	private int id;
	private String userName;
	private String password;
	private String fname;
	private String lname;
	private String mobileNumber;
	@DateTimeFormat(pattern ="dd-MM-yyyy" )
	private LocalDate date;
	private String address;
	private String pincode;
	public ProfileUpdateDTO() {
		super();
	}
		// TODO Auto-generated constructor stub
	public ProfileUpdateDTO(int id,String userName, String password, String fname, String lname, String mobileNumber, LocalDate date,
			String address, String pincode) {
		super();
		this.id=id;
		this.userName = userName;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.mobileNumber=mobileNumber;
		this.date = date;
		this.address = address;
		this.pincode=pincode;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "SignupRequestDTO [userName=" + userName + ", password=" + password + ", fname=" + fname + ", lname="
				+ lname + ", mobileNumber=" + mobileNumber + ", date=" + date + ", address=" + address + ", pincode="
				+ pincode + "]";
	}
	
	

}
