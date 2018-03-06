





function tabToggleClass(event){

//	alert(event.srcElement.id);
	if(event.srcElement.id=="class1"){
		 document.getElementById('dataMapping').style.display='none'; 
	 if(document.getElementById('class').style.display=='block') { 
	        document.getElementById('class').style.display='none'; 
	    } 
	 else { 
        document.getElementById('class').style.display='block'; 
    } 
	}

	if(event.srcElement.id=="dataMapping1"){
		 document.getElementById('class').style.display='none'; 
	  if(document.getElementById('dataMapping').style.display=='block') { 
	        document.getElementById('dataMapping').style.display='none'; 
	 }
	 else { 
	        document.getElementById('dataMapping').style.display='block'; 
	    }
	}
    return false;


}