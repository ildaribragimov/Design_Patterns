/**
 * Метод "parent"
 * Ищет родителя элемента и возвращает ссылку на него
 *
 * Аргументы:
 * * selector (тип: object) - Селлектор искомого родительскиого элемента (идентификатор, класс, атрибут и прочее)
 *
 * Возвращаемое значение:
 * * parent (тип: object) - ссылка на родителя элемента (если был найден) / false (тип: boolean) - "Нет" (если родительский элемент не найден или отсутствует)
 */
Object.prototype.parent = function(selector) {
    // Объявляем переменные:
    var self = this, // Передаем ссылку на целевой элемент в переменную
        parents = document.querySelectorAll(selector); // Получаем коллекцию элементов по полученному селектору
    // Проверяем родителя целевого элемента на факт присутствия в коллекции искомых
    while(self != null){
        // Переопределенеи переменной целевого элемента
        self = self.parentNode;
        // Ищем текущий элемент в массиве коллекции элементов
        var i = parents.getIndex(self);
        // Если текущий элемент найден
        if(i !== false){
            // Возвращаем ссылку на этот элемент в коллекции 
            return parents[i];
        }
    }
    // Возвращаение отрицательного результата, если родитель не найден
    return false;
};