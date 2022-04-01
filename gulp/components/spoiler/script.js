const $spoiler = document.querySelectorAll('.spoiler__item');
const $body = document.querySelectorAll('body');

$spoiler.forEach((item) => {
	item.addEventListener('click', () => {
		let currentBtn = item;
		
		if (!currentBtn.classList.contains('spoiler--open')) {
			$spoiler.forEach((item) => {
				item.classList.remove('spoiler--open')
			})
		}

		currentBtn.classList.toggle('spoiler--open');
	})
});