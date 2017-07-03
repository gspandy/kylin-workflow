$(function() {
	initApplyInfo();
	initHisTaskInfo();
});
//业务信息
var initApplyInfo = function() {
	var jsonObject = new Object();
	jsonObject.processInstanceId = getUrlParam("processInstanceId");
	jsonObject = JSON.stringify(jsonObject);
	$.post("/myActiviti/hisProcessVariablesQuery", "jsonParams="+ jsonObject,
			function(data) {
		console.log(data);
		var htmlData = [];
		if(data){
			$.each(data,function(key,value) {
				//业务数据
				if(key.indexOf("bns_")>=0){
					htmlData.push('<div class="col-md-3">');
					htmlData.push('<strong>'+key+'：</strong><span>'+value+'</span>');
					htmlData.push('</div>');
				}
			});
		}
		$("#bnsInfo").html(htmlData.join(''));
		
	});

};
//审核信息
var initHisTaskInfo = function() {
	var jsonObject = new Object();
	jsonObject.processInstanceId = getUrlParam("processInstanceId");
	jsonObject = JSON.stringify(jsonObject);
	$.post("/myActiviti/historyProcessTaskQuery", "jsonParams=" + jsonObject,
			function(data) {
				data = $.parseJSON(data);
				console.log(data);
				var htmlData = [];
				var dataList = data.dataList;
				if(data.result&&dataList.length>0){
					for(var i=0;i<dataList.length;i++){
						var taskVariables = dataList[i].taskVariables;
						htmlData.push('<tr class="odd">');
						htmlData.push('<td class="center">'+dataList[i].taskId+'</td>');
						htmlData.push('<td class="center">'+undefinedToEmpty(dataList[i].assignee)+'</td>');
						htmlData.push('<td class="center">'+dataList[i].taskName+'</td>');
						htmlData.push('<td class="center">'+getCheckName(undefinedToEmpty(taskVariables.task_checkStatusId))+'</td>');
						htmlData.push('<td class="center">'+undefinedToEmpty(taskVariables.task_remark)+'</td>');
						htmlData.push('<td class="center">'+formatDate(dataList[i].startTime)+'</td>');
						htmlData.push('<td class="center">'+formatDate(dataList[i].endTime)+'</td>');
						htmlData.push('</tr>');
					}
					$("#dataInfoList").html(htmlData.join(''));
				}else{
					$("#dataInfoList").html('<tr class="odd"><td colspan="9" class="center">无查询数据</td></tr>');
				}

			});

};

var getCheckName = function(val){
	var checkName = val;
	switch (val) {
	case "1":
		checkName = "通过";
		break;
	case "0":
		checkName = "不通过";
		break;

	default:
		break;
	}
	return checkName;
};



