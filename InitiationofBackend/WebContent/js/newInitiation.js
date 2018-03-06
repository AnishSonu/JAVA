
 var a=0;
 localStorage.setItem("Enries", "1");
 function AddInitiation() {
		//$('#initiationTableBody > tr').eq(3).children('td').remove();

//		obj=document.getElementById('initiationTableBody');
//		rws=obj.getElementsByTagName('TR');
//		obj.removeChild(rws[rws.length-1]);

		var QuoID="QuoID"+a;

		localStorage.setItem("RefID1", document.getElementById("RefID").value);
		localStorage.setItem("QuoID2", document.getElementById("QuoID1").value);
		localStorage.setItem("CIFNo1", document.getElementById("CIFNo").value);
		localStorage.setItem("NetID1", document.getElementById("NetID").value);
		localStorage.setItem("mobileNo1", document.getElementById("mobileNo").value);
		localStorage.setItem("name1", document.getElementById("name").value);
		localStorage.setItem("companyName1", document.getElementById("companyName").value);
		localStorage.setItem("ApplicationType1", document.getElementById("ApplicationType").value);
		localStorage.setItem("loanType1", document.getElementById("loanType").value);
		localStorage.setItem("sourceOfIncome1", document.getElementById("sourceOfIncome").value);
		localStorage.setItem("totalmonthlysal1", document.getElementById("totalmonthlysal").value);
		localStorage.setItem("currency1", document.getElementById("currencyIn").value);

		localStorage.setItem("precesingBranch1", document.getElementById("precesingBranch").value);
		localStorage.setItem("recurringLia1", document.getElementById("recurringLia").value);
		localStorage.setItem("product1", document.getElementById("product").value);
		localStorage.setItem("subproduct1", document.getElementById("subproduct").value);
		localStorage.setItem("ReqAmt1", document.getElementById("ReqAmt").value);
		localStorage.setItem("intrestRate1", document.getElementById("intrestRate").value);
		localStorage.setItem("offSet1", document.getElementById("offSet").value);

		localStorage.setItem("precesingBranch1", document.getElementById("precesingBranch").value);
		localStorage.setItem("netIntrestRate1", document.getElementById("netIntrestRate").value);
		localStorage.setItem("tenure1", document.getElementById("tenure").value);
		localStorage.setItem("cashInHand1", document.getElementById("cashInHand").value);
		localStorage.setItem("totalOutstanding1", document.getElementById("totalOutstanding").value);
		localStorage.setItem("remarks1", document.getElementById("remarks").value);
		var value = document.getElementById("ReqAmt").value;
		var rAmt =convertAmtCommas(value);

		var currencyAmt1 = document.getElementById("currencyIn").value;
		var tr=document.createElement('tr');
		var td1=document.createElement('td');
		var radio=document.createElement('input');
		radio.type="radio";
		radio.className="radio";
		radio.setAttribute("name", "optradio1");
		radio.id="optradio";
		td1.appendChild(radio);
		var td2=document.createElement('td');
		td2.innerHTML=document.getElementById("RefID").value;
		var td3=document.createElement('td');
		td3.className = "left-aligned";
		td3.innerHTML=document.getElementById("name").value;
		var td4=document.createElement('td');
		td4.className  = "left-aligned";
		td4.innerHTML=document.getElementById("subproduct").value;
		var td5=document.createElement('td');
		//td5.className = "left-aligned";
		td5.innerHTML=document.getElementById("ReqAmt").value + " ("+currencyAmt1+")";
		var td6 = document.createElement('td');
		var delbtn = document.createElement('button');
		var img = document.createElement('img');
		delbtn.onclick=deleteRow;
		img.style.height="18px";
		img.style.width="18px";
		img.src="icons/x-button.png";
		img.setAttribute("alt","delete");
		delbtn.appendChild(img);
		delbtn.className="btb btn-link";
		td6.appendChild(delbtn);
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		document.getElementById("initiationTableBody").appendChild(tr);

		document.getElementById("subproduct").options.length = 0;
		document.getElementById("product").selectedIndex = 0;
		document.getElementById("intrestRate").value="";
		document.getElementById("offSet").value="";
		document.getElementById("netIntrestRate").value="";
		document.getElementById("tenure").value="";
		document.getElementById("ReqAmt").value="";
		document.getElementById("currencyIn").options.length = 0;


		//document.getElementById("emi").value="";
		//document.getElementById("collateral").value="";		
		}
