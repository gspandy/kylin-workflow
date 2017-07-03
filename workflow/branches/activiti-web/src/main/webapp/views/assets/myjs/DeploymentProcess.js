//$(function() {
//	initApplyInfo();
//	initHisTaskInfo();
//});

var fileSubmit = function() {
	//deploymentName
	$.ajaxFileUpload({
        url:"/activiti-web/deploymentProcDefByBytes",
        type:"POST",
        secureuri : false,
        fileElementId : 'id-input-file-2',
        data:{deploymentName:$("#deploymentName").val()},
        dataType : 'json',
        success:function(data){
        	showAlert(data.retmsg,2000);
        	console.info("success:"+data);
        },
        error:function(data){
        	console.info(data.responseText);
        	var responseText = data.responseText;
        	if(responseText.indexOf("p0")!=-1 && responseText.indexOf("成功")!=-1){
        		showAlert("成功",2000);
        		skipPage("processManager.html");
        	};
        }
        
    });
};