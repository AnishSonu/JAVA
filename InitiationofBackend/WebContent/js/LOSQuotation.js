$(document).ready(function() {
  //initializing tooltip
  $('[data-toggle="tooltip"]').tooltip();
});
 var b;

function wrapperAddModify(){

	 var am=getRadioVal();
	 if(am){
		 var rowNum=getCheckedRowNo();
		 document.getElementById("mytablebody").deleteRow(rowNum);
			 AddQuotation();
		
	 }
	 else{
		 AddQuotation();
		
		

	 }
}



	 function getRadioVal() {
		 var table = document.getElementById("mytablebody");
		 var val;
		 for (var i = 0, row; row = table.rows[i]; i++) {

			var cells = row.cells;
			var radio = cells[0].getElementsByTagName("input");
			if(radio[0].checked){
				val=radio[0].checked;
			}

		 }

		 return val;
    }

	 function getCheckedRowNo() {
		 var table = document.getElementById("mytablebody");
		 var rowNum;
		 for (var i = 0, row; row = table.rows[i]; i++) {

			var cells = row.cells;
			var radio = cells[0].getElementsByTagName("input");
			if(radio[0].checked){
				rowNum=i;
			}

		 }

		 return rowNum;
    }

	 function getTotalRowCount(){

		 var table = document.getElementById("mytablebody");
		 var rowNum;
		 for (var i = 0, row; row = table.rows[i]; i++) {



		 }

		 return i;

	 }

