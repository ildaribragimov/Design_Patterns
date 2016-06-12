"use strict";
/**
 * Функция определения ширины scrollbar браузера
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov 2016
 */
function getScrollWidth(){
    // Создание элемента с произвольного блока
    var div = document.createElement('div');
    // Назначение CSS-стилей элементу
    div.style.position = 'absolute';
    div.style.bottom = '0px';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    // Добавление элемента в конец элемента BODY
    document.body.appendChild(div);
    // Определение ширины scrollbar-а
    var scrollWidth = div.offsetWidth - div.clientWidth;
    // Удаление элемента из элемента BODY
    document.body.removeChild(div);
    // Возвращение результата функции
    return scrollWidth;
}
var scrollWidth = getScrollWidth();
