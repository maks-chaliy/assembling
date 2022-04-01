

const $menuBtn = document.querySelectorAll('.menu__btn'),
	$dropdown = document.querySelectorAll('.dropdown');

$menuBtn.forEach(el => {
	el.addEventListener('click', (e) => {
		//текущий элемент,та кнопка на которую нажали
		let currentBtn = e.currentTarget;
		//через родителя currentBtn ('.menu__item') добираемся до выпадающего текущего списка ('.dropdown')
		let dropdown = currentBtn.closest('.menu__item').querySelector('.dropdown');

		$menuBtn.forEach(el => {
			//если этот элемент != currentBtn
			//если мы при клике не находимся на текущей кнопки то у всех оставшихся удаляем класс
			if (el != currentBtn) {
				el.classList.remove('menu__btn--active');
			}
		});

		//при клике на другую кнопку меню у другой кнопкт закрывается
		$dropdown.forEach(el => {
			if (el != dropdown) {
				el.classList.remove('dropdown--active');
			}
		});

		currentBtn.classList.toggle('menu__btn--active');//добавляется новый класс для кнопки но не сбрасывается у соседей
		dropdown.classList.toggle('dropdown--active');

	});

	document.addEventListener('click', (e) => {
		//если target != потомкам menu
		if (!e.target.closest('.menu')) {
			$menuBtn.forEach(el => {
				el.classList.remove('menu__btn--active');
			});

			$dropdown.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	})
})
