function showhide1(){
								
								document.getElementById("MyUser").style.display 	= 'none';
								var x = document.getElementById("MyRole");
							    if (x.style.display === "none") {
							        x.style.display = "block";
							    } 
						}
							
						 
							function showhide2(){
								
								document.getElementById("MyRole").style.display 	= 'none';
								
								var x = document.getElementById("MyUser");
							    if (x.style.display === "none") {
							        x.style.display = "block";
							    } 
							    }

							function subDecisionReason(){
							    
								document.getElementById("DecisionReason").options.length = 0;
								var a= document.getElementById("Decision").value;
								if(a == "Approved")
								{

							    var approved = document.createElement("option");
							    approved.setAttribute("value", "Better Growth");
							    var t = document.createTextNode("Better Growth");
							    approved.appendChild(t);

							    var approved1 = document.createElement("option");
							    approved1.setAttribute("value", "Potential Opportunity");
							    var t1 = document.createTextNode("Potential Opportunity");
							    approved1.appendChild(t1);

							    var approved2 = document.createElement("option");
							    approved2.setAttribute("value", "Approved with Condition");
							    var t2 = document.createTextNode("Approved with Condition");
							    approved2.appendChild(t2);
								
								var approved3 = document.createElement("option");
							    approved3.setAttribute("value", "Review Done");
							    var t3 = document.createTextNode("Review Done");
							    approved3.appendChild(t3);
								
								var approved4 = document.createElement("option");
							    approved4.setAttribute("value", "No Risk");
							    var t4 = document.createTextNode("No Risk");
							    approved4.appendChild(t4);
								
								var approved5 = document.createElement("option");
							    approved5.setAttribute("value", "Signoff");
							    var t5 = document.createTextNode("Signoff");
							    approved5.appendChild(t5);
								
								
								var approved6 = document.createElement("option");
							    approved6.setAttribute("value", "Validated");
							    var t6 = document.createTextNode("Validated");
							    approved6.appendChild(t6);
								
								var approved7 = document.createElement("option");
							    approved7.setAttribute("value", "Verified");
							    var t7 = document.createTextNode("Verified");
							    approved7.appendChild(t7);



							   document.getElementById("DecisionReason").appendChild(approved);
							   document.getElementById("DecisionReason").appendChild(approved1);
							   document.getElementById("DecisionReason").appendChild(approved2);
							   document.getElementById("DecisionReason").appendChild(approved3);
							   document.getElementById("DecisionReason").appendChild(approved4);
							   document.getElementById("DecisionReason").appendChild(approved5);
							   document.getElementById("DecisionReason").appendChild(approved6);
							   document.getElementById("DecisionReason").appendChild(approved7);
							   
							   
							   }
								
								if(a == "SendBack")
								{

							    var approved = document.createElement("option");
							    approved.setAttribute("value", "Query Unresolved");
							    var t = document.createTextNode("Query Unresolved");
							    approved.appendChild(t);

							    var approved1 = document.createElement("option");
							    approved1.setAttribute("value", "Not Comfortable");
							    var t1 = document.createTextNode("Not Comfortable");
							    approved1.appendChild(t1);

							    var approved2 = document.createElement("option");
							    approved2.setAttribute("value", "Requested unjustified");
							    var t2 = document.createTextNode("Requested unjustified");
							    approved2.appendChild(t2);
								
								var approved3 = document.createElement("option");
							    approved3.setAttribute("value", "Commitment not Met");
							    var t3 = document.createTextNode("Commitment not Met");
							    approved3.appendChild(t3);
								
							   document.getElementById("DecisionReason").appendChild(approved);
							   document.getElementById("DecisionReason").appendChild(approved1);
							   document.getElementById("DecisionReason").appendChild(approved2);
							   document.getElementById("DecisionReason").appendChild(approved3);
							   
							 
							   }
								
								  if(a == "Reject")
									{

								    var approved = document.createElement("option");
								    approved.setAttribute("value", "Document Missing");
								    var t = document.createTextNode("Document Missing");
								    approved.appendChild(t);

								    var approved1 = document.createElement("option");
								    approved1.setAttribute("value", "Data to be Corrected");
								    var t1 = document.createTextNode("Data to be Corrected");
								    approved1.appendChild(t1);

								    var approved2 = document.createElement("option");
								    approved2.setAttribute("value", "Others");
								    var t2 = document.createTextNode("Others");
								    approved2.appendChild(t2);
									
								   document.getElementById("DecisionReason").appendChild(approved);
								   document.getElementById("DecisionReason").appendChild(approved1);
								   document.getElementById("DecisionReason").appendChild(approved2);
								 
								   }
								  if(a == "SendtoCPV")
									{
								    var approved = document.createElement("option");
								    approved.setAttribute("value", "CPV Check");
								    var t = document.createTextNode("CPV Check");
								    approved.appendChild(t);

								   document.getElementById("DecisionReason").appendChild(approved);
								 
								   } 
								   
								   if(a == "SendtoAssignment")
									{

								    var approved = document.createElement("option");
								    approved.setAttribute("value", "Proceed");
								    var t = document.createTextNode("Proceed");
								    approved.appendChild(t);

								    var approved1 = document.createElement("option");
								    approved1.setAttribute("value", "Assign to commitee");
								    var t1 = document.createTextNode("Assign to commitee");
								    approved1.appendChild(t1);
								    
								   document.getElementById("DecisionReason").appendChild(approved);
								   document.getElementById("DecisionReason").appendChild(approved1);
								  
								   }
							   
							   }