function redbutton() {

	   document.getElementById("Row2").className= "row nav-row2-red";
       document.getElementById("QuickLink").style.background = "#990000";
      // document.getElementById("QuickLinkFooter").style.background = "#990000";
       document.getElementById("MyQueue").style.background = "#990000";
       document.getElementById("rowHomeLabel").className= "control-label navbar-app-label label-white";
       document.getElementById("panelQuickLinksLabel").className = "label-white";
       document.getElementById("Reports").style.background = "#990000";
       document.getElementById("MYToDoList").style.background = "#990000";
       document.getElementById("List1").className = "label-white";
       document.getElementById("panelMyQueue").className = "label-white"; 
       document.getElementById("panelReports").className = "label-white"; 
       document.getElementById("navbarbtnLogout").className = "control-label navbar-app-label label-white";
       
       //document.getElementById("My-queue-footer").style.background = "#990000";
       document.getElementById("Reports").style.background = "#990000";
     //  document.getElementById("Reports-footer").style.background = "#990000";
       document.getElementById("MYToDoList").style.background = "#990000";
       document.getElementById("iconFlash").src= "icons/flash.png";
       document.getElementById("iconHome").src= "icons/home-white.png";
       document.getElementById("iconArrow").src= "icons/right arrow.png";
       document.getElementById("iconNewspaper").src= "icons/newspaper.png";
       document.getElementById("iconslist").src= "icons/list.png";
       	
       // ID's of buttons
       
       
       
       document.getElementById("btnQuotation").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnApplnSearch").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnNewInitiation").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnDashBoard").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("List").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnApplnCourseStudy").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnIncompleteAppln").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnpendingDecAppln").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnReassignedAppln").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnFinancingReq").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnPrintoutGen").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnTurnAroundTask").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnCreditAppln").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnNewActivity").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       document.getElementById("btnApplnDtlsAnalysis").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
       
       
      /* document.getElementById("btnQuotation").style.background = "#990000";
       document.getElementById("btnApplnSearch").style.background = "#990000";
       document.getElementById("btnNewInitiation").style.background = "#990000";
       document.getElementById("btnDashBoard").style.background = "#990000";
       document.getElementById("List").style.background = "#990000";
       document.getElementById("btnApplnCourseStudy").style.background = "#990000";
       document.getElementById("btnIncompleteAppln").style.background = "#990000";
       document.getElementById("btnpendingDecAppln").style.background = "#990000";
       document.getElementById("btnReassignedAppln").style.background = "#990000";
       document.getElementById("btnFinancingReq").style.background = "#990000";
       document.getElementById("btnPrintoutGen").style.background = "#990000";
       document.getElementById("btnTurnAroundTask").style.background = "#990000";
       document.getElementById("btnCreditAppln").style.background = "#990000";
       document.getElementById("btnNewActivity").style.background = "#990000";
       document.getElementById("btnApplnDtlsAnalysis").style.background = "#990000";
       document.getElementById("trCustomersDtls").style.background = "#990000";*/
       
       //finish
       document.getElementById("headingRow").setAttribute("bgcolor", "#3b5998");
       document.getElementById("headingColumn1").className="row-centerClass label-white";
    	    document.getElementById("headingColumn2").className="row-centerClass label-white";
    	    document.getElementById("headingColumn3").className="row-centerClass label-white";
    	    document.getElementById("headingColumn4").className="row-centerClass label-white";
    	    document.getElementById("headingColumn5").className="row-centerClass label-white";
    	    document.getElementById("headingColumn6").className="row-centerClass label-white";
    	    document.getElementById("headingColumn7").className="row-centerClass label-white";
    	 
       
       
      /* document.getElementById("QuickCreditCalculator").style.background = "#990000";
       document.getElementById("ProductDetails").style.background = "#990000";
   //    document.getElementById("PRODUCT-DETAILS-footer").style.background = "#990000";
       document.getElementById("SheduleType").style.background = "#990000";
     //  document.getElementById("shedule-type-footer").style.background = "#990000";
       document.getElementById("LoanDetails").style.background = "#990000";
    //   document.getElementById("LOAN-DETAILS-footer").style.background = "#990000";
       document.getElementById("CalculateEmi").style.background = "#990000";
    //   document.getElementById("CALCULATE-EMI-footer").style.background = "#990000";
*/    }
function bluebutton() {

	document.getElementById("Row2").className= "row nav-row2-lightBlue";
    document.getElementById("QuickLink").style.background = "#B3C6FF";
   // document.getElementById("QuickLinkFooter").style.background = "#b3ecff";
    document.getElementById("MyQueue").style.background = "#B3C6FF";
    document.getElementById("MYToDoList").style.background = "#B3C6FF";
   // document.getElementById("My-queue-footer").style.background = "#b3ecff";
    document.getElementById("Reports").style.background ="#B3C6FF";
    document.getElementById("panelQuickLinksLabel").className = "label-black";
    
    document.getElementById("rowHomeLabel").className= "control-label navbar-app-label label-black";
    document.getElementById("List1").className = "label-black";
    document.getElementById("panelMyQueue").className = "label-black"; 
    document.getElementById("panelReports").className = "label-black"; 
    document.getElementById("navbarbtnLogout").className = "control-label navbar-app-label label-black";
    document.getElementById("iconFlash").src= "icons/flashblack.png";
    document.getElementById("iconHome").src= "icons/homeblack.png";
    document.getElementById("iconArrow").src= "icons/right arrow black.png";
    document.getElementById("iconNewspaper").src= "icons/newspaperblack.png";
    document.getElementById("iconslist").src= "icons/MyToDoListblack.png";
    
    // ID's of Button
    
    document.getElementById("btnQuotation").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnApplnSearch").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnNewInitiation").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnDashBoard").className ="btn btn-primary btn-layout text-smallsize btn3d btn-BlueTheme label-black";
    document.getElementById("List").className ="btn btn-primary btn-layout text-smallsize  btn3d btn-BlueTheme label-black";
    document.getElementById("btnApplnCourseStudy").className ="btn btn-primary btn-layout text-smallsize  btn-BlueTheme btn3d label-black";
    document.getElementById("btnIncompleteAppln").className ="btn btn-primary btn-layout text-smallsize  btn-BlueTheme btn3d label-black";
    document.getElementById("btnpendingDecAppln").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnReassignedAppln").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnFinancingReq").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnPrintoutGen").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnTurnAroundTask").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnCreditAppln").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnNewActivity").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    document.getElementById("btnApplnDtlsAnalysis").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
    
    document.getElementById("iconslist").src= "icons/MyToDoListblack.png";
    
   /* document.getElementById("btnQuotation").style.background ="#FFAB91";
    document.getElementById("btnApplnSearch").style.background ="#EEEEEE";
    document.getElementById("btnNewInitiation").style.background ="#EEEEEE";
    document.getElementById("btnDashBoard").style.background ="#EEEEEE";
    document.getElementById("List").style.background ="#EEEEEE";
    document.getElementById("btnApplnCourseStudy").style.background ="#B3C6FF";
    document.getElementById("btnIncompleteAppln").style.background ="#B3C6FF";
    document.getElementById("btnpendingDecAppln").style.background ="#B3C6FF";
    document.getElementById("btnReassignedAppln").style.background ="#B3C6FF";
    document.getElementById("btnFinancingReq").style.background ="#B3C6FF";
    document.getElementById("btnPrintoutGen").style.background ="#B3C6FF";
    document.getElementById("btnTurnAroundTask").style.background ="#B3C6FF";
    document.getElementById("btnCreditAppln").style.background ="#B3C6FF";
    document.getElementById("btnNewActivity").style.background ="#B3C6FF";
    document.getElementById("btnApplnDtlsAnalysis").style.background ="#B3C6FF";
    
    */
    
    
    //finished
    
    document.getElementById("headingRow").setAttribute("bgcolor", "#f5f5f5");
    document.getElementById("headingColumn1").className="row-centerClass label-black";
    document.getElementById("headingColumn2").className="row-centerClass label-black";
    document.getElementById("headingColumn3").className="row-centerClass label-black";
    document.getElementById("headingColumn4").className="row-centerClass label-black";
    document.getElementById("headingColumn5").className="row-centerClass label-black";
    document.getElementById("headingColumn6").className="row-centerClass label-black";
    document.getElementById("headingColumn7").className="row-centerClass label-black";
  
    
    //button labels
    
    
    
    
    
 //   document.getElementById("Reports-footer").style.background ="#b3ecff";
   /* document.getElementById("QuickCreditCalculator").style.background = "#b3ecff";
    document.getElementById("ProductDetails").style.background = "#b3ecff";
 //   document.getElementById("PRODUCT-DETAILS-footer").style.background = "#b3ecff";
    document.getElementById("SheduleType").style.background = "#b3ecff";
    document.getElementById("shedule-type-footer").style.background = "#b3ecff";
    document.getElementById("LoanDetails").style.background = "#b3ecff";
  //  document.getElementById("LOAN-DETAILS-footer").style.background = "#b3ecff";
    document.getElementById("CalculateEmi").style.background ="#b3ecff";
  //  document.getElementById("CALCULATE-EMI-footer").style.background = "#b3ecff";
*/ }





















