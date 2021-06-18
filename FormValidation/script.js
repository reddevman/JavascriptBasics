// VALIDATE NAME FUNCTION

function validateName()
{
	var name = document.getElementById('contact-name').value;

	if (name.length == 0) {
		producePrompt('Name is required', 'name-error', 'red');
		return false;
	}

	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		producePrompt('First and last name, please.', 'name-error', 'red');
		return false;
	}

	producePrompt('Valid', 'name-error', 'green');
	return true;
}

// VALIDATE PHONE FUNCTION
function validatePhone() {
	var phone = document.getElementById('contact-phone').value;

	if (phone.length == 0) {
		producePrompt('Phone number is required.', 'phone-error', 'red');
		return false;
	}

	if (phone.length != 10) {
		producePrompt('Include area code.', 'phone-error', 'red');
		return false;
	}

	if (!phone.match(/^[0-9]{10}$/)) {
		producePrompt('Only digits, please.', 'phone-error', 'red');
		return false;
	}

	producePrompt('Valid', 'phone-error', 'green');
	return true;
}


// VALIDATE EMAIL FUNCTION
function validateEmail() {
	var email = document.getElementById('contact-email').value;

	if (email.length == 0) {
		producePrompt('Email Invalid', 'email-error', 'red');
		return false;
	}

	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		producePrompt('Email Invalid', 'email-error', 'red');
		return false;
	}

	producePrompt('Valid', 'email-error', 'green');
	return true;
}

// VALIDATE MESSAGE FUNCTION
function validateMessage() {
	var message = document.getElementById('contact-message').value;
	var required = 30;
	var left = required - message.length;

	if (left > 0) {
		producePrompt(left + ' more characters required', 'message-error', 'red');
		return false;
	}

	producePrompt('Valid', 'message-error', 'green');
	return true;
}

// VALIDATE FORM FUNCTION
function validateForm() {
	if (
		!validateName() ||
		!validatePhone() ||
		!validateEmail() ||
		!validateMessage()
	) {
		jsShow('submit-error');
		producePrompt('Please fix errors to submit.', 'submit-error', 'red');
		setTimeout(function () {
			jsHide('submit-error');
		}, 2000);
		return false;
	} else {
	}
}

// SHOW SPAN BLOCK MESSAGE ERROR FOR VALIDATEFORM() FUNCTION
// This function show the span block with the message error if exists when "submit" button is clicked
function jsShow(id) {
	document.getElementById(id).style.display = 'block';
}

// HIDE SPAN BLOCK MESSAGE ERROR FOR VALIDATEFORM() FUNCTION
// Hide the span block with the message error (see setTimeOut function above)
function jsHide(id) {
	document.getElementById(id).style.display = 'none';
}

// INSERT MESSAGE AND COLOR IN CUSTOM SPAN BLOCK FUNCTION
// Create a message with specific parameters in the function, and color this message. Show in the specific field of the form
function producePrompt(message, promptLocation, color) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}
