$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	

	var json = {
			roles:getRoles()
	};
	$.post("/activiti-web/candidateTaskQuery", json , function(data) {
		var htmlData = [];
		var dataList = data.data.dataList;
		if(data.isSuccess&&dataList&&dataList.length>0){
			for(var i=0;i<dataList.length;i++){
				htmlData.push('<tr class="odd">');
				htmlData.push('<td class="center">'+dataList[i].processVariables.orderId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].processInstanceId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].taskId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].name+'</td>');
				htmlData.push('<td class="center">'+dataList[i].processVariables.applyName+'</td>');
				htmlData.push('<td class="center">'+dataList[i].createTime+'</td>');
				
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'taskInfoDetail.html?processInstanceId='+dataList[i].processInstanceId+'&taskId='+dataList[i].taskId+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>'); 
				htmlData.push('&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-minier btn-success" value="领取" onclick="receiveTask(\''+dataList[i].taskId+'\')"/></td>'); 
				htmlData.push('</tr>');
			}
			$("#dataInfoList").html(htmlData.join(''));
		}else{
			$("#dataInfoList").html('<tr class="odd"><td colspan="9" class="center">无查询数据</td></tr>');
		}
		
	});
};


var receiveTask = function(taskId){
	var json = {
			taskId:	taskId,
			userId:	getUsername()
	};
	$.post("/activiti-web/receiveTask", json , function(data) {
		if(data.isSuccess){
			showAlert("领取成功",2000);
			init();
		}else{
			showAlert("领取失败",3000);
		}
		
	});
};