function claculateList() {
	var rows = document.getElementById("table").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
	
	//document.getElementById("List").innerHTML="MY TO DO LIST"+"  "+"["+rows+"]";
	document.getElementById("List1").innerHTML="MY TO DO LIST"+"  "+"["+rows+"]";
	
}

function QoutationIDGeneration() {
	
	var now = new Date();

	timestamp = now.getFullYear().toString(); // 2011
	// JS months are 0-based, so +1 and pad with 0's
	timestamp +=  now.getDate().toString()+now.getMonth()+now.getHours()+now.getMinutes()+now.getSeconds(); 
	//alert(timestamp);
	document.getElementById("QuoID").value=timestamp;
}

function passingArrayToNextPage() {
	window.localStorage.setItem("objectNmae", JSON.stringify(objectName));//saving
	var addQuotationJason = JSON.parse(window.localStorage.getItem("objectName")); // Retrieving
}

function getQuotationValues()
{
	var ID = localStorage.getItem("QuoID");
	/*alert("Objet values>>>>"+ID);*/
	document.getElementById("QuoID1").value=ID;
	
}
// var a=0;
 function AddQuotation() {
	

		/*var addQuotationJason ;

		addQuotationJason ={ "QuoID":document.getElementById("QuoID"),"NetIncome":document.getElementById("NetIncome"),
				"ReccLia":document.getElementById("ReccLia"),"MobNo":document.getElementById("MobNo"),"product":document.getElementById("product"),
				"subProduct":document.getElementById("subProduct"),"Interest":document.getElementById("Interest"),
				"offset":document.getElementById("offset"),"NetInterest":document.getElementById("NetInterest"),
				"Tenure":document.getElementById("Tenure"),"ReqAmt":document.getElementById("ReqAmt"),"emi":document.getElementById("emi"),"collateral":document.getElementById("collateral")
		};*/
//		window.localStorage.setItem("addQuotationJason", JSON.stringify(addQuotationJason));//saving
		/*.innerHTML=document.getElementById("QuoID")*/
		var QuoID="QuoID";
		var NetIncome="NetIncome";
		var ReccLia="ReccLia";
		var MobNo= "MobNo";
		var product= "product";
		var subproduct= "subproduct";
		var Interest= "Interest";
		var offSet= "offSet";
		var NetInterest= "NetInterest";
		var Tenure= "Tenure";
		var ReqAmt= "ReqAmt";
		var emi= "emi";
		var collateral= "collateral";
		console.log("Hare Krishna"+QuoID);
		console.log("Requsted amt"+document.getElementById("ReqAmt").value);
		var value = document.getElementById("ReqAmt").value;
		var rAmt =convertAmtCommas(value);
		
		var valueEmi = document.getElementById("emi").value;
		var emi =  convertAmtCommas(valueEmi);
		
		var currencyAmt3 = document.getElementById("currency").value;
	
		var currency="currency";
		
		localStorage.setItem(QuoID, document.getElementById("QuoID").value);
		localStorage.setItem(NetIncome, document.getElementById("NetIncome").value);
		localStorage.setItem(ReccLia, document.getElementById("ReccLia").value);
		localStorage.setItem(MobNo, document.getElementById("MobNo").value);
		localStorage.setItem(product, document.getElementById("product").value);
		localStorage.setItem(subproduct, document.getElementById("subproduct").value);
		localStorage.setItem(Interest, document.getElementById("rateOfIntrest").value);
		localStorage.setItem(offSet, document.getElementById("offSet").value);
		localStorage.setItem(NetInterest, document.getElementById("netIntrestRate").value);
		localStorage.setItem(Tenure, document.getElementById("Tenure").value);
		localStorage.setItem(ReqAmt, document.getElementById("ReqAmt").value);
		localStorage.setItem(emi, document.getElementById("emi").value);
		localStorage.setItem(collateral, document.getElementById("collateral").value);
		
		localStorage.setItem(currency, document.getElementById("currency").value);
		
	    var tr=document.createElement('tr');
		
		var td1=document.createElement('td');
		var label  = document.createElement('label');
		label.className="mdl-radio mdl-js-radio mdl-js-ripple-effect";
		label.setAttribute("for","xyz");
		var radio=document.createElement('input');
		radio.type="radio";
		radio.className="mdl-radio__button";
		radio.setAttribute("name", "optradio");
		radio.id="xyz";
		
		label.appendChild(radio);
		td1.appendChild(label);
		
		var td2=document.createElement('td');
		td2.innerHTML=document.getElementById("QuoID").value;
		var td3=document.createElement('td');
		td3.innerHTML=rAmt+ " ("+currencyAmt3+")";
		
		var td4=document.createElement('td');
		td4.innerHTML=rAmt+ " ("+currencyAmt3+")";
		var td5=document.createElement('td');
		td5.className = "left-aligned";
		td5.innerHTML=document.getElementById("subproduct").value;
		
		var td6=document.createElement('td');
		td6.innerHTML=emi+ " ("+currencyAmt3+")";
		var td7=document.createElement('td');
	
		
		var checkbox=document.createElement('input');
		var div = document.createElement('div');
		div.className="";
		checkbox.classList="checkbox";
		checkbox.type="checkbox";
		checkbox.setAttribute("checked", "checked");
		checkbox.className="row-centerClass";
		div.appendChild(checkbox);
		td7.className="row-centerClass";
		td7.appendChild(div);
		var td8 = document.createElement('td');
		var delbtn = document.createElement('button');
		var img = document.createElement('img');
		delbtn.onclick=deleteRow;
		img.style.height="18px";
		img.style.width="18px";
		img.src="icons/x-button.png";
		img.setAttribute("alt","delete");
		delbtn.appendChild(img);
		delbtn.className="btb btn-link";
		td8.appendChild(delbtn);
		
		
		

		tr.appendChild(td1);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);

		document.getElementById("mytablebody").appendChild(tr);

		document.getElementById("subproduct").options.length = 0;
		document.getElementById("product").selectedIndex = 0;
		document.getElementById("rateOfIntrest").value="";
		document.getElementById("offSet").value="";
		document.getElementById("netIntrestRate").value="";
		document.getElementById("Tenure").value="";
		document.getElementById("ReqAmt").value="";
		document.getElementById("emi").value="";
		document.getElementById("collateral").value=""	;	
		}

