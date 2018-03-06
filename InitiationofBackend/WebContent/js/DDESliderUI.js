$( function() {
    $( "#draggable2" ).draggable().resizable();
  } );


var toggle = true;

$(".sidebar-icon").click(function() {                
  if (toggle)
  {
	$(".page-container").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
	$("#menu span").css({"position":"absolute"});
  }
  else
  {
	$(".page-container").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
	setTimeout(function() {
	  $("#menu span").css({"position":"relative"});
	}, 400);
  }
				
				toggle = !toggle;
			});


function tab(id){
	alert("hi");
	if(id == 'heading1') {
        var ele=docGet(id);
  /*    alert(ele.parentElement.className);*/
       if(ele.parentElement.className==="panel-heading draggable1")
			 {
    	/*  alert("inside");*/
    	   alert("hi");
    	   alert("hello "+(ele.parentElement.parentElement.getElementsByTagName('div')[1].className));
			 if(ele.parentElement.parentElement.getElementsByTagName('div')[1].className==""){
			/* alert("TRUE");*/
		        hide('panelContent');
		        show('heading');
		        ele.parentElement.parentElement.className="panel panel-default panel-size panel-vertical-align";
		        ele.className="fa fa-plus" ;
		        ele.style.float="right";
		       /* ele.parentElement.setAttribute("-moz-transform", "rotate(90deg)");
		        ele.parentElement.setAttribute("-webkit-transform", "rotate(90deg)");
		        ele.parentElement.setAttribute("transform", "rotate(90deg)");*/
			 }
			 else {
				/* alert( ele.parentElement.parentElement.getElementsByTagName('div')[0].className);*/
				 show('panelContent');
				 ele.parentElement.parentElement.className="panel panel-default panel-size";
				 ele.parentElement.parentElement.style.width="fit-content";
				 ele.parentElement.parentElement.style.height="fit-content";
				 ele.className="fa fa-window-minimize" ;
				
			}
			 }
       else{
    	   /*alert("FALSE");*/
    	   show('panelContent');
           }
    }
	if(id == 'chatboxDesignHeading1') {
		var ele=docGet(id);
		/* alert(ele.parentElement.className);*/
		if(ele.className==="panel-heading draggable1 Custom-Cursor")
		{
		/* alert("inside");*/
		if(ele.parentElement.getElementsByTagName('div')[1].className==""){
		/* alert("TRUE");*/
		hide('chatboxDesignPanelContent');
		show('chatboxDesignHeading1');
		ele.parentElement.className="panel panel-default panel-bottom-align";


		/* ele.parentElement.setAttribute("-moz-transform", "rotate(90deg)");
		ele.parentElement.setAttribute("-webkit-transform", "rotate(90deg)");
		ele.parentElement.setAttribute("transform", "rotate(90deg)");*/
		}
		else {
		/* alert( ele.parentElement.parentElement.getElementsByTagName('div')[0].className);*/
		show('chatboxDesignPanelContent');
		ele.parentElement.className="panel panel-default panel-bottom-align";
		/*ele.parentElement.style.width="fit-content";
		ele.parentElement.style.height="fit-content";*/


		}
		}
		else{
		/* alert("FALSE");*/
		show('chatboxDesignPanelContent');
		}
		}
	if(id == 'chatboxDesignHeading2') {
		var ele=docGet(id);
		/* alert(ele.parentElement.className);*/
		if(ele.className==="panel-heading  draggable1 Custom-Cursor")
		{
	/*	alert("inside");*/
		if(ele.parentElement.getElementsByTagName('div')[1].className==""){
		/* alert("TRUE");*/
		hide('chatboxDesignPanelContent');
		show('chatboxDesignHeading1');
		ele.parentElement.className="panel panel-default panel-bottom-align-main1";


		/* ele.parentElement.setAttribute("-moz-transform", "rotate(90deg)");
		ele.parentElement.setAttribute("-webkit-transform", "rotate(90deg)");
		ele.parentElement.setAttribute("transform", "rotate(90deg)");*/
		}
		else {
		/* alert( ele.parentElement.parentElement.getElementsByTagName('div')[0].className);*/
		show('chatboxDesignPanelContent');
		ele.parentElement.className="panel panel-default panel-bottom-align-main1";
		/*ele.parentElement.style.width="fit-content";
		ele.parentElement.style.height="fit-content";*/


		}
		}
		else{
		/* alert("FALSE");*/
		show('chatboxDesignPanelContent');
		}
		}


		}
function toggle(id) {
	if(activated(id)) {
	    deactivate(id);
	}
	else {
	    activate(id);
	}
	}

	function hide(id) {
	docAddClass(id, 'hidden');
	}
	function show(id) {
	docRemoveClass(id, 'hidden');
	}

	function activate(id) {
	docRemoveClass(id, 'inActive');
	docAddClass(id, 'active');
	}
	function deactivate(id) {
	docRemoveClass(id, 'active');
	docAddClass(id, 'inActive');
	}

	function activated(id) {
	var e = docGet(id);
	if(e.className.search('active') == -1) {
	    return false;
	}
	return true;
	}



	function docGet(id) {
	return document.getElementById(id);
	}
	function docAddClass(id, classToAdd) {
	var e = docGet(id);
	if(e.className.length <= 0) {
	    e.className = classToAdd;
	}
	else {
	    if(e.className.search(classToAdd) == -1) {
	        e.className = e.className + ' ' + classToAdd;
	    }
	}
	}

	function docRemoveClass(id, classToRem) {
	var e = docGet(id);
	if(e.className.length > 0) {
	    if(e.className.search(classToRem) != -1) {
	        e.className = e.className.replace(classToRem, "");
	    }
	}
	}









