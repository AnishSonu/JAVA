
function setBlueTheme(){
	localStorage.setItem("ThemeColor","B");
	setThemeColor();
	setBasicLayoutThemeColor();
}
function setRedTheme(){
	localStorage.setItem("ThemeColor","R");
	setThemeColor();
	setBasicLayoutThemeColor();
}
function setThemeColor(){
	
	if(localStorage.getItem("ThemeColor")=="R"){
		   document.getElementById("Row2").className= "row nav-row2-red";
	       document.getElementById("QuickLink").style.background = "#990000";
	     //  document.getElementById("QuickLinkFooter").style.background = "#990000";
	     //  document.getElementById("MyQueue").style.background = "#990000";
	       document.getElementById("rowHomeLabel").className= "control-label navbar-app-label label-white";
	       document.getElementById("panelQuickLinksLabel").className = "label-white";
	       document.getElementById("Reports").style.background = "#990000";
	     //  document.getElementById("MYToDoList").style.background = "#990000";
	       //document.getElementById("List1").className = "label-white";
	     //  document.getElementById("panelMyQueue").className = "label-white"; 
	       document.getElementById("panelReports").className = "label-white"; 
	       document.getElementById("navbarbtnLogout").className = "control-label navbar-app-label label-white";
	       
	       //document.getElementById("My-queue-footer").style.background = "#990000";
	       document.getElementById("Reports").style.background = "#990000";
	     //  document.getElementById("Reports-footer").style.background = "#990000";
	       document.getElementById("MYToDoList").style.background = "#990000";
	       document.getElementById("iconFlash").src= "icons/flash.png";
	       document.getElementById("iconHome").src= "icons/home-white.png";
	      // document.getElementById("iconArrow").src= "icons/right arrow.png";
	       document.getElementById("iconNewspaper").src= "icons/newspaper.png";
	      // document.getElementById("iconslist").src= "icons/list.png";
	       	
	       // ID's of buttons
	       
	       
	       
	       /*document.getElementById("btnQuotation").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnApplnSearch").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnNewInitiation").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnDashBoard").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("List").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";*/
	      /* document.getElementById("btnDdeReviewQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnCustomerInvestigationQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnEngineeringEvaluationQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnLegalVerificationQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnInsuranceQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnAssignmentQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnCommitteeApprovalQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
		    document.getElementById("btnOperationQueue").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";*/
	       document.getElementById("btnPrintoutGen").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnTurnAroundTask").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnCreditAppln").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnNewActivity").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	       document.getElementById("btnApplnDtlsAnalysis").className ="btn btn-default btn-layout text-smallsize btn-orange btn3d label-white";
	}
	
	if(localStorage.getItem("ThemeColor")=="B"){
		
		document.getElementById("Row2").className= "row nav-row2-lightBlue";
	    document.getElementById("QuickLink").style.background = "#B3C6FF";
	   // document.getElementById("QuickLinkFooter").style.background = "#b3ecff";
	    //document.getElementById("MyQueue").style.background = "#B3C6FF";
	   // document.getElementById("MYToDoList").style.background = "#B3C6FF";
	   // document.getElementById("My-queue-footer").style.background = "#b3ecff";
	    document.getElementById("Reports").style.background ="#B3C6FF";
	    document.getElementById("panelQuickLinksLabel").className = "label-black";
	    
	    document.getElementById("rowHomeLabel").className= "control-label navbar-app-label label-black";
	    //document.getElementById("List1").className = "label-black";
	    //document.getElementById("panelMyQueue").className = "label-black"; 
	    document.getElementById("panelReports").className = "label-black"; 
	    document.getElementById("navbarbtnLogout").className = "control-label navbar-app-label label-black";
	    document.getElementById("iconFlash").src= "icons/flashblack.png";
	    document.getElementById("iconHome").src= "icons/homeblack.png";
	    //document.getElementById("iconArrow").src= "icons/right arrow black.png";
	    document.getElementById("iconNewspaper").src= "icons/newspaperblack.png";
	    //document.getElementById("iconslist").src= "icons/MyToDoListblack.png";
	    
	    // ID's of Button
	    
	    /*document.getElementById("btnQuotation").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnApplnSearch").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnNewInitiation").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnDashBoard").className ="btn btn-primary btn-layout text-smallsize btn3d btn-BlueTheme label-black";
	    document.getElementById("List").className ="btn btn-primary btn-layout text-smallsize  btn3d btn-BlueTheme label-black";*/
	   /* document.getElementById("btnApplnCourseStudy").className ="btn btn-primary btn-layout text-smallsize  btn-BlueTheme btn3d label-black";
	    document.getElementById("btnIncompleteAppln").className ="btn btn-primary btn-layout text-smallsize  btn-BlueTheme btn3d label-black";
	    document.getElementById("btnpendingDecAppln").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnReassignedAppln").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnFinancingReq").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";*/
	    
	    /*document.getElementById("btnDdeReviewQueue").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnCustomerInvestigationQueue").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnEngineeringEvaluationQueue").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnLegalVerificationQueue").className ="btn btn-primary btn-layout text-smallsize btn3d btn-BlueTheme label-black";
	    document.getElementById("btnInsuranceQueue").className ="btn btn-primary btn-layout text-smallsize  btn3d btn-BlueTheme label-black";
	    document.getElementById("btnAssignmentQueue").className ="btn btn-primary btn-layout text-smallsize  btn-BlueTheme btn3d label-black";
	    document.getElementById("btnCommitteeApprovalQueue").className ="btn btn-primary btn-layout text-smallsize  btn-BlueTheme btn3d label-black";
	    document.getElementById("btnOperationQueue").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";*/
	    
	    document.getElementById("btnPrintoutGen").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnTurnAroundTask").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnCreditAppln").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnNewActivity").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	    document.getElementById("btnApplnDtlsAnalysis").className ="btn btn-primary btn-layout text-smallsize btn-BlueTheme btn3d label-black";
	}
	
}
function setBasicLayoutThemeColor() {

	if (localStorage.getItem("ThemeColor") == "R") {

		document.getElementById("MYToDoList").style.background = "#990000";
		document.getElementById("iconslist").src = "icons/list.png";
		document.getElementById("List1").className = "label-white";
		// finish
		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#3b5998");
		document.getElementById("headingColumn1").className = "row-centerClass label-white";
		document.getElementById("headingColumn2").className = "row-centerClass label-white";
		document.getElementById("headingColumn3").className = "row-centerClass label-white";
		document.getElementById("headingColumn4").className = "row-centerClass label-white";
		document.getElementById("headingColumn5").className = "row-centerClass label-white";
		document.getElementById("headingColumn6").className = "row-centerClass label-white";
		document.getElementById("headingColumn7").className = "row-centerClass label-white";

	}
	if (localStorage.getItem("ThemeColor") == "B") {

		document.getElementById("MYToDoList").style.background = "#B3C6FF";
		document.getElementById("iconslist").src = "icons/MyToDoListblack.png";
		document.getElementById("List1").className = "label-black";

		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#f5f5f5");
		document.getElementById("headingColumn1").className = "row-centerClass label-black";
		document.getElementById("headingColumn2").className = "row-centerClass label-black";
		document.getElementById("headingColumn3").className = "row-centerClass label-black";
		document.getElementById("headingColumn4").className = "row-centerClass label-black";
		document.getElementById("headingColumn5").className = "row-centerClass label-black";
		document.getElementById("headingColumn6").className = "row-centerClass label-black";
		document.getElementById("headingColumn7").className = "row-centerClass label-black";

	}
}