function openWin(){

	  myWindow=window.open("migrate.html", "", "width=1500, height=657");

}

function openWindow(){

	window.open("response.html", "", "width=1500, height=657");

}

function loanCredit(){
	var a= document.getElementById("ApplicationType").value;

	if(a=="Credit Card")
	{

		document.getElementById("loanCredit").innerHTML = "Credit Card Category";

	}
	else
		{
		document.getElementById("loanCredit").innerHTML = "Loan Category";
		}

	}


	
function trimString(field)
{

var x=document.getElementById(field).value;
x=x.toString();
var a = x.substring(x.length-3);
var b = x.substring(0,x.length-3);
if(b != '')
    a = ',' + a;
var res = b.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + a;


document.getElementById(field).value=res;
}



function tabNavigation(PageId) {
	
	
	
	if(PageId=="BasicLAyout"){
		
		document.getElementById("BasicLAyout").className="container layout-container tab-pane active";
		document.getElementById("LosQuotation").className="container layout-container tab-pane";
		document.getElementById("ApplicationScreen").className="container layout-container tab-pane";
		document.getElementById("NewInitiation").className="container layout-container tab-pane";
	}
	if(PageId=="LosQuotation"){
		document.getElementById("BasicLAyout").className="container layout-container tab-pane";
		document.getElementById("LosQuotation").className="container layout-container tab-pane active";
		document.getElementById("ApplicationScreen").className="container layout-container tab-pane";
		document.getElementById("NewInitiation").className="container layout-container tab-pane";
	}
	if(PageId=="ApplicationScreen"){
		document.getElementById("BasicLAyout").className="container layout-container tab-pane";
		document.getElementById("LosQuotation").className="container layout-container tab-pane";
		document.getElementById("ApplicationScreen").className="container layout-container tab-pane active";
		document.getElementById("NewInitiation").className="container layout-container tab-pane";
	}
	if(PageId=="NewInitiation"){
		document.getElementById("BasicLAyout").className="container layout-container tab-pane";
		document.getElementById("LosQuotation").className="container layout-container tab-pane";
		document.getElementById("ApplicationScreen").className="container layout-container tab-pane";
		document.getElementById("NewInitiation").className="container layout-container tab-pane active";
		
	}
	
	}



