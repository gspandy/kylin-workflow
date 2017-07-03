$(function() {
	
	if(getUrlParam("type")&&getUrlParam("type") == "reSubmit"){
		init();
	};

});

var init = function() {
	var json = {
		action : "findHistoricVariableInstance",
		processInstanceId :getUrlParam("processInstanceId"),
		queryType:"all"
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data);
		var list = data.data;
		console.log(data);
		if(data.result){
			for(var i=0;i<list.length;i++){
				if(!list[i].taskId&&list[i].userId == getUsername()){
					$("#leaveType").val(list[i].leaveType);
					$("#startTime").val(list[i].leaveStartTime);
					$("#leaveReason").val(list[i].leaveReason);
					$("#endTime").val(list[i].leaveEndTime);
				}
			}
		}
	});
}


var submits = function() {
	var action = "leaveApply";
	if(getUrlParam("type")){
		action = "completeMyApplyTask";
	}
	var json = {
		action : action,
		taskId : getUrlParam("taskId"),
		username :getUsername,
		leaveType : $("#leaveType").val(),
		startTime : $("#startTime").val(),
		endTime : $("#endTime").val(),
		processInstanceByKey:'checkProcess',
		applyDay:getDateDiff($("#startTime").val(),$("#endTime").val()),
		leaveReason : $("#leaveReason").val()
	}
	$.post("/myActiviti/startTask", json , function(data) {
		data = $.parseJSON(data)
		alert(data.msg);
		if(data.result){
			window.location.href="home.html";
		}
	});
}
