console.log(`slider`);

// const $slider = document.querySelector('.slider');

// let slider = new Swiper($slider, {

// slideClass: 'slider__slide',
// wrapperClass: 'slider__wrapper',

//=============/=============/=============/=============/=============
//бесконечный цикл прокрутки по кругу
// loop: true,


//=============/=============/=============/=============/=============
//отступ между слайдами
// spaceBetween: 10,


//=============/=============/=============/=============/=============
//чтобы слайдер не перелистывал а на месте один менял другой
//effect: 'fade',

//эффект крутящегосЯ куба
//effect: 'cube',

//эффект крайние слайды под углом
// effect: 'coverflow',
// coverflowEffect: {
// 	rotate: 30,
// 	slideShadows: false,
// }

//=============/=============/=============/=============/=============
//количество слайдов в одном блоке
// slidesPerView: 1,


//=============/=============/=============/=============/=============
//размер слайдера зависит от контента
//на странице может быть не 1,2 или несколько целый картинок
//а одна целая и только часть другой
//в css нужно применить свойство swiper-slide{width:auto;}
// slidesPerView: "auto",


//=============/=============/=============/=============/=============
//сменяет слайды группой
// slidesPerGroup: 2,


//=============/=============/=============/=============/=============
//стрелочки управленияк
// navigation: {
// 	//названия классов кнопок
// 	nextEl: '.slider__btn-next',
// 	prevEl: '.slider__btn-prev',
// },


//=============/=============/=============/=============/=============
//точки управления
// pagination: {
// 	el: '.swiper-pagination',
// 	type: 'bullets',
//если нужны цифры нужен другой тип пагинации
// type: 'fraction',
// 	//чтобы точки были кликабельны
// 	clickable: true,
// },


//=============/=============/=============/=============/=============
//автоматическое переключение слайдера каждые 2 сек
// autoplay: {
// 	delay: 2000,
// },



//=============/=============/=============/=============/=============
//при клике на сам слайд листает его дальше
//не работает с классом swiper-no-swiping
// slideToClikedSlides: true,


//=============/=============/=============/=============/=============
// Responsive breakpoints
// breakpoints: {
// 	// when window width is >= 320px
// 	320: {
// 		slidesPerView: 1,
// 		spaceBetween: 10
// 	},
// 	// when window width is >= 480px
// 	768: {
// 		slidesPerView: 2,
// 		spaceBetween: 20
// 	},
// 	// when window width is >= 640px
// 	1024: {
// 		slidesPerView: 3,
// 		spaceBetween: 30
// 	}
// },


//=============/=============/=============/=============/=============
//заранее загружает фотографии слева и справа от текущих
// lazy: {
// 	loadPrevNext: true,
// },


//=============/=============/=============/=============/=============
//если несколько слайдеров на одной странице то все слайдеры можно использоовать под одним классом
//через forEach перебираются все слайдеры
//стрелочки и точки так же перебираются, чтобы они работали у конкретного слайдера

// const $sliders = document.querySelectorAll('.slider');

// $sliders.forEach((el) => {
// 	let sliders = new Swiper(el, {
// slideClass: 'slider__slide',
// wrapperClass: 'slider__wrapper',

//стрелочки управления
//названия классов идет через селектор классов
// navigation: {
// 	//названия классов кнопок
// 	nextEl: el.querySelector('.slider__btn-next'),
// 	prevEl: el.querySelector('.slider__btn-prev'),
// },

//точки управления
//названия классов идет через селектор классов
// pagination: {
// 	el: el.querySelector('.swiper-pagination'),
// 	type: 'bullets',
//если нужны цифры нужен другой тип пагинации
// type: 'fraction',
// 	//чтобы точки были кликабельны
// 	clickable: true,
// },
// 	})
// })


//=============/=============/=============/=============/=============
//переключение блоков карточек на десктопе на слайдер в мобильной версии

// const $slider = document.querySelector('.slider');

// let mySlider;

// function mobileSlider (){

// 	if(window.innerWidth <= 600 && $slider.dataset.mobile == "false"){
// 		mySlider = new Swiper ($slider,{
// 			slideClass: 'slider__slide',
// 			wrapperClass: 'slider__wrapper',
// 			//идет перечисление свойств как в обычном слайдере
// 		});

// 		$slider.dataset.mobile == "true"
// 	}

// 	if(window.innerWidth > 600){
// 		$slider.dataset.mobile == "false";

// 		if($slider.classList.contains('swiper-container-intialized')){
// 			mySlider.destroy();
// 		}
// 	}
// };

// mobileSlider();

// window.addEventListener('resize', ()=>{
// 	mobileSlider();
// })


//=============/=============/=============/=============/=============

// });