var appRef = "00000001";
function genRefNo()
{
	 var now = new Date();

	var	timestamp = 0 ; //now.getDate().toString(); // 2011
		// JS months are 0-based, so +1 and pad with 0's
		timestamp =  now.getDate().toString()+now.getMonth()+now.getYear()+01+appRef;
		appRef = appRef +1 ;
		//alert(timestamp);
		//document.getElementById("QuoID").value=timestamp;
	document.getElementById("RefID").value =timestamp ;
	/*alert(timestamp);*/
		 }




$('select[name="loanType"]').change(function(){
	 if($(this).val() == 'Top Up') {
		 alert("Hiii");
	 $('input[name="cashInHand"]').prop('disabled',false); //// cash in hand function
	 $('input[name="totalOutstanding"]').prop('disabled',false);
	 } else {$('input[name="cashInHand"]').prop('disabled',true);
	 $('input[name="totalOutstanding"]').prop('disabled',true);}
	});

function CashInHand() {
	var x=document.getElementById("loanType");
	if(x=="Top Up"){
		
		document.getElementById("cashInHand").disable=false;
		document.getElementById("totalOutstanding").disable=false;
	}
	else{
		document.getElementById("cashInHand").disable=true;
		document.getElementById("totalOutstanding").disable=true;
	}
	}




function getProduct()
{
var a= document.getElementById("product").value;
getSubProduct();
}

