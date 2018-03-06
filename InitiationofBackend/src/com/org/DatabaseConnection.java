package com.org;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;
public class DatabaseConnection 
{
  int a;
  String s1="kundan";
  String s2="kundan7868@gmail.com";
  String s3="anish";
  int  age;
  String name ;
/* public DatabaseConnection(int age , String name )
 {
	 
	 this.age = age;
	 this.name = name;
	 
 }
  public String toString()
  {
	  
	  return age + "   "+name;
  }*/
public static void main(String args[])throws SQLException ,IOException
{
	

/*System.out.println("hi inside Database connection");
customerInfo();
Connection con=ConnectionProvider.getCon();
Statement stmt=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);  
ResultSet rs=stmt.executeQuery("select *from user432"); 
 
while(rs.next())
{
  String s1 = rs.getString(1);
  String s2 =rs.getString(2);
  String s3 = rs.getString(3);
  System.out.println(s1);
  System.out.println(s2);
  System.out.println(s3);
}*/
// System.out.println(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3));


// register1();
	
  // register3();
	//register4();
//	userInput();
	
//	collectionArraylist();
	
//	collectionSet1();
	//collectionMap();
	
/*	User u = new User();
	u.setEmail("assdf@DAS");
	u.setName("asa");
	u.setPass("aaS");
	register(u);
	register5();
	*/
//	stringexp();
//	dbconnect();
//	collectionMap();
	
	// usreInput();
	
	// exparray(); 
/*	DatabaseConnection dbc = new DatabaseConnection(25, "Anish");
	DatabaseConnection dbc1 = new DatabaseConnection(26, "kundan");
	System.out.println(dbc.toString());
	System.out.println(dbc1.toString());
	
	StringBuilder[] stb = new StringBuilder[10];
	stb[0] = new StringBuilder("anish");
	stb[1] = new StringBuilder("KUNDAN");
	stb[2] = new StringBuilder("ABHISHEK GOYAL");
	System.out.println(" value  "+stb[0]);
	String st1="anish";
	StringBuilder st = new StringBuilder("Anish (");
	st.append("Kumar)");
	st.append(","+st1);
	
	System.out.println(st);*/
}
 
public static String informationProvider(String s1)
{
  String	uname = "hi";
	
  System.out.println("inside information provider");
  System.out.println("inside information provider"+s1);
    return uname;
}

public static ArrayList<String> customerInfo()
{
	ArrayList<String> a = new ArrayList<String>();
   for(int i=0;i<=5;i++)
   {
	   a.add("anish");
	   a.add("mukul");
	   a.add("suman");
	   a.add("kundan");
	   a.add("chandan");
	   System.out.println(a);
	 }
 
   return a;

}
public static int register(User u)throws SQLException
{
 int status =0;
	Connection con=ConnectionProvider.getCon();  
	PreparedStatement ps =con.prepareStatement("insert into user432 values(?,?,?)");  
	
	ps.setString(1,u.getName());  
	ps.setString(2,u.getEmail());  
	ps.setString(3,u.getPass());  
	              
	status = ps.executeUpdate(); 

   return status;
}


public static int register1(User u)
{
 int status =0;
 PreparedStatement ps=null;
 Connection con = null;
 try
 {
	 System.out.println("inside register1");
	con = ConnectionProvider.getCon();
	System.out.println("after getting connection");
	 Statement st = con.createStatement();
		System.out.println("after creating statement object");
	/*String name=	u.getName();
	String mail = u.getEmail();
	String pass = u.getPass();
	System.out.println(name);
	System.out.println(mail);
	System.out.println(pass);*/
	
//	System.out.println("after getting connection");
	ResultSet rs1 = st.executeQuery("select *from user432");
	while(rs1.next())
	{
		
		System.out.println(rs1.getString(1)+"  "+rs1.getString(2)+" "+rs1.getString(3));
	}
/*	ps =con.prepareStatement("insert into user432 values(?,?,?)");  
	System.out.println("inside register3"); 
	ps.setString(1,name);  
	ps.setString(2,mail);  
	ps.setString(3,pass);  
	System.out.println("inside register2");             
	status = ps.executeUpdate();*/ 

 }
 catch(Exception e)
 {
	 System.out.println("hi >>"+e);
 }
   return status;
}
public static void register3()throws SQLException
 {
	// int status =0;

	 Connection con = null;
	 con = ConnectionProvider.getCon();
	 Statement st = con.createStatement();
	 
/*	  execute update returns integer which shows how many rows is getting affected
	 st.executeUpdate("insert into user432 (name , email , pass) values ('LATHA','Latha@gmail.com','latha')"); 
	 executeUpdate is used for insert delete update create and drop returns integer */
    int i =  st.executeUpdate("update user432 set name='chandan' , email='chandu@gmail.com' , pass ='abhi' where name='chandan'");
    System.out.println(i);
 /*   st.executeUpdate("CREATE TABLE Customerinformation3 (PersonID int, Last_Name varchar(25), First_Name varchar(25), Department varchar(25),Address varchar(25),  City varchar(25), employee_ID varchar(5));");
   st.executeUpdate("delete from user432 where pass='mukul' AND name='anish'");
    executequery*/
    ResultSet rs = st.executeQuery("select *from user432 where name='LATHA'");  // execute query for select statement it returns resultset object
      while(rs.next())
      {
    	  System.out.println(rs.getString(1) + "  " +rs.getString(2) +"  " +rs.getString(3)); 
     } 
      
      System.out.println("");
      ResultSet rs1 = st.executeQuery("select *from user432");// execute query for select statement it returns resultset object
   //   rs1.absolute(9);
    //  rs1.first();
      while(rs1.next())
      {
    	  System.out.println(rs1.getString(1) + "  " +rs1.getString(2) +"  " +rs1.getString(3)); 
     }
      // execute    it returns boolean value
   /*   executeQuery()---for getting the data from database 
      executeUpdate()---for insert,update,delete 
      execute()-any kind of operations
      executeQuery() --- This is used generally for reading the content of the database. The output will be in the form of ResultSet. Generally SELECT statement is used. 

      executeUpdate() --- This is generally used for altering the databases. Generally DROP TABLE or DATABASE, INSERT into TABLE, UPDATE TABLE, DELETE from TABLE statements will be used in this. The output will be in the form of int. This int value denotes the number of rows affected by the query. 

      execute() --- If you dont know which method to be used for executing SQL statements, this method can be used. This will return a boolean. TRUE indicates the result is a ResultSet and FALSE indicates it has the int value which denotes number of rows affected by the query.
 */
 
      st.addBatch("insert into user432 (name,email,pass) values ('ketan','ketan@gmail.com','ketu')");
      st.addBatch("insert into user432 (name,email,pass) values ('mithilesh jha','mithilesh@gmail.com','mithu')");
      st.executeBatch();
 
 
 }

public static void register4()throws SQLException
 {
	// int status =0;

	 Connection con = null;
	 con = ConnectionProvider.getCon();
	 try
	 {
	 PreparedStatement ps = con.prepareStatement("insert into user432 values(?,?,?)");
     ps.setString(1, "aman");
     ps.setString(2, "aman678@gmail.com");
   
     ps.setString(3, "aman");
     ps.executeUpdate();
     PreparedStatement pst = con.prepareStatement("select *from user432");
        ResultSet rs2 =pst.executeQuery();
        ResultSetMetaData rsmd =rs2.getMetaData();
            int totalnumberofcloumn= rsmd.getColumnCount();
            int p;
        for( p=1;p<=totalnumberofcloumn;p++)
        {
        	System.out.println("  total number of column  "+rsmd.getColumnCount());
        	System.out.println("column name   "+rsmd.getColumnName(p));
        	System.out.println(" data type of column  "+rsmd.getColumnTypeName(p));
        }
        while(rs2.next())
        {
        	System.out.println(rs2.getString(1)+"          "+rs2.getString(2)+ "                 "+rs2.getString(3));
        }
        
        DatabaseMetaData dbmd=con.getMetaData();  
        
        	System.out.println("Driver Name: "+dbmd.getDriverName());  
        	System.out.println("Driver Version: "+dbmd.getDriverVersion());  
        	System.out.println("UserName: "+dbmd.getUserName());  
        	System.out.println("Database Product Name: "+dbmd.getDatabaseProductName());  
        	System.out.println("Database Product Version: "+dbmd.getDatabaseProductVersion());  
        
        PreparedStatement pst1 = con.prepareStatement("insert into user432 (name,email,pass) values ('praveen','praveen@gmail.com','pk')");
        PreparedStatement pst2 = con.prepareStatement("insert into user432 values(?,?,?)");
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));	
        System.out.println("enter your name");
       
