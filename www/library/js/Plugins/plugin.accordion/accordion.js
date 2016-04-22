"use strict";
/**
 * Класс "Аккордеон"
 *
 * @class
 * @classdesc Разворачивает/Сворачивает секцию аккордеона.
 *
 * @param {array} selector - Селектор элемента Аккордеон, Объект которого необходимо создать
 *
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov 2016
 */
function accordion(selector) {
    /**
     * @property {boolean} [enable = false] - Cтатус доступности содержимого секции
     * @public
     */
    this.enable = false;
    /**
     * @property {object} self - Ссылка на текущий объект
     */
    var self = this;
    /**
     * Конструктор класса
     *
     * @constructor
     * @param {array} element - Селектор элемента Аккордеон, Объект которого необходимо создать
     * @return void
     */
    function constructor(selector) {
        // Назначение обработчика события татча по заголовку секции аккордеона
        selector.addEventListener("touchend", function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Обработка события, если оно было вызвано на элементе заголовка секции аккордеона
            if (event.target.classList.contains("link")) {
                // Вызов события "onclick"
                event.target.click();                
            }
        });
        // Назначение обработчика события клика по заголовку секции аккордеона
        selector.addEventListener("click", function(event) {
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Обработка события, если оно было вызвано на элементе заголовка секции аккордеона
            if (event.target.classList.contains("link")) {
                // Сворачивание/Разворачивание секции аккордеона в зависимости от ее текущего состояния
                ( self.enable == true ) ? self.hide(event.target) : self.show(event.target);
            }
        });
    }
    /**
     * Метод разворачивает секцию
     *
     * @public
     * @param {requestCallback} [callback = null]- Пользовательская функция обратного вызова
     * @return void
     *
     * @description Добавляет DOM-узлам, переданным при инициализации класса в параметре "selector", дополнительные CSS-классы описания состояния секции "accordion__section_open" и вызывает функцию обратного вызова, если она была передана.
     */
    this.show = function(target, callback) {
        toggle(target, "show", callback);
    };
    /**
     * Метод сворачивает панель
     *
     * @public
     * @param {requestCallback} [callback = null]- Пользовательская функция обратного вызова
     * @return void
     *
     * @description Удаляет у DOM-узлов, переданных при инициализации класса в параметре "selector", дополнительные CSS-классы описания состояния секции "accordion__section_open" и вызывает функцию обратного вызова, если она была передана.
     */
    this.hide = function(target, callback) {
        toggle(target, "hide", callback);
    };
    /**
     * Метод Разворачивает/Сворачивает панель
     *
     * @private
     * @param {string} actionName - Действие, которое необходимо совершить с панелью
     * @param {requestCallback} [callback = null]- Пользовательская функция обратного вызова
     * @return void
     *
     * @description Вспомогательный внутренний метод, выполняющих действия, которые ему были переданы
     */
    function toggle(target, actionName, callback) {
        var section = parent(target, ".accordion__section")
        if (section) {
            callback = callback || null;
            var state = (actionName == "show") ? true : false;
            // Переключение занчения атрибута class, выбранных эелементов
            section.classList.toggle('accordion__section_open', state);
            // Изменение статуса состояния панели навигации
            self.enable = state;
            // Вызов пользовательской функции обратного вызова, если пользовательская функция задана
            if(callback){ callback(); }
        }
    }
    // Вызов конструктора объекта
    constructor(selector);
};
