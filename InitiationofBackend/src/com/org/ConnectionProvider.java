package com.org;
import java.sql.*;

import static com.org.UrlProvider.*;  
public class ConnectionProvider implements UrlProvider
{
	private static Connection con=null;  
	static{  
	try{  
		Class.forName(DRIVER);
		
	con=DriverManager.getConnection(CONNECTION_URL,USERNAME,PASSWORD);  
	}
	
	catch(Exception e){}  
	}  
	  
	public static Connection getCon(){  
	    return con;  
	}  
	  

}

/*static import concept is introduced in 1.5 version. With the help of static import, 
we can access the static members of a class directly without class name or any object.
For Example: we always use sqrt() method of Math class by using Math class
i.e. Math.sqrt(), but by using static import we can access sqrt() method directly.
AccessVariableFromAnotherClass class1 = new AccessVariableFromAnotherClass();
    System.out.println("Value of public variable in class :" + class1.i);
*/


/*The import allows the java programmer to access classes of a package without
package qualification whereas the static import feature allows to access the 
static members of a class without the class qualification. 
The import provides accessibility to classes and interface whereas static 
import provides accessibility to static members of the class.
*/