<?php
/**
 * Файл-контроллер
 */
// Подключение вспомогательного файла PHP-класса работы с пользователем
include_once "../../library/php/VK/VK.php";
// 
$vk = new VK(5218692);
echo "<div><br>".$vk->getProperty("app_id")."<br></div>";
// Если массив переменных HTTP-запроса пуст
if (empty($_REQUEST)) {
    // Загрузка шаблона вывода формы авторизации
    include_once "template/signIn.php";
    // Прерывание выполнение скрипта
    return;
}

// Подключение вспомогательного файла PHP-класса работы с пользователем
include_once "../../library/php/VK/VK.php";
// 
$vk = new VK(5218692);

//$userInfo = getUserInfo($_REQUEST["mid"], "id,first_name,last_name,photo_200_orig,domain");

// Подключение шаблона вывода формы добавления отзыва
include_once "template/sendReview.php";
?>