const $scrollTop = document.querySelector('.scroll-top');

window.onscroll = () => {
	if (window.scrollY > 700) {
		$scrollTop.classList.add('scroll-top--active');
	} else {
		$scrollTop.classList.remove('scroll-top--active');
	}

	$scrollTop.addEventListener('click', () => {
		window.scrollTo(0, 0);
	})
};