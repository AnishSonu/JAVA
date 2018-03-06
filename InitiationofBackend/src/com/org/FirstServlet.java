package com.org;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServlet
 */
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		doPost(request, response);
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	
	{
		
		response.setContentType("text/html");  
		PrintWriter out = response.getWriter();  
		out.print("<h1>hai</h1>");
	    System.out.print("hi inside servlet");
	    String name= request.getParameter("name");
	    String email = request.getParameter("email");
	    String pass= request.getParameter("pass");
	    		User u = new User();
	    		u.setName(name);
	    		u.setEmail(email);
	    		u.setPass(pass);
	    		String name1= u.getName();
	    		String email1 =u.getEmail();
	    		String pass1=u.getPass();
	    		System.out.println(name1);
	    		System.out.println(email1);
	    		System.out.println(pass1);
	    		out.print(name1);
	    		out.print(email1);
	    		out.print(pass1);
	    		try
	    		{
	    		
	    		Connection con= ConnectionProvider.getCon();
	    		
	    		Statement st = con.createStatement();
	    		st.executeUpdate("insert into user432 (name,email,pass) values ('abhishek','abhi@gmail.com','abhi')");
	    		
	    		Statement st1=con.createStatement();
	    	ResultSet rs =	st1.executeQuery("select *from user432");
	    //	rs.absolute(11);
	    	
	    	while(rs.next())
	    	{
	    		System.out.println(rs.getString(1)+"     "+rs.getString(2)+  "      "+rs.getString(3));
	    		
	    	}
	    		
	    		}
	    		catch(Exception e)
	    		{
	    			System.out.println("hi inside exception block"+e);
	    		}
	    		
	}

}
