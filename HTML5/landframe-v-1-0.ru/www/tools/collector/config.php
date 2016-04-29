<?php 
// Путь к корневой директории сайта
$config["root"] = $_SERVER['DOCUMENT_ROOT'];

// Параметр включения/выключения кэша
$config["cacheEnable"] = false;

/**
 * Файл опций
 */
// Порядок загрузки CSS-стилей
$config["css"] = array(
    "/blocks/normalize/normalize_begin.css",
        // normalize level styles
        "/blocks/normalize/html/html.css",
        "/blocks/normalize/body/body.css",
        "/blocks/normalize/nav/nav.css",
        "/blocks/normalize/menu/menu.css",
        "/blocks/normalize/a/a.css",
        "/blocks/normalize/hr/hr.css",
        "/blocks/normalize/ul/ul.css",
        "/blocks/normalize/img/img.css",
        "/blocks/normalize/input/input.css",
        "/blocks/normalize/textarea/textarea.css",
        "/blocks/normalize/button/button.css",
        "/blocks/normalize/header/header.css",
        "/blocks/normalize/section/section.css",
    "/blocks/normalize/normalize_end.css",

    "/blocks/desktop/desktop_begin.css",
        // desktop level styles
        "/blocks/desktop/standart/desktop_standart_begin.css",
            // desktop standart sublevel styles
            "/blocks/desktop/standart/body/body.css",
            "/blocks/desktop/standart/page/__wrapper/page__wrapper.css",
            "/blocks/desktop/standart/icon/icon.css",
            "/blocks/desktop/standart/icon/_size/icon_size.css",
            "/blocks/desktop/standart/link/link.css",
            "/blocks/desktop/standart/link/_block/link_block.css",
            "/blocks/desktop/standart/link/_inverted/link_inverted.css",
            "/blocks/desktop/standart/menu/_horiz/menu_horiz.css",
            "/blocks/desktop/standart/menu/_centered/menu_centered.css",
            "/blocks/desktop/standart/menu/__wrapper/menu__wrapper.css",
            "/blocks/desktop/standart/menu/__content/menu__content.css",
            "/blocks/desktop/standart/menu/__items/menu__items.css",
            "/blocks/desktop/standart/menu/__item/menu__item.css",
            "/blocks/desktop/standart/logo/_centered/logo_centered.css",
            "/blocks/desktop/standart/logo/__wrapper/logo__wrapper.css",
            "/blocks/desktop/standart/logo/__content/logo__content.css",
            "/blocks/desktop/standart/sidebar/__outer-content/sidebar__outer-content.css",
            "/blocks/desktop/standart/sidebar/__toggle-button/sidebar__toggle-button.css",
            "/blocks/desktop/standart/sidebar/__container/sidebar__container.css",
            "/blocks/desktop/standart/burger-button/__icon/burger-button__icon.css",
            "/blocks/desktop/standart/burger-button/__icon/_left/burger-button__icon_left.css",
            "/blocks/desktop/standart/burger-button/__icon/_right/burger-button__icon_right.css",
            "/blocks/desktop/standart/top-pannel/top-pannel.css",
            "/blocks/desktop/standart/top-pannel/__wrapper/top-pannel__wrapper.css",
            "/blocks/desktop/standart/top-pannel/__menu/top-pannel__menu.css",
            "/blocks/desktop/standart/top-pannel/__logo/top-pannel__logo.css",
            "/blocks/desktop/standart/top-pannel/__burger-button/top-pannel__burger-button.css",
        "/blocks/desktop/standart/desktop_standart_end.css",

        "/blocks/desktop/template/desktop_template_begin.css",
            // desktop template sublevel styles
            "/template/css/fonts.css",
            "/blocks/desktop/template/html/html.css",
            "/blocks/desktop/template/body/body.css",
            "/blocks/desktop/template/page/__wrapper/page__wrapper.css",
            "/blocks/desktop/template/page/__content/page__content.css",
            "/blocks/desktop/template/icon/_size/icon_size.css",
            "/blocks/desktop/template/icon/_arrow-down/icon_arrow-down.css",
            "/blocks/desktop/template/menu/__item/menu__item.css",
            "/blocks/desktop/template/menu/__link/menu__link.css",
            "/blocks/desktop/template/menu/_social-links/menu_social-links.css",
            "/blocks/desktop/template/burger-button/__wrapper/burger-button__wrapper.css",
            "/blocks/desktop/template/burger-button/__icon/burger-button__icon.css",
            "/blocks/desktop/template/top-pannel/top-pannel.css",
            "/blocks/desktop/template/top-pannel/__wrapper/top-pannel__wrapper.css",
            "/blocks/desktop/template/top-pannel/__link/top-pannel__link.css",
            "/blocks/desktop/template/top-pannel/__logo/top-pannel__logo.css",
            "/blocks/desktop/template/top-pannel/__burger-button/top-pannel__burger-button.css",
        "/blocks/desktop/template/desktop_template_end.css",
    "/blocks/desktop/desktop_end.css",

    "/blocks/tablet/tablet_begin.css",
        // tablet level styles
        "/blocks/tablet/landscape/tablet_landscape_begin.css",
            // tablet landscape sublevel styles
            "/blocks/tablet/landscape/menu/__wrapper/menu__wrapper.css",
            "/blocks/tablet/landscape/menu/__items/menu__items.css",
            "/blocks/tablet/landscape/menu/__item/menu__item.css",
            "/blocks/tablet/landscape/menu/__link/menu__link.css",
            "/blocks/tablet/landscape/logo/__wrapper/logo__wrapper.css",
            "/blocks/tablet/landscape/sidebar/__container/sidebar__container.css",
            "/blocks/tablet/landscape/top-pannel/__logo/top-pannel__logo.css",
            "/blocks/tablet/landscape/top-pannel/__burger-button/top-pannel__burger-button.css",
        "/blocks/tablet/landscape/tablet_landscape_end.css",

        "/blocks/tablet/portrait/tablet_portrait_begin.css",
            // tablet portrait sublevel styles
        "/blocks/tablet/portrait/tablet_portrait_end.css",
    "/blocks/tablet/tablet_end.css",
    
    "/blocks/mobile/mobile_begin.css",
        // mobile level styles
        "/blocks/mobile/landscape/mobile_landscape_begin.css",
            // mobile landscape sublevel styles
            "/blocks/mobile/landscape/body/body.css",
    
        "/blocks/mobile/landscape/mobile_landscape_end.css",
        "/blocks/mobile/portrait/mobile_portrait_begin.css",
            // mobile portrait sublevel styles
            "/blocks/mobile/portrait/body/body.css",
    
        "/blocks/mobile/portrait/mobile_portrait_end.css",
    "/blocks/mobile/mobile_end.css",

   /* 
    "/blocks/standart/section/section.css",
    "/blocks/standart/section/__wrapper/section__wrapper.css",
    "/blocks/standart/section/__header/section__header.css",
    "/blocks/standart/section/__content/section__content.css",
    
    "/blocks/standart/accordion/__header/accordion__header.css",
    "/blocks/standart/accordion/__section/accordion__section.css",
    "/blocks/standart/accordion/__section-content/accordion__section-content.css",
    
    "/blocks/template/section/__wrapper/section__wrapper.css",
    "/blocks/template/section/__header/section__header.css",
    "/blocks/template/section/__content/section__content.css",
    "/blocks/template/h/h.css",
    "/blocks/template/p/p.css",
    "/blocks/template/h/_lev/h_lev.css",
    "/blocks/template/accordion/accordion.css",
    "/blocks/template/accordion/__header/accordion__header.css",
    "/blocks/template/accordion/__section/accordion__section.css",
    "/blocks/template/accordion/__section-header/accordion__section-header.css",
    "/blocks/template/accordion/__section-content-wrapper/accordion__section-content-wrapper.css",
    */
);
// Порядок загрузки JS-скриптов
$config["js-library"] = array(
    "/template/js/helpers/function.getIndex.min.js",
    "/template/js/helpers/function.parent.min.js",
    "/template/js/helpers/disableScroll.min.js",
    "/template/js/helpers/slidePannel.min.js",
    /*
    "/blocks/standart/accordion/accordion.min.js",

    //"/blocks/template/accordion/accordion.js",
    */
    "/blocks/desktop/template/top-pannel/top-pannel.js",
);
?>