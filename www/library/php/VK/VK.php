<?php
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
 * @method void setProperty(string $name, string $value) Переопределяет значение свойству объекта
 */
class VK
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
    function __construct ($app_id, $api_secret, $api_url = null)
    {
        $this->app_id      = $app_id;
        $this->api_secret  = $api_secret;
        $this->api_url     = $api_url ? $api_url : $this->api_url;
    }
    /**
     * Метод переопределяет значение свойства объекта
     *
     * @param string $name - Имя переопределяемого свойства объекта
     * @param string $value - Значение свойства объекта
     *
     * @return void
     */
    protected function setProperty($name, $value)
    {
        $this->$name = $value;
    }
}
?>