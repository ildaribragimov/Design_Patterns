// Явное указание на режим строгого соответствия современному стандарту
"use strict";
/**
 * Функция "animate"
 * Выполняет анимацию над элементом
 *
 * Аргументы:
 * * element (тип: object) - Ссылка на анимируемый элемент
 * * properties (тип: object) - Объект целевых значений CSS-свойств, которые должны быть изменены
 * * options (тип: object) - Объект параметров анимации. Содержит слудующие параметры:
 * * * easingFunction (тип: string) - Функция динамики выполнения, описывающая график анимации.
 * * * duration (тип: number) - Продолжительность анимации
 * * callback (тип: function) - Пользовательская функция обратного вызова, которая исполняется, по завершении анимации
 */
function animate(element, properties, options, callback){
    // Назначение значений по умолчанию параметрам анимации, если они не были переданы в вызове
    options = options || new Object;
    options.easingFunc = options.easingFunc || 'linear';
    options.duration = options.duration || 1000;
    callback = callback || null;
    /**
     * Объявление переменных:
     *
     * * elementStyle (тип: object) - Объект CSS-свойств анимируемого элемента
     * * elementProperties (тип: Object) - Объект анимируемых CSS-свойств элемента
     * * timing (тип: string) - временная функция, вычисляющая состояние анимации по текущему времени
     */
    var elementStyle = getComputedStyle(element),
        elementProperties = new Object,
        timing = getTimingFunc(options.easingFunc);
    // Перебор анимирумых свойств объекта в цикле
    for(var property in properties){
        // Если текущее свойство является собственным (не унаследованным)
        if (properties.hasOwnProperty(property)) {
            // Создание объекта свойств анимируемого CSS-свойства
            elementProperties[property] = new Object;
            // Добавление начального значения свойства
            elementProperties[property].startingValue = parseFloat( elementStyle[property] );
            // Добавление конечного значения свойства
            elementProperties[property].endingValue = parseFloat( properties[property]);
            // Добавление значения, на которое должно измениться свойство за 1 мс времени по линейной функции
            elementProperties[property].deltaValue = (elementProperties[property].endingValue - elementProperties[property].startingValue);
            // Добавленеи единыцы измерения свойства
            elementProperties[property].unit = properties[property].toString().substr(elementProperties[property].endingValue.toString().length);
        }
    }
    // Метод анимации в момент timeFraction по заданной временной функции
    function draw(timeFraction) {
        // Перебор анимирумых свойств объекта в цикле
        for(var property in properties){
            // Если текущее свойство является собственным (не унаследованным)
            if (properties.hasOwnProperty(property)) {
                // Изменение значений CSS-свойств элемента
                element.style[property] = elementProperties[property].startingValue + eval(timing) * elementProperties[property].deltaValue+elementProperties[property].unit;
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
    /** Объявление перменных:
     *
     * * animationStartTime (тип: object) - Время, прошедшее с начала загрузки страницы
     * * animationStep (тип: object) - Идентификатор шага анимации, возвращенный функцией "requestAnimationFrame"
     */
    var animationStartTime = performance.now(),
        animationStep = requestAnimationFrame(animate);
}