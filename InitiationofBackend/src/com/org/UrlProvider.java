package com.org;

public interface UrlProvider
{
	
	
	String DRIVER="oracle.jdbc.driver.OracleDriver";  
	String CONNECTION_URL="jdbc:oracle:thin:@10.10.9.42:1521:SIR13922";  
	String USERNAME="HUBS_TEST";  
	String PASSWORD="HUBS_TEST";  

}


// org.hsqldb.jdbc.JDBCDriver
//jdbc:hsqldb:hsql://localhost/loans","SA",""
// jdbc:oracle:thin:@localhost:1521:xe","system","password"
// mysql database connection 
/*Driver class: The driver class for the mysql database is com.mysql.jdbc.Driver.
Connection URL: The connection URL for the mysql database is jdbc:mysql://localhost:3306/sonoo where jdbc is the API, mysql is the database, localhost is the server name on which mysql is running, we may also use IP address, 3306 is the port number and sonoo is the database name. We may use any database, in such case, you need to replace the sonoo with your database name.
Username: The default username for the mysql database is root.
Password: Password is given by the user at the time of installing the mysql database. In this example, we are going to use root as the password.
*/
//Class.forName("com.mysql.jdbc.Driver");  
/*Connection con=DriverManager.getConnection(  
"jdbc:mysql://localhost:3306/sonoo","root","root"); */