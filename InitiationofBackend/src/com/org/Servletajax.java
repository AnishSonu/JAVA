package com.org;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servletajax
 */
@WebServlet("/Servletajax")

public class Servletajax extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String userName = request.getParameter("name").trim();
		if(userName == null || "".equals(userName)){
			userName = "Guest";
		}
		
		String greetings = "Hello " + userName;
		
		response.setContentType("text/plain");
		response.getWriter().write(greetings);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		
		
		String action = request.getParameter("action");
	if(action.equals("hello world"))
	{
		String userName = request.getParameter("name").trim();
		
		pw.println("hello "+userName);
		
	}
	else if(action.equals("addition"))
	{
		int number1 = Integer.parseInt(request.getParameter("number1"));
		int number2 = Integer.parseInt(request.getParameter("number2"));
		pw.println(number1+number2);
	}
	
	
	}
		
	}


