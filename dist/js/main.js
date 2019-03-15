window.addEventListener('load', function() {
	var flky = new Flickity( '.js-slider', {
		cellSelector: '.slider-item',
		autoPlay: 5000,
		fade: true,
		wrapAround: true,
		prevNextButtons: false
	});

	document.querySelector('.js-smoothscroll').addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
	});
});

function showMenu() {
	if (!$('.nav__cover').length) $('body').prepend('<div class="nav__cover"></div>');
	$('html').addClass('no-scroll');
	$('.nav__main').addClass('nav__main--active');
}
function hideMenu() {
	if ($('html').hasClass('no-scroll')) $('html').removeClass('no-scroll');
	if ($('.nav__cover').length) {
		$('.nav__cover').remove();
	}
	$('.nav__main').removeClass('nav__main--active');
}