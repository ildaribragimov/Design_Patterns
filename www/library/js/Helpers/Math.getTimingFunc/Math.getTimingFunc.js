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
};