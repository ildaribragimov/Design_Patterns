// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/**
 * Объект "пользователя ВКонтакте". Класс работы с профилем пользователя ВКонтакте.
 *
 * Свойства объекта:
 * * applicationId (тип: integer) - ID приложения ВКонтакте для подключения к API ВКонтакте
 * * authStatus (тип: boolean) - Статус авторизации пользователя (true - авторизован / false - не авторизован)
 *
 * Методы объекта:
 * * setAuthStatus (тип: private) - Устанавливает новое значение в свойство "authStatus"
 * * getAuthStatus (тип: public) - Получает новое значение в свойство "authStatus"
 */
function vkUserApi(applicationId){
    /** Объявление переменных
     *
     * * authStatus (тип: ) - Статус подключения пользователя к социальной сети
     * * self (тип: object) - Ссылки на сам объект
     */
    var authStatus = null,
        self = this;

    // Инициализация API ВКонтакте
    VK.init({
        apiId: applicationId,
    });

    /**
     * Метод "setAuthStatus" устанавливает новое значение в свойство "authStatus"
     */
    function setAuthStatus(status){
        // Присвоение нового значения свойству "authStatus"
        authStatus = status;
    };

    /**
     * Метод "getAuthStatus" получает значение свойства "authStatus"
     */
    this.getAuthStatus = function(){
        VK.Auth.getLoginStatus(function(response){
            var status = (response.session) ? true : false;
            setAuthStatus(status);
        });

        // Возвращаемое значение свойства "authStatus"
        return authStatus;
    };
    
    this.getAuthStatus2 = function(){
        return authStatus;
    }
    // Вызов метода "setAuthStatus"
    //setAuthStatus();   
};