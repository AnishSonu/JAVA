


function tabToggleSQL(event){

	if(event.srcElement.id=="SQL1"){
		
		
		var SQL1=document.getElementById("SQL1");
		SQL1.className="btn-primary";
		var dataMapping1=document.getElementById("dataMapping1");
		dataMapping1.className="btn-default";
		
		 document.getElementById('dataMapping').style.display='none'; 
	 if(document.getElementById('SQL').style.display=='block') { 
	        document.getElementById('SQL').style.display='none'; 
	    } 
	 else { 
       document.getElementById('SQL').style.display='block'; 
   } 
	}

	if(event.srcElement.id=="dataMapping1"){
		var SQL1=document.getElementById("SQL1");
		SQL1.className="btn-default";
		var dataMapping1=document.getElementById("dataMapping1");
		//var dataMapping1=document.getElementById("dataMapping1");
		dataMapping1.className="btn-primary";
		
		
		 document.getElementById('SQL').style.display='none'; 
	  if(document.getElementById('dataMapping').style.display=='block') { 
	        document.getElementById('dataMapping').style.display='none'; 
	 }
	 else { 
	        document.getElementById('dataMapping').style.display='block'; 
	    }
	}
   return false;



}