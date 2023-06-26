package com.user.app.services;

import org.springframework.http.ResponseEntity;

import com.user.app.dto.SignupRequestDTO;
import com.user.app.pojo.User;

public interface IUserService {

	User logInUser(String userName, String password);
	ResponseEntity<?> signUpUser(SignupRequestDTO user);

}
