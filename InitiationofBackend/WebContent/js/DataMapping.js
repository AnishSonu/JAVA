







function loadAttributes(){
	var sourceVal = ["Abc","xyz","DEF"]; 

	var sel = document.getElementById("source");
	for(var i = 0; i < sourceVal.length; i++) {
	    var opt = document.createElement('option');
	    opt.innerHTML = sourceVal[i];
	    opt.id=sourceVal[i];
	    opt.value = sourceVal[i];
	    sel.appendChild(opt);
	}
	    var fieldVal = ["Field1	","Field2"]; 
	    var sel1 = document.getElementById("source1");
	    for(var j = 0; j < fieldVal.length; j++) {
	        var opt1 = document.createElement('option');
	        opt1.innerHTML = fieldVal[j];
	        opt1.id="option"+counter;
	        opt1.value = fieldVal[j];
	        sel1.appendChild(opt1);
	        

	}
	}





function removeField(event) {
	   var elem = event.srcElement.parentNode.parentNode.parentNode;
	   
	   alert(elem.id)
	   
	    return elem.parentNode.removeChild(elem);
	}



function signchange() {

	var parent=document.getElementById(this);
	var i1=this.firstChild.firstChild;
	i1.classList.toggle("glyphicon-minus");
	
}





var counter=0;

function populateMapping() {
	



	var img4=document.createElement('img');
	img4.id="img4"+counter;
	img4.src="icons/linedelete.png";
	img4.className="scorecard-icon";
	
	var imgLabel=document.createElement('label');
	imgLabel.className="btn btn-default scorecard-btn ";
	imgLabel.setAttribute("data-toggle", "tooltip");
	imgLabel.title="Delete this condition";
	imgLabel.style.marginBottom="0px";
	imgLabel.style.marginTop="0px";
	imgLabel.style.marginLeft="0px";
	imgLabel.style.marginRight="0px";
	imgLabel.onclick=removeField;
	imgLabel.appendChild(img4);

	
	

	/*var aimg4=document.createElement('a');
	aimg4.id="aImg4"+counter;
	aimg4.href="#";
	aimg4.onclick=removeField;
	aimg4.appendChild(img4)*/
	var td00 =document.createElement('td');
	var td0 =document.createElement('td');
	var td1 =document.createElement('td');
	var td2 =document.createElement('td');
	var td3 =document.createElement('td');
	var td4 =document.createElement('td');
	var td5 =document.createElement('td');
	td5.id="td4"+counter;
	td5.innerHTML=" ";
	
	
	
	td00.id="td00"+counter;
	td0.id="td0"+counter;

	
	td3.id="td3"+counter;
	td2.id="td2"+counter;
	td4.id="td4"+counter;
	
	var i=document.createElement('i');
	i.id="toggle"+counter;
	i.className="glyphicon glyphicon-plus";
	//i.onclick=i.classList.toggle("glyphicon-minus");
	i.setAttribute("aria-hidden", "true");
	
	td0.innerHTML="  ";
		
	var select=document.getElementById("source");	
		
	td1.innerHTML=document.getElementById("source").value;
	td1.id=select.options[select.selectedIndex].id;
	td2.innerHTML=document.getElementById("source1").value;
	td3.innerHTML=document.getElementById("attribute").value;
	
	
	
	td4.appendChild(imgLabel);
	
	td00.appendChild(i);
	
	
	var sourceVal=select.options[select.selectedIndex].id;
	var table= document.getElementById("table");
	//alert ("source value " + sourceVal);
	var foundSource = false;
	
	for (var j = 0; j < table.rows.length; j++) 
	{
		  
			var firstCol = table.rows[j].cells[1].id; //first column
			//alert("first col id is " + firstCol);
		   if(sourceVal==firstCol)
			{
			   foundSource = true;
			   
			   break;
			}
		   		
	}

	var idForTableBody=sourceVal+"Child";

	if (foundSource)
	{
	
			 alert("in field...")
			    var tr1=document.createElement('tr');
				
			    tr1.id="tr1"+counter;
				
				tr1.appendChild(td0);
				tr1.appendChild(td5);
				tr1.appendChild(td2);
				tr1.appendChild(td3);
				tr1.appendChild(td4);
			
				var tbodyChild;
				
				tbodyChild = document.getElementById(idForTableBody);
				
			
				if (tbodyChild == null)
				{
					
					tbodyChild = document.createElement('tbody');
					tbodyChild.id = idForTableBody;
					tbodyChild.className = "collapse";
					
				
					
					var tbodyNextSibl=document.getElementById(sourceVal+"Ptbody");
					tbodyNextSibl.parentNode.insertBefore(tbodyChild, tbodyNextSibl.nextSibling)
					
			
				}
				

				tbodyChild.appendChild(tr1);
				
			   
			   
	}
   else
   {
	   	  
	   	  alert("inside Source")
	   	   
		   var trParent=document.createElement('tr');
		   trParent.id=sourceVal+"Parent";
		   trParent.className="clickable";
		   trParent.setAttribute("data-toggle", "collapse");
		   var dataTargetValue="#"+idForTableBody;
		  
		   trParent.setAttribute("data-target", dataTargetValue);
		   trParent.setAttribute("aria-controls", idForTableBody);
		   trParent.setAttribute("aria-expanded", "flase");
		  
		   trParent.onclick=signchange;
		   
		   trParent.appendChild(td00);
		   trParent.appendChild(td1);
		   trParent.appendChild(td2);
		   trParent.appendChild(td3);
		   trParent.appendChild(td4);
			
			var tbody=document.createElement('tbody');
			tbody.id=sourceVal+"Ptbody";
			tbody.appendChild(trParent);
			table.appendChild(tbody);
			
   }

	counter++;
}