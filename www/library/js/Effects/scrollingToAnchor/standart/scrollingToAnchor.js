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
function scrollingToAnchor(anchorLink, callback){
    // Назначение атрибуту значения по умолчанию
    callback = callback || null;
    /** 
     * Объявление переменных:
     *
     * link (тип: string) - Значение атрибута HREF целевого элемента (Строка, содержащая ссылку на якорь)
     * anchor (тип: boolean) - Ссылка на объект закладки (Якоря)
     */
    var link = anchorLink.getAttribute('href'),
        anchor = document.querySelector('.anchor[name='+link.match(/[^#].*/)+']');
    // Если закладка не найдена по указанной ссылке, выходим из функции
    if (anchor === null) {
        // Вызов пользовательской функции после окончания анимации
        if (callback) { callback(); }
        return;
    }
    /** 
     * Объявление переменных:
     *
     * scrollTopValue (тип: number) - Расстояние от верхнего края окна браузера до верхней границы якоря
     * fps (тип: number) - Частота смены кадров (в секунду)
     * scrollPageY - Функция смены положения области просмотра браузера относительно его текущего положения
     */
    var viewport = document.documentElement,
        viewportHeight = viewport.clientHeight,
        pageHeight = Math.max(
            document.body.scrollHeight, viewport.scrollHeight,
            document.body.offsetHeight, viewport.offsetHeight,
            document.body.clientHeight, viewport.clientHeight
        ),
        scrollTopValue = anchor.getBoundingClientRect().top + pageYOffset,
        fps = 75,
        scrollPageY = setInterval(function(){
            /**
             * Объявление переменных:
             *
             * scrolled (тип: number) - Положение области просмотра окна браузера относительно левого верхнего угла страницы
             * enableScrollHeight (тип: number) - Доступная высота для прокрутки страницы
             * needToScroll (тип: number) - Расстояние, на которое необходимо прокрутить страницу относительно ее текущего положения
             * scrollStep (тип: number) - Шаг прокрутки страницы на текущем кадре в пикселях.
             */
            var scrolled = window.pageYOffset,
                enableScrollHeight = pageHeight - ( scrolled + viewportHeight),
                needToScroll = (scrollTopValue-scrolled),
                scrollStep = (Math.abs(needToScroll) != 2)
                    ? needToScroll/3
                    : needToScroll;
            // Если:
            // 1) Расстояние, на которое необходимо прокрутить страницу = 0;
            // Или:
            // 1) Доступная высота для прокрутки страницы <= 0;
            // 2) И Разница между доступной высоты для прокрутки страницы и шагом прокрутки страницы на текущем кадре <= 0.
            if (needToScroll == 0 || ( enableScrollHeight <= 0 && enableScrollHeight - scrollStep <= 0 ) ) {
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