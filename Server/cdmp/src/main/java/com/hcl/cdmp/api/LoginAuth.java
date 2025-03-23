package com.hcl.cdmp.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.cdmp.model.LoginRequest;
import com.hcl.cdmp.model.RegistrationRequest;
import com.hcl.cdmp.response.GenericResponse;
import com.hcl.cdmp.response.LoginResponse;

@RestController
public interface LoginAuth {

	//Registration API
	@PostMapping("/register")
	public GenericResponse registerUser( @RequestBody RegistrationRequest registrationRequest);

    // Login API
    @PostMapping("/login")
    public LoginResponse loginUser(@RequestBody LoginRequest loginRequest);
}
