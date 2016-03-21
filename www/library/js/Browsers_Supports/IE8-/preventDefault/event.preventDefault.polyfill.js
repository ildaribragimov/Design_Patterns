/* ==== Решение "preventDefault.js"========================== *
 * ==== Отмена действия по умолчанию браузера на событие ==== *
 * ========================================================== */

/**
 * Функция "Отмены действия браузера на события прокрутки мышью"
 *
 * Параметры функции:
 * event (тип: Объект) - Объект события
 *
 * Примечание:
 * * Кроссбраузерное решение с поддержкой IE 8-
 * * Используется в случаях, когда обработчик события назначен как через "on"событие, так и через "addEventListener"
 */
function preventDefault(event) {
	event = event || window.event;
	// Если метод поддерживается браузером
	event.preventDefault
		// Вызов метода, отменаяющего действия по умолчанию на событие
		? event.preventDefault()
		// Вызов альтернативного метода отмеры действий по умолчанию браузера (необходимо для поддержки IE 8-)
		: event.returnValue = false;
}
/* ========================================================== */