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
	menuInfo.url = "home.html";
	menuInfo.name = "首页";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "processDefinition.html";
	menuInfo.name = "流程管理";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "deploymentManager.html";
	menuInfo.name = "部署管理";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "taskManager.html";
	menuInfo.name = "任务管理";
	htmlData.push(menuInfo);
	
	menuInfo = new Object();
	menuInfo.url = "leaveApply.html";
	menuInfo.name = "请假申请";
	htmlData.push(menuInfo);
	
	/*menuInfo = new Object();
	menuInfo.url = "leaveApply1.html";
	menuInfo.name = "请假申请1";
	htmlData.push(menuInfo);*/
	for(var i=0;i<htmlData.length;i++){
		if(htmlData[i].name == "任务管理"){
			menuHtmlData.push('<li class="active">');
			menuHtmlData.push('<a href="#" class="dropdown-toggle">');
			menuHtmlData.push('<i class="icon-list"></i>');
			menuHtmlData.push('<span class="menu-text">任务管理</span>');
			menuHtmlData.push('<b class="arrow icon-angle-down"></b>');
			menuHtmlData.push('</a>');
			menuHtmlData.push('<ul class="submenu" style="display: block;">');
			if(getUsername() == "张经理" || getUsername() == "李经理" ||getUsername() == "王老板"){
				menuHtmlData.push('<li>');
				menuHtmlData.push('<a href="myTask.html">');
				menuHtmlData.push('<i class="icon-double-angle-right"></i>');
				menuHtmlData.push('我的任务');
				menuHtmlData.push('</a>');
				menuHtmlData.push('</li>');
			}
			if(getUsername() != "张经理" && getUsername() != "李经理" && getUsername() != "王老板"){
				menuHtmlData.push('<li>');
				menuHtmlData.push('<a href="personTask.html">');
				menuHtmlData.push('<i class="icon-double-angle-right"></i>');
				menuHtmlData.push('个人任务');
				menuHtmlData.push('</a>');
				menuHtmlData.push('</li>');
			}
			
			menuHtmlData.push('<li>');
			menuHtmlData.push('<a href="myHistoryTask.html">');
			menuHtmlData.push('<i class="icon-double-angle-right"></i>');
			menuHtmlData.push('我的历史任务');
			menuHtmlData.push('</a>');
			menuHtmlData.push('</li>');
			if(getUsername() == "张经理" || getUsername() == "李经理" ||getUsername() == "王老板"){
				menuHtmlData.push('<li>');
				menuHtmlData.push('<a href="allHistoryTask.html">');
				menuHtmlData.push('<i class="icon-double-angle-right"></i>');
				menuHtmlData.push('全部历史任务');
				menuHtmlData.push('</a>');
				menuHtmlData.push('</li>');
			}
			
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
}

var logout = function(){
	localStorage.clear();
	skipPage("login.html");
}
var getUsername = function(){
	return localStorage.getItem("username");
}

/**跳转页面*/
var skipPage = function(url){
	window.location.href=url;
}

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




