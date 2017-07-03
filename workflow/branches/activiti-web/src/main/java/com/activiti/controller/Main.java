package com.activiti.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.activiti.engine.repository.ProcessDefinition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.activiti.pojo.AccountInfo;
import com.activiti.pojo.ActDto;
import com.activiti.service.TaskService;
import com.rongcapital.api.pojo.DubBaseRequestJson;
import com.rongcapital.api.pojo.DubBaseResponse;
import com.rongcapital.api.service.AuthAccountService;
import com.rongcapital.api.service.WebDubBaseService;

@Controller
public class Main {
	
	@Autowired
	private TaskService taskService;
	@Autowired
	private WebDubBaseService webDubBaseService;
	@Autowired
	private AuthAccountService authAccountService;
	
	@ResponseBody
	@RequestMapping("/login")
	public DubBaseResponse login(AccountInfo accountInfo) {
		
		Map<String, Object> loginMap = new HashMap<String, Object>();
		loginMap.put("accountName", accountInfo.getUsername());
		loginMap.put("accountPw", accountInfo.getPassword());
		loginMap.put("appCode", accountInfo.getAppCode());
		DubBaseResponse authAccount = authAccountService.authAccount(loginMap);
		
		//登陆失败
		if(!authAccount.getIsSuccess()){
			return authAccount;
		}
		
		//获取角色信息
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> rolesMap = new HashMap<String, Object>();
		rolesMap.put("token", authAccount.getData().get("token"));
		rolesMap.put("interfaceName", "rolesInfoQueryByAccount");
		dubBaseRequestJson.setMap(rolesMap);;
		DubBaseResponse dubBaseResponse = webDubBaseService.permissionApi(dubBaseRequestJson);
		
		Map<String,Object> map = dubBaseResponse.getData();
		if(map == null){
			map = new HashMap<String, Object>();
		}
		map.put("token", authAccount.getData().get("token"));
		dubBaseResponse.setData(map);
		return dubBaseResponse;
	}
	
	/*---------流程定义---------*/
	
	@ResponseBody
	@RequestMapping("/deploymentProcDefByBytes")
	public DubBaseResponse deploymentProcDefByBytes(ActDto actDto) {
		return taskService.deploymentProcDefByBytes(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/deploymentProcDefQuery")
	public DubBaseResponse deploymentProcDefQuery(ActDto actDto) {
		return taskService.deploymentProcDefQuery(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/deploymentProcDefDelete")
	public DubBaseResponse deploymentProcDefDelete(String deploymentId) {
		return taskService.deploymentProcDefDelete(deploymentId);
	}
	
	@ResponseBody
	@RequestMapping("/imageViews")
	public DubBaseResponse imageViews(String deploymentId) {
		return taskService.imageViews(deploymentId);
	}
	
	/*---------流程定义---------*/
	
	
	/*---------任务办理---------*/
	
	@ResponseBody
	@RequestMapping("/startupProcessInstance")
	public DubBaseResponse startupProcessInstance(ActDto actDto) {
		return taskService.startupProcessInstance(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/assigneeTaskQuery")
	public DubBaseResponse assigneeTaskQuery(AccountInfo accountInfo) {
		return taskService.assigneeTaskQuery(accountInfo.getUsername());
	}
	
	@ResponseBody
	@RequestMapping("/taskProcessVariablesQuery")
	public DubBaseResponse taskProcessVariablesQuery(ActDto actDto) {
		return taskService.taskProcessVariablesQuery(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/hisTaskQuery")
	public DubBaseResponse hisTaskQuery(ActDto actDto) {
		return taskService.hisTaskQuery(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/myHisTaskQuery")
	public DubBaseResponse myHisTaskQuery(ActDto actDto) {
		return taskService.myHisTaskQuery(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/historyVariableQuery")
	public DubBaseResponse historyVariableQuery(ActDto actDto) {
		return taskService.historyVariableQuery(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/submitTask")
	public DubBaseResponse submitTask(ActDto actDto) {
		return taskService.submitTask(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/jumpTask")
	public DubBaseResponse jumpTask(ActDto actDto) {
		return taskService.jumpTask(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/candidateTaskQuery")
	public DubBaseResponse candidateTaskQuery(ActDto actDto) {
		return taskService.candidateTaskQuery(actDto);
	}
	
	@ResponseBody
	@RequestMapping("/receiveTask")
	public DubBaseResponse receiveTask(ActDto actDto) {
		return taskService.receiveTask(actDto);
	}
	
	/*---------任务办理---------*/


	/** 当前任务流程坐标 */
	@RequestMapping("/viewCurrentImage")
	@ResponseBody
	public DubBaseResponse viewCurrentImage(HttpServletRequest request,String taskId) {
		String realPath = request.getSession().getServletContext().getRealPath("");
		return taskService.viewCurrentImage(taskId,realPath);
	}
}
