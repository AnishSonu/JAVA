function displayChart(interestAmt,principalAmt){
	var emiCanvas = document.getElementById("emiChart");
	
	//var totalAmt 	 = document.getElementById("inputTotalAmount").value;
	//var interestAmt	 = document.getElementById("inputInterestAmount").value;
	//var principalAmt = document.getElementById("inputPrincipalAmount").value;
	Chart.defaults.global.defaultFontFamily = "Lato";
	Chart.defaults.global.defaultFontSize = 10;
	var Data = {
	    labels: [
	        "Interest Amount",
	        "Principal Amount"
	    ],
    datasets: [
        {
            data: [interestAmt, principalAmt],
            backgroundColor: [
                "#3358FF",
                "#FF3346"
            ]
        }]
	};

	var pieChart = new Chart(emiCanvas, {
		type: 'doughnut',	//doughnut or pie
		data: Data
	});
}

function loadLoanAmountSlider() {
	$('.single-slider1').jRange({
		from: 1,
		step  : 1,
		to: 100,
		width : 550,
		isRange : false,
		showLabels : true,
		format: '%s',
		theme : 'theme-blue',
		showScale : true,
		scale: [1+"L",25+"L",50+"L",75+"L",100+"L"],
		});
		document.getElementById("loanAmount").value = document.getElementById("loanSlider").value;
}

function loadInterestrateSlider() {
	$('.single-slider2').jRange({
		from: 5,
		step  : 0.5,
		to: 20,
		width : 550,
		isRange : false,
		showLabels : true,
		format: '%s',
		theme : 'theme-blue',
		showScale : true,
		scale: [5,7.5,10,12.5,15,17.5,20],
		});
		document.getElementById("interestRate").value = document.getElementById("interestRateSlider").value;
}

function loadLoanTenureSlider() {
	$('.single-slider3').jRange({
		from: 0,
		step  : 6,
		to: 360,
		width : 550,
		isRange : false,
		showLabels : true,
		format: '%s',
		theme : 'theme-blue',
		showScale : true,
		scale: [0,60,120,180,240,300,360],
		});
		document.getElementById("loanTenure").value = document.getElementById("tenureSlider").value;
}

function changeOfLoanAmountSlider(LoanAmount) {
	document.getElementById("loanAmount").value = LoanAmount;
}

function changeOfInterestSlider(InterestValue) {
	document.getElementById("interestRate").value = InterestValue;
}

function changeOfTenureSlider(TenureValue) {
	document.getElementById("loanTenure").value = TenureValue;
}

function changeOfLoanInput(LoanAmount) {
	$('.single-slider1').jRange('setValue', LoanAmount);
}

function changeOfInterestInput(InterestRate) {
	$('.single-slider2').jRange('setValue', InterestRate);
}
function changeOfTenureInput(tenure) {
	$('.single-slider3').jRange('setValue', tenure);
}

function calEmiandGenerateGraph() {
	
	var principalAmount = (document.getElementById("loanAmount").value)*100000;

	var rateOfInterest  = document.getElementById("interestRate").value;

	var tenure 	=  document.getElementById('loanTenure').value;

	var rate = (rateOfInterest / 12) / 100 ;

	var temp1 = ((1+rate)^ tenure);

	var temp2 = temp1-1;

	var temp3 = temp1 / temp2;

	var emi = principalAmount * rate * temp3 * 10;
	
	var totalEmi = Math.round(emi/2); 
	document.getElementById("emiDisplay").value = totalEmi;

	var totalAmount = emi * tenure;
	var interestAmt = totalAmount - principalAmount ;  
	var roundInterest = Math.round(interestAmt);
	displayChart(roundInterest , principalAmount);
	
}