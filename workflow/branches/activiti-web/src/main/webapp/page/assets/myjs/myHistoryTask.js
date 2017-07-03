$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	var json;
	json = {
			action:"findHistoricProcess",
			username:getUsername()
	};
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data);
		console.log(data);
		var htmlData = [];
		var list = data.data;
		for(var i=0;i<list.length;i++){
			htmlData.push('<tr class="odd">');
			htmlData.push('<td class="center">'+(i+1)+'</td>');
			htmlData.push('<td class="center">'+list[i].userId+'</td>');
			htmlData.push('<td class="center">'+list[i].processInstanceId+'</td>');
			htmlData.push('<td class="center">'+list[i].name+'</td>');
			htmlData.push('<td class="center">'+list[i].startTime+'</td>');
			htmlData.push('<td class="center">'+list[i].endTime+'</td>');
			if(!list[i].endTime){
				htmlData.push('<td class="center">执行中</td>');
			}else{
				htmlData.push('<td class="center">已完成</td>');
			}
			
			htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
			htmlData.push('<a class="blue" href="javascript:;" onclick="skipPage(\'historyTaskDetail.html?processInstanceId='+list[i].processInstanceId+'\')"> <i class="icon-zoom-in bigger-130"></i> </a>'); 
			htmlData.push('</tr>');
		}
		$("#dataInfoList").html(htmlData.join(''));
	});
	
}













