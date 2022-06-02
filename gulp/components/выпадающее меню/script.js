const $navBtn = document.querySelector('.nav-btn');
const $nav = document.querySelector('.nav');

$navBtn.addEventListener('click', () => {

	$nav.classList.toggle('nav--active');// появление меню
});



const $navHeading = document.querySelectorAll('.nav__heading'),
	$drop = document.querySelectorAll('.drop');

$navHeading.forEach(el => {
	el.addEventListener('click', (e) => {
		//текущий элемент,та кнопка на которую нажали
		let currentBtn = e.currentTarget;
		//через родителя currentBtn ('.nav__item') добираемся до выпадающего текущего списка ('.drop)
		let dropdown = currentBtn.closest('.nav__item').querySelector('.drop');

		$navHeading.forEach(el => {
			//если этот элемент != currentBtn
			//если мы при клике не находимся на текущей кнопки то у всех оставшихся удаляем класс
			if (el != currentBtn) {
				el.classList.remove('nav__heading--active');
			}
		});

		//при клике на другую кнопку меню у другой кнопкт закрывается
		$drop.forEach(el => {
			if (el != dropdown) {
				el.classList.remove('drop--active');
			}
		});

		currentBtn.classList.toggle('nav__heading--active');//добавляется новый класс для кнопки но не сбрасывается у соседей
		dropdown.classList.toggle('drop--active');

	});

	document.addEventListener('click', (e) => {
		//если target != потомкам menu
		if (!e.target.closest('.nav')) {
			$navHeading.forEach(el => {
				el.classList.remove('nav__heading--active');
			});

			$drop.forEach(el => {
				el.classList.remove('drop--active');
			});
		}
	})
});