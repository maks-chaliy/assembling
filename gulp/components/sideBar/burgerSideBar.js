const $burger = document.querySelector('.burger');
const $nav = document.querySelector('.nav');

$burger.addEventListener('click', () => {
	$nav.classList.toggle('nav--open')
});


const $navItems = document.querySelectorAll('.nav__item');

function activeLink() {
	$navItems.forEach((item) =>
		item.classList.remove('nav__item--active'));
	this.classList.add('nav__item--active');
}

$navItems.forEach((item) =>
	item.addEventListener('click', activeLink));