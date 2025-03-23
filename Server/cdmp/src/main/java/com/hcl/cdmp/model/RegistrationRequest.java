package com.hcl.cdmp.model;

import lombok.ToString;

@ToString
public class RegistrationRequest {

	private String name;
	private String contact;
	private String email;
	private String password;
	private HealthIssue primaryHealthIssue;
	private String age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public HealthIssue getPrimaryHealthIssue() {
		return primaryHealthIssue;
	}
	public void setPrimaryHealthIssue(HealthIssue primaryHealthIssue) {
		this.primaryHealthIssue = primaryHealthIssue;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
	

}
