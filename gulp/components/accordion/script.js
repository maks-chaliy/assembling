

const $accordionItem = document.querySelectorAll('.accordion__item');
const section = document.querySelector('.section')

for(item of $accordionItem) {

	item.addEventListener('click', function(){
		if(this.classList.contains('accordion__item--active')){
			this.classList.remove('accordion__item--active');
		} else {
			for(el of $accordionItem) {
				el.classList.remove('accordion__item--active');
			}
			this.classList.add('accordion__item--active');
		}
	})
}