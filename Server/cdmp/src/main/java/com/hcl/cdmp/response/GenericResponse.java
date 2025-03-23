package com.hcl.cdmp.response;

public class GenericResponse {

	private String statusMessage;
	private String statusCode;
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	public String getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}
	@Override
	public String toString() {
		return "GenericResponse [statusMessage=" + statusMessage + ", statusCode=" + statusCode + "]";
	}
	
	
}
