$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
	
});

var init = function() {
	var json = {
			processDefinitionName : $("#processDefinitionName").val(),
			processDefinitionId : $("#processDefinitionId").val(),
			processDefinitionKey : $("#processDefinitionKey").val(),
	};
	$.post("/activiti-web/deploymentProcDefQuery","businessVariables="+ JSON.stringify(json) , function(data) {
		var htmlData = [];
		var list = data.data.dataList;
		if(data.data && list){
			for(var i=0;i<list.length;i++){
				htmlData.push('<tr class="odd">');
				htmlData.push('<td class="center">'+list[i].id+'</td>');
				htmlData.push('<td class="center">'+list[i].deploymentId+'</td>');
				htmlData.push('<td class="center">'+list[i].name+'</td>');
				htmlData.push('<td class="center"><a href="javascript:;" onclick="viewImage(\''+list[i].deploymentId+'\')">'+list[i].diagramResourceName+'</a></td>');
				htmlData.push('<td class="center">'+list[i].resourceName+'</td>');
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="red" id="bootbox-confirm" href="javascript:;" onclick="conDelete(\''+list[i].deploymentId+'\')"> <i class="icon-trash bigger-130"></i> </a></div></td>');
				htmlData.push('</tr>');
			}
			$("#deploymentList").html(htmlData.join(''));
		}else{
			htmlData.push('<tr><td class="center" colspan="6">无符合条件数据</td></tr>');
			$("#deploymentList").html(htmlData.join(''));
		}

	});
	
	
};

var viewImage = function(deploymentId){
	var json = {
			deploymentId:deploymentId
	};
	$.post("/activiti-web/imageViews", json , function(data) {
		var url = "http://localhost:8080/activiti-web/";
		skipPage(url+data.data.imageUrl);
		showImg();
	});
};

var conDelete = function(deploymentId){
	bootbox.confirm("是否要删除...", function(result) {
	if(result) {
		deploymentProcDefDelete(deploymentId);
	}
});
};
var deploymentProcDefDelete = function(deploymentId){
	var json = {
			deploymentId:deploymentId
	};
	$.post("/activiti-web/deploymentProcDefDelete", json , function(data) {
		showAlert(data.retmsg,3000);
		init();
	});
};












