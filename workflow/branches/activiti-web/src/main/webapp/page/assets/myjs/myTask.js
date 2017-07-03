$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	var json = {
			action:"queryMyTask",
			username:getUsername()
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		console.log(data);
		var htmlData = [];
		var list = data.data;
		if(list.length>0){
			for(var i=0;i<list.length;i++){
				htmlData.push('<tr class="odd">');
				//htmlData.push('<td class=" "><a href="#">'+list[i].category+'</a></td>');
				htmlData.push('<td class="center">'+list[i].id+'</td>');
				htmlData.push('<td class="center">'+list[i].name+'</td>');
				htmlData.push('<td class="center">'+list[i].processVariables.username+'</td>');
				htmlData.push('<td class="center">'+list[i].processVariables.leaveReason+'</td>');
				htmlData.push('<td class="center">'+list[i].createTime+'</td>');
				htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
				htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'checkLeaveDetail.html?processInstanceId='+list[i].processInstanceId+'&taskId='+list[i].id+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>'); 
				htmlData.push('</tr>');
			}
			
		}else{
			htmlData.push('<tr class="odd"><td class="center" colspan="6">暂无任务</td></tr>');
		}
		$("#myTaskList").html(htmlData.join(''));
	});
	
}













