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
}
?>