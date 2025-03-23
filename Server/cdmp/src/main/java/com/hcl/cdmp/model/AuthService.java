package com.hcl.cdmp.model;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
	 private static final String SECRET_KEY = "hcltech"; // Use a strong secret key
	 private static final long EXPIRATION_TIME = 3600000;// Token expiration time 1hr in ms
	public String generateJWT(LoginRequest loginRequest) {
		return null;		
	}

	 
}
