const hamburger = document.querySelector('.navbar .container-fluid .navbar-toggler');
const mobile_menu = document.querySelector('.navbar .container-fluid .collapse ul');
const menu_item = document.querySelectorAll('.navbar .container-fluid .collapse ul li a');
const header = document.querySelector('.navbar.container-fluid');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#fff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