function populateInitiationGrid()
{
//alert("inside new initiation screen");
//alert("Quotaion id>>"+localStorage.getItem("QuoID"));
//alert("ner income>>>"+localStorage.getItem("NetIncome"));
	generateGridFromQuotation();
}

function generateGridFromQuotation()
{
	if(localStorage.getItem("QuoID") != null)
 {
		
		var value = localStorage.getItem("ReqAmt");
		var rAmt =convertAmtCommas(value);	
		//alert("rAmt>>"+rAmt);
	var tr=document.createElement('tr');
	var td1=document.createElement('td');
	var radio=document.createElement('input');
	radio.type="radio";
	radio.className="radio";
	radio.setAttribute("name", "optradio1");
	radio.id="optradio1";
	td1.appendChild(radio);
	var td2=document.createElement('td');
	td2.innerHTML=localStorage.getItem("QuoID");
	var td3=document.createElement('td');
	td3.className="left-aligned";
	td3.innerHTML="Mr.kamran";
	var td4=document.createElement('td');
	td4.className  = "left-aligned";
	td4.innerHTML=localStorage.getItem("subproduct");
	var td5=document.createElement('td');
	
	var currency1 = localStorage.getItem("currency");
	
	
	
	td5.innerHTML=rAmt + " ("+currency1+")";
	
	var td6 = document.createElement('td');
	var delbtn = document.createElement('button');
	var img = document.createElement('img');
	delbtn.onclick=deleteRow;
	img.style.height="18px";
	img.style.width="18px";
	img.src="icons/x-button.png";
	img.setAttribute("alt","delete");
	delbtn.appendChild(img);
	delbtn.className="btb btn-link";
	td6.appendChild(delbtn);
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);

	document.getElementById("initiationTableBody").appendChild(tr);	
 }

	$(document).on('change', ':radio[name="optradio1"]', function () {
	    arOfVals = $(this).parent().nextAll().map(function () {
	       return $(this).text();
	   }).get();
	    document.getElementById("product").value = localStorage.getItem("product");
	 //   document.getElementById("subproduct").value = localStorage.getItem("subproduct");
	   // generateSubProduct(localStorage.getItem("subproduct"));
	    document.getElementById("ReqAmt").value = localStorage.getItem("ReqAmt");
	    document.getElementById("offSet").value = localStorage.getItem("offSet");
	    setSubProduct(localStorage.getItem("subproduct"));
	    document.getElementById("netIntrestRate").value = localStorage.getItem("NetInterest");
	    document.getElementById("intrestRate").value = localStorage.getItem("Interest");
	    document.getElementById("tenure").value = localStorage.getItem("Tenure");

	});
}



function setSubProduct(subProduct) {
	document.getElementById("subproduct").options.length = 0;
	//var a= document.getElementById("product").value;
  var z1 = document.createElement("option");
z1.setAttribute("value", subProduct);
var t2 = document.createTextNode(subProduct);
z1.appendChild(t2); 

 document.getElementById("subproduct").appendChild(z1);
 	}


