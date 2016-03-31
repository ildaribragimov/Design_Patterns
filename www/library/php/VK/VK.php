<?php
// Подключение файла Базового класса работы с объектами
include_once $_SERVER['DOCUMENT_ROOT']."/library/php/object/object.php";
/**
 * Класс работы с API ВКонтакте
 *
 * @version 1.0
 *
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov, 2016 
 *
 * @property number $app_id - ID приложения ВКонтакте
 * @property number $api_secret - Защищенный ключ приложения ВКонтакте
 * @property number $api_url - Базовый путь для совершения запросов к API ВКонтакте
 *
 * @method void __construct(number $app_id, string $api_secret, string $api_url) Конструктор Класса "VK"
 * @method object getUsers() Получает экземпляр класса "VKUsers" 
 */
class vk extends Object
{
    protected $app_id      = null;
    protected $api_secret  = null;
    protected $api_url     = 'http://api.vk.com/method/';
    /**
     * Конструктор Класса "VK"
     *
     * @constructor
     * @param number $app_id - ID приложения ВКонтакте
     * @param string $api_secret - Защищенный ключ приложения ВКонтакте
     * @param string $api_url - Базовый путь для совершения запросов к API ВКонтакте
     *
     * @return void
     */
    function __construct ($app_id, $api_secret = null, $api_url = null)
    {
        $this->app_id      = $app_id;
        $this->api_secret  = $api_secret;
        $this->api_url     = $api_url ? $api_url : $this->api_url;
    }
    /**
     * Метод получает создает экземпляр класса работы с пользователями и возвращает ссылку на этот экземпляр
     *
     * return object $vkUsers - Экземпляр объекта "VKUsers"
     */
    public function getUsers ()
    {
        return $this->loadObject(__DIR__, "vkUsers");
    }
}
?>