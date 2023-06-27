package com.user.app.services;

import java.util.*;
import org.springframework.http.ResponseEntity;

import com.user.app.dto.ProfileUpdateDTO;
import com.user.app.dto.SignupRequestDTO;
import com.user.app.pojo.User;



public interface IUserService {

	User logInUser(String userName, String password);
	ResponseEntity<?> signUpUser(SignupRequestDTO user);
	ResponseEntity<?> updateProfile(ProfileUpdateDTO profileUpdateDTO);
	List<User> getAllUsers();
	void validateUser(int userId);
}