function getSubProduct() {

	document.getElementById("subproduct").options.length = 0;
	var a= document.getElementById("product").value;

	if(a == "PERSONAL LOAN")
	{

   var z1 = document.createElement("option");
z1.setAttribute("value", "PERS - UNSECURED LOAN");
var t2 = document.createTextNode("PERS - SECURED LOAN");
z1.appendChild(t2); 
var z2 = document.createElement("option");
z2.setAttribute("value", "PERS - SECURED LOAN");
var t3 = document.createTextNode("PERS - SECURED LOAN");
z2.appendChild(t3); 

 document.getElementById("subproduct").appendChild(z1);
 document.getElementById("subproduct").appendChild(z2);
	}

	if(a == "AGRICULTURE LOAN")
	{


var z = document.createElement("option");
z.setAttribute("value", "AGRI - FARM MACHINERY/EQUIPMENTS");
var t = document.createTextNode("AGRI - FARM MACHINERY/EQUIPMENTS");
 z.appendChild(t);

   var z1 = document.createElement("option");
z1.setAttribute("value", "AGRI-CASH CROP");
var t2 = document.createTextNode("AGRI-CASH CROP");
z1.appendChild(t2); 
var z2 = document.createElement("option");
z2.setAttribute("value", "AGRI - OTHERS");
var t3 = document.createTextNode("AGRI - OTHERS");
z2.appendChild(t3); 

var z3 = document.createElement("option");
z3.setAttribute("value", "AGRI - FOR PLANTATION");
var t4 = document.createTextNode("AGRI - FOR PLANTATION");
z3.appendChild(t4); 



document.getElementById("subproduct").appendChild(z);
 document.getElementById("subproduct").appendChild(z1);
 document.getElementById("subproduct").appendChild(z2);
 document.getElementById("subproduct").appendChild(z3);

	}

	if (a == "HOUSING LOAN") {

	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "HOUSING - NEW CONSTRUCTION");
	    var t2 = document.createTextNode("HOUSING - NEW CONSTRUCTION");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "HOUSING - RENOVATION");
	    var t3 = document.createTextNode("HOUSING - RENOVATION");
	    z2.appendChild(t3);

	    var z3 = document.createElement("option");
	    z3.setAttribute("value", "HOUSING - TAKEOVER ");
	    var t4 = document.createTextNode("HOUSING - TAKEOVER ");
	    z3.appendChild(t4);

	    var z4 = document.createElement("option");
	    z4.setAttribute("value", "HOUSING - PURCHASE OF FLAT/BUILDING/RESORT ETC");
	    var t5 = document.createTextNode("HOUSING - PURCHASE OF FLAT/BUILDING/RESORT ETC");
	    z4.appendChild(t5);

	    var z5 = document.createElement("option");
	    z5.setAttribute("value", "HOUSING - OTHERS");
	    var t6 = document.createTextNode("HOUSING - OTHERS");
	    z5.appendChild(t6);


	    document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);
	    document.getElementById("subproduct").appendChild(z3);
	    document.getElementById("subproduct").appendChild(z4);
	    document.getElementById("subproduct").appendChild(z5);
	}

	if (a == "TRANSPORT LOAN") {


	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "TRANSPORT - NEW PURCHASE FOR COMMERCIAL USE");
	    var t2 = document.createTextNode("TRANSPORT - NEW PURCHASE FOR COMMERCIAL USE");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "TRANSPORT - NEW PURCHASE FOR PERSONAL USE");
	    var t3 = document.createTextNode("TRANSPORT - NEW PURCHASE FOR PERSONAL USE");
	    z2.appendChild(t3);

	    var z3 = document.createElement("option");
	    z3.setAttribute("value", "TRANSPORT - NEW PURCHASE FOR TAXI");
	    var t4 = document.createTextNode("TRANSPORT - NEW PURCHASE FOR TAXI");
	    z3.appendChild(t4);

	    var z4 = document.createElement("option");
	    z4.setAttribute("value", "TRANSPORT - PURCHASE OF USED VEHICLE FOR PERSONAL USE");
	    var t5 = document.createTextNode("TRANSPORT - PURCHASE OF USED VEHICLE FOR PERSONAL USE");
	    z4.appendChild(t5);


	    document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);
	    document.getElementById("subproduct").appendChild(z3);
	    document.getElementById("subproduct").appendChild(z4);

	}

	if (a == "MORTGAGE LOAN") {



	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "MORT: WITHOUT GUARANTOR");
	    var t2 = document.createTextNode("MORT: WITHOUT GUARANTOR");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "MORT: WITH GUARANTOR");
	    var t3 = document.createTextNode("MORT: WITH GUARANTOR");
	    z2.appendChild(t3);

        document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);
	}

	if (a == "EDUCATION LOAN") {


	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "EDNL - TILL CLASS - X ");
	    var t2 = document.createTextNode("EDNL - TILL CLASS - X ");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "EDNL - CLASS - XI & XII");
	    var t3 = document.createTextNode("EDNL - CLASS - XI & XII");
	    z2.appendChild(t3);

	    var z3 = document.createElement("option");
	    z3.setAttribute("value", "EDNL - BACHELOR DEGREE");
	    var t4 = document.createTextNode("EDNL - BACHELOR DEGREE");
	    z3.appendChild(t4);

	    document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);
	    document.getElementById("subproduct").appendChild(z3);

	}

	if (a == "CONSUMER LOAN") {

	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "CONL - WITHOUT COLLATERAL");
	    var t2 = document.createTextNode("CONL - WITHOUT COLLATERAL");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "CONL - WITH COLLATERAL");
	    var t3 = document.createTextNode("CONL - WITH COLLATERAL");
	    z2.appendChild(t3);

	    document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);

	}
	if (a == "FESTIVAL LOAN") {

	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "FEST-PERSONAL CONSUMPTION");
	    var t2 = document.createTextNode("FEST-PERSONAL CONSUMPTION");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "FEST - PERSONAL CONSUMPTION (PUBLIC)");
	    var t3 = document.createTextNode("FEST - PERSONAL CONSUMPTION (PUBLIC)");
	    z2.appendChild(t3);

	    document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);
	}

	if (a == "GOLD LOAN") {

	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "GOLD - LOAN SECURED BY GOLD COINS/BARS/ORNAMENTS");
	    var t2 = document.createTextNode("GOLD - LOAN SECURED BY GOLD COINS/BARS/ORNAMENTS");
	    z1.appendChild(t2);

	    document.getElementById("subproduct").appendChild(z1);
	}
	if (a == "SOFT LOAN") {

	    var z1 = document.createElement("option");
	    z1.setAttribute("value", "SOFT- LOAN TO STAFF FOR PERSONAL CONSUMPTION");
	    var t2 = document.createTextNode("SOFT- LOAN TO STAFF FOR PERSONAL CONSUMPTION");
	    z1.appendChild(t2);
	    var z2 = document.createElement("option");
	    z2.setAttribute("value", "STAFF-SOFT LOAN");
	    var t3 = document.createTextNode("STAFF-SOFT LOAN");
	    z2.appendChild(t3);
	    document.getElementById("subproduct").appendChild(z1);
	    document.getElementById("subproduct").appendChild(z2);
	}

}

