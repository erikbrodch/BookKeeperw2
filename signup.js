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

//add code to validate passwords are the same

var passwordSimilarity = function() {

var password1 = document.getElementById("passwordTyped").value;
var password2 = document.getElementById("confirm_password").value;

if (password1 != password2) {
		document.getElementById('msg').innerHTML = "passwords don't match";
		document.getElementById('msg').style.backgroundColor = "red";
	} 

}
document.getElementById("confirm_password").onblur = passwordSimilarity;

//validate if country is Israel o US

var countryValidation = function () {
	alert("2");
	var myCountry = document.getElementById("country").value;
	if (myCountry != "USA" || myCountry != "Israel") {
		document.getElementById('msg').innerHTML = "not the right country";
		document.getElementById('msg').style.backgroundColor = "red";
	}

};

document.getElementById("country").onblur = countryValidation;




