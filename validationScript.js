    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let alphaInput = document.getElementById('inputField');
let submitButton = document.getElementById('submitButton');
let theForm = document.getElementById('myForm');

let alphaRegex = /^[a-zA-Z0-9]+$/;

submitButton.addEventListener('click', checkAlpha);

function checkAlpha(event) {
    if (!alphaRegex.test(alphaInput.value)) {
        alphaInput.setCustomValidity("Enter an alpha inut please");
        return false;
    }
    else {
        return confirm('The form has been submitted');
    }
}