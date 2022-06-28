

/*=============== DROPDOWN ===============*/
const $dropdownItem = document.querySelectorAll('.dropdown__item')

// 1. Выбор каждого элемента
$dropdownItem.forEach((item) =>{
    const $dropdownTitle = item.querySelector('.dropdown__title')

    // 2. Выберите каждый щелчок по заголовку
    $dropdownTitle.addEventListener('click', () =>{
        // 7. Создать переменнуюe
        const openItem = document.querySelector('.dropdown--active')
        
        // 5. Вызов функции toggle item
        toggleItem(item)

        // 8. Проверить, существует ли класс
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Создать функцию постоянного типа
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const dropdownList = item.querySelector('.dropdown__list')

    // 6. Если существует другой элемент, содержащий класс accorion-open, который удаляет его класс
    if(item.classList.contains('dropdown--active')){
			dropdownList.removeAttribute('style')
        item.classList.remove('dropdown--active')
    }else{
        // 4. Задать иаксимальную высоту выпадающего списка
        dropdownList.style.height = dropdownList.scrollHeight + 'px'
        item.classList.add('dropdown--active')
    }
}
