// Явное указание на режим строгого соответствия современному стандарту
"use strict";
/**
 * Метод "animate"
 * выполняет анимацию над элементом, на котором был вызван
 *
 * Аргументы:
 * * properties (тип: object) - Объект целевых значений CSS-свойств, которые должны быть изменены
 * * callback (тип: function) - Пользовательская функция обратного вызова, которая исполняется, по завершении анимации
 * * options (тип: object) - Объект параметров анимации. Содержит слудующие параметры:
 * * * easingFunction (тип: string) - Функция динамики выполнения, описывающая график анимации.
 * * * duration (тип: number) - Продолжительность анимации
 */
Object.prototype.animate = function(properties, callback, options){
    // Назначение значений по умолчанию параметрам анимации, если они не были переданы в вызове
    callback = callback || null;
    options = options || new Object;
    options.easingFunc = options.easingFunc || 'linear';
    options.duration = options.duration || 1000;
    // Объявление перменных
    var self = this, // Сохранение ссылки на элемент на котором был вызван метод в переменную
        elementStyle = getComputedStyle(self), // Получение исходных CSS-стилей элемента, на котором вызван метод анимации
        startingPointStyle = new Object, // Объект начальных значений анимируемых CSS-свойств
        deltaStyles = new Object; // Объект разниц начальных и целевых значений анимируемых CSS-свойств
    // Перебор анимирумых свойств объекта в цикле
    for(var property in properties){
        // Если текущее свойство является собственным (не унаследованным)
        if (properties.hasOwnProperty(property)) {
            // Создание объекта начальных значений анимируемых CSS-свойств
            startingPointStyle[property] = parseFloat( elementStyle[property] );
            // Создание объекта значнений на которые должны изменяться CSS-свойства за 1мс времени по линейной функции
            deltaStyles[property] = (parseFloat( properties[property] ) - startingPointStyle[property]);
        }
    }
    // Метод временной функций, вычисляющей состояние анимации по текущему времени
    function timing(timeFraction){
        // Выполнение анимации по преопределенным функциям анимации
        switch (options.easingFunc){
            case 'linear':
                return timeFraction;
            case 'easeInQuad':
                return Math.pow(timeFraction, 2);
            case 'easeOutQuad':
                return 1 - Math.pow(1 - timeFraction, 2);
            case 'easeInOutQuad':
                return (timeFraction < 0.5) ? (Math.pow(2 * timeFraction, 2) / 2) : (( 2 - Math.pow(2 * (1 - timeFraction), 2) ) / 2);
            case 'easeInCubic':
                return Math.pow(timeFraction, 3);
            case 'easeOutCubic':
                return 1 - Math.pow(1 - timeFraction, 3);
            case 'easeInOutCubic':
                return (timeFraction < 0.5) ? (Math.pow(2 * timeFraction, 3) / 2) : (( 2 - Math.pow(2 * (1 - timeFraction), 3) ) / 2);
            case 'easeInQuint':
                return Math.pow(timeFraction, 5);
            case 'easeOutQuint':
                return 1 - Math.pow(1 - timeFraction, 5);
            case 'easeInOutQuint':
                return (timeFraction < 0.5) ? (Math.pow(2 * timeFraction, 5) / 2) : (( 2 - Math.pow(2 * (1 - timeFraction), 5) ) / 2);
        }
        // Если функция пользовательская
        return options.easingFunc(timeFraction);
    }
    // Метод анимации в момент timeFraction по заданной временной функции
    function draw(timeFraction) {
        // Получение состояния анимации по текущему времени
        var progress = timing(timeFraction);
        // Перебор анимирумых свойств объекта в цикле
        for(var property in properties){
            // Если текущее свойство является собственным (не унаследованным)
            if (properties.hasOwnProperty(property)) {
                // Изменение значений CSS-свойств элемента
                self.style[property] = startingPointStyle[property] + progress * deltaStyles[property]+"px";
            }
        }   
    }
    // Метод с рекурсивным вызовом самого себя в зависимости от тех.возможностей браузера
    function animate(time){
        // Получение значения состояния завершенности анимации (принимает значение от 0 до 1)
        var timeFraction = (time - animationStartTime) / options.duration; 
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
    // Объявление перменных:
    var animationStartTime = performance.now(), // Время, прошедшее с начала загрузки страницы.
        animationStep = requestAnimationFrame(animate); // Идентификатор шага анимации, возвращенный функцией "requestAnimationFrame"
}