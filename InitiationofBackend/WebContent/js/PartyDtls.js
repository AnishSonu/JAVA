function populateCorpDtls(i) {
	var table = document.getElementById("mytablebody1");
	var rows = table.rows;
	var cells = rows[i].cells;
	var cifId = rows[i].cells[1].innerHTML;
	document.getElementById("cifNo").value=cifId;
}