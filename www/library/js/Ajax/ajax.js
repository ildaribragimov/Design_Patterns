"use strict";

/**
 * Объект "Всплывающее окно"
 *
 * @constructor
 * @this {Ajax}
 * @param {object} settings - Объект параметров запроса XMLHttpRequest
 * @param {string} settings.url - Адрес запроса
 * @param {string} settings.data - Данные, отправляемые на сервер. Могут быть переданы только как URI-строка или javascript-объекта
 * @param {string} settings.method - Метод отправки запроса
 * @param {boolean} settings.async - Тип запроса. "true" - асинхронный, "false" - синхронный
 * @param {function} settings.error - Функция, которая будет вызвана в случае неудачного завершения запроса к серверу
 * @param {function} settings.success - Функция, которая будет вызвана в случае удачного завершения запроса к серверу
 */
function ajax(settings) {
    // Назначение значений по умолчанию параметрам объекта окна, если они не были переданы в вызове
    settings.data = settings.data || null;
    settings.method = settings.method || "get";
    settings.async = settings.async || "true";
    settings.error = settings.error || null;
    settings.success = settings.success || null;
    /**
     * Метод формирует URI-строку запроса
     *
     * @private
     * @param {object} obj - Формирует URI-строку запроса из javascript-объекта
     * @return {string} str - Сформированная URI-строка
     */
    function getUriParams(obj) {
        // Определение перменной URI-строки
        var str = "";
        // Перебор эелементов передаваемого объекта данных в цикле
        for (var param in obj) {
            // Если текущее свойство является собственным (не унаследованным)
            if (obj.hasOwnProperty(param)) {
                str = str + param + "=" + encodeURIComponent(obj[param]) + "&";
            }
        }
        return str.substring(0, str.length - 1);
    }
    // Определение значения по умолчанию тела запроса
    var body = null;
    // Если объект передаваемых данных не пуст
    if (settings.data) {
        // Преобразование объекта, отправляемых данных в URI-строку
        if (typeof settings.data === 'object') {
            settings.data = getUriParams(settings.data);
        }
        // Формирвоание URI-строки или тела запроса в зависимости от метода отправки запроса.
        switch (settings.method) {
            case "get":
                settings.url = settings.url + "?" + settings.data;
                break;
            case "post":
                body = settings.data;
                break;
        }
    }
    // Получение объекта, поддерживаемого браузером (ActiveXObject - для IE6, IE5)
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    // Отслеживание состояния завершенности запроса
    xhr.onreadystatechange = function () {
        // Если запрос завершен
        if (xhr.readyState === 4) {
            var text = xhr.responseText;
            // Вызов функции обратного вызова при успешном завершении запроса
            if (xhr.status === 200) {
                if (settings.success) {
                    settings.success(text);
                }
                return;
            }
            // Вызов функции обратного вызова при неудачном завершении запроса
            if (settings.error) {
                settings.error(xhr.status + ": " + xhr.statusText);
            }
        }
    };
    // Установка параметров запроса
    xhr.open(settings.method, settings.url, settings.async);
    // Установка заголовка POST-запроса
    if (settings.method === "post") {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    // Открытие соединения и отправка запроса
    xhr.send(body);
}