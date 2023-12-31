package com.user.app.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.user.app.dto.ErrorResponse;
import com.user.app.dto.ProfileUpdateDTO;
import com.user.app.dto.SignupRequestDTO;
import com.user.app.pojo.User;
import com.user.app.repository.UserRepository;
import com.user.app.user_exe.UserHandlingException;

@Service
@Transactional
public class UserServiceImp implements IUserService {
	
	@Autowired
	UserRepository userRepo;

	@Override
	public User logInUser(String userName, String password) {
		User user1 = userRepo.findByUserNameAndPassword(userName,password);
		System.out.println(user1);

	    if (user1 == null) {
	      throw new UserHandlingException("User not found");
	    }

	    // Compare the provided password with the stored password
	    if (!user1.getPassword().equals(password)) {
	      throw new UserHandlingException("Invalid password");
	    }
		return user1;
	}

	@Override
	public ResponseEntity<?> signUpUser(SignupRequestDTO user) {
		try {
			User user1=new User();
			BeanUtils.copyProperties(user, user1);
			System.out.println(user1);
			userRepo.save(user1);
			return ResponseEntity.ok().build();
			} catch (Exception e) {
		            // Handle other unexpected exceptions and return an error response
		            ErrorResponse errorResponse = new ErrorResponse("An error occurred during signup", null);
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		        }
	}

	@Override
	public ResponseEntity<?> updateProfile(ProfileUpdateDTO profileUpdateDTO) {
		try {
			User user1=new User();
			BeanUtils.copyProperties(profileUpdateDTO, user1);
			System.out.println( "update service "+user1);
			userRepo.save(user1);
			return ResponseEntity.ok().build();
			} catch (Exception e) {
		            // Handle other unexpected exceptions and return an error response
		            ErrorResponse errorResponse = new ErrorResponse("An error occurred during signup", null);
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		        }
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public void validateUser(int userId) {
		 User user = userRepo.findById(userId)
	                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
	        user.setValidated(true);
	        userRepo.save(user);
	    }
		
	}
	