        String name=br.readLine();
        System.out.println("enter your email id");
        String email=br.readLine();
        System.out.println("enter your password");
        String pass = br.readLine();
        
        pst2.setString(1, name);
        pst2.setString(2, email);
        pst2.setString(3, pass);
        
        pst1.executeUpdate();
        pst2.addBatch();
        pst2.executeBatch();
 
    //    "insert into user432 values(?,?,?)"
     
	 }
	 catch(Exception e )
	 {
		 System.out.println("exception occured " +e);
	 }	 
 
 } 

public static void userInput()throws IOException
{

	BufferedReader br=new BufferedReader(new InputStreamReader(System.in));	
	System.out.println("enter your id");
	String s1 = br.readLine();
	int i=Integer.parseInt(s1);

	System.out.println("enter your name");
	String s2=br.readLine();
	System.out.println("your Id is " +i+ " and your name is " +s1);

}

public static  void   collectionArraylist()
{
	
  ArrayList<String> al = new ArrayList<String>();
  ArrayList<String> al1 = new ArrayList<String>();
  al.add("ravi");
  al.add("chandan");
  al.add("suman");
  al.add("praveen");
  Iterator itr = al.iterator();
  while(itr.hasNext())
  {
	System.out.println(itr.next());  
  }
  for(String obj:al)
  {
	  System.out.println(obj);
	  
  }
  
  al1.add("naga yatham");
  al1.add("mukul");
  al1.addAll(al);                          // adding all value of al in al1
  for(String obj1:al1)
  {
	  
	  System.out.println(obj1);
  }
  	Student stud = new Student(101 , 23 , "anish");
  	Student stud1 = new Student(102 , 25 , "mukul");
  	ArrayList<Student> al3 = new ArrayList<Student>();
  	al3.add(stud);
  	al3.add(stud1);
 
  Iterator itr1 = al3.iterator();
  while(itr1.hasNext())
  {
	Student a=(Student)itr1.next();
	System.out.println(a.rollno+"    "+a.name+"   "+a.age);
  }
// ararlist is better for storing and accessing data and linked list for manipulation
  LinkedList<String> ll = new LinkedList<String>();
  ll.add("anish1");
  ll.add("kundan1");
  Iterator<String> itr4 = ll.iterator();
  while(itr4.hasNext())
  {
	System.out.println(itr4.next());
	
  }



}


