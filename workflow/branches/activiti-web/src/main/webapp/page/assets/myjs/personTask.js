$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	var json = {
			action:"queryMyTask",
			username:getUsername(),
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		console.log(data);
		var htmlData = [];
		var list = data.data;
		for(var i=0;i<list.length;i++){
			htmlData.push('<tr class="odd">');
			htmlData.push('<td class="center">'+list[i].id+'</td>');
			htmlData.push('<td class="center">'+list[i].name+'</td>');
			htmlData.push('<td class="center">'+list[i].createTime+'</td>');
			htmlData.push('<td class="center">'+list[i].assignee+'</td>');
			htmlData.push('<td class="center">'+list[i].processInstanceId+'</td>');
			htmlData.push('<td class="center">'+list[i].executionId+'</td>');
			htmlData.push('<td class="center">'+list[i].processDefinitionId+'</td>');
			htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
			htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'leaveApply.html?type=reSubmit&processInstanceId='+list[i].processInstanceId+'&taskId='+list[i].id+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>'); 
			htmlData.push('</tr>');
		}
		$("#dataInfoList").html(htmlData.join(''));
	});
	
}













