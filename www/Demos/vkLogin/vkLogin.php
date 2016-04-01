<?php
/**
 * Файл-контроллер
 */

// Если массив переменных HTTP-запроса пуст
if (empty($_REQUEST)) {
    // Загрузка шаблона вывода формы авторизации
    include_once "template/signIn.php";
    // Прерывание выполнение скрипта
    return;
}

// Подключение вспомогательного файла PHP-класса работы с API ВКонтакте
include_once $_SERVER['DOCUMENT_ROOT']."/library/php/vk/vk.php";
// Создание экземпляра объекта "vk", для работы с API ВКонтакте
$vk = new vk(5218692);
// Вызов метода "users.get" API ВКонтакте
$userInfo = $vk->request("users.get", array(
    user_ids => $_REQUEST["mid"],
    fields => "id,first_name,last_name,photo_200_orig,domain"
));

echo "<pre>";
print_r($userInfo);
echo "</pre>";
// echo "<div><br>".$vk->getProperty("app_id")."<br></div>";

// Подключение шаблона вывода формы добавления отзыва
include_once "template/sendReview.php";
?>