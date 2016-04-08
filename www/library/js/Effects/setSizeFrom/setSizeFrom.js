"use strict";
/**
 * Метод установки ширины и высоты элемента относительно другого элемента в %-м соотношении
 *
 * @method
 *
 * @param {object} elements - Элемент или коллекция элементов, размеры которых необходимо установить
 * @param {string} metrics - Объект имен метрик с их значениями в %-м соотношении от значений аналогичных метрик "базового элемента"
 * @param {string} [metrics.width = null] - Устанавливаемая ширина, в %-х
 * @param {string} [metrics.height = null] - Устанавливаемая высота, в %-х
 * @param {string} [fromElement = document.documentElement] - "Базовый элемент", относительно которого будут расчитываться устанавливаемые значения метрик. Если не был передан при вызове метода, за базовый элемент принимается объект области просмотра браузера (viewport)
 *
 * @return void
 *
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov 2016
 */
function setSizeFrom(elements, metrics, fromElement) {
    // Назначение значений по умолчанию параметрам метода, если они не были переданы в вызове
    metrics.width = metrics.width || null;
    metrics.height = metrics.height || "get";
    fromElement = fromElement || document.documentElement;

    // Определение переменных, хранящих устанавливаемые значения метрик
    var height = (metrics.height) ? fromElement.clientHeight*(metrics.height/100)+'px' : null,
        width = (metrics.width) ? fromElement.clientWidth*(metrics.width/100)+'px' : null;

    // Обход коллекции элементов
    for (var i = 0; i < elements.length; i++) {
        if (width) {
            elements[i].style.width = width;
        }
        if (height) {
            elements[i].style.height = height;
        }
    };
};