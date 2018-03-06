function RegionalAnalysis(){

var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": [ {
    "branch": "Branch1",
    "counts": 2525
  }, {
    "branch": "Branch2",
    "counts": 1382
  }, {
    "branch": "Branch3",
    "counts": 1822
  }, {
    "branch": "Branch4",
    "counts": 2322
  }, {
    "branch": "Branch5",
    "counts": 2010
  } ],
  
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0,
    "axisAlpha" : 0,
    "position" : "left",
    "title" :"Application Counts"
  } ],
  
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "counts"
  } ],
  
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
  }

} );

}