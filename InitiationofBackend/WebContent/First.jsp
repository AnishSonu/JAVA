<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% out.println("hi inside first.jsp"); %><br>
<%String s1=request.getParameter("name"); %>
<%String s2=request.getParameter("email"); %>
<%out.println("your name is     "+s1); %><br>
<%out.println("your email id is     "+s2); %>
<%request.setAttribute("name" , "Anish"); %>
<jsp:forward page= "Second.jsp">
  <jsp:param name="userName" value="chandan"/>
  </jsp:forward>


</body>
</html>
<!-- We use request.getAttribute() to get an object added to the request scope on the server side i.e. using request.setAttribute().
 You can add any type of object you like here, Strings, Custom objects, in fact any object.
  You add the attribute to the request and forward the request to another resource, the client does not know about this. 
  So all the code handling this would typically be in JSP/servlets. 
You can use request.setAttribute() to add extra-information and forward/redirect the current request to another resource. -->