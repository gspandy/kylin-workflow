package com.activiti.service.impl;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.activiti.pojo.ActDto;
import com.activiti.service.TaskService;
import com.activiti.utils.ActCommonUtils;
import com.rongcapital.api.pojo.DubBaseRequestJson;
import com.rongcapital.api.pojo.DubBaseResponse;
import com.rongcapital.api.service.WfDubBaseService;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private WfDubBaseService wfDubBaseService;
	
	@Override
	public DubBaseResponse deploymentProcDefByBytes(ActDto actDto) {

		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "deploymentProcDefByBytes");
		
		MultipartFile file =actDto.getMultipartFile();
	 	InputStream inputStream = null;
		try {
			inputStream = file.getInputStream();
		} catch (IOException e) {
			e.printStackTrace();
		}
		map.put("sourceBytes", ActCommonUtils.stream2byte(inputStream));
		
		JSONObject json = new JSONObject();
		json.put("deploymentName", actDto.getDeploymentName());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	
	}
	@Override
	public DubBaseResponse deploymentProcDefQuery(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("interfaceName", "deploymentProcDefQuery");
		map.put("businessParams", actDto.getBusinessVariables());
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
		
	}
	@Override
	public DubBaseResponse deploymentProcDefDelete(String deploymentId) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("interfaceName", "deploymentProcDefDelete");
		JSONObject json = new JSONObject();
		json.put("deploymentId", deploymentId);
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
		
	}
	@Override
	public DubBaseResponse imageViews(String deploymentId) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("interfaceName", "imageViews");
		JSONObject json = new JSONObject();
		json.put("deploymentId", deploymentId);
		map.put("businessParams", json);
		dubBaseRequestJson.setMap(map);
		DubBaseResponse dubBaseResponse = wfDubBaseService.workflowApi((dubBaseRequestJson));
		byte[] bytes = (byte[]) dubBaseResponse.getData().get("imageBytes");
		String imageName = dubBaseResponse.getData().get("imageName").toString();
		FileOutputStream fos = null;
		String imageUrl = "";
		try {
			imageUrl = "D:/java-tool/apache-tomcat-7.0.42/webapps/activiti-web/"+imageName;
			fos = new FileOutputStream(imageUrl);
			fos.write(bytes, 0, bytes.length);
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
			try {
				fos.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		dubBaseResponse.getData().put("imageUrl", imageName);
		return dubBaseResponse;
		
	}

	@Override
	public DubBaseResponse startupProcessInstance(ActDto actDto) {
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "startupProcessInstance");
		JSONObject json = new JSONObject();
		json.put("processInstanceKey", actDto.getProcessInstanceKey());
		json.put("businessVariables", actDto.getBusinessVariables());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	}
	@Override
	public DubBaseResponse assigneeTaskQuery(String assignee) {
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject json = new JSONObject();
		
		map.put("interfaceName", "assigneeTaskQuery");
		json.put("assignee", assignee);
		
		map.put("businessParams", json);
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	}

	@Override
	public DubBaseResponse taskProcessVariablesQuery(ActDto actDto) {

		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject json = new JSONObject();
		
		map.put("interfaceName", "taskProcessVariablesQuery");
		json.put("taskId", actDto.getTaskId());
		
		map.put("businessParams", json);
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	
	}

	@Override
	public DubBaseResponse hisTaskQuery(ActDto actDto) {

		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "hisTaskQuery");
		JSONObject json = new JSONObject();
		json.put("processInstanceId", actDto.getProcessInstanceId());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	
	}
	@Override
	public DubBaseResponse myHisTaskQuery(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "myHisTaskQuery");
		JSONObject json = new JSONObject();
		json.put("assignee", actDto.getUserId());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
		
	}
	
	@Override
	public DubBaseResponse historyVariableQuery(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "historyVariableQuery");
		JSONObject json = new JSONObject();
		json.put("processInstanceId", actDto.getProcessInstanceId());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
		
	}
	
	@Override
	public DubBaseResponse submitTask(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "submitTask");
		JSONObject json = new JSONObject();
		json.put("taskId", actDto.getTaskId());
		json.put("variableParams", actDto.getVariableParams());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	}
	
	@Override
	public DubBaseResponse jumpTask(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		JSONObject json = new JSONObject();
		map.put("interfaceName", "jumpTask");
		json.put("taskId", actDto.getTaskId());
		json.put("usertask", actDto.getUsertask());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	}
	
	@Override
	public DubBaseResponse candidateTaskQuery(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "candidateTaskQuery");
		JSONObject json = new JSONObject();
		json.put("roles", actDto.getRoles());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	}
	
	@Override
	public DubBaseResponse receiveTask(ActDto actDto) {
		
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("interfaceName", "receiveTask");
		JSONObject json = new JSONObject();
		json.put("taskId", actDto.getTaskId());
		json.put("userId", actDto.getUserId());
		map.put("businessParams", json);
		
		dubBaseRequestJson.setMap(map);
		
		return wfDubBaseService.workflowApi((dubBaseRequestJson));
	}
	
	
	@Override
	public DubBaseResponse viewCurrentImage(String taskId,String contextPath) {
		DubBaseRequestJson dubBaseRequestJson = new DubBaseRequestJson();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("interfaceName", "viewCurrentImage");
		JSONObject json = new JSONObject();
		json.put("taskId", taskId);
		map.put("businessParams", json);

		dubBaseRequestJson.setMap(map);
		DubBaseResponse dubBaseResponse = wfDubBaseService.workflowApi((dubBaseRequestJson));
		Map<String, Object> data = dubBaseResponse.getData();
		try {
			byte [] sourceBytes = (byte []) data.get("img");
			InputStream in = new ByteArrayInputStream(sourceBytes); 
			String filePath=contextPath+"/image/"+taskId+".png";
			File file = new File(filePath);
			if(!file.exists()) file.createNewFile();
			OutputStream outputStream = new FileOutputStream(file);
			int byteCount = 0;

			byte[] bytes = new byte[1024];

			while ((byteCount = in.read(bytes)) != -1) {
				outputStream.write(bytes, 0, byteCount);
			}
			in.close();
			outputStream.close();
			data.remove("img");
			data.put("imgUrl", "/activiti-web/image/"+taskId+".png");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dubBaseResponse;
	}

}
