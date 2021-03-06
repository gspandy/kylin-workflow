package com.activiti.pojo;

import java.io.Serializable;

public class AccountInfo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8690942338204952493L;

	private String username;
	private String password;
	private String appCode;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAppCode() {
		return appCode;
	}
	public void setAppCode(String appCode) {
		this.appCode = appCode;
	}
	@Override
	public String toString() {
		return "AccountInfo [username=" + username + ", password=" + password
				+ ", appCode=" + appCode + "]";
	}
	
}