function getRateOfIntrest() {

    var subProducts = document.getElementById("subproduct").value;
    if (subProducts == "AGRI - FARM MACHINERY/EQUIPMENTS") {
        document.getElementById("rateOfIntrest").value = "6"; }

        if (subProducts == "AGRI - FARM MACHINERY/EQUIPMENTS") {
            document.getElementById("rateOfIntrest").value = "6";
        }

    		if (subProducts == "AGRI-CASH CROP") {
            document.getElementById("rateOfIntrest").value = "6";
    		}	
            if (subProducts == "AGRI - OTHERS") {
            document.getElementById("rateOfIntrest").value = "5";
            }
            if (subProducts == "HOUSING - NEW CONSTRUCTION") {
            document.getElementById("rateOfIntrest").value = "10";
            }
            if (subProducts == "HOUSING - RENOVATION") {
            document.getElementById("rateOfIntrest").value = "10";
            }
            if (subProducts == "HOUSING - TAKEOVER ") {
            document.getElementById("rateOfIntrest").value = "11";
            }
            if (subProducts == "HOUSING - PURCHASE OF FLAT/BUILDING/RESORT ETC") {
            document.getElementById("rateOfIntrest").value = "11";
            }
            if (subProducts == "HOUSING - OTHERS") {
            document.getElementById("rateOfIntrest").value = "12";
            }
            if (subProducts == "TRANSPORT - NEW PURCHASE FOR COMMERCIAL USE") {
            document.getElementById("rateOfIntrest").value = "8";
            }
            if (subProducts == "TRANSPORT - NEW PURCHASE FOR PERSONAL USE") {
            document.getElementById("rateOfIntrest").value = "8";
            }
            if (subProducts == "TRANSPORT - NEW PURCHASE FOR TAXI") {
            document.getElementById("rateOfIntrest").value = "8";
            }
            if (subProducts == "TRANSPORT - PURCHASE OF USED VEHICLE FOR PERSONAL USE") {
            document.getElementById("rateOfIntrest").value = "8";
            }
            if (subProducts == "TRANSPORT - PURCHASE OF USED VEHICLE FOR COMMERCIAL USE") {
            document.getElementById("rateOfIntrest").value = "8";
            }
            if (subProducts == "MORT: WITHOUT GUARANTOR") {
            document.getElementById("rateOfIntrest").value = "9";
            }
            if (subProducts == "MORT: WITH GUARANTOR") {
            document.getElementById("rateOfIntrest").value = "9";
            }
            if (subProducts == "MORT: WITH GUARANTOR") {
            document.getElementById("rateOfIntrest").value = "4";
            }

            if (subProducts == "EDNL - CLASS - XI & XII") {
            document.getElementById("rateOfIntrest").value = "6";
            }
            if (subProducts == "EDNL - BACHELOR DEGREE") {
            document.getElementById("rateOfIntrest").value = "6";
            }		    
            if (subProducts == "CONL - WITHOUT COLLATERAL") {
    		document.getElementById("rateOfIntrest").value = "12";
            }	
    		if (subProducts == "CONL - WITH COLLATERAL") {
            document.getElementById("rateOfIntrest").value = "12";
    		}		
            if (subProducts == "FEST-PERSONAL CONSUMPTION") {
            document.getElementById("rateOfIntrest").value = "6";
            }
            if (subProducts == "FEST - PERSONAL CONSUMPTION (PUBLIC)") {
            document.getElementById("rateOfIntrest").value = "6";
            }
            if (subProducts == "GOLD - LOAN SECURED BY GOLD COINS/BARS/ORNAMENTS") {
            document.getElementById("rateOfIntrest").value = "10";
            }
            if (subProducts == "SOFT- LOAN TO STAFF FOR PERSONAL CONSUMPTION") {
            document.getElementById("rateOfIntrest").value = "3";
            }
            if (subProducts == "STAFF-SOFT LOAN") {
            document.getElementById("rateOfIntrest").value = "12";
            }
            if (subProducts == "PERSONAL LOAN") {
            document.getElementById("rateOfIntrest").value = "6";
            }
            if (subProducts == "PERS - UNSECURED LOAN") {
            document.getElementById("rateOfIntrest").value = "12";
            }
            if (subProducts == "PERS - SECURED LOAN") {
            document.getElementById("rateOfIntrest").value = "12";
            }


            }

