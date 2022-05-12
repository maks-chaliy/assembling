const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function(event){
		event.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}


//=============/=============/=============/=============/=============

// data-goto=".about">  .about => пишем название секции/блока до которого нужен скролл

// <nav class="nav" title="Главное меню" data-nav>
// <ul class="list-reset nav__list">
// 	<li class="nav__item"><a href="#" class="nav__link" data-goto=".about">О школе</a></li>
// 	<li class="nav__item"><a href="#" class="nav__link" data-goto=".trainers">Тренеры</a></li>
// 	<li class="nav__item"><a href="#" class="nav__link" data-goto=".tariffs">Стоимость</a></li>
// </ul>
// </nav>





//прокрутка при клике
// const $navLinks = document.querySelectorAll('.nav__link[data-goto]');

// if ($navLinks.length > 0) {
// 	$navLinks.forEach(navLink => {
// 		navLink.addEventListener('click', onNavLinkClick);
// 	});

// 	function onNavLinkClick(e) {
// 		const navLink = e.target;
// 		if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(navLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: 'smooth'
// 			});
// 			e.preventDefault();
// 		};
// 	}
// }