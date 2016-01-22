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
 * * * duration (тип: number) - Длительность анимации
 * * * fps (тип: number) - Скорость скены кадров в секунду
 */
Object.prototype.animate = function(properties, callback = null, options = {easingFunc, duration, fps}){
    // Назначение значений по умолчанию параметрам анимации, если они не были переданы в вызове
    options.easingFunc = options.easingFunc || 'linear';
    options.duration = options.duration || 1000;
    options.fps = options.fps || 65;
    
    // Объявление перменных
    var self = this, // Сохранение ссылки на элемент на котором был вызван метод в переменную
        interval = Math.round( 1000/options.fps ), // Интервал анимации в миллисекундах, округленный до ближайшего целого
        animationSteps = Math.round( options.duration/interval ), // Количество кадров анимации, за указанное время
        elementStyle = getComputedStyle(self), // Получение исходных CSS-стилей элемента, на котором вызван метод анимации
        startingPointStyle = new Object, // 
        deltaStylesPerStep = new Object; // Создание объекта значнений на которые должны измениться CSS-свойства за один кадр анимации

    // Перебор анимирумых свойств объекта в цикле
    for(var property in properties){
        // Если текущее свойство является собственным (не унаследованным)
        if (properties.hasOwnProperty(property)) {
            // 
            startingPointStyle[property] = parseFloat( elementStyle[property] );
            // Получение значнений на которые должны измениться CSS-свойства за один кадр и добавние их в массив
            deltaStylesPerStep[property] = (parseFloat( properties[property] ) - startingPointStyle[property]) / animationSteps;
        }
    }

    // Назначение начального номера шага
    var stepNumber = 1;
    // Объявление интервальной функции
    var animate = setInterval( function(){
        // Если истекло указанное время анимации
        if(stepNumber <= animationSteps){
            // Выполнение анимации по пользовательской функции анимации
            switch (options.easingFunc){
                // Если функция - линейная
                case 'linear':
                    // Обход объекта значений, на которые должны измениться стили за один шаг
                    for(var prop in deltaStylesPerStep){
                        // Если текущее свойство является собственным (не унаследованным)
                        if (deltaStylesPerStep.hasOwnProperty(prop)) {
                            // Изменение значений CSS-свойств элемента
                            self.style[prop] = (startingPointStyle[prop] + stepNumber * deltaStylesPerStep[prop])+"px";
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
            // Увеличиваем счетчик шагов на единницу
            stepNumber++;
        }else{
            // Остановка выполнения интервальной функции
            clearInterval(animate);
            // Вызов пользовательской функции обратного вызова после окончания анимации
            if(callback){ callback(); }
        }
    }, interval );
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