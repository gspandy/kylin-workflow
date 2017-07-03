package com.rongcapital.pojo;

public class CommonEntity {
	private String action;
	private String username;
	private String password;
	private String deploymentId;
	private String deploymentName;
	private String loadProcessSource;
	private String loadProcessSourcePic;
	private String processInstanceByKey;
	
	//�?����
	private String leaveType;
	private String startTime;
	private String endTime;
	private String leaveReason;
	private String statusId;
	private String statusName;
	private String remark;
	private String taskId;
	private String processInstanceId;
	private String queryType;
	private String applyDay;
	private String personTaskType;
	private String assignee;//ִ����
	public String getCandidateUser() {
		return candidateUser;
	}
	public void setCandidateUser(String candidateUser) {
		this.candidateUser = candidateUser;
	}
	private String candidateUser;//��ѡ��
	
	
	
	public String getAssignee() {
		return assignee;
	}
	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	public String getPersonTaskType() {
		return personTaskType;
	}
	public void setPersonTaskType(String personTaskType) {
		this.personTaskType = personTaskType;
	}
	public String getDeploymentId() {
		return deploymentId;
	}
	public void setDeploymentId(String deploymentId) {
		this.deploymentId = deploymentId;
	}
	public String getApplyDay() {
		return applyDay;
	}
	public void setApplyDay(String applyDay) {
		this.applyDay = applyDay;
	}
	public String getQueryType() {
		return queryType;
	}
	public void setQueryType(String queryType) {
		this.queryType = queryType;
	}
	public String getProcessInstanceId() {
		return processInstanceId;
	}
	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}
	public String getStatusName() {
		return statusName;
	}
	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getStatusId() {
		return statusId;
	}
	public void setStatusId(String statusId) {
		this.statusId = statusId;
	}
	public String getProcessInstanceByKey() {
		return processInstanceByKey;
	}
	public void setProcessInstanceByKey(String processInstanceByKey) {
		this.processInstanceByKey = processInstanceByKey;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
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
	public String getDeploymentName() {
		return deploymentName;
	}
	public void setDeploymentName(String deploymentName) {
		this.deploymentName = deploymentName;
	}
	public String getLoadProcessSource() {
		return loadProcessSource;
	}
	public void setLoadProcessSource(String loadProcessSource) {
		this.loadProcessSource = loadProcessSource;
	}
	public String getLoadProcessSourcePic() {
		return loadProcessSourcePic;
	}
	public void setLoadProcessSourcePic(String loadProcessSourcePic) {
		this.loadProcessSourcePic = loadProcessSourcePic;
	}
	public String getLeaveType() {
		return leaveType;
	}
	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getLeaveReason() {
		return leaveReason;
	}
	public void setLeaveReason(String leaveReason) {
		this.leaveReason = leaveReason;
	}
	
	

}
