window.addEventListener("load",InitControls)
window.addEventListener("load",addlistener)
let totalgrade=0.0; 
var countnumgrade= 0;

function addlistener()
{
	document.getElementById("btnsubmit").addEventListener("click",switchelements);
	document.getElementById("btngrdsub").addEventListener("click",calcaverage);
}

function InitControls()
{
	document.getElementById("txtnumgrade").focus();
	document.getElementById("entergrade").style.display="none";
}
function switchelements()
{
	document.getElementById("howmany").style.display="none";	
	document.getElementById("entergrade").style.display="block";	
	document.getElementById("txtentgrade").focus();
}
function calcaverage()
{
	var hownumgrade= document.getElementById("txtnumgrade").value ;
	var enteredgrade= document.getElementById("txtentgrade").value; 
	totalgrade= parseFloat(enteredgrade)+ parseFloat(totalgrade);
	
	document.getElementById("txtentgrade").value ="";
	document.getElementById("txtentgrade").focus();
	countnumgrade = parseInt(countnumgrade)+parseInt(1);
	document.getElementById("txtnumgrade").textContent= "grade "+ countnumgrade + ": " + enteredgrade;
	if(parseInt(countnumgrade)== parseInt(hownumgrade))
	{
		totalgrade = parseFloat(totalgrade) / parseInt(hownumgrade); 
		document.getElementById("lbldisplay").textContent = "the average is " + totalgrade.toFixed(2);
		document.getElementById("txtentgrade").disabled="true";
	}
}