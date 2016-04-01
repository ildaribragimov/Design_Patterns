<?php 
/**
 * Описание шаблона вывода блока подкючения внешних файлов JS-скриптов и CSS-стилей
 */
$user = $userInfo->response[0];
?>
<div>
    <div><a href="<?php echo "http://vk.com/".$user->domain; ?>" target="_blank"><img src="<?php echo $user->photo_200_orig; ?>"></a></div>
    <p><a href="<?php echo "http://vk.com/".$user->domain; ?>" target="_blank"><?php echo $user->first_name." ".$user->last_name; ?></a></p>
</div>