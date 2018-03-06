
var x=0; 

var z=0;



function removeCondition(event) {
   var elem = event.srcElement.parentNode.parentNode.parentNode.parentNode;
    return elem.parentNode.removeChild(elem);
}





function appendAttributeRow(event)
{
	var i=0;
	var input1 =document.createElement('input');
	input1.className="form-control divider-blank-left";
	input1.type="text";
	input1.id="valueBox1"+x;
	
	var input2 =document.createElement('input');
	input2.className="form-control divider-blank-left";
	input2.type="text";
	input2.id="valueBox2"+x;
	
	var input3 =document.createElement('input');
	input3.className="form-control divider-blank-left";
	input3.type="text";
	input3.id="scoreBox1"+x;
	
	var select1				=document.createElement('select');
	select1.id				="select1"+x;
	select1.className		="selectpicker  btn btn-default btn-custom";
	var option0				=document.createElement('option');
	var option1				=document.createElement('option');
	var option2				=document.createElement('option');
	var option3				=document.createElement('option');
	option0.innerHTML="default"
	option1.innerHTML="less than";
	option2.innerHTML="between";
	option3.innerHTML="greater than";
	
	select1.appendChild(option0);
	select1.appendChild(option1);
	select1.appendChild(option2);
	select1.appendChild(option3);
	
	
	
	var aImage 				=document.createElement('a');
	aImage.id				="aImage"+x;
	aImage.href				="#"
	var img1				=document.createElement('img');
	img1.id					="img1"+x;
	img1.src				="plus.jpg";
	img1.style.height		="0.5cm";
	img1.style.width		="0.5cm";
	img1.onclick			= newCondition;
	aImage.appendChild(img1);
	
	
	var attribute = document.createElement("input");
	attribute.setAttribute("list", "attributeName");
     attribute.id="attributeBox"+z;
     attribute.className="form-control";
     attribute.type="text";
     attribute.list="attributeName";
	   

	var datalist = document.createElement("datalist");
	datalist.id="attributeName";
	

	var options 				= document.createElement("option");
	options.setAttribute("value", "PROTERY AGE");
	options.setAttribute("value", "ZIP CODE");
	options.setAttribute("value", "PROPERTY VALUATION");
	datalist.appendChild(options);
	var AttributeCol 			= document.createElement('div');
	AttributeCol.id				="AttributeCol"+z;
	AttributeCol.className="col-xs-8";
	AttributeCol.appendChild(attribute);
	AttributeCol.appendChild(datalist);
	
	var aboveAttributecol1 		= document.createElement('div');
	aboveAttributecol1.id		="aboveAttributecol"+z;
	aboveAttributecol1.className="col-xs-2";
	
	var belowAttributecol1 		= document.createElement('div');
	belowAttributecol1.id		="belowAttributecol"+z;
	belowAttributecol1.className="col-xs-2";
	
	var paraentAttributecol 	= document.createElement('div');
	paraentAttributecol.id		="paraentAttributecol"+z;
	paraentAttributecol.className="col-xs-3";
	
	paraentAttributecol.appendChild(aboveAttributecol1);
	paraentAttributecol.appendChild(AttributeCol);
	paraentAttributecol.appendChild(belowAttributecol1);

	var conditionMainDiv 		= document.createElement("div");
	conditionMainDiv.id			="conditionMainDiv"+x;
	conditionMainDiv.className	="col-xs-6 divider-right divider-left";
	
	var conditionSubDiv1   		= document.createElement("div");
	conditionSubDiv1.id			="conditionSubDiv1"+x;
	conditionSubDiv1.className	="col-xs-4";
	var conditionSubDiv2		= document.createElement("div");
	conditionSubDiv2.id			="conditionSubDiv2"+x;
	conditionSubDiv2.className	="col-xs-4";
	var conditionSubDiv3 		= document.createElement("div");
	conditionSubDiv3.id			="conditionSubDiv3"+x;
	conditionSubDiv3.className	="col-xs-4";
	
	var dropDownDiv				=document.createElement("div");
	dropDownDiv.id				="dropDownDiv"+x;
	dropDownDiv.className		="dropdown";
	
	
	conditionSubDiv1.appendChild(select1);
	conditionSubDiv2.appendChild(input1);
	conditionSubDiv3.appendChild(input2);
	
	conditionMainDiv.appendChild(conditionSubDiv1);
	conditionMainDiv.appendChild(conditionSubDiv2);
	conditionMainDiv.appendChild(conditionSubDiv3);
	
	var scoreMainDiv 			= document.createElement("div");
	scoreMainDiv.id				="scoreMainDiv"+x;
	scoreMainDiv.className		="col-xs-3";
	var scoreSubDiv1 			= document.createElement("div");
	scoreSubDiv1.id				="scoreSubDiv1"+x;
	scoreSubDiv1.className		="col-xs-6";
	scoreSubDiv1.style.textAlign="center";
	var scoreSubDiv2 			= document.createElement("div");
	scoreSubDiv2.id				="scoreSubDiv2"+x;
	scoreSubDiv2.className		="col-xs-6";
	
	
	scoreSubDiv2.appendChild(aImage);
	scoreSubDiv1.appendChild(input3);
	
	scoreMainDiv.appendChild(scoreSubDiv1);
	scoreMainDiv.appendChild(scoreSubDiv2);
	var hr1				=document.createElement("hr");
	hr1.id="hr1"+x;
	hr1.className="half-rule";
	
	var hr2				=document.createElement("hr");
	hr2.id				="hr2"+x;
	hr2.className		="blankRule";

	

	var rowDiv 					= document.createElement("div");
	rowDiv.id					="extraAttributeRow"+z;
	rowDiv.className="row";
	
	rowDiv.appendChild(hr1);
	rowDiv.appendChild(paraentAttributecol);
	rowDiv.appendChild(conditionMainDiv);
	rowDiv.appendChild(scoreMainDiv);
	rowDiv.appendChild(hr2);
	
	document.getElementById("attribute1").parentNode.appendChild(rowDiv);
	


	z++;


}	







