package com.activiti.service;

import com.activiti.pojo.ActDto;
import com.rongcapital.api.pojo.DubBaseResponse;

public interface TaskService {

	DubBaseResponse deploymentProcDefQuery(ActDto actDto);
	DubBaseResponse deploymentProcDefDelete(String deploymentId);
	DubBaseResponse imageViews(String deploymentId);
	DubBaseResponse deploymentProcDefByBytes(ActDto actDto);
	DubBaseResponse startupProcessInstance(ActDto actDto);
	DubBaseResponse assigneeTaskQuery(String assignee);
	DubBaseResponse taskProcessVariablesQuery(ActDto actDto);
	DubBaseResponse hisTaskQuery(ActDto actDto);
	DubBaseResponse myHisTaskQuery(ActDto actDto);
	DubBaseResponse historyVariableQuery(ActDto actDto);
	DubBaseResponse submitTask(ActDto actDto);
	DubBaseResponse jumpTask(ActDto actDto);
	DubBaseResponse candidateTaskQuery(ActDto actDto);
	DubBaseResponse receiveTask(ActDto actDto);
	DubBaseResponse viewCurrentImage(String taskId,String contextPath);
}
