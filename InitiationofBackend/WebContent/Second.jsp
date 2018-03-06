<%@page import="javafx.scene.layout.Border"%>
<%@page import="com.org.User"%>
<%@page import="java.util.*"%>
<%@page import="java.util.Iterator" %>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.org.Excelreader" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="com.org.DatabaseConnection" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/rule-workbench.css">
<link rel="stylesheet" type="text/css" href="css/los-screen.css">
<link rel="stylesheet" type="text/css" href="css/RnD.css">
<link rel="stylesheet" type="text/css" href="css/DetailDataEntry.css">
<link rel="stylesheet" type="text/css"
	href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
<link href="css/DDESliderUI.css" rel="stylesheet">
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">


<link rel="stylesheet"

	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
</head>
<body>
<div class="container-fluid DDE-SubContainer">
				<div class="panel panel-default">
					<div class="panel-heading panel-heading-small"
						style="background: #990000">
						<h4 class="panel-title" style="text-align: center;">

							<a data-toggle="collapse" href="#empcollapse"><i
								class="fa fa-university" aria-hidden="true" style="color: white;"></i><label
								class="label-white" style="cursor: pointer;">&nbsp Employees' Information</label></a>
						</h4>



					</div>
					 <div id="empcollapse" class="panel-collapse collapse in">
					<div class="panel-body"  style="text-align: center;">
	<table class="table table-bordered table-font">


					<tr bgcolor="#3b5998">

						<th class="tableHeading label-white">ID</th>
												<th class="tableHeading label-white">Name</th>
						<th class="tableHeading label-white">EMAIL ID</th>
						<th class="tableHeading label-white">Pass</th>
</tr>
						
 <jsp:useBean id="obj" class="com.org.User"/> 
<jsp:setProperty property="*" name="obj"/>
<%out.println("Hi Inside second jsp"); %><br>
<%= request.getAttribute("name") %>
<%= request.getParameter("userName") %>
<%String name=request.getParameter("name"); %>
<%String email =request.getParameter("email") ;%>
<%-- <%out.println("your name is >>"+name); %><br>
<%out.println("your email id is "+email); %><br>
<%=    "hi inside expression tag"      %><br>  --%>  

<%
ArrayList<String> l= new ArrayList<String>();
DatabaseConnection getinfo = new DatabaseConnection();
String s1 = (String)DatabaseConnection.informationProvider(name); 

%>
 <%=  s1 %> 
<%
	 ArrayList<String> c= new ArrayList<String>();
	DatabaseConnection getinfo1 = new DatabaseConnection();
	int i = DatabaseConnection.register1(obj);
	int p=0;
	/* out.println("after finishing register method  "+i); */
 	ArrayList<Object> al1= (ArrayList<Object>)DatabaseConnection.register5();
 	Iterator itr= al1.iterator();



 	while(itr.hasNext())
 	{
		 User u =(User)itr.next();
	
	     p++;
	 %> 
	
	
	 	<tr>
	 		<td><%= p%></td>
			<td><a href="#"><span onclick="detailedinfo();"><%= u.getName()  %></span></a></td>
			<td><%= u.getEmail()  %></td>
			<td><%= u.getPass() %></td>
	 	</tr>
 


	<%} %>
	
	 <% Excelreader a = new Excelreader();
ArrayList<String> excel =	a.readExcel();
%> 
<tr bgcolor="#3b5998">

						<th class="tableHeading label-white">First Name</th>
												<th class="tableHeading label-white">Last Name</th>
						<th class="tableHeading label-white">Company Name</th>
						<th class="tableHeading label-white">Employee Id</th>
</tr>
  <tr>
  <td><%= excel.get(0) %></td>
  <td><%= excel.get(1) %></td>
  <td><%= excel.get(2) %></td>
  <td><%= excel.get(3) %></td>
  </tr>
  <tr>
  <td><%= excel.get(4) %></td>
  <td><%= excel.get(5) %></td>
  <td><%= excel.get(6) %></td>
  <td><%= excel.get(7) %></td>
  
  </tr> 
  
 <%
	out.println("test");
	User u = new User();
	u.setEmail(request.getParameter("email"));
	u.setName(request.getParameter("name"));
	u.setPass(request.getParameter("pass"));
	
	DatabaseConnection.register1(u);
%>
</table>
</div>
</div>
</div>
</div>
<script type="text/javascript">
function detailedinfo()
{
	alert("hi inside detailedinfo function");
    window.open("detailedinfo.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=500,height=300");

}
</script>
</body>
</html>