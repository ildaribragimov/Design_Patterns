<?php
// Подключение файла Базового класса работы с объектами
include_once $_SERVER['DOCUMENT_ROOT']."/library/php/Object/Object.php";
/**
 * Класс работы с информацией о пользователях
 *
 * @version 1.0
 *
 * @author Ildar Ibragimov <iibragimov84@gmail.com>
 * @copyright Ildar Ibragimov, 2016 
 *
 * @method void __construct() Конструктор Класса "VKUsers"
 * @method void get(string $user_ids, string $fields, string $name_case) Получает расширенную информацию о пользователях
 */
class VKUsers extends Object
{
    /**
     * Конструктор Класса "VKUsers"
     *
     * @constructor
     * @return void
     */
    public function __construct ()
    {
    }
    /**
     * Метод получает расширенную информацию о пользователях
     *
     * @param string $user_ids - Перечисленные через запятую идентификаторы пользователей или их короткие имена
     * @param string $fields - Список дополнительных полей профилей, которые необходимо вернуть
     * @param string $name_case - Падеж для склонения имени и фамилии пользователя
     *
     * @return object $result - Результат запроса к API ВКонтакте
     */
    public function get ($user_ids, $fields = null, $name_case = null)
    {
        // Формирование строки запроса к API ВКонтакте
        $query = "http://api.vk.com/method/users.get?&user_ids=".$user_ids;
        // Если параметр "fields" был передан
        if ($fields) {
            $query .= "&fields=".$fields;
        }
        // Если параметр "name_case" был передан
        if ($name_case) {
            $query .= "&name_case=".$name_case;
        }
        $result = json_decode(file_get_contents($query));
        return $result;
    }
}
?>