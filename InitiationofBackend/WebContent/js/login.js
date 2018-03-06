
$('.carousel').carousel({
  interval: 100,
  pause: "false"
});


var attempt = 3;

function onLogin()
{ 
	

	attempt --;
	
	
	var a = document.getElementById("exampleInputAmount").value;
    var b = document.getElementById("exampleInputAmount1").value;
     if(a == "")
    	 {
    	 alert("Username is Mandatory");
    	 document.getElementById("exampleInputAmount").focus();
    	 }
   if(a !="")
	   {
	     if(b == "")
	    	 {
	    	 
	    	 alert("Password is Mandatory");
	    	 document.getElementById("exampleInputAmount1").focus();
	    	 
	    	 }
	   }

if(a !==""  && b != "" )
	{
	if(a =="INTELLECT1" && b == "INTELLECT1")
	{
	     
	     window.location.href = "BasicLayoutIcons.html";
	     // self.location = "http://localhost:9095/LOS_DEMO_DataModel/login.html";
	}
	else
		{
	   alert("UserName or password are Incorrect");
		}	
	}

if(attempt == 0)
	{
	   alert("you are blocked");
	   document.getElementById("exampleInputAmount").disabled = true;
	   document.getElementById("exampleInputAmount1").disabled = true;
	   $('button').prop('disabled', true);
	 //  window.stop();
}


}