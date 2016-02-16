// Явное указание на режим строгого соответствия современному стандарту
"use strict";
// Запуск исполнения сценария JS при готовности DOM
document.addEventListener("DOMContentLoaded", function() {

    // Инициализация API ВКонтакте
    VK.init({
        apiId: 5218692, // ID приложения для подключения к API
    });

    /**
     * Объявление переменных
     *
     * * authStatus (тип: boolean) - Статус авторизации. Может принимать значения "true" и "false". По умолчанию - "false"
     */
    var authStatus = false;

    // Узнаем текущий статус авторизации посетителя и получаем сесионые данные
    VK.Auth.getLoginStatus(function(response){
        /**
         * Объявление переменных
         *
         * * warning (тип: object) - HTML-Элемент для уведомления посетителя
         * * message (тип: string) - Текст уведомления для посетителя
         */
        var warning = document.createElement("p"),
            message = 'Мы не знаем кто вы. Представьтесь, пожалуйста!';
        // Актуализируем переменную статуса авторизации посетителя
        authStatus = (response.session) ? true: false;
        // Если посетитель не идентифицирован
        if(authStatus){
            // Переопледеление текста уведомления(приветствия)
            message = 'Вы успешно идентифицированы!';
        }
        // Вставка HTML-содержимого в элемент "p"
        warning.innerHTML = '<strong>Здравствуйте!<br>'+message+'</strong>';
        // Вставка элеента "p" в конец элемента ".window-wrapper"
        document.querySelector('.window-wrapper').appendChild(warning);        
    });

    // Вывод переменной статуса авторизации посетителя сайта в консоль
    console.log( (authStatus) ? 'Посетитель идентифицирован!' : 'Посетитель не идентифирован' );

});