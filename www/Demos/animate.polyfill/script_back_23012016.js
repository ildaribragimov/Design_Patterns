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
Object.prototype.animate = function(properties, callback = null, options = {easingFunc, duration}){
    // Назначение значений по умолчанию параметрам анимации, если они не были переданы в вызове
    options.easingFunc = options.easingFunc || 'linear';
    options.duration = options.duration || 1000;
    // Объявление перменных
    var self = this, // Сохранение ссылки на элемент на котором был вызван метод в переменную
        elementStyle = getComputedStyle(self), // Получение исходных CSS-стилей элемента, на котором вызван метод анимации
        startingPointStyle = new Object, //
        deltaStylesPerStep = new Object; // Создание объекта значнений на которые должны измениться CSS-свойства за один кадр анимации
    // Перебор анимирумых свойств объекта в цикле
    for(var property in properties){
        // Если текущее свойство является собственным (не унаследованным)
        if (properties.hasOwnProperty(property)) {
            // 
            startingPointStyle[property] = parseFloat( elementStyle[property] );
            // Создание объекта значнений на которые должны изменяться CSS-свойства за 1мс времени по линейной функции
            deltaStylesPerStep[property] = (parseFloat( properties[property] ) - startingPointStyle[property]) / options.duration;
        }
    }
    // Метод анимации в момент timePassed по заданной функции динамики
    function draw(easingFunc, timePassed) {
        // Выполнение анимации по пользовательской функции анимации
        switch (options.easingFunc){
            case 'linear':
                // Перебор анимирумых свойств объекта в цикле
                for(var property in properties){
                    // Если текущее свойство является собственным (не унаследованным)
                    if (properties.hasOwnProperty(property)) {
                        // Изменение значений CSS-свойств элемента
                        self.style[property] = startingPointStyle[property] + timePassed * deltaStylesPerStep[property]+"px";
                    }
                }   
                // Прерывание выполнения и выход из конструкции SWITCH
                break;
            // Если функция пользовательская
            default:
                options.easingFunc();
                // Прерывание выполнения и выход из конструкции SWITCH
                break;
        }
    }
    // Метод с рекурсивным вызовом самого себя в зависимости от тех.возможностей браузера
    function animate(time){
        // Объявление переменных:
        var timePassed = time - animationStartTime; // Время, прошедшее с начала анимации
        // Если произошло превышение времени анимации, тогда происходит фиксация конца анимации
        if (timePassed > options.duration) {
            // Присвоение переменной прошедшего времени значения переменной продолжительности анимации
            timePassed = options.duration;
        }
        // Вызов метода анимации в момент timePassed
        draw(options.easingFunc, timePassed);
        // Если время анимации не истекло
        if (timePassed < options.duration) {
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

// Получение ссылки на объект с именем HTML-тега "а"
document.querySelector('span')
    // Назначение обработчика на событие "клик по элементу"
    .addEventListener("click", function(event){
        // Отмена действия по умолчанию браузера на событие
        event.preventDefault();
        // вызов метода анимации на целевом объекте
        event.target.animate({width:"350px", height:"200px"}, function(){
            console.log('Анимация завершена!');
        }, {duration:100});
    });