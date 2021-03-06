<?php
// Определение именованной константы "INDEX"
define('_INDEX', 1);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        <!---->
        <script defer src="//vk.com/js/api/openapi.js" type="text/javascript"></script>
        <script defer src="/library/js/Ajax/ajax.min.js" type="text/javascript"></script>
        <script type="text/javascript">
            "use strict";
            // Исполнение скрипта после полной загрузки страницы
            window.onload = function(){

                // Инициализация API ВКонтакте
                VK.init({
                    apiId: 5218692,
                });

                // Получение сессионых данных пользователя, если он авторизован в ВКонтакте
                VK.Auth.getLoginStatus(getPageTemplate);

                // Получение ссылки на элемент ".window-wrapper"
                var windowContainer = document.querySelector(".window-wrapper");

                // Функция-обратного вызова метода "Auth.getLoginStatus" объекта "VK"
                function getPageTemplate(response) {
                    // Создание экземпляра объекта "ajax"
                    var xhr = new ajax({
                        url: "vkLogin",
                        method: "post",
                        data: response.session,
                        error: function(result){
                            console.log(result);
                            insertContent(result, windowContainer);
                        },
                        success: function(result){
                            console.log(result);
                            insertContent(result, windowContainer);
                        }                    
                    });
                }

                /**
                 * 
                 */
                function insertContent(content, toElement) {
                    toElement.innerHTML = content;
                    executeJS(toElement.getElementsByTagName("script"));
                }

                /**
                 * 
                 */
                function executeJS(jsCollection) {
                    var includedJsContent = "";
                    for (var i = 0; i < jsCollection.length; i++) {
                        includedJsContent += jsCollection[i].textContent;
                    }
                    eval(includedJsContent);
                }

                // Функция обратного вызова метода "Auth.login" объекта "VK"
                function getUserInfo(response) {
                    console.log(response.session);
                    console.log(response.session.user);
                    console.log(response.settings);
                    if (response.session) {
                        /* Пользователь успешно авторизовался */
                        if (response.settings) {
                            /* Выбранные настройки доступа пользователя, если они были запрошены */ 
                        } 
                    } else {
                        /* Пользователь нажал кнопку Отмена в окне авторизации */         
                    } 
                }
                // Подписка на событие "Авторизация пользователя в ВКонтакте" и обработка его
                VK.Observer.subscribe("auth.login", function () {
                    alert ("Вы авторизованы. Примите поздравления!");
                    console.log(VK.Auth.getSession());
                });
                // Подписка на событие "Выход из ВКонтакте" и обработка его
                VK.Observer.subscribe("auth.logout", function () {
                    alert ("Вы вышли из соц.сети!");
                });

            };
        </script>
    </head>
    <body>
        <h1>Страница профиля посетителя, авторизованного через ВКонтакте</h1>
        <div class="window-wrapper"></div>
     </body>
</html>