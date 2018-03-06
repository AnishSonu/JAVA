

<%@page import="javafx.scene.layout.Border"%>
<%@page import="com.org.User"%>
<%@page import="java.util.*"%>
<%@page import="java.util.Iterator" %>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.org.DatabaseConnection" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
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

						
												<th class="tableHeading label-white">Name</th>
						<th class="tableHeading label-white">EMAIL ID</th>
						<th class="tableHeading label-white">Pass</th>
</tr>
<%
for(int i=0 ;i<=5 ; i++)
	
{
	out.println(i);


}
   String st= request.getParameter("q");
   out.println(st);

DatabaseConnection dc = new DatabaseConnection();
ArrayList<String> al1 = dc.customerinfoextraction(st);
	
	
%>
<%Iterator itr=al1.iterator();
while(itr.hasNext()){
%>
<tr>
<td><%= itr.next() %></td>
<td><%= itr.next() %></td>
<td><%= itr.next() %></td>
</tr>
<%} %>
</table>
</div>
</div>
</div>
</div>

</body>
</html>