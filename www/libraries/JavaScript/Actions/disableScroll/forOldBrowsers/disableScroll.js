// Явное указание на режим строгого соответствия современному стандарту
"use strict";

/* ==== Решение "disableScroll.js" ========= *
 * ==== Блокировка/Активация прокрутки страницы ==== *
 * ================================================= */

// Создание массива кодов клавиш, отвечающих за скроллирование страницы
var keys = {
	32: 1, // 32 - Пробел
	33: 1, // 33 - "pageup"
	34: 1, // 34 - "pagedown"
	35: 1, // 35 - "end"
	36: 1, // 36 - "home"
	37: 1, // 37 - Стрелка "Влево"
	38: 1, // 38 - Стрелка "Вверх"
	39: 1, // 39 - Стрелка "Вправо"
	40: 1  // 40 - Стрелка "Вниз"
};

/**
 * Функция "Отмены действия браузера на события нажатий клавиш"
 *
 * Параметры функции:
 * event (тип: Объект) - объект, содержащий данные о событии
 */
function preventDefaultForScrollKeys(event) {
	if (keys[event.keyCode]) {
		preventDefault(event);
		return false;
	}
}

/**
 * Функция "Блокировки прокрутки страницы"
 */
function disableScroll() {
	// Старые версии FF
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	}
	// Современный стандарт
	window.onwheel = preventDefault;
	// Старые браузеры, IE
	window.onmousewheel = document.onmousewheel = preventDefault;
	// Для мобильных устройств
	window.ontouchmove  = preventDefault;
	document.onkeydown  = preventDefaultForScrollKeys;
}

/**
 * Функция "Активации прокрутки страницы"
 */
function enableScroll() {
	// Старые версии FF
	if (window.removeEventListener) {
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	}
	// Современный стандарт
	window.onwheel = null;
	// Старые браузеры, IE
	window.onmousewheel = document.onmousewheel = null; 
	// Для мобильных устройств
	window.ontouchmove = null;  
	document.onkeydown = null;  
}

/* ============== */