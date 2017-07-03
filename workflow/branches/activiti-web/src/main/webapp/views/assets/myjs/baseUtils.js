$(function() {
		
	//初始化菜单
	intiMenuList();
	//初始化用户信息
	$("#welUsername").text(getUsername());
});
/**初始化菜单*/
var intiMenuList = function(){
	var htmlData = [];
	var menuHtmlData = [];
	var menuInfo;
	
	menuInfo = new Object();
	menuInfo.url = "deploymentProcess.html";
	menuInfo.name = "部署管理";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "processManager.html";
	menuInfo.name = "流程管理";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "taskManager.html";
	menuInfo.name = "任务管理";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "startProcess.html";
	menuInfo.name = "流程申请";
	htmlData.push(menuInfo);
	
	for(var i=0;i<htmlData.length;i++){
		if(htmlData[i].name == "任务管理"){
			menuHtmlData.push('<li class="active">');
			menuHtmlData.push('<a href="#" class="dropdown-toggle">');
			menuHtmlData.push('<i class="icon-list"></i>');
			menuHtmlData.push('<span class="menu-text">任务管理</span>');
			menuHtmlData.push('<b class="arrow icon-angle-down"></b>');
			menuHtmlData.push('</a>');
			menuHtmlData.push('<ul class="submenu" style="display: block;">');
			
			menuHtmlData.push('<li>');
			menuHtmlData.push('<a href="candidateTaskQuery.html">');
			menuHtmlData.push('<i class="icon-double-angle-right"></i>');
			menuHtmlData.push('待领任务');
			menuHtmlData.push('</a>');
			menuHtmlData.push('</li>');
			
			menuHtmlData.push('<li>');
			menuHtmlData.push('<a href="myTaskQuery.html">');
			menuHtmlData.push('<i class="icon-double-angle-right"></i>');
			menuHtmlData.push('待办任务');
			menuHtmlData.push('</a>');
			menuHtmlData.push('</li>');
			
			menuHtmlData.push('<li>');
			menuHtmlData.push('<a href="myHistoryTaskQuery.html">');
			menuHtmlData.push('<i class="icon-double-angle-right"></i>');
			menuHtmlData.push('我的历史任务');
			menuHtmlData.push('</a>');
			menuHtmlData.push('</li>');
				
			menuHtmlData.push('<li>');
			menuHtmlData.push('<a href="historyProcessQuery.html">');
			menuHtmlData.push('<i class="icon-double-angle-right"></i>');
			menuHtmlData.push('全部历史任务');
			menuHtmlData.push('</a>');
			menuHtmlData.push('</li>');
			
			menuHtmlData.push('</ul>');
			menuHtmlData.push('</li>');
			
		}else{
			menuHtmlData.push('<li class="">');
			menuHtmlData.push('<a href="'+htmlData[i].url+'">');
			menuHtmlData.push('<i class="icon-text-width"></i>');
			menuHtmlData.push('<span class="menu-text">'+htmlData[i].name+'</span>');
			menuHtmlData.push('</a></li>');
		}
		
	}
	$("#menuList").html(menuHtmlData.join(''));
};

var logout = function(){
	localStorage.clear();
	skipPage("login.html");
};
var getUsername = function(){
	return localStorage.getItem("username");
};
var getRoles = function(){
	return localStorage.getItem("rolesCode");
};

/**跳转页面*/
var skipPage = function(url){
	window.location.href=url;
};

/**获取url参数*/
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; // 返回参数值

}
/**比较日期天数*/
function getDateDiff(startDate,endDate)  
{  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);     
    return  dates;    
}
/**未定义转成空**/
var undefinedToEmpty = function(val){
	if(!val){
		return "";
	}else{
		return val;
	}
};
/**毫秒转成日期格式 yyyy-MM-dd HH:mm:ss**/
var  formatDate = function(val,format){
	if(val){
		if(format == "yyyy-MM-dd"){
			var date = new Date(val);
			Y = date.getFullYear() + '-';
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			D = date.getDate() + ' ';
			h = date.getHours() + ':';
			m = date.getMinutes() + ':';
			s = date.getSeconds(); 
			return Y+M+D; 
		}else{
			var date = new Date(val);
			Y = date.getFullYear() + '-';
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			D = date.getDate() + ' ';
			h = date.getHours() <10 ? '0'+date.getHours() : date.getHours() + ':';
			m = date.getMinutes() <10 ? '0'+date.getMinutes() : date.getMinutes() + ':';
			s = date.getSeconds() <10 ? '0'+date.getSeconds() : date.getSeconds(); 
			return Y+M+D+h+m+s; 
		}
		
	}else{
		return undefinedToEmpty(val);
	}
};

/**
 * @params content 内容
 * @params s 自动关闭时间
 * */
var showAlert = function(content,s){
	//判断是否存在div
	if($("#showAlert")&&$("#showAlert").length>0){
		$("#showAlert").children().remove();
	}else{
		$("body").append('<div id="showAlert"></div>');
	}
	//画div
	var htmlData = [];
	htmlData.push('<div id="alertDiv"  class="alert alert-info center gritter-center" style="width: 30%;">');
	htmlData.push('<button type="button" class="close" data-dismiss="alert">');
	htmlData.push('<i class="icon-remove"></i>');
	htmlData.push('</button>');
	htmlData.push('<span id="content_span"></span> <br>');
	htmlData.push('</div>');
	$("#showAlert").html(htmlData.join(''));
	
	//显示div
	$("#showAlert").show(); 
	$("#content_span").html(content); 
	//自动关闭
	if(s){
		setTimeout('$("#showAlert").fadeOut("slow")',s);
	}
};




