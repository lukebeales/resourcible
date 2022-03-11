$(document).ready(function() {
	contact_form_init();
});

function contact_form_init() {
	document.getElementById('contact-form').innerHTML = `
		<form>
			<div class="row">
				<div class="six columns">
					<label for="contact-name">Your name</label>
					<input class="u-full-width" type="text" id="contact-name" required="required">
				</div>
				<div class="six columns">
					<label for="contact-email">Your email</label>
					<input class="u-full-width" type="email" placeholder="test@mailbox.com" id="contact-email" required="required">
				</div>
			</div>
			<label for="contact-reason">Reason for contacting</label>
			<select class="u-full-width" id="contact-reason" required="required">
				<option>Just asking</option>
				<option>ResourciBoard</option>
			</select>
			<label for="contact-message">Message (optional)</label>
			<textarea class="u-full-width" placeholder="Hi…" id="contact-message"></textarea>

			<!-- initially disabled for recaptcha loading -->
			<button disabled="disabled" class="button-primary g-recaptcha" data-sitekey="6LfF96gUAAAAAEt0iFm6sRVlHtl8bTRReURFhrOl" data-callback="contact_form_send" data-action="contact">Send</button>
		</form>
	`;
}

function contact_form_send(token) {
	//e.preventDefault();

	var URL = "https://qjn2mh8df7.execute-api.ap-southeast-2.amazonaws.com/";
	var DATA = {
		name: document.getElementById("contact-name").value,
		email: document.getElementById("contact-email").value,
		reason: document.getElementById("contact-reason").value,
		message: document.getElementById("contact-message").value,
		recaptcha: token
	};
	var HEADERS = {
		"Content-Type": "application/json",
		"Access-Control-Origin": "*"
	};

	fetch(URL, {
		method: "POST",
		headers: HEADERS,
		body: JSON.stringify(DATA)
	})
	.then(function(response) {
		alert(response);
	})
	.then(function(data) {
		alert('oh no');
	});
}
