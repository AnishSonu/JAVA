function DeclineAnalysisGraph() {
	
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "Loan": "Home loan",
    "applicant": 510
  }, {
    "Loan": "Personal Loan",
    "applicant": 402
  }, {
    "Loan": "Education Loan",
    "applicant": 202
  }, {
    "Loan": "Agricultural Loans",
    "applicant": 166
  }, {
    "Loan": "Credit Cards",
    "applicant": 90
  }, {
    "Loan": "Student loans",
    "applicant": 88
  }, {
    "Loan": "Mortgage loans",
    "applicant": 120
  }, {
    "Loan": "Small business loans",
    "applicant": 60
  }],
  "valueField": "applicant",
  "titleField": "Loan",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );

}