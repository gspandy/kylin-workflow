$(function() {
	$.ajaxSetup({
		  async: false
	});
	init();
});

var init = function() {
	var json = {
			action : "queryProcessDefinition"
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		console.log(data);
		var htmlData = [];
		var list = data.data;
		for(var i=0;i<list.length;i++){
			htmlData.push('<tr class="odd">');
			htmlData.push('<td class="center"><label> <input type="checkbox" class="ace"> <span class="lbl"></span> </label></td>');
			//htmlData.push('<td class=" "><a href="#">'+list[i].category+'</a></td>');
			htmlData.push('<td class="center">'+list[i].id+'</td>');
			htmlData.push('<td class="center">'+list[i].deploymentId+'</td>');
			htmlData.push('<td class="center">'+list[i].name+'</td>');
			htmlData.push('<td class="center"><a href="javascript:;" onclick="viewImage(\''+list[i].deploymentId+'\')">'+list[i].diagramResourceName+'</a></td>');
			htmlData.push('<td class="center">'+list[i].resourceName+'</td>');
			htmlData.push('<td class="center"><div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">');
			htmlData.push('<a class="blue" href="#"> <i class="icon-zoom-in bigger-130"></i> </a>'); 
			htmlData.push('<a class="red" href="javascript:;" onclick="deleteDeploymentProcessDefinition(\''+list[i].deploymentId+'\')"> <i class="icon-trash bigger-130"></i> </a></div></td>');
			htmlData.push('</tr>');
		}
		$("#myTaskList").html(htmlData.join(''));
	});
	
	
}

var viewImage = function(deploymentId){
	var json = {
			action : "viewImage",
			deploymentId:deploymentId
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		console.log(data);
		skipPage("../"+data.picUrl)
	})
}
var deleteDeploymentProcessDefinition = function(deploymentId){
	var json = {
			action : "deleteDeploymentProcessDefinition",
			deploymentId:deploymentId
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		console.log(data);
		alert(data.msg);
		init();
	})
}












