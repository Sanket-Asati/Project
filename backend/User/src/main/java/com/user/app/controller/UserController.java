package com.user.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.app.dto.LoginRequestDTO;
import com.user.app.dto.SignupRequestDTO;
import com.user.app.pojo.User;
import com.user.app.services.IUserService;
import com.user.app.user_exe.UserHandlingException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private IUserService userService;
	//login controller
	@PostMapping("/login")
	public ResponseEntity<?> logInUser(@RequestBody LoginRequestDTO user){
		System.out.println("in Login "+user);
		 try {
		      // Validate the email and password
		      
		      // Authenticate the user
		      User user1 = userService.logInUser(user.getUserName(), user.getPassword());
		      
		      // Generate and return the JWT token or any other authentication response
		      System.out.println("IN controller "+user1);
	
		      return ResponseEntity.ok(user1);
		      
		    } catch (UserHandlingException e) {
		      // Handle authentication exception and return an error response
		    	 UserHandlingException ue= new UserHandlingException("User not found");
		      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ue);
		    } catch (Exception e) {
		      // Handle other unexpected exceptions and return an error response
		    	 UserHandlingException ue= new UserHandlingException("An error occurred during login");
		      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ue);
		    }
		  }

	//signup controller
	@PostMapping("/signup")
	public ResponseEntity<?> signUpUser(@RequestBody SignupRequestDTO user) {
		System.out.println("in Signup " + user);

		return new ResponseEntity<>(userService.signUpUser(user), HttpStatus.CREATED);
	}
}