function setNewInitiationThemeColor() {

	if (localStorage.getItem("ThemeColor") == "R") {

		document.getElementById("MYToDoList").style.background = "#990000";
		document.getElementById("List1").className = "label-white";
		document.getElementById("iconslist").src = "icons/newFile.png";
		document.getElementById("newApplnIcon").src = "icons/new application.png";
		document.getElementById("loanIcon").src = "icons/loan.png";
		document.getElementById("newInit").style.background = "#990000";
	    document.getElementById("newInit1").style.background = "#990000";
	    document.getElementById("NewAppln").className="label-white-left";
	    document.getElementById("LoanDtls").className="label-white-left";
		// finish
		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#3b5998");
		document.getElementById("headingColumn1").className = "row-centerClass label-white";
		document.getElementById("headingColumn2").className = "row-centerClass label-white";
		document.getElementById("headingColumn3").className = "row-centerClass label-white";
		document.getElementById("headingColumn4").className = "row-centerClass label-white";
		document.getElementById("headingColumn5").className = "row-centerClass label-white";
		
	}
	if (localStorage.getItem("ThemeColor") == "B") {

		document.getElementById("MYToDoList").style.background = "#B3C6FF";
		document.getElementById("iconslist").src = "icons/newfileblack.png";
		document.getElementById("newApplnIcon").src = "icons/new appln black.png";
		document.getElementById("loanIcon").src = "icons/loanblack.png";
		document.getElementById("List1").className = "label-black";
		document.getElementById("newInit").style.background = "#B3C6FF";
	    document.getElementById("newInit1").style.background = "#B3C6FF";
	    document.getElementById("NewAppln").className="label-black-left";
	    document.getElementById("LoanDtls").className="label-black-left";
		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#f5f5f5");
		document.getElementById("headingColumn1").className = "row-centerClass label-black";
		document.getElementById("headingColumn2").className = "row-centerClass label-black";
		document.getElementById("headingColumn3").className = "row-centerClass label-black";
		document.getElementById("headingColumn4").className = "row-centerClass label-black";
		document.getElementById("headingColumn5").className = "row-centerClass label-black";
		document.getElementById("headingColumn6").className = "row-centerClass label-black";
		document.getElementById("headingColumn7").className = "row-centerClass label-black";

	}
}


