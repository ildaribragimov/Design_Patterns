/* ================================================= *
 * ==== Блокировка/Активация прокрутки страницы ==== *
 * ================================================= */

/**
 * Объявление переменных
 *
 * keys (тип: array) - массив кодов клавиш, отвечающих за скроллирование страницы:
 * * 32 - Пробел
 * * 33 - "pageup"
 * * 34 - "pagedown"
 * * 35 - "end"
 * * 36 - "home"
 * * 37 - Стрелка "Влево"
 * * 38 - Стрелка "Вверх"
 * * 39 - Стрелка "Вправо"
 * * 40 - Стрелка "Вниз"
 */
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

/**
 * Функция "Отмены действия браузера на события прокрутки мышью"
 *
 * Параметры функции:
 * e (тип: Объект) - объект, содержащий данные о событии
 */
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) {
		e.preventDefault()
	};
	e.returnValue = false;  
}

/**
 * Функция "Отмены действия браузера на события нажатий клавиш"
 *
 * Параметры функции:
 * e (тип: Объект) - объект, содержащий данные о событии
 */
function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

/**
 * Функция "Блокировки прокрутки страницы"
 *
 * Параметры функции:
 * e (тип: Объект) - объект, содержащий данные о событии
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
 *
 * Параметры функции:
 * e (тип: Объект) - объект, содержащий данные о событии
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