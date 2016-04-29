"use strict"; document.addEventListener("DOMContentLoaded", function() {
/**
 * Функция "getIndex" проверяет присутствует ли значение "needle" в массиве (коллекции) "haystack". Если присутствует, фугкция возвращает в качестве результата ключ найденноо элемента в искомом массиве (коллекции)
 */
function getIndex(c,b){for(var a=0,d=b.length;a<d;a++){if(b[a]==c){return a;}}return !1;};
/**
 * Функция "parent" ищет родителя элемента и возвращает ссылку на него
 */
function parent(a,b){var c=a,d=document.querySelectorAll(b);while(c!=null){c=c.parentNode;var i=getIndex(c,d);if(i!==false){return d[i];}}return false;};
/* ==== Решение "disableScroll.js" ========= *
 * ==== Блокировка/Активация прокрутки страницы ==== *
 * ================================================= */
var a={32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1};function b(d){if(a[d.keyCode]){d.preventDefault();return false;}};function c(){event.preventDefault();return false;};function disableScroll(){if(window.addEventListener){window.addEventListener('DOMMouseScroll',c,false);}window.onwheel=function(d){d.preventDefault();};window.onmousewheel=document.onmousewheel=function(d){d.preventDefault();};window.ontouchmove=function(d){d.preventDefault();};document.onkeydown=b;};function enableScroll(){if(window.removeEventListener){window.removeEventListener('DOMMouseScroll', c, false);}window.onwheel=null;window.onmousewheel=document.onmousewheel=null;window.ontouchmove=null;document.onkeydown=null;};
/**
 * Класс выезжающей панели навигации
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov 2016
 */
function slidePannel(e){function a(b,c){c=c||null;for(var a="show"==b?!0:!1,d=0;d<e.length;d++)document.querySelector(e[d]).classList.toggle("sidebar_open",a);f.enable=a;c&&c()}this.enable=!1;var f=this;this.show=function(b){a("show",b)};this.hide=function(b){a("hide",b)}};
/**
 * Решение требует подключения:
 * - disableScroll.min.js
 * - slidePannel.min.js
 */

// Создание экземпляра объекта "Выезжающей панели главного меню"
var slideMenuPannel = new slidePannel([".sidebar", ".sidebar__toggle-button"]);

// Открытие/Скрытие главного меню на мобильных устройствах, при клике по кнопке "burger-button"
(function(burgerButton){
    // Назначение обработчика события татча по пунктам меню
    burgerButton.addEventListener('touchend', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Вызов события "onclick"
        event.target.click();
    });
    // Назначение обработчика события клика по пункту меню
    burgerButton.addEventListener('click', function(event) {
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // Проверка состояния главного меню
        (slideMenuPannel.enable == true)
            // Вызов метода "Сворачивания панели", если панель развернута
            ? slideMenuPannel.hide(enableScroll)
            // Вызов метода "Разворачивания панели", если панель свернута
            : slideMenuPannel.show(disableScroll);
    });
})(document.querySelector('.sidebar__toggle-button'));

// Назначение обработчика событию "Изменение размера окна браузера"
window.addEventListener("resize", function(event){
    // Сворачивание панели навигации, при условиях: Ширина "Области просмотра браузера" > 960px; Панель навигации развернута.
    if ( document.documentElement.clientWidth > 960 && slideMenuPannel.enable == true ) slideMenuPannel.hide(enableScroll);
});
});