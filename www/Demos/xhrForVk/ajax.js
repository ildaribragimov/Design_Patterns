// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Объект "Всплывающее окно"
 *
 * Свойства объекта:
 * * settings (тип: object) - Объект параметров запроса XMLHttpRequest
 * * * url (тип: string) - Адрес запроса
 * * * data (тип: string) - Данные, которые будут отправлены на сервер. Могут быть переданы как в виде URI-строки, так и в виде javascript-объекта
 * * * method (тип: string) - Метод отправки запроса
 * * * async (тип: boolean) - Тип запроса. "true" - асинхронный, "false" - синхронный
 * * * error (тип: boolean) - Функция, которая будет вызвана в случае неудачного завершения запроса к серверу
 * * * success (тип: boolean) - Функция, которая будет вызвана в случае удачного завершения запроса к серверу
 *
 * Методы объекта:
 * * getUriParams (тип: private) - Формирует URI-строку запроса, если данные, отправляемые на сервер, переданы в виде javascript-объекта
 */
function ajax(settings){
    // Назначение значений по умолчанию параметрам объекта окна, если они не были переданы в вызове
    settings.data = settings.data || null;
    settings.method = settings.method || "get";
    settings.async = settings.async || "true";
    settings.error = settings.error || null;
    settings.success = settings.success || null;
    /**
     * Метод формирует URI-строку запроса
     */
    function getUriParams(obj){
        // Определение перменной URI-строки
        var str = "";
        // Перебор передаваемого объекта данных в цикле
        for ( var param in obj ) {
            // Если текущее свойство является собственным (не унаследованным)
            if ( obj.hasOwnProperty(param) ) {
                // Формирование URI-строки 
                str = str + param + "=" + encodeURIComponent(obj[param]) + "&";
            }
        }
        // Возврат сгенерированной URI-троки
        return str.substring( 0, str.length - 1 );
    };
    // Если объект передаваемых данных не пуст
    if (settings.data) {
        // Преобразование объекта передаваемых серверу данных в URI-строку
        if (typeof settings.data === 'object') {
            settings.data = getUriParams(settings.data);
        }
        // Проверка метода отправки запроса.
        switch (settings.method) {
            // Если метод отправки запроса - "get" 
            case "get":
                // Формирвоание URI-строки запроса
                settings.url = settings.url + "?" + settings.data;
                // Прерывание выполнения конструкции "switch"
                break;
            // Если метод отправки запроса - "post"
            case "post":
                // Формирование тела запроса
                var body = settings.data;
                // Прерывание выполнения конструкции "switch"
                break;
        }
    }
    // Получение объекта, поддерживаемого браузером (XMLHttpRequest - для IE7+, Firefox, Chrome, Opera, Safari; ActiveXObject - для IE6, IE5)
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    // Назначение обработчика события "readystatechange" (изменение состояния готовности)
    xhr.onreadystatechange = function() {
        // Если текущее состояни запроса имеет значение 4 (запрос завершен)
        if ( xhr.readyState == 4 ) {
            var text = xhr.responseText;
            // Если код ответа состояния запроса - 200
            if ( xhr.status == 200 ) {
                // Вызов функции обратного вызова при успешном завершении запроса
                if (settings.success) { settings.success(text); }
                // Выход из функции
                return;
            }
            // Вызов функции обратного вызова при неудачном завершении запроса
            if (settings.error) { settings.error(text); }
        }
    }
    // Установка параметров запроса
    xhr.open(settings.method, settings.url, settings.async);
    // Установка заголовка запроса, в случае, если метод запроса - "post"
    if (settings.method == "post"){
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    // Открытие соединения и отправка запроса на сервер
    xhr.send( body || null );
};