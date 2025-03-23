package com.hcl.cdmp.impl;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.cdmp.api.LoginAuth;
import com.hcl.cdmp.entity.UserDetails;
import com.hcl.cdmp.model.LoginRequest;
import com.hcl.cdmp.model.RegistrationRequest;
import com.hcl.cdmp.repo.UserRepository;
import com.hcl.cdmp.response.GenericResponse;
import com.hcl.cdmp.response.LoginResponse;

@Service
public class LoginAuthImpl implements LoginAuth {

	@Autowired
	private UserRepository userRepository;

	@Override
	public GenericResponse registerUser(RegistrationRequest registrationRequest) {
		GenericResponse res = new GenericResponse();
		try {
			Optional<UserDetails> existingUserByEmail = userRepository.findByEmail(registrationRequest.getEmail());

			if (existingUserByEmail.isPresent()) {
				res.setStatusMessage("Email is already in use.");
				res.setStatusCode("FAILED");
			} else {

				// Hash the password
				String hashedPassword = Base64.getEncoder()
						.encodeToString((registrationRequest.getPassword().getBytes()));

				// Create a new User and save in DB
				UserDetails newUser = new UserDetails();
				newUser.setName(registrationRequest.getName());
				newUser.setPassword(hashedPassword);
				newUser.setEmail(registrationRequest.getEmail());
				newUser.setContact(registrationRequest.getContact());
				// newUser.setPrimaryHealthIssue(registrationRequest.getPrimaryHealthIssue());
				newUser.setCreatedAt(LocalDateTime.now());
				userRepository.save(newUser);
				res.setStatusCode("SUCCESS");
				res.setStatusMessage("User is successfully Registered");
			}
		} catch (Exception e) {
			res.setStatusMessage("Unknow Error.");
			res.setStatusCode("ERROR");
		}
		return res;
	}

	@Override
	public LoginResponse loginUser(LoginRequest loginRequest) {
		LoginResponse res = new LoginResponse();
		try {
			Optional<UserDetails> existingUserByEmail = userRepository.findByEmail(loginRequest.getEmail());
			if (existingUserByEmail.isPresent()) {
				if(existingUserByEmail.get().getPassword().equals(loginRequest.getPassword())){
					res.setStatusCode("SUCCESS");
				}
						
			}
			
		} catch (Exception e) {

		}
		return res;
	}

}
