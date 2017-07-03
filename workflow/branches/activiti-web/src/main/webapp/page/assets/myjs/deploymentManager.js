$(function() {
});

var submits = function() {
	var loadProcessSource = $("#processSource").val()+".bpmn";
	var loadProcessSourcePic = $("#processSource").val()+".png";
	var json = {
		action : "deploymentProcessDefinition",
		deploymentName :$("#deploymentName").val(),
		loadProcessSource :loadProcessSource,
		loadProcessSourcePic :loadProcessSourcePic
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		alert(data.msg);
		if(data.result){
			skipPage("processDefinition.html");
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







