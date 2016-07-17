/*here I toggled whenever I clicked on 't2'. Important to remember that innerhtml can give access 
to the text in 't2' with === and changes it with one =*/

var changeText = function(){
	
	if (document.getElementById('t2').innerHTML === "Arik") {
		document.getElementById('t2').innerHTML = "Buy more books";
		}
	else {
		document.getElementById('t2').innerHTML = "Arik";
	}


}	
	
    document.getElementById('t2').onclick = changeText 
//add button programatically
var btn = document.createElement("button");
document.getElementById('t2').appendChild(btn);
btn.appendChild(document.createTextNode("Text for button!"))

/*Add an onclick event to the submit button to run a validation function. 
In the validation function pop-up an alert 'submit clicked' when clicked*/

var validationFunc = function () {
	alert("submit clicked");
}

document.getElementById('signupClk').onclick = validationFunc;




