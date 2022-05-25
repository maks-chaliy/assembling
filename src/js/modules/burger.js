
const $burger = document.querySelector('.burger'),
	$nav = document.querySelector('.nav'),
	$body = document.querySelector('body'),
	$navItems = document.querySelectorAll('.nav__item');

$burger.addEventListener('click', () => {

	$burger.classList.toggle('burger--open');// из иконки меню сделать крестик
	$nav.classList.toggle('nav--open');// появление меню
	$body.classList.toggle('stop-scroll');// скрыть прокрутку сайта в меню
});


//закрыьть меню при клике на любой пункт меню
//удаляем все ранее присвоенные классы для открытия меню
$navItems.forEach(el => {
	el.addEventListener('click', () => {
		$burger.classList.remove('burger--open');
		$nav.classList.remove('nav--open');
		$body.classList.remove('stop-scroll');
	})
});




