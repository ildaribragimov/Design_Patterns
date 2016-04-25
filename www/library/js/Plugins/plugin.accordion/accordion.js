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
     * @property {object} self - Ссылка на текущий объект
     * @private
     */
    var self = this;
    /**
     * Конструктор класса
     *
     * @constructor
     * @param {array} selector - Селектор элемента Аккордеон, Объект которого необходимо создать
     *
     * @return void
     */
    function constructor(selector) {
        var sectionsContents = selector.getElementsByClassName("accordion__section-content-wrapper");
        // Вызов метода пересчета значений высот содержимых секций
        resetSectionsHeights(sectionsContents);
        // Назначение обработчика события клика по заголовку секции аккордеона
        selector.addEventListener("click", function(event) {
            var target = event.target;
            // Отмена действия по умолчанию браузера на событие
            event.preventDefault();
            // Обработка события, если оно было вызвано на элементе заголовка секции аккордеона
            if (target.classList.contains("link") || parent(target, ".link")) {
                // Сворачивание/Разворачивание секции аккордеона в зависимости от ее текущего состояния
                self.toggle(target);
            }
        });
        // Назначение обработчика события завершения анимации раскрытия секции аккордеона
        selector.addEventListener('transitionend', function(event) {
            var target = event.target;
            // Условие на соответствие требованиям к отлавливаемому событию
            if (event.propertyName == "height" && parent(target, '.accordion__section_open')) {
                // Вызов метода пересчета значений высот содержимых секций
                resetSectionHeight(target.querySelector('.accordion__section-content-wrapper'));
                // Вызов метода назначение высоты элементу
                setHeight(target, target.dataset.blockHeight+"px");
            }
        });
    }
    /**
     * Метод пересчитывает значения высот содержимого секций аккордеона
     * 
     * @method
     * @private
     * @description пересчитывает значения высот содержимого секций аккордеона и записывает полученные значения в атрибуты "data-block-height" родительским элементам с CSS-классом "accordion__section-content"
     *
     * @param {collection} sections - Коллекция DOM-узлов содержимого секций
     *
     * @return void
     */
    function resetSectionsHeights(collection) {
        for (var i = 0; i < collection.length; i++) {
            resetSectionHeight(collection[i]);
        }
    }
    /**
     * Метод пересчитывает значение высоты содержимого секции аккордеона
     * 
     * @method
     * @private
     * @description пересчитывает значение высоты содержимого секции аккордеона и записывает полученное значение в атрибут "data-block-height" родительского элемента с CSS-классом "accordion__section-content"
     *
     * @param {collection} element - DOM-узел содержимого секции
     *
     * @return void
     */
    function resetSectionHeight(element) {
        var sectionStyles = getComputedStyle(element),
            sectionParent = parent(element, ".accordion__section-content");
        sectionParent.dataset.blockHeight = element.offsetHeight + parseFloat(sectionStyles.marginTop) + parseFloat(sectionStyles.marginBottom);        
        sectionParent = sectionStyles = null;
    }
    /**
     * Метод "setHeight"
     *
     * @method
     * @private
     * @description Изменяет значение высоты DOM-элемента
     *
     * @param {object} element - DOM-элемент, высота которого необходимо изменить
     * @param {string} hightValue - Значение высоты для CSS-свойства "height"
     *
     * @return void
     */
    function setHeight(element, hightValue) {
        if (getComputedStyle(element).height != hightValue) {
            element.style.height = hightValue;
        }
    }
    /**
     * Метод Разворачивает/Сворачивает секцию
     *
     * @method
     * @public
     * @param {object} target - Объект, вызвавший событие
     * @param {requestCallback} [callback = null]- Пользовательская функция обратного вызова
     * @return void
     *
     * @description Разворачивает секцию аккордеона, если она свернута и сворчивает, если развернута
     */
    this.toggle = function(target, callback) {
        var section = parent(target, ".accordion__section");
        if (section) {
            callback = callback || null;
            /**
             * Объявление переменных:
             *
             * state {boolean} - Результат проверки на наличие DOM-узла с CSS-классом 'accordion__section_open'
             * sectionContent {object} - Объект с классом "accordion__section-content"
             */ 
            var state = (section.classList.contains('accordion__section_open')) ? false : true,
                sectionContent = section.querySelector('.accordion__section-content');
            // Смена значений атрибута "height" содержимого секции аккордеона
            var h = (getComputedStyle(sectionContent).height != "0px")? '' : sectionContent.dataset.blockHeight + 'px';
            // Вызов метода назначение высоты элементу
            setHeight(sectionContent, h);
            // Переключение значения атрибута class, выбранных эелементов
            section.classList.toggle('accordion__section_open', state);
            // Вызов пользовательской функции обратного вызова, если пользовательская функция задана
            if(callback){ callback(); }
        }
        section = h = null;
    };
    // Вызов конструктора объекта
    constructor(selector);
};