function newCondition(event) 
{
	var input1 =document.createElement('input');
	input1.className="form-control divider-blank-left";
	input1.type="text";
	input1.id="valueBox1"+x;
	
	var input2 =document.createElement('input');
	input2.className="form-control divider-blank-left";
	input2.type="text";
	input2.id="valueBox2"+x;
	
	var input3 =document.createElement('input');
	input3.className="form-control divider-blank-left";
	input3.type="text";
	input3.id="scoreBox1"+x;
	

	var select1				=document.createElement('select');
	select1.id				="select1"+x;
	select1.className		="selectpicker  btn btn-default btn-custom";
	var option1				=document.createElement('option');
	var option2				=document.createElement('option');
	var option3				=document.createElement('option');
	option1.innerHTML="less than";
	option2.innerHTML="between";
	option3.innerHTML="greater than";
	
	select1.appendChild(option1);
	select1.appendChild(option2);
	select1.appendChild(option3);
	
	
	
	
	var aImage 				=document.createElement('a');
	aImage.id				="aImage"+x;
	var img1				=document.createElement('img');
	img1.id					="img1"+x;
	img1.src				="delete.png";
	img1.style.height		="0.5cm";
	img1.style.width		="0.5cm";
	img1.onclick			=removeCondition;
	aImage.appendChild(img1);
	
	
	var hr3				=document.createElement("hr");
	hr3.id				="hr3"+x;
	hr3.className		="blankRule";
	   

	
	


	var conditionMainDiv 		= document.createElement("div");
	conditionMainDiv.id			="conditionMainDiv"+x;
	conditionMainDiv.className	="col-xs-6 divider-right divider-left";
//	conditionMainDiv.style.border="solid";
	
	var conditionSubDiv1   		= document.createElement("div");
	conditionSubDiv1.id			="conditionSubDiv1"+x;
	conditionSubDiv1.className	="col-xs-4";
	var conditionSubDiv2		= document.createElement("div");
	conditionSubDiv2.id			="conditionSubDiv2"+x;
	conditionSubDiv2.className	="col-xs-4";
	var conditionSubDiv3 		= document.createElement("div");
	conditionSubDiv3.id			="conditionSubDiv3"+x;
	conditionSubDiv3.className	="col-xs-4";
	
//	var dropDownDiv				=document.createElement("div");
//	dropDownDiv.id				="dropDownDiv"+x;
//	dropDownDiv.className		="dropdown";
	
	//dropDownDiv.appendChild(select1);
	//dropDownDiv.appendChild(ul1);
	
	
	conditionSubDiv1.appendChild(select1);
	conditionSubDiv2.appendChild(input1);
	conditionSubDiv3.appendChild(input2);
	
	conditionMainDiv.appendChild(conditionSubDiv1);
	conditionMainDiv.appendChild(conditionSubDiv2);
	conditionMainDiv.appendChild(conditionSubDiv3);
	
	var scoreMainDiv 			= document.createElement("div");
	scoreMainDiv.id				="scoreMainDiv"+x;
	scoreMainDiv.className		="col-xs-3";
//	scoreMainDiv.style.border	="solid";
	var scoreSubDiv1 			= document.createElement("div");
	scoreSubDiv1.id				="scoreSubDiv1"+x;
	scoreSubDiv1.className		="col-xs-6";
	scoreSubDiv1.style.textAlign="center";
	var scoreSubDiv2 			= document.createElement("div");
	scoreSubDiv2.id				="scoreSubDiv2"+x;
	scoreSubDiv2.className		="col-xs-6";
	
	
	scoreSubDiv2.appendChild(aImage);
	scoreSubDiv1.appendChild(input3);
	
	scoreMainDiv.appendChild(scoreSubDiv1);
	scoreMainDiv.appendChild(scoreSubDiv2);

	
	
	var blankDiv 					= document.createElement("div");
	blankDiv.id						="blankDiv"+x;
	blankDiv.className				="col-xs-3";
//	blankDiv.style.border			="solid";
	
	
	var rowDiv1 					= document.createElement("div");
	rowDiv1.id					="extraAttributeRow1"+x;
	//rowDiv.className			="row";
//	rowDiv.style.border			="solid";
//	rowDiv.style.height			="0.7cm";

	
	
	
	
	rowDiv1.appendChild(blankDiv)
	rowDiv1.appendChild(conditionMainDiv);
	rowDiv1.appendChild(scoreMainDiv);
	rowDiv1.appendChild(hr3)
	//rowDiv1.appendChild(hr3);
	

	//document.getElementById(c).parentNode.appendChild(rowDiv);
	var tempDiv				=document.createElement("div");
	tempDiv.id="tempDiv1"+z;
	
	//tempDiv.innerHTML=document.getElementById(rowDiv.id).innerHTML;
	//alert(tempDiv.innerHTML);
	var parId= event.srcElement.parentNode.parentNode.parentNode.parentNode.id;



	document.getElementById(parId).appendChild(rowDiv1);
	//document.getElementById(parId).appendChild(hr3);

	
	
	
	x++;
	
	

	
	
}




