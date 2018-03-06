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
function ApplicationDecisionGraph() {
	
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "month": "Jun 13",
    "visits": 10500,
    "approved":5100,
    "rejected": 4125,
    "processing": 1275
  }, {
    "month": "Jul 13",
    "visits": 12400,
    "approved":9500,
    "rejected": 2400,
    "processing": 500
  }, {
    "month": "Aug 13",
    "visits": 10809,
    "approved":7852,
    "rejected": 1420,
    "processing": 1537
  }, {
    "month": "Sep 13",
    "visits": 9022,
    "approved":5964,
    "rejected": 2140,
    "processing": 918
  }, {
    "month": "Oct 13",
    "visits": 6082,
    "approved":2451,
    "rejected": 1542,
    "processing": 2089
  }, {
    "month": "Nov 13",
    "visits": 14014,
    "approved":7845,
    "rejected": 6102,
    "processing": 67
  }, {
    "month": "Dec 13",
    "visits": 6984,
    "approved":5632,
    "rejected": 954,
    "processing": 398
  }, {
    "month": "Jan 14",
    "visits": 8711,
    "approved":2548,
    "rejected": 5200,
    "processing": 963
  }, {
    "month": "Feb 14",
    "visits": 6065,
    "approved":3659,
    "rejected": 1400,
    "processing": 1006
  }, {
    "month": "Mar 14",
    "visits": 9580,
    "approved":5984,
    "rejected": 2658,
    "processing": 938
  }, {
    "month": "Apr 14",
    "visits": 13043,
    "approved":9845,
    "rejected": 2659,
    "processing": 539
  }, {
    "month": "May 14",
    "visits": 14041,
    "approved":7654,
    "rejected": 5984,
    "processing": 403
  }, {
    "month": "Jun 14",
    "visits": 13095,
    "approved":8635,
    "rejected": 3650,
    "processing": 1810
  } ],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0,
    "axisAlpha" : 0,
    "position" : "left",
    "title" :"Total Applications"
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
	"title": "Applications Received",
    "balloonText": "<b>[[title]]</b> in[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  },
  {
	    "id": "graph2",
	    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]: <b>[[value]] [[additional]]</b></span>",
	    "bullet": "round",
	    "lineThickness": 3,
	    "bulletSize": 7,
	    "bulletBorderAlpha": 1,
	    "bulletColor": "#FFFFFF",
	    "useLineColorForBulletBorder": true,
	    "bulletBorderThickness": 3,
	    "fillAlphas": 0,
	    "lineAlpha": 1,
	    "title": "Processing",
	    "valueField": "processing",
	    "dashLengthField": "dashLengthLine",
	  },
	  {
	    "id": "graph3",
	    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]: <b>[[value]] [[additional]]</b></span>",
	    "bullet": "round",
	    "lineThickness": 3,
	    "bulletSize": 7,
	    "bulletBorderAlpha": 1,
	    "bulletColor": "#FFFFFF",
	    "useLineColorForBulletBorder": true,
	    "bulletBorderThickness": 3,
	    "fillAlphas": 0,
	    "lineAlpha": 1,
	    "title": "Approved",
	    "valueField": "approved",
	    "dashLengthField": "dashLengthLine",
	  },
	  {
		    "id": "graph4",
		    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]: <b>[[value]] [[additional]]</b></span>",
		    "bullet": "round",
		    "lineThickness": 3,
		    "bulletSize": 7,
		    "bulletBorderAlpha": 1,
		    "bulletColor": "#FFFFFF",
		    "useLineColorForBulletBorder": true,
		    "bulletBorderThickness": 3,
		    "fillAlphas": 0,
		    "lineAlpha": 1,
		    "title": "Rejected",
		    "valueField": "rejected",
		    "dashLengthField": "dashLengthLine",
		  },
  ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "month",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20,
    "title" :"Months"
  },
  "export": {
    "enabled": true
  },
  "legend": {
	  "position": "bottom"
  }

} );
}

