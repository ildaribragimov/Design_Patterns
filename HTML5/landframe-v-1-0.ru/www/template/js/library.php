<?php
// Имя до выходного файла
$outputFileName = "scripts.js";
// Путь до выходного файла
$outputFilePath = "/template/js/";

// Подключение файла опций загрузки
include_once $_SERVER['DOCUMENT_ROOT']."/tools/collector/collector.php";

// Создание экземпляра объекта "Сборщика"
$jsBundle = new Collector("js-library", $config);

$initialString = '"use strict"; document.addEventListener("DOMContentLoaded", function() {';
$finalString = '});';

// Вызов метода "Создать Сборку" объекта "Сборщика"
$jsBundle->createBundle($outputFilePath, $outputFileName, $initialString, $finalString);

echo '<script defer src="'.$outputFilePath.$outputFileName.'" type="text/javascript"></script>';
?>
