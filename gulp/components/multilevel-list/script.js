'use strict';


//отлавливать клики на родительском элементе nav__list
//повесили клик на все меню

document.querySelector('.nav__list').onclick = function(event){
	console.log(event)



	if(event.target.nodeName !== 'SPAN') return;
	//вызов функции закрытия
	//сначала нужно все закрыть потом что то новое открывать
	closeAllDropdown (event.target.nextElementSibling);
	event.target.classList.add('dropdown-list--active-span')

	//следущему по дереву соседу через nextElementSibling добавить класс
	//который показывает выпадающее меня первого уровня
	event.target.nextElementSibling.classList.toggle('dropdown-list--active')

	//функция закрытия уже открытых менюшек при нажатии но новое
	function closeAllDropdown (current  = null){
		let parents = [];
		if(current){
			let currentParent = current.parentNode;
			while(currentParent){
				if(currentParent.classList.contains('nav__list')) break;
				if(currentParent.nodeName === 'UL') parents.push(currentParent);
				currentParent = currentParent.parentNode;
			}
		}
		const $dropdown = document.querySelectorAll('.dropdown-list');
		Array.from($dropdown).forEach(item => {
			if(item != current && !parents.includes(item)) {
				item.classList.remove('dropdown-list--active');
				if(item.previousElementSibling.nodeName === 'SPAN'){
					item.previousElementSibling.classList.remove('dropdown-list--active-span')
				}

			}})
	}
}

// document.querySelector('.body').onclick = function(){
// 	document.querySelector('.dropdown-list').classList.remove('dropdown-list--active')
// }