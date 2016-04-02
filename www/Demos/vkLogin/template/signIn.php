<?php 
/**
 * Описание шаблона вывода блока подкючения внешних файлов JS-скриптов и CSS-стилей
 */
?>
<script defer type="text/javascript">
    "use strict";
    document.querySelector(".signInThroughVk").addEventListener("click", function(e){
        e.preventDefault();

        VK.Auth.login(function(response) { 
            console.log(response.session);
            console.log(response.settings);
            
            if (response.session) {
                /* Пользователь успешно авторизовался */ 
                if (response.settings) {
                    /* Выбранные настройки доступа пользователя, если они были запрошены */ 
                } 
            } else {
                /* Пользователь нажал кнопку Отмена в окне авторизации */         
            } 
        }); 

        return false;
    });
</script>
<div>
    <div><img src="" alt=""></div>
    <p>Представьтесь!</p>
    <p>Анонимы не могут оставлять отзыв!</p>
    <button class="signInThroughVk">Войти с помощью ВКонтакте</button>
</div>