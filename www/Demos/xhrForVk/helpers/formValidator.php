<?php

if (!empty($_POST)){
    $name = $_POST["name"];
}
if (!empty($_GET)){
    $name = $_GET["name"];
}
// Вывод результирующего сообщения
echo "Здравствуйте, ".$name;

?>