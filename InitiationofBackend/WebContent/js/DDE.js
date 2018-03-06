

function deleteRow(event){
		
		var deleteIcon =  event.srcElement.parentNode.parentNode.parentNode;
		//alert(" Hari Bol "+deleteIcon.id);
	 return deleteIcon.parentNode.removeChild(deleteIcon);
		//document.getElementById("initiationTableBody").deleteRow();
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
 function AddCorporateDtls() {

		/*var addQuotationJason ;

		addQuotationJason ={ "QuoID":document.getElementById("QuoID"),"NetIncome":document.getElementById("NetIncome"),
				"ReccLia":document.getElementById("ReccLia"),"MobNo":document.getElementById("MobNo"),"product":document.getElementById("product"),
				"subProduct":document.getElementById("subProduct"),"Interest":document.getElementById("Interest"),
				"offset":document.getElementById("offset"),"NetInterest":document.getElementById("NetInterest"),
				"Tenure":document.getElementById("Tenure"),"ReqAmt":document.getElementById("ReqAmt"),"emi":document.getElementById("emi"),"collateral":document.getElementById("collateral")
		};*/
//		window.localStorage.setItem("addQuotationJason", JSON.stringify(addQuotationJason));//saving
		/*.innerHTML=document.getElementById("QuoID")*/
		/* var cifNo="cifNo";
		var applicantType="applicantType";
		var customerType="customerType";
		var nationalID= "nationalID";
		var title= "title";
		var fName= "fName";
		var middleName= "middleName";
		var lastName= "lastName";
		var staff= "staff";
		var DOB= "DOB";
		var gender= "gender";
		var maritialStatus= "maritialStatus";
		var education= "education";
		var nationality= "nationality";
		var relationToBorrower= "relationToBorrower";
		var bankCustomer= "bankCustomer";
		var mailTo= "mailTo";
		var savingAccountNO= "savingAccountNO";
		var housingStatus= "housingStatus";
		var currentresidence= "currentresidence"



		
		console.log("Hare Krishna"+QuoID);
		localStorage.setItem(cifNo, document.getElementById("cifNo").value);
		localStorage.setItem(applicantType, document.getElementById("applicantType").value);
		localStorage.setItem(customerType, document.getElementById("customerType").value);
		localStorage.setItem(nationalID, document.getElementById("nationalID").value);
		localStorage.setItem(title, document.getElementById("title").value);
		localStorage.setItem(fName, document.getElementById("fName").value);
		localStorage.setItem(middleName, document.getElementById("middleName").value);
		localStorage.setItem(lastName, document.getElementById("lastName").value);
		localStorage.setItem(staff, document.getElementById("staff").value);
		localStorage.setItem(DOB, document.getElementById("DOB").value);
		localStorage.setItem(gender, document.getElementById("gender").value);
		localStorage.setItem(maritialStatus, document.getElementById("maritialStatus").value);
		localStorage.setItem(education, document.getElementById("education").value);
		localStorage.setItem(nationality, document.getElementById("nationality").value);
		localStorage.setItem(relationToBorrower, document.getElementById("relationToBorrower").value);
		localStorage.setItem(bankCustomer, document.getElementById("bankCustomer").value);
		localStorage.setItem(mailTo, document.getElementById("mailTo").value);
		localStorage.setItem(savingAccountNO, document.getElementById("savingAccountNO").value);
		localStorage.setItem(housingStatus, document.getElementById("housingStatus").value);
		localStorage.setItem(currentresidence, document.getElementById("currentresidence").value);
		
		alert("hi"+document.getElementById("currentresidence").value);
 */
    var cifNo="cifNo";
	var CustomerName="CustomerName";
	var applicantType="applicantType";
	var corpcustomertype= "corpcustomertype";
	var region= "region";
	var businessLicenseRegDate= "businessLicenseRegDate";
	var ok= "ok";
	var businessLicenseNO= "businessLicenseNO";
	var NatureOfBusiness= "NatureOfBusiness";
	var industryClassification= "industryClassification";
	
	var datepicker3= "datepicker3";
	var datepicker1= "datepicker1";
	var CA_AccoutNo= "CA_AccoutNo";
	var CEO  = "CEO";
	var signatoryName= "signatoryName";
	var focalPersonName= "focalPersonName"; 
     var datepicker4 ="datepicker4";
     var datepicker2= "datepicker2";
	localStorage.setItem(cifNo, document.getElementById("cifNo").value);
	localStorage.setItem(CustomerName, document.getElementById("CustomerName").value);
	localStorage.setItem(applicantType, document.getElementById("applicantType").value);
	localStorage.setItem(corpcustomertype, document.getElementById("corpcustomertype").value);
	localStorage.setItem(region, document.getElementById("region").value);
	localStorage.setItem(businessLicenseRegDate, document.getElementById("businessLicenseRegDate").value);
	
	localStorage.setItem(NatureOfBusiness, document.getElementById("NatureOfBusiness").value);
	localStorage.setItem(businessLicenseNO, document.getElementById("businessLicenseNO").value);
	localStorage.setItem(industryClassification, document.getElementById("industryClassification").value);
	
	localStorage.setItem(datepicker3, document.getElementById("datepicker3").value);
	localStorage.setItem(datepicker1, document.getElementById("datepicker1").value);
	localStorage.setItem(datepicker2, document.getElementById("datepicker2").value);
	localStorage.setItem(CA_AccoutNo, document.getElementById("CA_AccoutNo").value);
	localStorage.setItem(CEO, document.getElementById("CEO").value);
	localStorage.setItem(signatoryName, document.getElementById("signatoryName").value);
	localStorage.setItem(focalPersonName, document.getElementById("focalPersonName").value);
	localStorage.setItem(datepicker4, document.getElementById("datepicker4").value);
	
	
	    var tr=document.createElement('tr');
		var td1=document.createElement('td');
		var radio=document.createElement('input');
		radio.type="radio";
		radio.className="radio";
		radio.setAttribute("name", "optradio1");
		radio.id="optradio1";
		td1.appendChild(radio);
		var td2=document.createElement('td');
		td2.innerHTML=document.getElementById("cifNo").value;
		var td3=document.createElement('td');
		td3.innerHTML=document.getElementById("corpcustomertype").value;
		var td4=document.createElement('td');
		td4.innerHTML=document.getElementById("CustomerName").value;
		var td5=document.createElement('td');
		td5.innerHTML=document.getElementById("datepicker3").value;
		var td6=document.createElement('td');
		td6.innerHTML="Sector";
		var td7=document.createElement('td');
		td7.innerHTML="Sub Sector";
		
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
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		 tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);
		document.getElementById("mytablebody11").appendChild(tr);

	/* 	document.getElementById("subproduct").options.length = 0;
		document.getElementById("product").selectedIndex = 0;
		document.getElementById("rateOfIntrest").value="";
		document.getElementById("offSet").value="";
		document.getElementById("netIntrestRate").value="";
		document.getElementById("Tenure").value="";
		document.getElementById("ReqAmt").value="";
		document.getElementById("emi").value="";
		document.getElementById("collateral").value=""	;	 */ 
		}
	function clearCollateraldtls()
	{
		
		document.getElementById("cifNo").value="";
		document.getElementById("CustomerName").value="";
		document.getElementById("applicantType").value="";
		document.getElementById("corpcustomertype").value="";
		document.getElementById("region").value="";
		document.getElementById("businessLicenseRegDate").value="";
		
		document.getElementById("CustomerName").value="";
		document.getElementById("businessLicenseNO").value="";
		document.getElementById("NatureOfBusiness").value="";
		document.getElementById("industryClassification").value="";
		document.getElementById("datepicker3").value="";
		document.getElementById("datepicker1").value="";
		document.getElementById("datepicker2").value="";
		document.getElementById("CA_AccoutNo").value="";
		document.getElementById("CEO").value="";
		document.getElementById("signatoryName").value="";
		document.getElementById("focalPersonName").value="";
		document.getElementById("datepicker2").value="";
		document.getElementById("datepicker4").value="";
		
		}
	function AddIndividualdtls() 
	{
		
				/*var addQuotationJason ;

				addQuotationJason ={ "QuoID":document.getElementById("QuoID"),"NetIncome":document.getElementById("NetIncome"),
						"ReccLia":document.getElementById("ReccLia"),"MobNo":document.getElementById("MobNo"),"product":document.getElementById("product"),
						"subProduct":document.getElementById("subProduct"),"Interest":document.getElementById("Interest"),
						"offset":document.getElementById("offset"),"NetInterest":document.getElementById("NetInterest"),
						"Tenure":document.getElementById("Tenure"),"ReqAmt":document.getElementById("ReqAmt"),"emi":document.getElementById("emi"),"collateral":document.getElementById("collateral")
				};*/
				
//				window.localStorage.setItem("addQuotationJason", JSON.stringify(addQuotationJason));saving
				
			
				 var cifNo="cifNo";
				var applicantType="applicantType";
				var indcustomerType="indcustomerType";
				var nationalID= "nationalID";
				var title= "title";
				var fName= "fName";
				var middleName= "middleName";
				var lastName= "lastName";
				var staff= "staff";
				var DOB= "DOB";
				var gender= "gender";
				var maritialStatus= "maritialStatus";
				var education= "education";
				var nationality= "nationality";
				var relationToBorrower= "relationToBorrower";
				var bankCustomer= "bankCustomer";
				var mailTo= "mailTo";
				var savingAccountNO= "savingAccountNO";
				var housingStatus= "housingStatus";
				var currentresidence= "currentresidence"



				
			
				localStorage.setItem(cifNo, document.getElementById("cifNo").value);
				localStorage.setItem(applicantType, document.getElementById("applicantType").value);
				localStorage.setItem(indcustomerType, document.getElementById("indcustomerType").value);
				localStorage.setItem(nationalID, document.getElementById("nationalID").value);
				localStorage.setItem(title, document.getElementById("title").value);
				localStorage.setItem(fName, document.getElementById("fName").value);
				localStorage.setItem(middleName, document.getElementById("middleName").value);
				localStorage.setItem(lastName, document.getElementById("lastName").value);
				localStorage.setItem(staff, document.getElementById("staff").value);
				localStorage.setItem(DOB, document.getElementById("DOB").value);
				localStorage.setItem(gender, document.getElementById("gender").value);
				localStorage.setItem(maritialStatus, document.getElementById("maritialStatus").value);
				localStorage.setItem(education, document.getElementById("education").value);
				localStorage.setItem(nationality, document.getElementById("nationality").value);
				localStorage.setItem(relationToBorrower, document.getElementById("relationToBorrower").value);
				localStorage.setItem(bankCustomer, document.getElementById("bankCustomer").value);
				localStorage.setItem(mailTo, document.getElementById("mailTo").value);
				localStorage.setItem(savingAccountNO, document.getElementById("savingAccountNO").value);
				localStorage.setItem(housingStatus, document.getElementById("housingStatus").value);
				localStorage.setItem(currentresidence, document.getElementById("currentresidence").value);
				
		 var tr=document.createElement('tr');
		var td1=document.createElement('td');
		var radio=document.createElement('input');
		radio.type="radio";
		radio.className="radio";
		radio.setAttribute("name", "optradio8");
		radio.id="optradio8";
		td1.appendChild(radio);
		var td2=document.createElement('td');
		td2.innerHTML=document.getElementById("cifNo").value;
		var td3=document.createElement('td');
		td3.innerHTML=document.getElementById("indcustomerType").value;
		var td4=document.createElement('td');
		td4.innerHTML="Anish";
		var td5=document.createElement('td');
		td5.innerHTML=document.getElementById("DOB").value;
	
		var td6=document.createElement('td');
		td6.innerHTML=document.getElementById("bankCustomer").value;
		var td7=document.createElement('td');
		td7.innerHTML=document.getElementById("nationalID").value;
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
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		 tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(td8);
		document.getElementById("mytablebody13").appendChild(tr);
		
	}
		function clearIndividualdtls()
		{
			
			document.getElementById("cifNo").value="";
			document.getElementById("applicantType").value="";
			document.getElementById("indcustomerType").value="";
			document.getElementById("nationalID").value="";
			document.getElementById("title").value="";
			document.getElementById("fName").value="";
			document.getElementById("middleName").value="";
			document.getElementById("lastName").value="";
			document.getElementById("staff").value="";
			document.getElementById("DOB").value="";
			document.getElementById("gender").value="";
			document.getElementById("maritialStatus").value="";
			document.getElementById("education").value="";
			document.getElementById("nationality").value="";
			document.getElementById("relationToBorrower").value="";
			document.getElementById("bankCustomer").value="";
			document.getElementById("mailTo").value="";
			document.getElementById("savingAccountNO").value="";
			document.getElementById("housingStatus").value="";
			document.getElementById("currentresidence").value="";
			



			}
		$(document).on('change', ':radio[name="optradio1"]', function () {
			
		    arOfVals = $(this).parent().nextAll().map(function () {
		       return $(this).text();
		   }).get();
		    /*document.getElementById("recommendedAmount").value = arOfVals[2];
		    document.getElementById("emi").value = arOfVals[3];
		    document.getElementById("amountRequired").value = arOfVals[2];
		    document.getElementById("amount").value = arOfVals[1];*/
		 
		    document.getElementById("cifNo").value = localStorage.getItem("cifNo");
		    document.getElementById("CustomerName").value = localStorage.getItem("CustomerName");
		    document.getElementById("applicantType").value = localStorage.getItem("applicantType");
		    document.getElementById("corpcustomertype").value = localStorage.getItem("corpcustomertype");

		   
		    document.getElementById("region").value = localStorage.getItem("region");
		    document.getElementById("businessLicenseRegDate").value = localStorage.getItem("businessLicenseRegDate");
		 
		    document.getElementById("NatureOfBusiness").value = localStorage.getItem("NatureOfBusiness");
		    document.getElementById("businessLicenseNO").value = localStorage.getItem("businessLicenseNO");
		    document.getElementById("industryClassification").value = localStorage.getItem("industryClassification");
		    document.getElementById("datepicker3").value = localStorage.getItem("datepicker3");
		    document.getElementById("datepicker1").value = localStorage.getItem("datepicker1");
		    document.getElementById("CA_AccoutNo").value = localStorage.getItem("CA_AccoutNo");
		    document.getElementById("CEO").value = localStorage.getItem("CEO");
		    document.getElementById("signatoryName").value = localStorage.getItem("signatoryName");
		    document.getElementById("focalPersonName").value = localStorage.getItem("focalPersonName");
		    document.getElementById("datepicker4").value = localStorage.getItem("datepicker4");
		    
		    document.getElementById("datepicker2").value = localStorage.getItem("datepicker2");
		    
		    
		});
		function wrapperAddModifycor(){
		

			 var am=getRadioVal();
			 if(am){
				 var rowNum=getCheckedRowNo();

				
					 document.getElementById("mytablebody11").deleteRow(rowNum);
					 AddCorporateDtls();
				 
				 
			 }
			 else{
				 AddCorporateDtls();
				

			 }
		}



			 function getRadioVal() {
				 var table = document.getElementById("mytablebody11");
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
				 var table = document.getElementById("mytablebody11");
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
				
function clearOccuptiondtls()
{

	
	document.getElementById("appltype").value="";
	document.getElementById("occcustomertype").value="";
	document.getElementById("occupation").value="";
	document.getElementById("companyCategory").value="";
	document.getElementById("natureofservice").value="";
	document.getElementById("grade").value="";
	
	document.getElementById("companyName").value="";
	document.getElementById("deapartment").value="";
	document.getElementById("yearCurrentOrg").value="";
	document.getElementById("employmentID").value="";
	document.getElementById("totalyearofservice").value="";
	document.getElementById("curentCompanyName").value="";
	document.getElementById("currentEmployementAdd").value="";
	document.getElementById("Address").value="";
	document.getElementById("yearsinpreviousorg").value="";
	}
function AddOccuptiondtls()
{

	 var appltype="appltype";
		var occcustomertype="occcustomertype";
		var occupation="occupation";
		var companyCategory= "companyCategory";
		var natureofservice= "natureofservice";
		var grade= "grade";
		var companyName= "companyName";
		var deapartment= "deapartment";
		var yearCurrentOrg= "yearCurrentOrg";
		var employmentID= "employmentID";
		
		var totalyearofservice= "totalyearofservice";
		var curentCompanyName= "curentCompanyName";
		var currentEmployementAdd= "currentEmployementAdd";
		var Address  = "Address";
		var yearsinpreviousorg= "yearsinpreviousorg";
		
		localStorage.setItem(appltype, document.getElementById("appltype").value);
		localStorage.setItem(occcustomertype, document.getElementById("occcustomertype").value);
		localStorage.setItem(occupation, document.getElementById("occupation").value);
		localStorage.setItem(companyCategory, document.getElementById("companyCategory").value);
		localStorage.setItem(natureofservice, document.getElementById("natureofservice").value);
		localStorage.setItem(grade, document.getElementById("grade").value);
		
		localStorage.setItem(companyName, document.getElementById("companyName").value);
		localStorage.setItem(deapartment, document.getElementById("deapartment").value);
		localStorage.setItem(yearCurrentOrg, document.getElementById("yearCurrentOrg").value);
		
		localStorage.setItem(employmentID, document.getElementById("employmentID").value);
		localStorage.setItem(totalyearofservice, document.getElementById("totalyearofservice").value);
		localStorage.setItem(curentCompanyName, document.getElementById("curentCompanyName").value);
		localStorage.setItem(CA_AccoutNo, document.getElementById("CA_AccoutNo").value);
		localStorage.setItem(Address, document.getElementById("Address").value);
		localStorage.setItem(yearsinpreviousorg, document.getElementById("yearsinpreviousorg").value);
	
	
		
		    var tr=document.createElement('tr');
			var td1=document.createElement('td');
			var radio=document.createElement('input');
			radio.type="radio";
			radio.className="radio";
			radio.setAttribute("name", "optradio5");
			radio.id="optradio5";
			td1.appendChild(radio);
			var td2=document.createElement('td');
			td2.innerHTML=document.getElementById("occcustomertype").value;
			var td3=document.createElement('td');
			td3.innerHTML="ANISH";
			var td4=document.createElement('td');
			td4.innerHTML=document.getElementById("occupation").value;
			var td5=document.createElement('td');
			td5.innerHTML="intellect";
			var td6=document.createElement('td');
			td6.innerHTML=document.getElementById("totalyearofservice").value;
			
		
			
			var td7 = document.createElement('td');
			var delbtn = document.createElement('button');
			var img = document.createElement('img');
			delbtn.onclick=deleteRow;
			img.style.height="18px";
			img.style.width="18px";
			img.src="icons/x-button.png";
			img.setAttribute("alt","delete");
			delbtn.appendChild(img);
			delbtn.className="btb btn-link";
			td7.appendChild(delbtn);
			
			
			

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			 tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
		
			document.getElementById("mytablebody12").appendChild(tr);
}
$(document).on('change', ':radio[name="optradio5"]', function () {
	
    arOfVals = $(this).parent().nextAll().map(function () {
       return $(this).text();
   }).get();
    /*document.getElementById("recommendedAmount").value = arOfVals[2];
    document.getElementById("emi").value = arOfVals[3];
    document.getElementById("amountRequired").value = arOfVals[2];
    document.getElementById("amount").value = arOfVals[1];*/
 
    document.getElementById("appltype").value = localStorage.getItem("appltype");
    document.getElementById("occcustomertype").value = localStorage.getItem("occcustomertype");
    document.getElementById("occupation").value = localStorage.getItem("occupation");
    document.getElementById("companyCategory").value = localStorage.getItem("companyCategory");

   
    document.getElementById("natureofservice").value = localStorage.getItem("natureofservice");
    document.getElementById("grade").value = localStorage.getItem("grade");
 
    document.getElementById("companyName").value = localStorage.getItem("companyName");
    document.getElementById("deapartment").value = localStorage.getItem("deapartment");
    document.getElementById("yearCurrentOrg").value = localStorage.getItem("yearCurrentOrg");
    document.getElementById("employmentID").value = localStorage.getItem("employmentID");
    document.getElementById("totalyearofservice").value = localStorage.getItem("totalyearofservice");
    document.getElementById("curentCompanyName").value = localStorage.getItem("curentCompanyName");
    document.getElementById("currentEmployementAdd").value = localStorage.getItem("currentEmployementAdd");
    document.getElementById("Address").value = localStorage.getItem("Address");
    document.getElementById("yearsinpreviousorg").value = localStorage.getItem("yearsinpreviousorg");
 
    
    
});
function wrapperAddModifyocc(){

	 var am=getRadioVal();
	 if(am){
		 var rowNum=getCheckedRowNo();

		
			 document.getElementById("mytablebody12").deleteRow(rowNum);
			 AddOccuptiondtls();
		 
		 
	 }
	 else{
		 AddOccuptiondtls();
		

	 }
}



	 function getRadioVal() {
		 var table = document.getElementById("mytablebody12");
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
		 var table = document.getElementById("mytablebody12");
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
	$(document).on('change', ':radio[name="optradio8"]', function () {
			
		    arOfVals = $(this).parent().nextAll().map(function () {
		       return $(this).text();
		   }).get();
			 
		    /*document.getElementById("recommendedAmount").value = arOfVals[2];
		    document.getElementById("emi").value = arOfVals[3];
		    document.getElementById("amountRequired").value = arOfVals[2];
		    document.getElementById("amount").value = arOfVals[1];*/
		 
		    document.getElementById("cifNo").value = localStorage.getItem("cifNo");
		    document.getElementById("applicantType").value = localStorage.getItem("applicantType");
		    document.getElementById("indcustomerType").value = localStorage.getItem("indcustomerType");
		    document.getElementById("nationalID").value = localStorage.getItem("nationalID");

		   
		    document.getElementById("title").value = localStorage.getItem("title");
		    document.getElementById("fName").value = localStorage.getItem("fName");
		 
		    document.getElementById("middleName").value = localStorage.getItem("middleName");
		    document.getElementById("lastName").value = localStorage.getItem("lastName");
		    document.getElementById("staff").value = localStorage.getItem("staff");
		    document.getElementById("DOB").value = localStorage.getItem("DOB");
		    document.getElementById("gender").value = localStorage.getItem("gender");
		    document.getElementById("maritialStatus").value = localStorage.getItem("maritialStatus");
		    document.getElementById("education").value = localStorage.getItem("education");
		    document.getElementById("nationality").value = localStorage.getItem("nationality");
		    document.getElementById("relationToBorrower").value = localStorage.getItem("relationToBorrower");
		    document.getElementById("bankCustomer").value = localStorage.getItem("bankCustomer");
		    
		    document.getElementById("mailTo").value = localStorage.getItem("mailTo");
		    document.getElementById("savingAccountNO").value = localStorage.getItem("savingAccountNO");
		    document.getElementById("housingStatus").value = localStorage.getItem("housingStatus");
		    
		    document.getElementById("currentresidence").value = localStorage.getItem("currentresidence");

		    
		    
		    
		});
	function wrapperAddModifyInd(){

		 var am=getRadioVal();
		 if(am){
			 var rowNum=getCheckedRowNo();

			
				 document.getElementById("mytablebody13").deleteRow(rowNum);
				 AddIndividualdtls();
			 
			 
		 }
		 else{
			 AddIndividualdtls();
			

		 }
	}



		 function getRadioVal() {
			 var table = document.getElementById("mytablebody13");
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
			 var table = document.getElementById("mytablebody13");
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
	function clearAddressdtls()
	{

		
		document.getElementById("applicant").value="";
		document.getElementById("Addrcustomertype").value="";
		document.getElementById("ADDRESSTYPE").value="";
		document.getElementById("addressno1").value="";
		document.getElementById("addressno2").value="";
		document.getElementById("addressno3").value="";
		
		document.getElementById("poboxno").value="";
		document.getElementById("phoneno1").value="";
		document.getElementById("phoneno2").value="";
		document.getElementById("mobileno1").value="";
		document.getElementById("mobileno2").value="";
		document.getElementById("emailid").value="";
}	 
	function addAddressdtls()
	{

          
		var applicant="applicant";
		var Addrcustomertype="Addrcustomertype";
		var ADDRESSTYPE="ADDRESSTYPE";
		var addressno1= "addressno1";
		var addressno2= "addressno2";
		var addressno3= "addressno3";
		var poboxno= "poboxno";
		var phoneno1= "phoneno1";
		var phoneno2= "phoneno2";
		var mobileno1= "mobileno1";
		
		var mobileno2= "mobileno2";
		var emailid= "emailid";
		
		localStorage.setItem(applicant, document.getElementById("applicant").value);
		localStorage.setItem(Addrcustomertype, document.getElementById("Addrcustomertype").value);
		localStorage.setItem(ADDRESSTYPE, document.getElementById("ADDRESSTYPE").value);
		localStorage.setItem(addressno1, document.getElementById("addressno1").value);
		localStorage.setItem(addressno2, document.getElementById("addressno2").value);
		localStorage.setItem(addressno3, document.getElementById("addressno3").value);
		
		localStorage.setItem(poboxno, document.getElementById("poboxno").value);
		localStorage.setItem(phoneno1, document.getElementById("phoneno1").value);
		localStorage.setItem(phoneno2, document.getElementById("phoneno2").value);
		
		localStorage.setItem(mobileno1, document.getElementById("mobileno1").value);
		localStorage.setItem(mobileno2, document.getElementById("mobileno2").value);
		localStorage.setItem(emailid, document.getElementById("emailid").value);
		
	
		
		
		    var tr=document.createElement('tr');
			var td1=document.createElement('td');
			var radio=document.createElement('input');
			radio.type="radio";
			radio.className="radio";
			radio.setAttribute("name", "optradio9");
			radio.id="optradio9";
			td1.appendChild(radio);
			var td2=document.createElement('td');
			td2.innerHTML=document.getElementById("applicant").value;
			var td3=document.createElement('td');
			td3.innerHTML="ANISH";
			var td4=document.createElement('td');
			td4.innerHTML=document.getElementById("ADDRESSTYPE").value;
			var td5=document.createElement('td');
			td5.innerHTML=document.getElementById("emailid").value;
			var td6=document.createElement('td');
			td6.innerHTML=document.getElementById("mobileno1").value;
			
		
			
			var td7 = document.createElement('td');
			var delbtn = document.createElement('button');
			var img = document.createElement('img');
			delbtn.onclick=deleteRow;
			img.style.height="18px";
			img.style.width="18px";
			img.src="icons/x-button.png";
			img.setAttribute("alt","delete");
			delbtn.appendChild(img);
			delbtn.className="btb btn-link";
			td7.appendChild(delbtn);
			
			
			

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			 tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
		
			document.getElementById("mytablebody15").appendChild(tr);
}
	$(document).on('change', ':radio[name="optradio9"]', function () {
		
	    arOfVals = $(this).parent().nextAll().map(function () {
	       return $(this).text();
	   }).get();
		  
	    /*document.getElementById("recommendedAmount").value = arOfVals[2];
	    document.getElementById("emi").value = arOfVals[3];
	    document.getElementById("amountRequired").value = arOfVals[2];
	    document.getElementById("amount").value = arOfVals[1];*/
	 
	    document.getElementById("applicant").value = localStorage.getItem("applicant");
	    document.getElementById("Addrcustomertype").value = localStorage.getItem("Addrcustomertype");
	    document.getElementById("ADDRESSTYPE").value = localStorage.getItem("ADDRESSTYPE");
	    document.getElementById("addressno1").value = localStorage.getItem("addressno1");

	   
	    document.getElementById("addressno2").value = localStorage.getItem("addressno2");
	    document.getElementById("addressno3").value = localStorage.getItem("addressno3");
	 
	    document.getElementById("poboxno").value = localStorage.getItem("poboxno");
	    document.getElementById("phoneno1").value = localStorage.getItem("phoneno1");
	    document.getElementById("phoneno2").value = localStorage.getItem("phoneno2");
	    document.getElementById("mobileno1").value = localStorage.getItem("mobileno1");
	    document.getElementById("mobileno2").value = localStorage.getItem("mobileno2");
	    document.getElementById("emailid").value = localStorage.getItem("emailid");
	    
	    
	    
	    
	});
	function wrapperAddModifyAddress(){

		 var am=getRadioVal();
		 if(am){
			 var rowNum=getCheckedRowNo();

			
				 document.getElementById("mytablebody15").deleteRow(rowNum);
				 addAddressdtls();
			 
			 
		 }
		 else{
			 addAddressdtls();
			

		 }
	}



		 function getRadioVal() {
			 var table = document.getElementById("mytablebody15");
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
			 var table = document.getElementById("mytablebody15");
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
function clearLiabilitydtls()
{


	
	document.getElementById("typeOfLoan").value="";
	document.getElementById("bankName").value="";
	document.getElementById("branchname").value="";
	document.getElementById("loanamount").value="";
	document.getElementById("loanemi").value="";
	document.getElementById("existinglimit").value="";
	
	document.getElementById("deduction").value="";
	document.getElementById("loanStatus").value="";
	document.getElementById("dbr").value="";
	document.getElementById("DBRREASON").value="";
	document.getElementById("loanoutstandingamt").value="";

	}
function addliabilitydtls()
{

	  
		var typeOfLoan="typeOfLoan";
		var bankName="bankName";
		var branchname="branchname";
		var loanamount= "loanamount";
		var loanemi= "loanemi";
		var existinglimit= "existinglimit";
		var deduction= "deduction";
		var loanStatus= "loanStatus";
		var dbr= "dbr";
		var DBRREASON= "DBRREASON";
		
		var loanoutstandingamt= "loanoutstandingamt";
		
		
		localStorage.setItem(typeOfLoan, document.getElementById("typeOfLoan").value);
		localStorage.setItem(bankName, document.getElementById("bankName").value);
		localStorage.setItem(branchname, document.getElementById("branchname").value);
		localStorage.setItem(loanamount, document.getElementById("loanamount").value);
		localStorage.setItem(loanemi, document.getElementById("loanemi").value);
		
		localStorage.setItem(existinglimit, document.getElementById("existinglimit").value);
		localStorage.setItem(deduction, document.getElementById("deduction").value);
		localStorage.setItem(loanStatus, document.getElementById("loanStatus").value);
		
		localStorage.setItem(dbr, document.getElementById("dbr").value);
		localStorage.setItem(DBRREASON, document.getElementById("DBRREASON").value);
		localStorage.setItem(loanoutstandingamt, document.getElementById("loanoutstandingamt").value);
		

		
		    var tr=document.createElement('tr');
			var td1=document.createElement('td');
			var radio=document.createElement('input');
			radio.type="radio";
			radio.className="radio";
			radio.setAttribute("name", "optradio10");
			radio.id="optradio10";
			td1.appendChild(radio);
			var td2=document.createElement('td');
			td2.innerHTML="LOAN";
			var td3=document.createElement('td');
			td3.innerHTML="HOME LOAN";
			var td4=document.createElement('td');
			td4.innerHTML=document.getElementById("loanamount").value;
			var td5=document.createElement('td');
			td5.innerHTML=document.getElementById("dbr").value;
			var td6=document.createElement('td');
			td6.innerHTML=document.getElementById("loanStatus").value;
			
		
			
			var td7 = document.createElement('td');
			var delbtn = document.createElement('button');
			var img = document.createElement('img');
			delbtn.onclick=deleteRow;
			img.style.height="18px";
			img.style.width="18px";
			img.src="icons/x-button.png";
			img.setAttribute("alt","delete");
			delbtn.appendChild(img);
			delbtn.className="btb btn-link";
			td7.appendChild(delbtn);
			
			
			

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			 tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
		
			document.getElementById("mytablebody20").appendChild(tr);
}

$(document).on('change', ':radio[name="optradio10"]', function () {
	
    arOfVals = $(this).parent().nextAll().map(function () {
       return $(this).text();
   }).get();
	 
    /*document.getElementById("recommendedAmount").value = arOfVals[2];
    document.getElementById("emi").value = arOfVals[3];
    document.getElementById("amountRequired").value = arOfVals[2];
    document.getElementById("amount").value = arOfVals[1];*/
 
    document.getElementById("typeOfLoan").value = localStorage.getItem("typeOfLoan");
    document.getElementById("bankName").value = localStorage.getItem("bankName");
    document.getElementById("branchname").value = localStorage.getItem("branchname");
    document.getElementById("loanamount").value = localStorage.getItem("loanamount");

   
    document.getElementById("loanemi").value = localStorage.getItem("loanemi");
    document.getElementById("existinglimit").value = localStorage.getItem("existinglimit");

    document.getElementById("deduction").value = localStorage.getItem("deduction");
    document.getElementById("loanStatus").value = localStorage.getItem("loanStatus");
    document.getElementById("dbr").value = localStorage.getItem("dbr");
    document.getElementById("DBRREASON").value = localStorage.getItem("DBRREASON");
    document.getElementById("loanoutstandingamt").value = localStorage.getItem("loanoutstandingamt");
 
});

function wrapperAddModifyLiability(){

	 var am=getRadioVal();
	 if(am){
		 var rowNum=getCheckedRowNo();

		
			 document.getElementById("mytablebody20").deleteRow(rowNum);
			 addliabilitydtls();
		 
		 
	 }
	 else{
		 addliabilitydtls();
		

	 }
}



	 function getRadioVal() {
		 var table = document.getElementById("mytablebody20");
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
		 var table = document.getElementById("mytablebody20");
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
function clearFamilydtls()
{


	document.getElementById("apllitype").value="";
	document.getElementById("custtype").value="";
	document.getElementById("name").value="";
	document.getElementById("relation").value="";
	document.getElementById("age").value="";
	document.getElementById("cidno").value="";
	
	document.getElementById("famclass").value="";
	document.getElementById("schoolinst").value="";
	document.getElementById("country").value="";
	}
function addFamilydtls()
{

	
		var apllitype="apllitype";
		var custtype="custtype";
		var name="name";
		var relation= "relation";
		var age= "age";
		var cidno= "cidno";
		var famclass= "famclass";
		var schoolinst= "schoolinst";
		var country= "country";
		
		
		localStorage.setItem(apllitype, document.getElementById("apllitype").value);
		localStorage.setItem(custtype, document.getElementById("custtype").value);
		localStorage.setItem(name, document.getElementById("name").value);
		localStorage.setItem(relation, document.getElementById("relation").value);
		localStorage.setItem(age, document.getElementById("age").value);
		localStorage.setItem(cidno, document.getElementById("cidno").value);
		
		localStorage.setItem(famclass, document.getElementById("famclass").value);
		localStorage.setItem(schoolinst, document.getElementById("schoolinst").value);
		localStorage.setItem(country, document.getElementById("country").value);
		
		
		
	
		
		
		    var tr=document.createElement('tr');
			var td1=document.createElement('td');
			var radio=document.createElement('input');
			radio.type="radio";
			radio.className="radio";
			radio.setAttribute("name", "optradio52");
			radio.id="optradio52";
			td1.appendChild(radio);
			var td2=document.createElement('td');
			td2.innerHTML=document.getElementById("apllitype").value;
			var td3=document.createElement('td');
			td3.innerHTML="ANISH";
			var td4=document.createElement('td');
			td4.innerHTML=document.getElementById("relation").value;
			var td5=document.createElement('td');
			td5.innerHTML=document.getElementById("country").value;
			
			
		
			
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
			
		
			document.getElementById("mytablebody29").appendChild(tr);
}
$(document).on('change', ':radio[name="optradio52"]', function () {
	
    arOfVals = $(this).parent().nextAll().map(function () {
       return $(this).text();
   }).get();
	   
    /*document.getElementById("recommendedAmount").value = arOfVals[2];
    document.getElementById("emi").value = arOfVals[3];
    document.getElementById("amountRequired").value = arOfVals[2];
    document.getElementById("amount").value = arOfVals[1];*/
 
    document.getElementById("apllitype").value = localStorage.getItem("apllitype");
    document.getElementById("custtype").value = localStorage.getItem("custtype");
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("relation").value = localStorage.getItem("relation");

   
    document.getElementById("age").value = localStorage.getItem("age");
    document.getElementById("cidno").value = localStorage.getItem("cidno");

    document.getElementById("famclass").value = localStorage.getItem("famclass");
    document.getElementById("schoolinst").value = localStorage.getItem("schoolinst");
    document.getElementById("country").value = localStorage.getItem("country");
 
 
});
function wrapperAddModifyFamilydtls(){

	 var am=getRadioVal();
	 if(am){
		 var rowNum=getCheckedRowNo();

		
			 document.getElementById("mytablebody29").deleteRow(rowNum);
			 addFamilydtls();
		 
		 
	 }
	 else{
		 addFamilydtls();
		

	 }
}



	 function getRadioVal() {
		 var table = document.getElementById("mytablebody29");
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
		 var table = document.getElementById("mytablebody29");
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
	 