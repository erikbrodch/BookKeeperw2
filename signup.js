/*Add an onclick event to the submit button to run a validation function. 
In the validation function pop-up an alert 'submit clicked' when clicked*/

var validationFunc = function () {
	alert("submit clicked");
}

document.getElementById('signupClk').onclick = validationFunc;

//Add code that checks if the user's password is at least 6 chars - if not, write the error to the msg div.

var validationPassword = function () {
	var passwordCheck = document.getElementById("passwordTyped").value;
	if (passwordCheck.length < 6) {
		document.getElementById('msg').innerHTML = "password is too short";
		document.getElementById('msg').style.backgroundColor = "red";
	} 
};

document.getElementById("passwordTyped").onblur = validationPassword;