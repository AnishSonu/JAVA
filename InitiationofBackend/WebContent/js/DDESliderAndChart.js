/*function displayChart() {
		var creditChart = document.getElementById("Chart");

		var creditScorevalue = document.getElementById("creditScoreChart").value;
		var remainingPercentage = 100 - creditScorevalue; 

		Chart.defaults.global.defaultFontFamily = "Lato";
		Chart.defaults.global.defaultFontSize = 10;
		var scoreData = {
		    labels: [
		        "Credit Score "+creditScorevalue+" % "
		    ],
	    datasets: [
	        {
	            data: [creditScorevalue, remainingPercentage],
	            backgroundColor: [
	                "#FF5733"
	            ]
	        }]
		};

		var pieChart = new Chart(creditChart, {
  		type: 'doughnut',	//doughnut or pie
  		data: scoreData
		});
	}
*/
/*var MOSpercValue = 84;
$( function() {
  $( "#slider-range-max4" ).slider({
    range: "max",
    min: 1,
    max: 100,
    value: MOSpercValue,
    disabled: true,
    slide: function( event, ui ) {
      $( "#MOSPercentageValue" ).val( ui.value+"%" );
    }
  });
  $( "#MOSPercentageValue" ).val( $( "#slider-range-max4" ).slider( "value" )+"%" );
  $( "#slider-range-max4" ).css("background-color" , "#F1F422"); 
	$( "#slider-range-max4" ).css("width" , "100%");
} );



var LTVpercValue = 46;
$( function() {
  $( "#slider-range-max3" ).slider({
    range: "max",
    min: 1,
    max: 100,
    value: LTVpercValue,
    disabled: true,
    slide: function( event, ui ) {
      $( "#LTVPercentageValue" ).val( ui.value+"%" );
    }
  });
  $( "#LTVPercentageValue" ).val( $( "#slider-range-max3" ).slider( "value" )+"%" );
  $( "#slider-range-max3" ).css("background-color" , "#C439E3"); 
	$( "#slider-range-max3" ).css("width" , "100%");
} );



var finalDBRPercValue = 93;
$( function() {
  $( "#slider-range-max2" ).slider({
    range: "max",
    min: 1,
    max: 100,
    value: finalDBRPercValue,
    disabled: true,
    slide: function( event, ui ) {
      $( "#finalDbrPercentageValue" ).val( ui.value+"%" );
    }
  });
  $( "#finalDbrPercentageValue" ).val( $( "#slider-range-max2" ).slider( "value" )+"%" );
  $( "#slider-range-max2" ).css("background-color" , "#45AE1A"); 
  $( "#slider-range-max2" ).css("width" , "100%");
} );


var actualDBRPercValue = 45;
$( function() {
  $( "#slider-range-max1" ).slider({
    range: "max",
    min: 1,
    max: 100,
    value: actualDBRPercValue,
    disabled: true,
    slide: function( event, ui ) {
      $( "#dbrPercentageValue" ).val( ui.value+"%" );
    }
  });
  $( "#dbrPercentageValue" ).val( $( "#slider-range-max1" ).slider( "value" )+"%" );
  $( "#slider-range-max1" ).css("background-color" , "#33FFE6"); 
    $( "#slider-range-max1" ).css("width" , "100%");
} );*/


$(document).ready(function() {
	$(".datepicker").datepicker({showOn: "none"});
	$(".datepicker-img").on("click", function() {
		$(this).datepicker("show");
	});
})
