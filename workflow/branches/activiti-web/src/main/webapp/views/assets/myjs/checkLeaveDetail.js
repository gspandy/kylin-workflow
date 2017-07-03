$(function() {
	initInfo();
	initHistoryInfo();
});

var initInfo = function() {
	var json = {
		action : "findTaskVariables",
		username :getUsername,
		taskId :getUrlParam("taskId")
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		if(data.result){
			$("#span_username").text(data.data.username);
			$("#span_leaveType").text(getLeaveTypeName(data.data.leaveType));
			$("#span_startTime").text(data.data.leaveStartTime);
			$("#span_endTime").text(data.data.leaveEndTime);
			$("#span_leaveReason").text(data.data.leaveReason);
		}else{
			alert(data.msg);
		}
	});
}

var initHistoryInfo = function() {
	var json = {
			action:"findHistoricVariableInstance",
			processInstanceId:getUrlParam("processInstanceId"),
			queryType:"all"
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		if(data.data && data.data.length>0 && data.result){
			$("#historyCheckInfo").show();
		}
		console.log(data);
		var htmlData = [];
		var list = data.data;
		for(var i=0;i<list.length;i++){
			if(list[i].type != "1"){
				htmlData.push('<tr class="odd">');
				htmlData.push('<td class="center">'+(i+1)+'</td>');
				htmlData.push('<td class="center">'+list[i]. checkUsername+'</td>');
				htmlData.push('<td class="center">'+list[i].statusName+'</td>');
				htmlData.push('<td class="center">'+list[i].remark+'</td>');
				htmlData.push('<td class="center">'+list[i].createTime+'</td>');
				htmlData.push('</tr>');
			}
		}
		$("#dataInfoList").html(htmlData.join(''));
	});
	
}


var submits = function() {
	var json = {
		action : "completeMyTask",
		username :getUsername(),
		statusId :$("#statusId").val(),
		statusName :$("#statusId  option:selected").text(),
		remark:$("#remark").val(),
		taskId:getUrlParam("taskId")
	}
	$.post("/myActiviti/submitMyPersonTask", json , function(data) {
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







