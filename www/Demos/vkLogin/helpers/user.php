<?php
/**
 * Функция получения информации о пользователе из его профиля в ВКонтакте
 *
 * @param {object} $params - Объект параметров метода "users.get"
 */
function getUserInfo($user_id, $fields) {
    $query = "http://api.vk.com/method/users.get?&user_id=".$user_id."&fields=".$fields;
    $result = json_decode( file_get_contents($query) );
    return $result->response[0];
}
?>
<p>Класс профиля пользователя</p>