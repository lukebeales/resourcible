$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $body = $('body'),
      $popoverLink = $('[data-popover]'),
      $document = $(document);

  function init() {
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  init();

});



function contact_form(e) {
       e.preventDefault();

       // var URL = "https://qjn2mh8df7.execute-api.ap-southeast-2.amazonaws.com/";
       var URL = "https://a9burwlw8c.execute-api.ap-southeast-2.amazonaws.com/";
       var DATA = {
          name: document.getElementById("contact-name").value,
          email: document.getElementById("contact-email").value,
          reason: document.getElementById("contact-reason").value,
          message: document.getElementById("contact-message").value
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
	    console.log(response);
	})
	.then(function(data) {
	    // i think this is a failure
	    console.log(data)
	});
}
