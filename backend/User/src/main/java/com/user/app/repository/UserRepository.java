package com.user.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.app.pojo.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserNameAndPassword(String userName, String password);
	
}
