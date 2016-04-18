"use strict";
/**
 * Класс выезжающей панели навигации
 *
 * @class
 * @classdesc Разворачивает/Сворачивает панель навигации.
 *
 * @param {array} elements - Массив селекторов элементов, над которыми будут проходить манипуляции
 *
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov 2016
 */
function slidePannel(elements) {
    // Назначение значения по умолчанию свойству статуса доступности панели
    this.enable = false;
    // Сохранение ссылки на объект в переменной
    var self = this;
   /**
     * Метод разворачивает панель
     *
     * @public
     * @param {object} elements - Параметры в виде объекта, которые необходимо преобразовать в URI-строку
     * @param {requestCallback} [callback = null]- Пользовательская функция обратного вызова
     * @return void
     *
     * @description Добавляет DOM-узлам, переданным в параметре "elements", дополнительные CSS-классы описания состояния панели "slide-pannel_open" и вызывает функцию обратного вызова, если она была передана.
     */
    this.show = function(callback) {
        toggle("show", callback);
    };
    /**
     * Метод сворачивает панель
     *
     * @public
     * @param {requestCallback} [callback = null]- Пользовательская функция обратного вызова
     * @return void
     *
     * @description Удаляет у DOM-узлов, переданных в параметре "elements", дополнительные CSS-классы описания состояния панели "slide-pannel_open" и вызывает функцию обратного вызова, если она была передана.
     */
    this.hide = function(callback) {
        toggle("hide", callback);
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
    function toggle(actionName, callback) {
        callback = callback || null;
        var state = (actionName == "show") ? true : false;
        for (var i = 0; i < elements.length; i++ ) {
            // Переключение занчения атрибута class, выбранных эелементов
            document.querySelector(elements[i]).classList.toggle('slide-pannel_open', state);
        }
        // Изменение статуса состояния панели навигации
        self.enable = state;
        // Вызов пользовательской функции обратного вызова, если пользовательская функция задана
        if(callback){ callback(); }
    }
}