function appendAttribute1() {
	
	var imgLabelAdd= document.createElement('label');
	var imgLabelDelete=document.createElement('label');
	
	
	var img5=document.createElement('img');
	img5.source="icons/attributedelete.png";
	img5.className="scorecard-icon";
	
	imgLabelDelete.className="btn btn-default scorecard-btn";
	imgLabelDelete.setAttribute("data-toggle", "tooltip");
	imgLabelDelete.title="Delete this attribute and all its conditions";
	imgLabelDelete.onclick="";
	
	imgLabelDelete.appendChild(img5);
	
	
	var img6=document.createElement('img');
	img5.source="icons/lineinsert.png";
	img5.className="scorecard-icon";
	
	imgLabelAdd.className="btn btn-default scorecard-btn";
	imgLabelAdd.setAttribute("data-toggle", "tooltip");
	imgLabelAdd.title="Insert row for new condition";
	imgLabelAdd.onclick="";
	
	imgLabelAdd.appendChild(img6);
	
	var divChild1 =document.createElement('div');
	divChild1.className="col-xs-1 scorecard-btn-col";
	divChild1.appendChild(imgLabelDelete);
	divChild1.appendChild(imgLabelAdd);
	
	var attributeTextBox=document.createElement('input');
	attributeTextBox.type="text";
	attributeTextBox.className="form-control scorecard-input";
	
	var divChild2=document.createElement('div');
	divChild2.className="col-xs-3 scorecard-input-col";
	divChild2.appendChild(attributeTextBox);
	
	
	var selectCondition=document.createElement('input');
	selectCondition.className="form-control scorecard-input";
	selectCondition.value="default";
	selectCondition.disable=true;
	
	
	var divChild3=document.createElement('div');
	divChild3.className="col-xs-2 scorecard-input-col";
	divChild3.appendChild(selectCondition);
	
	
	var inputBox1=document.createElement('input');
	inputBox1.className="form-control scorecard-input";
	inputBox1.type="text";
	inputBox1.disable=true;
	
	
	var divChild4=document.createElement('div');
	divChild4.className="col-xs-2 scorecard-input-col";
	divChild4.appendChild(inputBox1);
	
	
	var inputBox2=document.createElement('input');
	inputBox2.className="form-control scorecard-input";
	inputBox2.type="text";
	inputBox2.disable=true;
	
	
	var divChild5=document.createElement('div');
	divChild5.className="col-xs-2 scorecard-input-col";
	divChild5.appendChild(inputBox2);
	
	var score=document.createElement('input');
	score.className="form-control scorecard-input";
	score.type="text";
	
	
	var divChild6=document.createElement('div');
	divChild6.className="col-xs-2 scorecard-input-col";
	divChild6.appendChild(score);
	
	
	
}








