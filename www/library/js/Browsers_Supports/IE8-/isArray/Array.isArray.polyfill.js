/**
 * Полифилл "Array.isArray()"
 * Добавляет поддержку метода isArray() объекта Array, проверяющего является ли целевой объект массивом
 *
 * Синтаксис:
 * Array.isArray(obj)
 * * obj - проверяемый объект
 *
 * Возвращаемое значние:
 * * true (если объект является массивом)/false (если он массивом не является)
 **/
// Если метод не поддерживается браузером пользователя
if(!Array.isArray){
    // Добавляем метод "isArray" объекту "Array". передаем ему в качестве аргумента ссылку на проверяемый объект
    Array.isArray = function(obj) {
        // Возвращаем результат логического сравнения строчного преобразования типа проверяемого объекта с сравниваемым шаблоном
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
}