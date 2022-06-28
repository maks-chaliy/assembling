
const $spoilerBtns = document.querySelectorAll('.spoiler__btn');
const $spoilerDrops = document.querySelectorAll('.spoiler__drop');

$spoilerBtns.forEach(el => {
	el.addEventListener('click', (e) => {
		//текущее нажатие кнопки
		let currentBtn = e.currentTarget;

		//находим сам выпадающий список через родителя
		let drop = currentBtn.closest('.spoiler').querySelector('.spoiler__drop');

		$spoilerBtns.forEach(el => {
			//снять все классы у оставшихся кнопок
			if (el !== currentBtn) {
				el.classList.remove('spoiler__btn--active');
			}
		});

		$spoilerDrops.forEach(el => {
			if (el !== drop) {
				el.classList.remove('spoiler__drop--active')
			}
		});

		drop.classList.toggle('spoiler__drop--active')
		//добавляем какой то эффект самой кнопки при ее нажатии
		currentBtn.classList.toggle('spoiler__btn--active')
	});


	/*
	если мы кликаем в любое место вне списка закрыть выпадающий список
	document.addEventListener('click', (e) => {
		если target не != потомкам menu
		menu - actions это родительские блоки, в которых находятся каждый spoiler
		if (!e.target.closest('.menu') && !e.target.closest('.actions')) {
			$spoilerBtns.forEach(el => {
				el.classList.remove('spoiler__btn--active');
			});

			$spoilerDrops.forEach(el => {
				el.classList.remove('spoiler__drop--active')
			});
		}
	});
	*/
});