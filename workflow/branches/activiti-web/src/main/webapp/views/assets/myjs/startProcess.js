$(function() {
	initOrderId();
});
//申请信息
var startProcess = function() {
	var jsonObject = new Object();
	$(".keyval").each(function(){
		var inputs = $(this).find("input");
		var key = $(inputs).first().val();
		var val = $(inputs).last().val();
		var id = $(inputs).attr("id");
		if( key && val){
			if(id != "processInstanceKey"){
				jsonObject[key] = val;
			}
			
		}
	});
	jsonObject = JSON.stringify(jsonObject);
	
	var json = {
			processInstanceKey:$("#processInstanceKey").val(),
			businessVariables:jsonObject
	};
	
	$.post("/activiti-web/startupProcessInstance", json,function(data) {
		showAlert("启动："+data.retmsg,2000);
	});

};

var initOrderId = function(){
	$("#orderId").val(generateMixed(18)); 
};


var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*35);
         res += chars[id];
     }
     return res;
}


