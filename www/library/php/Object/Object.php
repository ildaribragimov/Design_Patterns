<?php
/**
 * Базовый класс работы с объектами
 *
 * @version 1.0
 *
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov, 2016 
 *
 * @method void setProperty(string $name, string $value) Переопределяет значение свойству объекта
 * @method anytype getProperty(string $name) Получает значение свойства объекта
 * @method anytype loadObject(string $filePath, string $objectName, array $params) Подключает внешний php-файл по указанному пути и создаёт экземпляр класса (объекта) с переданными параметрами
 */
class Object
{
    /**
     * Метод переопределяет значение свойства объекта
     *
     * @param string $name - Имя переопределяемого свойства объекта
     * @param string $value - Значение свойства объекта
     *
     * @return void
     */
    public function setProperty($name, $value)
    {
        $this->$name = $value;
    }
    /**
     * Метод получает значение свойства объекта
     *
     * @param string $name - Имя переопределяемого свойства объекта
     *
     * @return anytype Значение свойства объекта
     */
    public function getProperty($name)
    {
        return $this->$name;
    }
    /**
     * Метод подключает внешний php-файл по указанному пути
     * и создаёт экземпляр класса (объекта) с переданными параметрами
     *
     * @param string $filePath - Путь к файлу класса (объекта)
     * @param string $objectName - Имя класса (объекта), экземпляр которого необходимо создать
     * @param array $params - Массив аргументов, который затем передаётся в конструктор создаваемого класса (объекта)
     *
     * @return object $objectName - Экземпляр класса (объекта)
     */
    protected function loadObject ($filePath, $objectName, $params = null)
    {
        include_once $filePath."/".$objectName.".php";
        if ($params) {
            $class = new ReflectionClass($objectName);
            return $class->newInstanceArgs($params);
        }
        return new $objectName();
    }
}
?>