

// const $sliderMain = document.querySelector('.slider-main');

// let sliderMain = new Swiper($sliderMain, {
// 	slideClass: 'slider-main__slide',
// 	wrapperClass: 'slider-main__wrapper',
// }); 

if (document.querySelector('.slider-main')) {
	new Swiper('.slider-main', {

		//=============/=============/=============/=============/=============
		//переименовать классы слайдера
		slideClass: 'slider-main__slide',
		wrapperClass: 'slider-main__wrapper',

		//=============/=============/=============/=============/=============
		//количество слайдов в одном блоке
		slidesPerView: 1,

		//=============/=============/=============/=============/=============
		//бесконечный цикл прокрутки по кругу
		loop: true,

		//=============/=============/=============/=============/=============
		//отступ между слайдами
		spaceBetween: 30,

		//=============/=============/=============/=============/=============
		//скорость
		speed: 1400,

		//=============/=============/=============/=============/=============
		//эффект паралакса
		parallax: true,

		//=============/=============/=============/=============/=============
		//сменяет слайды группой
		// slidesPerGroup: 2,

		//=============/=============/=============/=============/=============
		//arrows
		navigation: {
			nextEl: '.slider-main__arrow-next',
			prevEl: '.slider-main__arrow-prev',
		},

		//=============/=============/=============/=============/=============
		//dotts
		pagination: {
			el: '.slider-main__dotts',
			type: 'bullets',
			//если нужны цифры нужен другой тип пагинации
			//type: 'fraction',
			//чтобы точки были кликабельны
			clickable: true,
		},

		//=============/=============/=============/=============/=============
		//автоматическое переключение слайдера каждые 2 сек
		autoplay: {
			delay: 4000,
		},

		//=============/=============/=============/=============/=============
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 10
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20
		// 	},
		// 	1024: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 30
		// 	}
		// },
	});
}




const $toggle = document.querySelector('.toggle');
const $header = document.querySelector('.header');
const $navItem = document.querySelector('.nav__item');

$toggle.addEventListener('click', () => {
	$toggle.classList.toggle('toggle--active');
	$header.classList.toggle('header--active');
	$navItem.classList.toggle('nav__item--active')
});