function setApplnScreenThemeColor() {

	if (localStorage.getItem("ThemeColor") == "R") {

		document.getElementById("MYToDoList").style.background = "#990000";
		document.getElementById("iconslist").src = "icons/search.png";
		document.getElementById("List1").className = "label-white";
		// finish
		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#3b5998");
		document.getElementById("headingColumn1").className = "row-centerClass label-white";
		document.getElementById("headingColumn2").className = "row-centerClass label-white";
		document.getElementById("headingColumn3").className = "row-centerClass label-white";
		document.getElementById("headingColumn4").className = "row-centerClass label-white";
		document.getElementById("headingColumn5").className = "row-centerClass label-white";
		

	}
	if (localStorage.getItem("ThemeColor") == "B") {

		document.getElementById("MYToDoList").style.background = "#B3C6FF";
		document.getElementById("iconslist").src = "icons/search1.png";
		document.getElementById("List1").className = "label-black";

		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#f5f5f5");
		document.getElementById("headingColumn1").className = "row-centerClass label-black";
		document.getElementById("headingColumn2").className = "row-centerClass label-black";
		document.getElementById("headingColumn3").className = "row-centerClass label-black";
		document.getElementById("headingColumn4").className = "row-centerClass label-black";
		document.getElementById("headingColumn5").className = "row-centerClass label-black";
		

	}
}

function setLosQuotaitonThemeColor() {

	if (localStorage.getItem("ThemeColor") == "R") {

		document.getElementById("MYToDoList").style.background = "#990000";
		document.getElementById("iconslist").src = "icons/documents.png";
		document.getElementById("List1").className = "label-white";
		// finish
		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#3b5998");
		document.getElementById("headingColumn1").className = "row-centerClass label-white";
		document.getElementById("headingColumn2").className = "row-centerClass label-white";
		document.getElementById("headingColumn3").className = "row-centerClass label-white";
		document.getElementById("headingColumn4").className = "row-centerClass label-white";
		document.getElementById("headingColumn5").className = "row-centerClass label-white";
		

	}
	if (localStorage.getItem("ThemeColor") == "B") {

		document.getElementById("MYToDoList").style.background = "#B3C6FF";
		document.getElementById("iconslist").src = "icons/documentsblack.png";
		document.getElementById("List1").className = "label-black";

		document.getElementById("headingRow")
				.setAttribute("bgcolor", "#f5f5f5");
		document.getElementById("headingColumn1").className = "row-centerClass label-black";
		document.getElementById("headingColumn2").className = "row-centerClass label-black";
		document.getElementById("headingColumn3").className = "row-centerClass label-black";
		document.getElementById("headingColumn4").className = "row-centerClass label-black";
		document.getElementById("headingColumn5").className = "row-centerClass label-black";
		

	}
}



