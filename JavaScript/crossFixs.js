/**
 * Библиотека кросс-браузерных решений стандартных свойств, методов и операторов JavaScript
 *
 * Поддерживаемые браузеры6
 * * IE 8-
 */

// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/* ==== Решение "preventDefault.js"========================== *
 * ==== Отмена действия по умолчанию браузера на событие ==== *
 * ========================================================== */
function preventDefault(event) { event = event || window.event; event.preventDefault ? event.preventDefault() : event.returnValue = false; }
/* ========================================================== */


/* ==== Решение "fixEvent.js"================================================================================= *
 * ==== Добавление свойств стандартных свойств (target, currentTarget, relatedTarget, pageX/pageY, which) ==== *
 * =========================================================================================================== */
function fixEvent(e) { e.currentTarget = this; e.target = e.srcElement; if (e.type == 'mouseover' || e.type == 'mouseenter') e.relatedTarget = e.fromElement; if (e.type == 'mouseout' || e.type == 'mouseleave') e.relatedTarget = e.toElement; if (e.pageX == null && e.clientX != null) {
        var html = document.documentElement; var body = document.body; e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0); e.pageX -= html.clientLeft || 0; e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0); e.pageY -= html.clientTop || 0; } if (!e.which && e.button) { e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0)); } return e; }
/* =========================================================================================================== */