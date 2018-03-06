<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>jqueryajaxservlet example</title>

<link rel="stylesheet" type="text/css"
	href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
	<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/jquery-ui.min.js"></script>

</head>
<body>
<fieldset>
<legend>hello world</legend>
Enter your name<input type="text" name="name" for="name" id="name"><br>
<button type="button" id="button1" value = "fetchdata">fetchdata</button>
<span id="result1"></span>
</fieldset>
<fieldset>
<legend>addition</legend>
Enter number1<input type="text" name="number1" for="number1" id="number1"><br>
Enter number2<input type="text" name="number2" for="number2" id="number2"><br>
<button  type="button" id="sum"   value = "sum">Sum</button>
<span id="result2"></span>
</fieldset>
<script type="application/javascript">
$(document).ready(function()
		{
           $('#button1').click(function(){
            var name= $('#name').val();
            $.ajax({
                     type:'POST', data:{name:name , action:'hello world'},url:'Servletajax',
                     success: function(result)
                     {
                         $('#result1').html(result);
                         }



                });


     });
           });
$(document).ready(function()
		{
	    alert("i am ready");
           $('#sum').click(function(){
            var number1= $('#number1').val();
            var number2=$('#number2').val();
            $.ajax({
                     type:'POST', 
                     data:{number1:number1 , number2:number2 , action:'addition'},
                     url:'Servletajax',
                     success: function(result)
                     {
                         $('#result2').html(result);
                         }

                   

                });


     });
           });
</script>
</body>
</html>