/*function setLosQuotaitonThemeColor() {
	
	if(localStorage.getItem("ThemeColor")=="R"){
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
   
   
   document.getElementById("btnQuotation").style.background = "#990000";
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
   document.getElementById("trCustomersDtls").style.background = "#990000";
   
   //finish
   document.getElementById("headingRow").setAttribute("bgcolor", "#3b5998");
   document.getElementById("headingColumn1").className="row-centerClass label-white";
	    document.getElementById("headingColumn2").className="row-centerClass label-white";
	    document.getElementById("headingColumn3").className="row-centerClass label-white";
	    document.getElementById("headingColumn4").className="row-centerClass label-white";
	    document.getElementById("headingColumn5").className="row-centerClass label-white";
	    document.getElementById("headingColumn6").className="row-centerClass label-white";
	    document.getElementById("headingColumn7").className="row-centerClass label-white";
	 
   
   
   document.getElementById("QuickCreditCalculator").style.background = "#990000";
   document.getElementById("ProductDetails").style.background = "#990000";
//    document.getElementById("PRODUCT-DETAILS-footer").style.background = "#990000";
   document.getElementById("SheduleType").style.background = "#990000";
 //  document.getElementById("shedule-type-footer").style.background = "#990000";
   document.getElementById("LoanDetails").style.background = "#990000";
//   document.getElementById("LOAN-DETAILS-footer").style.background = "#990000";
   document.getElementById("CalculateEmi").style.background = "#990000";
//   document.getElementById("CALCULATE-EMI-footer").style.background = "#990000";
    }
	if(localStorage.getItem("ThemeColor")=="B"){
		
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
	    
	    //document.getElementById("iconslist").src= "icons/MyToDoListblack.png";
	    
	    document.getElementById("btnQuotation").style.background ="#FFAB91";
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
	    document.getElementById("QuickCreditCalculator").style.background = "#b3ecff";
	    document.getElementById("ProductDetails").style.background = "#b3ecff";
	 //   document.getElementById("PRODUCT-DETAILS-footer").style.background = "#b3ecff";
	    document.getElementById("SheduleType").style.background = "#b3ecff";
	    document.getElementById("shedule-type-footer").style.background = "#b3ecff";
	    document.getElementById("LoanDetails").style.background = "#b3ecff";
	  //  document.getElementById("LOAN-DETAILS-footer").style.background = "#b3ecff";
	    document.getElementById("CalculateEmi").style.background ="#b3ecff";
	  //  document.getElementById("CALCULATE-EMI-footer").style.background = "#b3ecff";
	  
	
		}
}

*//*function setApplnScreenThemeColor() {
	
	if(localStorage.getItem("ThemeColor")=="R"){
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
   
   
   document.getElementById("btnQuotation").style.background = "#990000";
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
   document.getElementById("trCustomersDtls").style.background = "#990000";
   
   //finish
   document.getElementById("headingRow").setAttribute("bgcolor", "#3b5998");
   document.getElementById("headingColumn1").className="row-centerClass label-white";
	    document.getElementById("headingColumn2").className="row-centerClass label-white";
	    document.getElementById("headingColumn3").className="row-centerClass label-white";
	    document.getElementById("headingColumn4").className="row-centerClass label-white";
	    document.getElementById("headingColumn5").className="row-centerClass label-white";
	    document.getElementById("headingColumn6").className="row-centerClass label-white";
	    document.getElementById("headingColumn7").className="row-centerClass label-white";
	 
   
   
   document.getElementById("QuickCreditCalculator").style.background = "#990000";
   document.getElementById("ProductDetails").style.background = "#990000";
//    document.getElementById("PRODUCT-DETAILS-footer").style.background = "#990000";
   document.getElementById("SheduleType").style.background = "#990000";
 //  document.getElementById("shedule-type-footer").style.background = "#990000";
   document.getElementById("LoanDetails").style.background = "#990000";
//   document.getElementById("LOAN-DETAILS-footer").style.background = "#990000";
   document.getElementById("CalculateEmi").style.background = "#990000";
//   document.getElementById("CALCULATE-EMI-footer").style.background = "#990000";
    }
	if(localStorage.getItem("ThemeColor")=="B"){
		
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
	    
	    document.getElementById("btnQuotation").style.background ="#FFAB91";
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
	    
	    
	    
	    
	    //finished
	    
	    document.getElementById("headingRow").setAttribute("bgcolor", "#f5f5f5");
	    document.getElementById("headingColumn1").className="row-centerClass label-black";
	    document.getElementById("headingColumn2").className="row-centerClass label-black";
	    document.getElementById("headingColumn3").className="row-centerClass label-black";
	    document.getElementById("headingColumn4").className="row-centerClass label-black";
	    document.getElementById("headingColumn5").className="row-centerClass label-black";
	   
	  
	    
	    //button labels
	    
	    
	    
	    
	    
	 //   document.getElementById("Reports-footer").style.background ="#b3ecff";
	    document.getElementById("QuickCreditCalculator").style.background = "#b3ecff";
	    document.getElementById("ProductDetails").style.background = "#b3ecff";
	 //   document.getElementById("PRODUCT-DETAILS-footer").style.background = "#b3ecff";
	    document.getElementById("SheduleType").style.background = "#b3ecff";
	    document.getElementById("shedule-type-footer").style.background = "#b3ecff";
	    document.getElementById("LoanDetails").style.background = "#b3ecff";
	  //  document.getElementById("LOAN-DETAILS-footer").style.background = "#b3ecff";
	    document.getElementById("CalculateEmi").style.background ="#b3ecff";
	  //  document.getElementById("CALCULATE-EMI-footer").style.background = "#b3ecff";
	  
	
		}
}

function setNewInitiationThemeColor() {
	
	if(localStorage.getItem("ThemeColor")=="R"){
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
   
   
   document.getElementById("btnQuotation").style.background = "#990000";
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
   document.getElementById("trCustomersDtls").style.background = "#990000";
   
   //finish
   document.getElementById("headingRow").setAttribute("bgcolor", "#3b5998");
   document.getElementById("headingColumn1").className="row-centerClass label-white";
	    document.getElementById("headingColumn2").className="row-centerClass label-white";
	    document.getElementById("headingColumn3").className="row-centerClass label-white";
	    document.getElementById("headingColumn4").className="row-centerClass label-white";
	    document.getElementById("headingColumn5").className="row-centerClass label-white";
	    document.getElementById("headingColumn6").className="row-centerClass label-white";
	    document.getElementById("headingColumn7").className="row-centerClass label-white";
	 
   
   
   document.getElementById("QuickCreditCalculator").style.background = "#990000";
   document.getElementById("ProductDetails").style.background = "#990000";
//    document.getElementById("PRODUCT-DETAILS-footer").style.background = "#990000";
   document.getElementById("SheduleType").style.background = "#990000";
 //  document.getElementById("shedule-type-footer").style.background = "#990000";
   document.getElementById("LoanDetails").style.background = "#990000";
//   document.getElementById("LOAN-DETAILS-footer").style.background = "#990000";
   document.getElementById("CalculateEmi").style.background = "#990000";
//   document.getElementById("CALCULATE-EMI-footer").style.background = "#990000";
    }
	if(localStorage.getItem("ThemeColor")=="B"){
		
		document.getElementById("Row2").className= "row nav-row2-lightBlue";
	    document.getElementById("QuickLink").style.background = "#B3C6FF";
	   // document.getElementById("QuickLinkFooter").style.background = "#b3ecff";
	    document.getElementById("MyQueue").style.background = "#B3C6FF";
	    document.getElementById("MYToDoList").style.background = "#B3C6FF";
	   // document.getElementById("My-queue-footer").style.background = "#b3ecff";
	    document.getElementById("Reports").style.background ="#B3C6FF";
	    document.getElementById("panelQuickLinksLabel").className = "label-black";
	    document.getElementById("newInit").style.background = "#B3C6FF";
	    document.getElementById("newInit1").style.background = "#B3C6FF";
	    
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
	    document.getElementById("newApplnIcon").src= "icons/add120.png";
	    document.getElementById("NewAppln").className="label-black-left";
	    document.getElementById("LoanDtls").className="label-black-left";
	    
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
	    
	    document.getElementById("btnQuotation").style.background ="#FFAB91";
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
	    
	    
	    
	    
	    //finished
	    
	    document.getElementById("headingRow").setAttribute("bgcolor", "#f5f5f5");
	    document.getElementById("headingColumn1").className="row-centerClass label-black";
	    document.getElementById("headingColumn2").className="row-centerClass label-black";
	    document.getElementById("headingColumn3").className="row-centerClass label-black";
	    document.getElementById("headingColumn4").className="row-centerClass label-black";
	    	  
	    
	    //button labels
	    
	    
	    
	    
	    
	 //   document.getElementById("Reports-footer").style.background ="#b3ecff";
	    document.getElementById("QuickCreditCalculator").style.background = "#b3ecff";
	    document.getElementById("ProductDetails").style.background = "#b3ecff";
	 //   document.getElementById("PRODUCT-DETAILS-footer").style.background = "#b3ecff";
	    document.getElementById("SheduleType").style.background = "#b3ecff";
	    document.getElementById("shedule-type-footer").style.background = "#b3ecff";
	    document.getElementById("LoanDetails").style.background = "#b3ecff";
	  //  document.getElementById("LOAN-DETAILS-footer").style.background = "#b3ecff";
	    document.getElementById("CalculateEmi").style.background ="#b3ecff";
	  //  document.getElementById("CALCULATE-EMI-footer").style.background = "#b3ecff";
	  
	
		}
}
	*/

