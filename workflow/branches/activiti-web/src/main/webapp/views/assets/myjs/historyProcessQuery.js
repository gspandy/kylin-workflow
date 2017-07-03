$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	
	var json = {
			orderId:$("#orderId").val(),
			lk_applyName:$("#applyName").val()
	};
	$.post("/activiti-web/historyProcessInstanceQuery", "variableParams="+ JSON.stringify(json), function(data) {
		var htmlData = [];
		if(data.isSuccess && data.data){
			var dataList = data.data.dataList;
			for(var i=0;i<dataList.length;i++){
				htmlData.push('<tr class="odd">');
				htmlData.push('<td class="center">'+dataList[i].processVariables.orderId+'</td>');
				htmlData.push('<td class="center">'+undefinedToEmpty(dataList[i].processInstanceName)+'</td>');
				htmlData.push('<td class="center">'+dataList[i].processVariables.applyName+'</td>');
				htmlData.push('<td class="center">'+dataList[i].startTime+'</td>');
				htmlData.push('<td class="center">'+dataList[i].endTime+'</td>');
				if(!dataList[i].endTime){
					htmlData.push('<td class="center">执行中</td>');
				}else{
					htmlData.push('<td class="center">已完成</td>');
				}
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'taskInfoDetail.html?flag=isHis&processInstanceId='+dataList[i].processInstanceId+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>'); 
				htmlData.push('</div></td></tr>');
			}
			$("#dataInfoList").html(htmlData.join(''));
		}else{
			$("#dataInfoList").html('<tr class="odd"><td colspan="9" class="center">无查询数据</td></tr>');
		}
		
	});
};

var getProCheckName = function(vals){
	var data = [];
	var arrays = vals.split(",");
	for(var i=0;i<arrays.length;i++){
		var taskArrays = arrays[i].split("_");
		data.push(getTaskName(taskArrays[0])+getCheckName(taskArrays[1]));
	}
	return data.join('，');
};


var getTaskName = function(val){
	var taskName = val;
	switch (val) {
	case "firstCheck":
		taskName = "初审";
		break;
	case "lastCheck":
		taskName = "终审一";
		break;
	case "assistCheck":
		taskName = "终审二";
		break;
	default:
		break;
	}
	return taskName;
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
	case "8":
		checkName = "待审";
		break;

	default:
		break;
	}
	return checkName;
};









