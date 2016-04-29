<!DOCTYPE html>
<html lang="ru">
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
		<meta charset="utf-8">
        <title>РИЗО Финансист. Оптимизация налогооблажения.</title>
        <link rel="icon" href="template/img/favicon.ico" type="image/x-icon">
        <?php
            include_once "template/css/styles.php";
            include_once "template/js/library.php";
            //include_once "template/js/scripts.php";
        ?>
    </head>
    <body class="page sidebar sidebar_left">
		<div class="page__wrapper sidebar__outer-content">
            <div class="page__content">
                <?php
                    // Вставка секции "Номера"
                    //include "includes/intro.php";
                    // Вставка секции "Цены"
                    //include "includes/services.php";
                    // Вставка секции "О клубе"
                    //include "includes/schemes.php";
                    // Вставка секции "Отзывы"
                    //include "includes/anonymity.php";
                    // Вставка секции "Добавить отзыв"
                    //include "includes/cost.php";
                    // Вставка секции "Забронировать номер"
                    //include "includes/delivery.php";
                    // Вставка секции "Отправить пиьмо"
                    //include "includes/begin.php";
                    // Вставка секции "Карта проезда"
                    //include "includes/contacts.php";
                    // Вставка секции "Подвал сайта"
                    //include "includes/footer.php";
                ?>
            </div>
            <?php
                // Вставка верхней пенели навигации
                include "includes/topPannel.php";
			?>
        </div>
        <?php
            // Вставка меню навигации
			include "includes/menu_main.php";
            // Вставка JS-скрипта, отрабатывающего по завершении загрузки страницы
            //include_once "template/js/post-load.php";
		?>
    </body>
</html>