$(function() {
	initApplyInfo();
	initHistoryCheckInfo();
});

var initApplyInfo = function() {
	var json = {
			action:"findHistoricVariableInstance",
			processInstanceId:getUrlParam("processInstanceId"),
			queryType : "all"
	};
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data);
		console.log(data);
		var list = data.data;
		var dataInfo=null;
		for(var i=0;i<list.length;i++){
			//申请人类型
			if(list[i].type == "1"){
				dataInfo = list[i];
			}
		}
		//申请信息
		$("#span_username").text(dataInfo.userId);
		$("#span_leaveType").text(getLeaveTypeName(dataInfo.leaveType));
		$("#span_startTime").text(dataInfo.leaveStartTime);
		$("#span_endTime").text(dataInfo.leaveEndTime);
		$("#span_leaveReason").text(dataInfo.leaveReason);
	});
	
};
var initHistoryCheckInfo = function() {
	var json = {
			action:"findHistoryProcessStep",
			processInstanceId:getUrlParam("processInstanceId"),
	};
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data);
		if(data && data.result){
			$("#historyCheckInfo").show();
		}
		console.log(data);
		var htmlData = [];
		var list = data.data;
		for(var i=0;i<list.length;i++){
			if(list[i].type == "userTask"){
				var checkInfo = list[i].checkInfo;
				htmlData.push('<tr class="">');
				htmlData.push('<td class="center">'+list[i].taskId+'</td>');
				htmlData.push('<td class="center">'+list[i].pid+'</td>');
				if(list[i].assignee){
					htmlData.push('<td class="center">'+list[i].assignee+'</td>');
				}else{
					var candidates = list[i].candidates;
					htmlData.push('<td class="center">'+candidates.substring(0,candidates.length-1)+'</td>');
				}
				
				if(!checkInfo && !list[i].candidates){
					htmlData.push('<td class="center">申请</td>');
				}else{
					htmlData.push('<td class="center">审核</td>');
				}
				
				if(checkInfo){
					htmlData.push('<td class="center">'+checkInfo.statusName+'</td>');
					htmlData.push('<td class="center">'+checkInfo.remark+'</td>');
				}else{
					htmlData.push('<td class="center"></td>');
					htmlData.push('<td class="center"></td>');
				}
				htmlData.push('<td class="center">'+list[i].startTime+'</td>');
				htmlData.push('<td class="center">'+list[i].endTime+'</td>');
				htmlData.push('</tr>');
			}
//			else if(list[i].type == "exclusiveGateway" && list[i].gatewayStatus){
//				htmlData.push('<tr class="">');
//				htmlData.push('<td class="center"></td>');
//				htmlData.push('<td class="center">'+list[i].pid+'</td>');
//				htmlData.push('<td class="center">网关</td>');
//				htmlData.push('<td class="center">网关审核</td>');
//				if(list[i].gatewayStatus==9){
//					htmlData.push('<td class="center">不通过</td>');
//					htmlData.push('<td class="center">'+list[i].gatewayRemark+'</td>');
//				}else{
//					htmlData.push('<td class="center"></td>');
//					htmlData.push('<td class="center"></td>');
//				}
//				htmlData.push('<td class="center">'+list[i].startTime+'</td>');
//				htmlData.push('<td class="center">'+list[i].endTime+'</td>');
//				htmlData.push('</tr>');
//			}
			
		}
		$("#dataInfoList").html(htmlData.join(''));
	});
	
};


var submits = function() {
	var json = {
		action : "completeMyTask",
		username :getUsername(),
		statusId :$("#statusId").val(),
		statusName :$("#statusId  option:selected").text(),
		remark:$("#remark").val(),
		taskId:getUrlParam("taskId")
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		alert(data.msg);
		if(data.result){
			skipPage("myTask.html");
		}
	});
}

var getLeaveTypeName = function(leaveType){
	
	var leaveTypeName;
	switch (leaveType) {
	case "gx":
		leaveTypeName = "公休";
		break;
	case "tx":
		leaveTypeName = "调休";
		break;
	case "nj":
		leaveTypeName = "年假";
		break;

	default:
		leaveTypeName = leaveType;
		break;
	}
	return leaveTypeName;
}