function populateNetIntrestRate() {
    var rateOfIntrest = document.getElementById("rateOfIntrest").value;
    var offSet = document.getElementById("offSet").value;

    var collateralVal = (+rateOfIntrest) + (+offSet);
    document.getElementById("netIntrestRate").value = collateralVal;

}


$(document).on('change', ':radio[name="optradio"]', function () {
	
    arOfVals = $(this).parent().nextAll().map(function () {
       return $(this).text();
   }).get();
    /*document.getElementById("recommendedAmount").value = arOfVals[2];
    document.getElementById("emi").value = arOfVals[3];
    document.getElementById("amountRequired").value = arOfVals[2];
    document.getElementById("amount").value = arOfVals[1];*/
    document.getElementById("subproduct").selectedIndex = 0;
    document.getElementById("Tenure").value = localStorage.getItem("Tenure");
    document.getElementById("ReqAmt").value = localStorage.getItem("ReqAmt");
    document.getElementById("NetIncome").value = localStorage.getItem("NetIncome");
    document.getElementById("product").value = localStorage.getItem("product");

    setSubProduct(localStorage.getItem("subproduct"));
    document.getElementById("offSet").value = localStorage.getItem("offSet");
    document.getElementById("emi").value = localStorage.getItem("emi");
    document.getElementById("netIntrestRate").value = localStorage.getItem("NetInterest");
    document.getElementById("rateOfIntrest").value = localStorage.getItem("Interest");
    document.getElementById("NetIncome").value = localStorage.getItem("NetIncome");
    document.getElementById("ReccLia").value = localStorage.getItem("ReccLia");
    document.getElementById("MobNo").value = localStorage.getItem("MobNo");
    document.getElementById("collateral").value = localStorage.getItem("collateral");
});


function setSubProduct(subProduct) {
	document.getElementById("subproduct").options.length = 0;
	//var a= document.getElementById("product").value;
  var z1 = document.createElement("option");
z1.setAttribute("value", subProduct);
var t2 = document.createTextNode(subProduct);
z1.appendChild(t2); 

 document.getElementById("subproduct").appendChild(z1);
 	}


function genEmi()
{  
	
	//alert(Math.floor(Math.random() * 900) + 1000);
	//document.getElementById("emi").value = Math.floor(Math.random() * 900) + 1000;
	var interestRate = document.getElementById("netIntrestRate").value;
	var tenure = document.getElementById("Tenure").value;
	var loanAmount =  document.getElementById("ReqAmt").value;
	 
	 
	if(loanAmount.toString() != "" && tenure.toString() != "" && interestRate.toString() != ""){
	 
	localStorage.setItem("rateOfInterest", interestRate);
	localStorage.setItem("tenure", tenure);
	localStorage.setItem("loanAmount", loanAmount);
	 
	window.open("emiCalculator.html",null,"height=1000,width=1300,status=yes,toolbar=no,menubar=no,location=no");
	}
	 
	else {
	window.alert("Loan Amount, Interest Rate and Tenure cannot be empty! ");
	}
	
 }

function deleteRow(event){
		
		var deleteIcon =  event.srcElement.parentNode.parentNode.parentNode;
		//alert(" Hari Bol "+deleteIcon.id);
	 return deleteIcon.parentNode.removeChild(deleteIcon);
		//document.getElementById("initiationTableBody").deleteRow();
	}

function changeColorEMI(){
	 var tr = document.getElementById('mytablebody')
    .getElementsByTagName('tr')[0];
tr.style.backgroundColor = '#00ffcc';



var table = document.getElementById("mytablebody");
var rowNum;
var rows = table.rows;
//for (var i = 0, row; row = table.rows[i]; i++) {

var cells = rows[0].cells;
var reqAmt = cells[4].innerHTML;


//}
	
	
	
}

function convertAmtCommas(value)
{


x=value.toString();
var a = x.substring(x.length-3);
var b = x.substring(0,x.length-3);
if(b != '')
    a = ',' + a;
var res = b.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + a;

return res;
}

