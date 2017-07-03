$(function() {
	 $("body").keydown(function() {
         if (event.keyCode == "13") {//keyCode=13是回车键
        	 login();
         }
     });
});

var login = function() {
	var json = {
		username : $("#username").val(),
		password : $("#password").val(),
		appCode : "1547193846013296"
	};
	$.post("/activiti-web/login", json , function(data) {
		if(data.isSuccess){
			localStorage.setItem("username",$("#username").val());
			localStorage.setItem("token",data.data.token);
			
			//存入角色
			var dataList = data.data.dataList;
			var rolesCode=[];
			for(var i=0; dataList && i<dataList.length;i++){
				rolesCode.push(dataList[i].rolesCode);
			};
			localStorage.setItem("rolesCode",rolesCode.join(','));
			
			window.location.href="myTaskQuery.html";
		}else{
			alert(data.retmsg);
		}
	});
};
