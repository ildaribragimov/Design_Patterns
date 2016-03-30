<?php
// Подключение файла Базового класса работы с объектами
include_once $_SERVER['DOCUMENT_ROOT']."/library/php/Object/Object.php";
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
 * @method object getVkObject() Создаёт экземпляр класса (объекта) с переданными параметрами
 * @method object getUsers() Получает экземпляр класса "VKUsers" 
 */
class VK extends Object
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
     * Метод создаёт экземпляр класса (объекта) с переданными параметрами
     *
     * @param string $objectName - Имя класса (объекта), экземпляр которого необходимо создать
     * @param array $params - Массив аргументов, который затем передаётся в конструктор создаваемого класса (объекта)
     *
     * @return object $instance - Экземпляр класса (объекта)
     */
    protected function getVkObject ($objectName, $params = null)
    {
        include_once __DIR__."/VK.".$objectName.".php";
        $className = "VK".$objectName;
        if ($params) {
            $class = new ReflectionClass($className);
            return $class->newInstanceArgs($params);
        }
        return new $className();
    }
    /**
     * Метод получает создает экземпляр класса работы с пользователями и возвращает ссылку на этот экземпляр
     *
     * return object $vkUsers - Экземпляр объекта "VKUsers"
     */
    public function getUsers ()
    {
        return $this->getVkObject("Users");
    }
}
?>