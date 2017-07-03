$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	var json = {
			"username":getUsername()
	};
	$.post("/activiti-web/assigneeTaskQuery", json , function(data) {
		var htmlData = [];
		var dataList = data.data.dataList;
		if(dataList&&dataList.length>0){
			for(var i=0;i<dataList.length;i++){
				htmlData.push('<tr class="odd">');
				htmlData.push('<td class="center">'+dataList[i].taskId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].name+'</td>');
				htmlData.push('<td class="center">'+dataList[i].processVariables.orderId+'</td>');
				htmlData.push('<td class="center">'+dataList[i].processVariables.applyName+'</td>');
				htmlData.push('<td class="center">'+dataList[i].createTime+'</td>');
				
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="blue" target="view_window" href="/activiti-web/views/viewCurrentImage.html?taskId='+dataList[i].taskId+'" > 查看当前流程图 </a></div></td>'); 
				
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'taskInfoQuery.html?processInstanceId='+dataList[i].processInstanceId+'&taskId='+dataList[i].taskId+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>');
				htmlData.push('</tr>');
			}
			$("#dataInfoList").html(htmlData.join(''));
		}else{
			$("#dataInfoList").html('<tr class="odd"><td colspan="9" class="center">无查询数据</td></tr>');
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















