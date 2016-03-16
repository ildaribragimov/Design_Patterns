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
        var str = "";
        for(var param in obj){
            // Если текущее свойство является собственным (не унаследованным)
            if (obj.hasOwnProperty(param)) {
                str = str + encodeURIComponent(param)+"="+encodeURIComponent(obj[param]) + "&";
            }
        }
        return str.substring(0, str.length - 1);
    };

    if (settings.data) {
        // Проверка метода отправки запроса.
        switch(settings.method){
            // Если метод отправки запроса - "get" 
            case "get":
                // Преобразование объекта передаваемых серверу данных в URI-строку
                if (typeof settings.data === 'object') {
                    settings.data = getUriParams(settings.data);
                }
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

    // Создание экземпляра объекта XMLHttpRequest
    var request = new XMLHttpRequest();

    // Установка параметров запроса
    request.open(settings.method, settings.url, settings.async);
    
    // Открытие соединения и отправка запроса на сервер
    request.send( body || null );

    // ??
    request.onload = function() {
        // ??
        var text = request.responseText;
        // ??
        if (request.status === 200) {
            // ??
            settings.success(text);
        // ??
        } else {
            // ??
            console.error("Access error", request.response);
        }
    };
    // ??
    request.onerror = function() {
        // ??
        console.error("Access error");
    };
    
};