public static ArrayList<Object> register5()throws SQLException
{
	
	Connection con = ConnectionProvider.getCon();
	Statement st = con.createStatement();
    ResultSet rs = st.executeQuery("select *from user432");
    ArrayList<Object> al =new ArrayList<Object>();
    while(rs.next())
    { 
         User	u =new User();
         u.setName(rs.getString(1));
         u.setEmail(rs.getString(2));
         u.setPass(rs.getString(3));
    	
    	al.add(u);
    	System.out.println(al);
    }
    	System.out.println("");
    	System.out.println("");
    	System.out.println("");
    
    Iterator itr =al.iterator();
    while(itr.hasNext())
    {
    
    	     User u = (User)itr.next();
    	     System.out.println(u.getName()+"    "+u.getEmail()+"  "+u.getPass());
    }
  

return al;


}
	  public static void collectionSet1()
	  {
		  
		  //List can contain duplicate elements whereas Set contains unique elements only.
		  HashSet<String> hs = new HashSet<String>();
		  hs.add("ravi");
		  hs.add("rahul");
		  Iterator<String> itr =hs.iterator();
		  while(itr.hasNext())
		  {
			  
	  System.out.println(itr.next());
			  
		  }
		  
		  
		  LinkedHashSet<String> lhs = new LinkedHashSet<String>();
		  	lhs.add("golu");
		  	lhs.add("banti");
		  	Iterator<String>  itr1= lhs.iterator();
		  	while(itr1.hasNext())
		  	{
		  		System.out.println(itr1.next());
			
		  	}
		  
		  		TreeSet<String> ts= new TreeSet<String>();
		  			ts.add("avinash");
		  			ts.add("sonurani");
		  			ts.add("soya");
		  			System.out.println(ts.first());
		  			System.out.println(ts.last());
		  			System.out.println(ts.size());
   
		  			Iterator<String> itr2 = ts.iterator();
		  			while(itr2.hasNext())
		  			{
	   
		  				System.out.println(itr2.next());
		  			}
    
	  }
	  
	  
	  public static void collectionQueue()
	  {
		  
		  
		  
	  }
	  
	  public static void collectionMap()
	  {
		  HashMap<Integer,String>   hmap = new   HashMap<Integer,String>();
		  HashMap<Integer,Object>   hmap1 = new HashMap<Integer,Object>();
		  HashMap<Integer, Book> hmap2 = new HashMap<Integer,Book>();
		  hmap.put(101, "abhishek");
		  hmap.put(102, "kundan");
		  hmap.put(103, "suman");
		  hmap.put(104, "latha");
		  hmap.put(105, "naga");
		  hmap.put(106, "bharani");
		  System.out.println(hmap.size());
		  
		  for(HashMap.Entry m:hmap.entrySet())
		  {  
			   System.out.println(m.getKey()+" "+m.getValue());  
			  
		  
		  }   
		  
		 Set s  = hmap.entrySet();
		 Iterator itr = s.iterator();
		
		 System.out.println(s.size());
		 Book b1=new Book(101,"Let us C","Yashwant Kanetkar","BPB",8);    
		    Book b2=new Book(102,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);    
		    Book b3=new Book(103,"Operating System","Galvin","Wiley",6);    
		    hmap1.put(1,b1);
		    hmap1.put(2,b2);
		    hmap1.put(3, b3);
		    hmap2.put(1,b1);
		    hmap2.put(2, b2);
		    
		    Set s1  = hmap1.entrySet();
			 Iterator itr1 = s1.iterator();
			 Set s2  = hmap1.entrySet();
			 Iterator itr2 = s2.iterator();
		 while(itr.hasNext())
		 {
			 
			               Map.Entry<Integer, String> m=  (Map.Entry<Integer, String>)itr.next();
			           //    System.out.println("inside while loop");
			               System.out.println(m.getKey()+"        "+m.getValue());
			 
		 }
		 System.out.println("outside while loop");
		 System.out.println(itr1.hasNext());
		 while(itr1.hasNext())
		 {
			
			 
			 Map.Entry<Integer, Object> m=  (Map.Entry<Integer,Object>)itr1.next();
	
			             Book b =  (Book)m.getValue();
			       
			             System.out.println(b.id +"     "+b.author+"      "+b.name+ "       "+b.publisher+ "       "+b.quantity);
			                    
		 }
		  
		 for(Map.Entry<Integer, Book> entry:hmap2.entrySet())
		 {   
			
		        int key=entry.getKey();  
		        Book b=entry.getValue();  
		        System.out.println(key+" Details:");  
		        System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);   
		    } 
		 
		  System.out.println(hmap.keySet());
		  System.out.println(hmap.entrySet());
		  System.out.println(hmap.get(101));
		  hmap.remove(105);
		  System.out.println(hmap.entrySet());
		  System.out.println(hmap.get(101));        // sysout shortcut for system.out.println
		
	  }
	  
	  public static void stringexp()
	    {
	    	 // string is immutable ( that can't be change)
	    	String st = "Anish";
	    	String st4="Anish";
	    	String st1 ="kundan";
	    	String st3 ="anish";
	    	String st2="ANISH";
	    	String book="Harry porter1";
	    	//   string concatination  
	    	  st = st.concat(" Kumar");
	    	  System.out.println("value of string after concate function       "+st);
	    	
	    	  // string comparison   The = = operator compares references not values.
	    	  
	    	  System.out.println(st2.equalsIgnoreCase(st3));
	    	  System.out.println(st2.equals(st3));
	    	  
	    	  System.out.println(st==st4);
	    	  System.out.println(st==st1);
	    	  
	    	  
/*	    	  The String compareTo() method compares values lexicographically and returns an integer value that describes if 
	    	  first string is less than,equal to or greater than second string.*/
	    	  System.out.println(st.compareTo(st1));
	    	  
	    	  String st5="kundan" + "singh";
	    	  String st6= 60 + 40 + "kundan" + 60 +60;
	    	  System.out.println(st6);
	    	  // substring starts  from index 0
	    	  System.out.println(book.substring(0,12));
	    	  System.out.println(book.toUpperCase());
	    	  System.out.println(book.toLowerCase());
	    	  
	    	  // trim ----removes white spacess before and after the string "not between"
	    	  String trimstring="   Sachin Tendulkar   ";
	    	  System.out.println(trimstring.trim());
	    	  
	    	  //LENGTH method returns length of string including space 
	    	  
	    	  System.out.println(trimstring.length());
	    	  //charat returns character at specified index
	    	  System.out.println(trimstring.charAt(4));
	    	  
	    	/*  The string valueOf() method coverts given type such as int, 
	    	  long, float, double, boolean, char and char array into string.*/
	    	  
	    	  int a=10;  
	    	  String s=String.valueOf(a);  
	    	  System.out.println(s+10); 
	    	  
	    	  
	    	/*  The string replace() method replaces all occurrence of first sequence of character with second sequence of character.*/

	    	  String s1="Java is a programming language. Java is a platform. Java is an Island.";    
	    	  String replaceString=s1.replace("Java","Kava");//replaces all occurrences of "Java" to "Kava"    
	    	  System.out.println(replaceString); 
	    	  
	    	//stringbuffer capacity initial=16 than   (oldcapacity*2)+2.
	    	  
	    	  
	    	  StringBuffer sb=new StringBuffer(s1);  
	    	  sb.reverse(); 
	    	  System.out.println(sb);
	    	  
	    	  String s2="java string, split method by javatpoint";  
	    	  String[] words=s2.split("\\s");//splits the string based on whitespace can be split into with any character like,:
	    	  String s5="harray , porter";
	    	  String[] s6=s5.split(",");
	    	  for(String s4:words)
	    	  {
	    		  System.out.println(s4);
	    	  }
	    	  for(String s7:s6)
	    	  {
	    		  System.out.println(s7);
	    	  }
	    	  
	    	  
	    	  
	    	  String s8="";  
	    	  String s9="javatpoint";  
	    	    
	    	  System.out.println(s8.isEmpty());  
	    	  System.out.println(s9.isEmpty());  
	    	  
	    	  
	    }
	  
	  public static ArrayList<String> customerinfoextraction(String st)throws SQLException
	  {
		  
		  Connection con= ConnectionProvider.getCon();
		  ArrayList<String> al =new ArrayList<String>();
	//	  Statement st =con.createStatement();
		  PreparedStatement ps= con.prepareStatement("select *from user432 where name=?");
		  ps.setString(1, st);
		  ResultSet rs = ps.executeQuery();
		  while(rs.next())
		  {
			  al.add(rs.getString(1));
			  al.add(rs.getString(2));
			  al.add(rs.getString(3));
			  
		  }
		  System.out.println(al);
		  
		  return al;
	  }
	  
	  
	  public static void dbconnect()
	  {	 
		  ResultSet rs=null;
		  Statement st=null;
	
		  try
		  {
			  Connection con = ConnectionProvider.getCon();
			  System.out.println("after getting connection");
			  st = con.createStatement();
			  System.out.println("after creating statement object");
			  rs = st.executeQuery("select * from user432");
			  System.out.println(rs.next());
			  System.out.println("after executing query");
		 
		 
		
		 while(rs.next())
		 {
			 System.out.println(rs.getString(1)+ " "+rs.getString(2)+ " "+ rs.getString(3));
		 }
		  
		 
		  }
		  catch(Exception e)
		  {
			  
			  System.out.println("dbconnect exception "+e);
			  
		  }
		  
		  
	  }
	  public static void usreInput()throws IOException
	  {
		  BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		  System.out.println("enter your name");
		  System.out.println(br.readLine());
		  Scanner in = new Scanner(System.in);
		  
	        String s = in.nextLine();
	        System.out.println("You entered string "+s);
	 
	        int a = in.nextInt();
	        System.out.println("You entered integer "+a);
	 
	        float b = in.nextFloat();
	        System.out.println("You entered float "+b);
	        
	        
	     // Using Console to input data from user
	        String name = System.console().readLine();
	         
	        System.out.println(name);
		  
		  
		  
	  }
	  public static void  exparray()
	  {
		  
	  }
	  
	  public static void exptostring()
	  {
		  
		  StringBuilder[] stb = new StringBuilder[5];
		  
		   
		  
		  
	  }
	  
	}  




class Student
{  
	  int rollno;  
	  String name;  
	  int age;  
	  Student(int rollno,int age,String name)
	  {  
		  this.rollno=rollno;  
		  this.name=name;  
		  this.age=age;  
	  }
}
class Book {    
				int id;    
				String name,author,publisher;    
				int quantity;  
				public Book(int id, String name, String author, String publisher, int quantity)
				{    
					this.id = id;    
					this.name = name;    
					this.author = author;    
					this.publisher = publisher;    
					this.quantity = quantity;    
				}   
			}

