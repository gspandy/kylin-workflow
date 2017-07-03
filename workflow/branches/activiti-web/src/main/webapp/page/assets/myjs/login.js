$(function() {

});

var login = function() {
	localStorage.setItem("username",$("#username").val());
	var json = {
		action : "login",
		username : $("#username").val(),
		password : $("#password").val()
	}
	$.post("/myActiviti/main", json , function(data) {
		data = $.parseJSON(data)
		if(data.result){
			window.location.href="home.html";
		}
	});
}
