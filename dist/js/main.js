window.addEventListener('load', function() {

	// modal send message
	document.querySelector('.js-modal-send').addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		document.querySelector('.modal-send').classList.add('modal-send--active');
	});
	document.addEventListener('click', function (e) {
		var el = e.target.closest('.modal-send');
		if (!el) {
			document.querySelector('.modal-send').classList.remove('modal-send--active');
		}
	});
	document.querySelector('.js-modal-send-close').addEventListener('click', function() {
		document.querySelector('.modal-send').classList.remove('modal-send--active');
	});

	// modal phone us
	document.querySelector('.js-modal-phone').addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		document.querySelector('.modal-phone').classList.add('modal-phone--active');
	});
	document.addEventListener('click', function (e) {
		var el = e.target.closest('.modal-phone');
		if (!el) {
			document.querySelector('.modal-phone').classList.remove('modal-phone--active');
		}
	});
	document.querySelector('.js-modal-phone-close').addEventListener('click', function() {
		document.querySelector('.modal-phone').classList.remove('modal-phone--active');
	});

	// show left menu on mobile device
	document.querySelector('.js-menu').addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		showMenu();
	});
	document.querySelector('.js-nav-close').addEventListener('click', function(e) {
		e.preventDefault();
		hideMenu();
	});
	document.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var el = e.target.closest('.nav-main');
		if (!el) {
			hideMenu();
		}
	});

	function showMenu() {
		var cover = document.createElement('div');
		cover.classList.add('nav__cover');
		document.querySelector('body').prepend(cover);
		document.querySelector('html').classList.add('no-scroll');
		document.querySelector('.nav-main').classList.add('nav-main--active');
	}
	function hideMenu() {
		document.querySelector('html').classList.remove('no-scroll');
		document.querySelector('.nav__cover').remove();
		document.querySelector('.nav-main').classList.remove('nav-main--active');
	}
});