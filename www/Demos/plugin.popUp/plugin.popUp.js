// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Плагин создания "Всплывающего окна"
 *
 * Свойства объекта:
 * * name (тип: string) - Имя всплывающего окна. Будет использовано в значении атрибута ID конструкции
 * * options (тип: object) - Объект параметров всплывающего окна. Содержит слудующие параметры:
 * * * type (тип: string) - Тип всплывающего окна. может принимать значения: "alert", "confirm", "prompt"
 * * * header (тип: string) - Заголовок окна
 * * * data (тип: object) - Объект передаваемых данных для вывода в окне
 * * * navigation (тип: string) - Тип навигационной панели. Может принимать значения: "standart", "minimal".
 *
 * Методы объекта:
 * * show - Метод разворачивает панель
 * * hide - Метод сворачивает панель
 */
function popUp(name, options) {
    // Назначение значений по умолчанию параметрам параметрам окна, если они не были переданы в вызове
    options = options || new Object;
    options.type = options.type || "alert";
    options.header = options.header || null;
    options.data = options.data || "Данные не были переданы!";
    options.navigation = options.navigation || "standart";


    /**
     * Метод "createContlols" создает HTML-конструкцию панели основной навигации окна
     *
     * Возвращаемое значение:
     * * controls (тип: object) - HTML-конструкция панели основной навигации окна
     */
    function createContlols(){
        // Создание корневого элемента навигационной панели окна
        var controls = document.createElement('div');
        // Добавление к элементу атрибута "class"
        controls.setAttribute("class", "controls");
        // Вставка в корневой элемент кнопки "Закрыть окно"
        controls.innerHTML = '<a class="closeWindow" href="/" target="_self"><span class="icon -m"></span></a>';
        // Возвращение HTML-конструкции созданной панели
        return controls;
    }


    /**
     * Метод "createHeader" создает HTML-конструкцию заголовка окна
     *
     * Возвращаемое значение:
     * * header (тип: object) - HTML-конструкция заголовка окна
     */
    function createHeader(){
        // Создание корневого элемента заголовка окна
        var header = document.createElement('div');
        // Добавление к элементу атрибута "class"
        header.setAttribute("class", "header");
        // Если Текст заголовка окна был передан при вызове плагина
        if (options.header) {
            // Вставка в корневой элемент блока с заголовком
            header.innerHTML = '<div class="title">'+options.header+'</div>';
        }
        // Вызов метода генерации панели управления окном и втавка его в конец родительского
        header.appendChild(createContlols());
        // Возвращение HTML-конструкции заголовка окна
        return header;
    }


    /**
     * Метод "setData" созадет HTML-конструкцию содержательной части окна и вставляет в нее данные, полученные при вызове плагина
     *
     * Возвращаемое значение:
     * * content (тип: object) - HTML-конструкция содержательной части окна
     */
    function setData(){
        // Создание корневого элемента содержимого окна
        var content = document.createElement('div');
        // Добавление к элементу атрибута "class"
        content.setAttribute("class", "content");
        // Вставка в корневой элемент данных, полученных при вызове плагина
        content.innerHTML = options.data;
        // Возвращение HTML-конструкции содержимого окна
        return content;
    }


    /**
     * Метод "createPopup" создаёт HTML-конструкцию окна
     *
     * Возвращаемое значение:
     * * popup (тип: object) - Объект HTML-конструкции окна
     */
    function createPopup(){
        /**
         * Объявление перменных:
         *
         ** htmlTree (тип: object) - HTML-конструкция окна
         ** parentElem (тип: object) - Ссылка на родильский элемент текущего создаваемого элемента
         */
        var htmlTree = ["popupWindow", "wrapper", "container"],
            parentElem = null;
        // Построение HTML-конструкции всплывающего окна в цикле
        for (var t = 0; t < htmlTree.length; t++) {
            // Создание нового тега "div"
            var elem = document.createElement('div');
            // Если текущий элемент - первый:
            if ( t == 0 ) {
                // Создание переменной и присвоение ей ссылки на корневой HTML-элемент конструкции окна
                var popup = elem;
            }
            // Добавление к элементу атрибута "class"
            elem.setAttribute("class", htmlTree[t]);
            // Если создаваемый эелемент имеет родителя
            if (parentElem) {
                // Вставляем текущий элемент в конец родительского
                parentElem.appendChild(elem);
            }
            // Назначаем текущий элемент в качестве родительс кого для следующего элемента
            parentElem = elem;
            // Если текущий элемент - последний:
            if (t == htmlTree.length-1) {
                // Вызов метода генерации заголовочной панели окна и втавка его в конец родительского
                parentElem.appendChild(createHeader());
                // Вызов метода генерации HTML-конструкции содержимого окна и вставки полученных данных
                parentElem.appendChild(setData());
            }
        }
        // Добавление к корневому элементу атрибута "id" со значением "name"
        popup.setAttribute("id", name);
        
        // Возвращаемый объект созданного окна
        return popup;
    }


    // Создание HTML-конструкции всплывающего окна и вставка ее в конец элемента "body"
    document.querySelector("body").appendChild(createPopup());
}