function RegionalAnalysis(){

	var chart = AmCharts.makeChart( "chartdiv", {
	  "type": "serial",
	  "theme": "light",
	  "dataProvider": [ {
	    "branch": "Branch1",
	    "counts": 2525,
	    "approved":1200,
	    "rejected": 800,
	    "processing": 525
	  }, {
	    "branch": "Branch2",
	    "counts": 1382,
	    "approved":800,
	    "rejected": 382,
	    "processing": 200
	  }, {
	    "branch": "Branch3",
	    "counts": 1822,
	    "approved":1250,
	    "rejected": 122,
	    "processing": 450
	  }, {
	    "branch": "Branch4",
	    "counts": 2322,
	    "approved":1500,
	    "rejected": 172,
	    "processing": 650
	  }, {
	    "branch": "Branch5",
	    "counts": 2010,
	    "approved":1525,
	    "rejected": 170,
	    "processing": 315
	  } ],
	  
	  "valueAxes": [ {
	    "gridColor": "#FFFFFF",
	    "gridAlpha": 0.2,
	    "dashLength": 0,
	    "axisAlpha" : 0,
	    "position" : "left",
	    "title" :"Applications Received"
	  } ],
	  
	  "gridAboveGraphs": true,
	  "startDuration": 1,
	  "graphs": [ {
	    "title": "Applications Processed",
		"balloonText": "[[category]]: <b>[[value]]</b>",
		"bullet": "round",
	    "lineThickness": 3,
	    "bulletSize": 7,
	    "bulletBorderAlpha": 1,
	    "bulletColor": "#FFFFFF",
	    "useLineColorForBulletBorder": true,
	    "bulletBorderThickness": 3,
	    "fillAlphas": 0,
	    "lineAlpha": 1,
	    "valueField": "counts"
	  },

	  {
		    "id": "graph2",
		    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]: <b>[[value]] [[additional]]</b></span>",
		    "bullet": "round",
		    "lineThickness": 3,
		    "bulletSize": 7,
		    "bulletBorderAlpha": 1,
		    "bulletColor": "#FFFFFF",
		    "useLineColorForBulletBorder": true,
		    "bulletBorderThickness": 3,
		    "fillAlphas": 0,
		    "lineAlpha": 1,
		    "title": "Processing",
		    "valueField": "processing",
		    "dashLengthField": "dashLengthLine"
		  },
		  {
		    "id": "graph3",
		    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]: <b>[[value]] [[additional]]</b></span>",
		    "bullet": "round",
		    "lineThickness": 3,
		    "bulletSize": 7,
		    "bulletBorderAlpha": 1,
		    "bulletColor": "#FFFFFF",
		    "useLineColorForBulletBorder": true,
		    "bulletBorderThickness": 3,
		    "fillAlphas": 0,
		    "lineAlpha": 1,
		    "title": "Approved",
		    "valueField": "approved",
		    "dashLengthField": "dashLengthLine"
		  },
		  {
			    "id": "graph4",
			    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]: <b>[[value]] [[additional]]</b></span>",
			    "bullet": "round",
			    "lineThickness": 3,
			    "bulletSize": 7,
			    "bulletBorderAlpha": 1,
			    "bulletColor": "#FFFFFF",
			    "useLineColorForBulletBorder": true,
			    "bulletBorderThickness": 3,
			    "fillAlphas": 0,
			    "lineAlpha": 1,
			    "title": "Rejected",
			    "valueField": "rejected",
			    "dashLengthField": "dashLengthLine"
			  }
	  ],
	  
	  "chartCursor": {
	    "categoryBalloonEnabled": false,
	    "cursorAlpha": 0,
	    "zoomable": false
	  },
	  "categoryField": "branch",
	  "categoryAxis": {
	    "gridPosition": "start",
	    "gridAlpha": 0,
	    "tickPosition": "start",
	    "tickLength": 20,
	    "title" :"Branch Name"
	  },
	  "export": {
	    "enabled": true
	  },
	  "legend": {
		  "position": "bottom"
	  }
	  
	} );

	}


function showGraph() {
	
	var selectedGraph = document.getElementById("selectGraph").value;

	
	if (selectedGraph == "ApplicationDecisionAnalysis") {
		
		ApplicationDecisionGraph();
		document.getElementById("graphHead").innerHTML = "Month on Month Applications Processed";
		
	}
	
	if (selectedGraph == "DeclineAnalysis") {
		
		DeclineAnalysisGraph();
		document.getElementById("graphHead").innerHTML = "Product-wise Decline Analysis";
	}
	
	if (selectedGraph == "RegionalAnalysis") {
		
		RegionalAnalysis();
		document.getElementById("graphHead").innerHTML = "Branch-wise Applications Processed";
	}
	
	$(".reveal").show();
	
}

function showdashBoard(){
	$("#chartModal").modal("toggle");
	
	showGraph();
}