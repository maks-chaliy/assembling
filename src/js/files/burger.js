


const $burger = document.querySelector('.burger'),
	$nav = document.querySelector('.nav'),
	$body = document.querySelector('body'),
	$navItems = document.querySelectorAll('.nav__item'),
	$navDropdown = document.querySelectorAll('.nav-dropdown');
	// $siteContainer = document.querySelector('.site-container');

$burger.addEventListener('click', () => {

	$burger.classList.toggle('burger--active');// из иконки меню сделать крестик
	$nav.classList.toggle('nav--active');// появление меню
	$body.classList.toggle('stop-scroll');// скрыть прокрутку сайта в
// 	$siteContainer.classList.toggle('stop-scroll-padding');
});


//закрыьть меню при клике на любой пункт меню
//удаляем все ранее присвоенные классы для открытия меню
$navDropdown.forEach(el => {
	el.addEventListener('click', () => {
		$burger.classList.remove('burger--active');
		// $navItems.classList.remove('nav--active');
		//$body.classList.remove('stop-scroll');
	})
});