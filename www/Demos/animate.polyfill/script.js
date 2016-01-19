// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Метод "animate"
 * выполняет анимацию над элементом, на котором был вызван
 *
 * Аргументы:
 * * properties (тип: object) - Объект целевых значений CSS-свойств, которые должны быть изменены
 * * callback (тип: function) - Пользовательская функция обратного вызова, которая исполняется, по завершении анимации
 * * options (тип: object) - Объект параметров анимации. Содержит слудующие параметры:
 * * * easingFunction (тип: string) - Функция динамики выполнения, описывающая график анимации.
 * * * duration (тип: number) - Длительность анимации
 * * * fps (тип: number) - Скорость скены кадров в секунду
 */

Object.prototype.animate = function(properties, callback = null, options = {easingFunc:'linear', duration:1000, fps:50}){
    // Перебор свойств объекта в цикле
    for(var property in properties){
        // Если текущее свойство является собственным (не унаследованным)
        if (properties.hasOwnProperty(property)) {
            // Вывод пары "ключ => значение" в консоль браузера
            // console.log( "Ключ: " + property + " значение: " + properties[property] );
            // Изменение значений CSS-свойств элемента
            this.style[property] = properties[property];
        }
    }
    // Вызов пользовательской функции после окончания анимации
    if ( callback ) { callback(); }
}

// Получение ссылки на объект с именем HTML-тега "а"
document.querySelector('a')
    // Назначение обработчика на событие "клик по элементу"
    .addEventListener("click", function(event){
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // вызов метода анимации на целевом объекте
        event.target.animate({width:'350px'}, function(){
            console.log('Анимация завершена!');
        });
    });