//$(document).ready(function() {
document.addEventListener( 'DOMContentLoaded', function() {
	// Variables
	var 	$body = $('body'),
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
		if ( $('.popover.open').length > 0 ) {
			$('.popover').removeClass('open')
		}
	}

	init();


	// this is the carousel/slider
	var splide = new Splide( '.splide', {
		type   : 'loop',
		perPage: 1,
		autoplay: true,
		pauseOnHover: true
	});
	splide.mount();

});


