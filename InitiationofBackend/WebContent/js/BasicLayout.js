function filterColumn0() {
	
  var input, filter, table, tr, td, i,td1,trim;
  input = document.getElementById("one");
 // alert("First col>>"+input);
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1=td.innerHTML;
     trim = td1.substr(0,10);
    
   console.log("value of trim "+trim);
    if (td) {
      if (trim.toUpperCase().indexOf(filter) > -1) {
    	 
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function filterColumn1() {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("two");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 2; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[1];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}

function filterColumn2() {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("three");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 2; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[2];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}

function filterColumn3() {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("four");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 2; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[3];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}

function filterColumn4() {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("five");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 2; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[4];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}

function filterColumn5() {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("six");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 2; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[5];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}

function filterColumn6() {
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("seven");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 2; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[6];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}