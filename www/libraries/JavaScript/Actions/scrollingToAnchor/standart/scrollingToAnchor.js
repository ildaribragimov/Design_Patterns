// Явное указание на режим строгого соответствия современному стандарту
"use strict";
/* ============================================== *
 * ==== Решение "Плавная прогрутка до якоря" ==== *
 * ============================================== 
 *
 * Аргументы:
 * * event (тип: object) - Ссылка на объект события
 * * callback (тип: function) - Функция обратного вызова, исполняемая при завершении анимации
 */
function scrollingToAnchor(event, callback = null){
    /** 
     * Объявление переменных:
     *
     * anchor (тип: string) - Строка, содержащая ссылку на якорь 
     * scrollTopValue (тип: number) - Расстояние от верхнего края окна браузера до верхней границы якоря
     * fps (тип: number) - Частота смены кадров (в секунду)
     * scrollPageY - Функция смены положения области просмотра браузера относительно его текущего положения
     */
    var anchor = event.target.getAttribute('href'),
        scrollTopValue = document.getElementById( anchor.match(/[^#].*/) ).offsetTop,
        fps = 75,
        scrollPageY = setInterval(function(){
            /**
             * Объявление переменных:
             *
             * scrolled (тип: number) - Положение области просмотра окна браузера относительно левого верхнего угла страницы
             * needToScroll (тип: number) - Расстояние, на которое необходимо прокрутить страницу относительно ее текущего положения
             * scrollStep (тип: number) - Шаг прокрутки страницы на текущем кадре в пикселях.
             */
            var scrolled = window.pageYOffset,
                needToScroll = (scrollTopValue-scrolled),
                scrollStep = (Math.abs(needToScroll) != 2)
                    ? needToScroll/3
                    : needToScroll;
            // Проверка расстояния, на которое необходимо прокрутить страницу на равенство 0 (нулю)
            if (needToScroll == 0) {
                // Выход из интервальной функции
                clearInterval(scrollPageY);
                // Вызов пользовательской функции после окончания анимации
                if (callback) { callback(); }
            } else {
                // Вызов метода "Прокрутки относительно текущего положения" объекта "window"
                window.scrollBy(0,scrollStep);
            }
        }, 1000/fps);
};