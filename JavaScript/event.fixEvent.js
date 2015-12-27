/* ==== Решение "fixEvent.js"================================================================================= *
 * ==== Добавление свойств стандартных свойств (target, currentTarget, relatedTarget, pageX/pageY, which) ==== *
 * =========================================================================================================== */
function fixEvent(e) {
    e.currentTarget = this;
    e.target = e.srcElement;
    if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement;
    if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement;
    if (e.pageX == null && e.clientX != null) {
        var html = document.documentElement;
        var body = document.body;
        e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
        e.pageX -= html.clientLeft || 0;
        e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
        e.pageY -= html.clientTop || 0;
    }
    if (!e.which && e.button) {
        e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
    }
    return e;
}
/* =========================================================================================================== */

/*
Пример применения исправления:
В начале вункции обработчика события необходимо вставить строчку:
event = event || fixEvent.call(this, window.event);

Пример кода функции обработчика события:
elem.onclick = function(event) {
  // если IE8-, то получить объект события window.event и исправить его
  event = event || fixEvent.call(this, window.event);
  ...
}
*/