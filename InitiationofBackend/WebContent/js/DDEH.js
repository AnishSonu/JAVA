function tabEnable(fieldID) {

		if(fieldID != "partyTabEnable" && fieldID != "limitTab" && fieldID != "corporateBtn" && fieldID != "individualBtn" && fieldID != "addressBtn" && fieldID != "occupationBtn" && fieldID != "familyBtn" && fieldID != "linkBtn" && fieldID != "collateralTabEnable" && fieldID != "assetBtn" && fieldID != "collBtn"){
			var tabName = document.getElementById(fieldID).innerHTML;	
		}

		if(fieldID == "corporateBtn"){
			document.getElementById("corporateDetails").style.display 	= 'block';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "individualBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'block';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';	
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "addressBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'block';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';	
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "occupationBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'block';
			//document.getElementById("applicationDetails").style.display = 'none';		
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "familyBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'block';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';		
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(tabName == "Income Details"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'block';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(tabName == "Liability Details"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'block';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(tabName == "Loan Details"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'block';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(tabName == "Collateral Details"){
			alert("yet to complete :"+tabName);
		}
		if(tabName == "Assessment Details"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'block';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(tabName == "Card Details"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
			//document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'block';
			
		}
		if(fieldID == "partyTabEnable"){
			/*document.getElementById("partyButtons").style.display 	= 'block';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("corporateDetails").style.display 	= 'block';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';		
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';*/
			
			document.getElementById("partyButtons").style.display 	= 'block';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("corporateDetails").style.display 	= 'block';
			document.getElementById("occupationDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "collateralTabEnable"){
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'block';
			document.getElementById("assetDetails").style.display 	= 'block';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display = 'none';		
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		/*if(fieldID == "appTab"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'block';
			document.getElementById("partyButtons").style.display 	= 'none';		
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
		}*/
			
		if(fieldID == "limitTab"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("collButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'block';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		
		}
		if(fieldID == "assetBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'block';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "collBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'block';
			document.getElementById("linkDetails").style.display 	= 'none';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
		if(fieldID == "linkBtn"){
			document.getElementById("corporateDetails").style.display 	= 'none';
			document.getElementById("individualDetails").style.display 	= 'none';
			document.getElementById("addressDetails").style.display 	= 'none';
			document.getElementById("laibilityDetails").style.display 	= 'none';
			document.getElementById("IncomeDetails").style.display	 	= 'none';
			document.getElementById("LoanDetails").style.display 		= 'none';
			document.getElementById("familyDetails").style.display 		= 'none';
			document.getElementById("occupationDetails").style.display 	= 'none';
		//	document.getElementById("applicationDetails").style.display = 'none';
			document.getElementById("partyButtons").style.display 	= 'none';
			document.getElementById("limitDetails").style.display = 'none';
			document.getElementById("assetDetails").style.display 	= 'none';
			document.getElementById("collDetails").style.display 	= 'none';
			document.getElementById("linkDetails").style.display 	= 'block';
			document.getElementById("assessDetails").style.display 	= 'none';
			document.getElementById("cardDetails").style.display 	= 'none';
		}
	}