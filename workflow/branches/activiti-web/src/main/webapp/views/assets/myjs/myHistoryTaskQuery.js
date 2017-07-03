$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	var variableParams = {
			orderId:$("#orderId").val(),
			lk_applyName:$("#applyName").val(),
			usertask:$("#usertask").val(),
			statusId:$("#statusId").val(),
	};
	var json = {
			userId:getUsername(),
			variableParams:JSON.stringify(variableParams)
	};
	$.post("/activiti-web/myHisTaskQuery", json , function(data) {
		var htmlData = [];
		if(data.isSuccess && data.data){
			var dataList = data.data.dataList;
			for(var i=0;i<dataList.length;i++){
				htmlData.push('<tr class="odd">');
				htmlData.push('<td class="center">'+dataList[i].processVariables.orderId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].taskName+'</td>');
				htmlData.push('<td class="center">'+dataList[i].taskId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].processVariables.applyName+'</td>');
				htmlData.push('<td class="center">'+undefinedToEmpty(dataList[i].taskLocalVariables.statusId)+'</td>');
				htmlData.push('<td class="center">'+undefinedToEmpty(dataList[i].taskLocalVariables.remark)+'</td>');
				htmlData.push('<td class="center">'+dataList[i].createTime+'</td>');
				htmlData.push('<td class="center">'+dataList[i].endTime+'</td>');
				
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'taskInfoDetail.html?flag=isHis&processInstanceId='+dataList[i].processInstanceId+'&taskId='+dataList[i].taskId+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>');
				htmlData.push('</tr>');
			}
			$("#dataInfoList").html(htmlData.join(''));
		}else{
			$("#dataInfoList").html('<tr class="odd"><td colspan="10" class="center">无查询数据</td></tr>');
		}
		
	});
};

var undefinedToEmpty = function(val){
	if(!val){
		return "";
	}else{
		return val;
	}
};















