// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Функция "array_diff"
 * Вычисляет расхождение массивов (коллекций элементов). Сравнивает массив (коллекцию) с массивом (коллекцией) "filteringArray" и возвращает значения из исходного массива (коллекции), которые отсутствуют в "filteringObject".
 *
 * Аргументы:
 * * array (тип: object) - Массив или коллекция элементов, который необходимо отфильтровать
 * * filteringObject (тип: object) - Объект (массив) с котороым необходимо произвести сравнение
 *
 * Возвращаемое значение:
 * * resultArray (тип: array) - Результат сравнения. 
 */
function array_diff(array, filteringObject) {
    // Создание результирующего массива
    var resultArray = [];
    // Обход объекта (массива), в котором необходимо искать совпадения значений элементов, в цикле
    for(var i = 0, l = array.length; i < l; i++)	{
        // Если значение элемента объекта (массива) равно искомому значению
        if( !in_array(array[i], filteringObject) ) {
            // Добавление эелемента в массив результата сравнения
            resultArray.push(array[i]);
        }
    }
    // Возвращаение результата сравнения в виде массива
    return resultArray;
}