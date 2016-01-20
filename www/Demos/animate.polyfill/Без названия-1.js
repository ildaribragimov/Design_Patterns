        //stylePropsMetrics = new Object,
        startingPointStyle = new Object,
        deltaStylesPerStep = new Object; // Создание объекта значнений на которые должны измениться CSS-свойства за один кадр анимации
    // Перебор анимирумых свойств объекта в цикле
    for(var property in properties){
        // Если текущее свойство является собственным (не унаследованным)
        if (properties.hasOwnProperty(property)) {
            startingPointStyle[property] = parseFloat( elementStyle[property] );
            // Получение значнений на которые должны измениться CSS-свойства за один кадр и добавние их в массив
            deltaStylesPerStep[property] = (parseFloat( properties[property] ) - startingPointStyle[property]) / animationSteps;
            // Получение метрического измерения значений CSS-свойств
            //stylePropsMetrics[property] = properties[property].substr( parseFloat( properties[property] ).toString().length );
        }
    }