<%@page import="java.util.List"%>
<%@page import="org.springframework.beans.factory.config.YamlMapFactoryBean"%>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看当前流程图</title>
<%
 String deploymentId=(String)request.getAttribute("deploymentId");
 String imageName=(String)request.getAttribute("imageName");
 List<Map<String, Integer>> list=(List<Map<String, Integer>>)request.getAttribute("map");
 StringBuffer sb=new StringBuffer();
 for (Map<String, Integer> map : list) {
	 int height=map.get("height")-5;
	 int width=map.get("width")-5;
	 int x = map.get("x")-1;
	 int y = map.get("y")-1;
		sb.append("<div style='position: absolute;border:4px solid #84c1ff;border-radius:10px;top: "+y+"px;left: "+x+"px;width: "+width+"px;height:"+height+"px;   '></div>");
	}
 
%>
</head>
<body>
<!-- 1.获取到规则流程图 -->
<img style="position: absolute;top: 0px;left: 0px;" src="workflowAction_viewImage?deploymentId=<%=deploymentId %>&imageName=<%=imageName%>">
<%=sb.toString() %>
<!-- 2.根据当前活动的坐标，动态绘制DIV -->
<%-- <div style="position: absolute;border:4px solid #84c1ff;border-radius:10px;top:<%=map.get("y")%>px;left: <%=map.get("x")%>px;width: <%=width%>px;height:<%=height%>px;   "></div> --%></body>
</html>