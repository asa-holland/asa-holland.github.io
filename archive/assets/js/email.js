// Script modified from eclarrrk on CodePen: https://codepen.io/eclarrrk/pen/ZZywZv

// Function to show prompts to user while hovering over email link
$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

	// Set up initial variables for mailto class and default prompt strings
	var mailto = $('.mailto-link');
	var messageCopyPrompt = 'Click or tap to copy email address to clipboard';
	var messageSuccess = 'Email address copied to clipboard';
	
	// Adds the copy prompt span to the item with the mailto class
	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopyPrompt);
	
	// Disable the default process of opening the email client
	$('a[href^=mailto]').click(function() {
		return false; 
	})
	
	// On click/tap, save the href value of the provided element. 
	// Remove the 'mailto:' substring from the href value, leaving just the email address
	// Store this email address in a variable as 'email' using the copyToClipboard function.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopyPrompt);}, 2000); 
	});
	
});

// Script modified from walkman on StackOverflow: https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
// Copies the provided text to the clipboard
function copyToClipboard(text) {

	// Create a new temporary variable on the webpage based on input
    var temporary = document.createElement("input");

    // add the temporary variable to the body of the document
    document.body.appendChild(temporary);

    // set the text value of the temporary object  to be that of the provided text
    temporary.setAttribute('value', text);

    // select the temporary element
    temporary.select();

    // copy the selected element to the clipboard
    document.execCommand('copy');

    // remove the temporary element from the document body
    document.body.removeChild(temporary);
}