function getRateOfIntrestInitiation() {
      var subProducts = document.getElementById("subproduct").value;

    if (subProducts == "AGRI - FARM MACHINERY/EQUIPMENTS") {
        document.getElementById("intrestRate").value = "6"; }

        if (subProducts == "AGRI - FARM MACHINERY/EQUIPMENTS") {
            document.getElementById("intrestRate").value = "6";
        }

    		if (subProducts == "AGRI-CASH CROP") {
            document.getElementById("intrestRate").value = "6";
    		}	
            if (subProducts == "AGRI - OTHERS") {
            document.getElementById("intrestRate").value = "5";
            }
            if (subProducts == "HOUSING - NEW CONSTRUCTION") {
            document.getElementById("intrestRate").value = "10";
            }
            if (subProducts == "HOUSING - RENOVATION") {
            document.getElementById("intrestRate").value = "10";
            }
            if (subProducts == "HOUSING - TAKEOVER ") {
            document.getElementById("intrestRate").value = "11";
            }
            if (subProducts == "HOUSING - PURCHASE OF FLAT/BUILDING/RESORT ETC") {
            document.getElementById("intrestRate").value = "11";
            }
            if (subProducts == "HOUSING - OTHERS") {
            document.getElementById("intrestRate").value = "12";
            }
            if (subProducts == "TRANSPORT - NEW PURCHASE FOR COMMERCIAL USE") {
            document.getElementById("intrestRate").value = "8";
            }
            if (subProducts == "TRANSPORT - NEW PURCHASE FOR PERSONAL USE") {
            document.getElementById("intrestRate").value = "8";
            }
            if (subProducts == "TRANSPORT - NEW PURCHASE FOR TAXI") {
            document.getElementById("intrestRate").value = "8";
            }
            if (subProducts == "TRANSPORT - PURCHASE OF USED VEHICLE FOR PERSONAL USE") {
            document.getElementById("intrestRate").value = "8";
            }
            if (subProducts == "TRANSPORT - PURCHASE OF USED VEHICLE FOR COMMERCIAL USE") {
            document.getElementById("intrestRate").value = "8";
            }
            if (subProducts == "MORT: WITHOUT GUARANTOR") {
            document.getElementById("intrestRate").value = "9";
            }
            if (subProducts == "MORT: WITH GUARANTOR") {
            document.getElementById("intrestRate").value = "9";
            }
            if (subProducts == "MORT: WITH GUARANTOR") {
            document.getElementById("intrestRate").value = "4";
            }

            if (subProducts == "EDNL - CLASS - XI & XII") {
            document.getElementById("intrestRate").value = "6";
            }
            if (subProducts == "EDNL - BACHELOR DEGREE") {
            document.getElementById("intrestRate").value = "6";
            }		    
            if (subProducts == "CONL - WITHOUT COLLATERAL") {
    		document.getElementById("intrestRate").value = "12";
            }	
    		if (subProducts == "CONL - WITH COLLATERAL") {
            document.getElementById("intrestRate").value = "12";
    		}		
            if (subProducts == "FEST-PERSONAL CONSUMPTION") {
            document.getElementById("intrestRate").value = "6";
            }
            if (subProducts == "FEST - PERSONAL CONSUMPTION (PUBLIC)") {
            document.getElementById("intrestRate").value = "6";
            }
            if (subProducts == "GOLD - LOAN SECURED BY GOLD COINS/BARS/ORNAMENTS") {
            document.getElementById("intrestRate").value = "10";
            }
            if (subProducts == "SOFT- LOAN TO STAFF FOR PERSONAL CONSUMPTION") {
            document.getElementById("intrestRate").value = "3";
            }
            if (subProducts == "STAFF-SOFT LOAN") {
            document.getElementById("intrestRate").value = "12";
            }
            if (subProducts == "PERSONAL LOAN") {
            document.getElementById("intrestRate").value = "6";
            }
            if (subProducts == "PERS - UNSECURED LOAN") {
            document.getElementById("intrestRate").value = "12";
            }
            if (subProducts == "PERS - SECURED LOAN") {
                document.getElementById("intrestRate").value = "12";
                }


                }

    function populateNetIntrestRateInitiation() {
        var rateOfIntrest = document.getElementById("intrestRate").value;
        var offSet = document.getElementById("offSet").value;

        var collateralVal = (+rateOfIntrest) + (+offSet);
        document.getElementById("netIntrestRate").value = collateralVal;

    }
    function generateSubProduct(field)
    {
    		  var z9 = document.createElement("option");
    		  z9.setAttribute("value", field);
    		  var t9 = document.createTextNode(field);
    		  z9.appendChild(t9); 
    		  document.getElementById("subproduct").appendChild(z9);

    	}

    function modifiedExitedEntries()
    {

    	}

            
            
    function wrapperAddModify(){
    	
   	 var am=getRadioVal();
   	 if(am){
   		 var rowNum=getCheckedRowNo();
   		 document.getElementById("initiationTableBody").deleteRow(rowNum);
   		 AddInitiation();
   	 }
   	 else{
   		 AddInitiation();
   	 }
    }



   	 function getRadioVal() {
   		 var table = document.getElementById("initiationTableBody");
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
   		 var table = document.getElementById("initiationTableBody");
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
            
            
   	function deleteRow(event){
   		
   		var deleteIcon =  event.srcElement.parentNode.parentNode.parentNode;
   		//alert(" Hari Bol "+deleteIcon.id);
   	 return deleteIcon.parentNode.removeChild(deleteIcon);
   		//document.getElementById("initiationTableBody").deleteRow();
   	}       
            
            
   	function popupwindow(url, title, w, h) {
  	  var left = (screen.width/2)-(w/2);
  	  var top = (screen.height/2)-(h/2);
  	  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
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
            