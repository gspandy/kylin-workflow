package com.activiti.pojo;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

public class ActDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8690942338204952493L;

	private String processInstanceId;
	private String taskId;
	private Integer pageIndex;
	private Integer pageSize;
	private String selectParams;
	private String variableParams;
	private String statusId;
	private String remark;
	private String usertask;
	private String businessVariables;
	private String processInstanceKey;
	private String deploymentName;
	private String roles;
	private String userId;
	
	
	// ¸½¼þ
	private MultipartFile multipartFile;
	
	public String getProcessInstanceId() {
		return processInstanceId;
	}
	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	public Integer getPageIndex() {
		return pageIndex;
	}
	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public String getSelectParams() {
		return selectParams;
	}
	public void setSelectParams(String selectParams) {
		this.selectParams = selectParams;
	}
	public String getVariableParams() {
		return variableParams;
	}
	public void setVariableParams(String variableParams) {
		this.variableParams = variableParams;
	}
	public String getStatusId() {
		return statusId;
	}
	public void setStatusId(String statusId) {
		this.statusId = statusId;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getUsertask() {
		return usertask;
	}
	public void setUsertask(String usertask) {
		this.usertask = usertask;
	}
	public String getBusinessVariables() {
		return businessVariables;
	}
	public void setBusinessVariables(String businessVariables) {
		this.businessVariables = businessVariables;
	}
	public String getProcessInstanceKey() {
		return processInstanceKey;
	}
	public void setProcessInstanceKey(String processInstanceKey) {
		this.processInstanceKey = processInstanceKey;
	}
	public String getDeploymentName() {
		return deploymentName;
	}
	public void setDeploymentName(String deploymentName) {
		this.deploymentName = deploymentName;
	}
	public MultipartFile getMultipartFile() {
		return multipartFile;
	}
	public void setMultipartFile(MultipartFile multipartFile) {
		this.multipartFile = multipartFile;
	}
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "ActDto [processInstanceId=" + processInstanceId + ", taskId="
				+ taskId + ", pageIndex=" + pageIndex + ", pageSize="
				+ pageSize + ", selectParams=" + selectParams
				+ ", variableParams=" + variableParams + ", statusId="
				+ statusId + ", remark=" + remark + ", usertask=" + usertask
				+ ", businessVariables=" + businessVariables
				+ ", processInstanceKey=" + processInstanceKey
				+ ", deploymentName=" + deploymentName + ", roles=" + roles
				+ ", userId=" + userId + ", multipartFile=" + multipartFile
				+ "]";
	}
	
	
}
