// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Функция "getTimingFunc"
 * Получает в виде строки временную функцию, вычисляющую состояние анимации В зависимости от пройденного времени
 *
 * Аргументы:
 * * easing (тип: string) - Функция динамики выполнения, описывающая график анимации
 */
function getTimingFunc(easing){
    // Выполнение анимации по преопределенным функциям анимации
    switch (easing){
        case "linear": return "timeFraction";
        case "easeInQuad": return "Math.pow(timeFraction,2)";
        case "easeOutQuad": return "1-Math.pow(1-timeFraction,2)";
        case "easeInOutQuad": return "(timeFraction<0.5)?(Math.pow(2*timeFraction,2)/2):((2-Math.pow(2*(1-timeFraction),2))/2)";
        case "easeInCubic": return "Math.pow(timeFraction, 3)";
        case "easeOutCubic": return "1-Math.pow(1-timeFraction,3)";
        case "easeInOutCubic": return "(timeFraction<0.5)?(Math.pow(2*timeFraction,3)/2):((2-Math.pow(2*(1-timeFraction),3))/2)";
        case "easeInQuint": return "Math.pow(timeFraction,5)";
        case "easeOutQuint": return "1-Math.pow(1-timeFraction,5)";
        case "easeInOutQuint": return "(timeFraction<0.5)?(Math.pow(2*timeFraction,5)/2):((2-Math.pow(2*(1-timeFraction),5))/2)";
    }
    // Если функция пользовательская
    return "easing(timeFraction)";
}

/**
 * Функция "animate"
 * Выполняет анимацию над элементом
 *
 * Аргументы:
 * * element (тип: object) - Ссылка на анимируемый элемент
 * * options (тип: object) - Объект параметров анимации. Содержит слудующие параметры:
 * * * easingFunction (тип: string) - Функция динамики выполнения, описывающая график анимации.
 * * * duration (тип: number) - Продолжительность анимации
 * * callback (тип: function) - Пользовательская функция обратного вызова, которая исполняется, по завершении анимации
 */
function show(element, options, callback){
    // Назначение значений по умолчанию параметрам анимации, если они не были переданы в вызове
    options = options || new Object;
    easing = options.easingFunc || 'linear';
    duration = options.duration || 1000;
    callback = callback || null;
    /**
     * Объявление переменных
     *
     * * self (тип: object) - Ссылка на анимируемый элемент
     * * elementStyle (тип: object) - Объект CSS-свойств анимируемого элемента
     * * elementProperties (тип: Object) - Объект анимируемых CSS-свойств элемента
     * * timing (тип: string) - временная функция, вычисляющая состояние анимации по текущему времени
     */
    var self = element,
        elementStyle = getComputedStyle(self),
        startingValue = elementStyle.opacity,
        deltaValue = 1 - startingValue,
        timing = getTimingFunc(easing);

    // Метод анимации в момент timeFraction по заданной временной функции
    function draw(timeFraction) {
        // Изменение значений CSS-свойств элемента
        self.style.opacity = startingValue + eval(timing) * deltaValue;
    }
    // Метод с рекурсивным вызовом самого себя в зависимости от тех.возможностей браузера
    function animate(time){
        // Получение значения состояния завершенности анимации (принимает значение от 0 до 1)
        var timeFraction = (time - animationStartTime) / duration; 
        // Если произошло превышение времени анимации, тогда происходит фиксация конца анимации
        if (timeFraction > 1) {
            // Переопределение значения состояния завершенности анимации максимально возможным значением этого параметра
            timeFraction = 1;
        }
        // Вызов метода анимации в момент timePassed
        draw(timeFraction);
        // Если время анимации не истекло
        if (timeFraction < 1) {
            // Повторный вызов функции (следующего шага) анимации
            requestAnimationFrame(animate);
            // Прерывание выполнения и выход из функции
            return;            
        }
        // Вызов пользовательской функции обратного вызова после окончания анимации, если пользовательская функция задана
        if(callback){ callback(); }            
    }
    /** Объявление перменных:
     *
     * * animationStartTime (тип: object) - Время, прошедшее с начала загрузки страницы
     * * animationStep (тип: object) - Идентификатор шага анимации, возвращенный функцией "requestAnimationFrame"
     */
    var animationStartTime = performance.now(),
        animationStep = requestAnimationFrame(animate);
}