# Disable/Enable Scroll #

Данное решение позволяет Блокировать и Активировать прокрутку страницы.


## Где применяется? ##

Решение может применяться в ситуациях, когда необходимо заблокировать прокрутку страницы. Вот некоторые из таких ситуаций:

* При открытии выезжающей боковой панели меню (такое меню часто встречается в адаптивных шаблонах веб-сайтов);
* При всплытии модальных или диалоговых окон. Особенно, если задний план при этом необходимо размыть, привязав тем самым внимание посетителя на модальном окне;
* Эмуляция синхронной работы с эмулируемыми программно модальными окнами. Т.е. чтобы работа с сайтом была невозможной до тех, пор пока не будет ракончена работа пользователя с активным объектом (подразумевается окно или другой элемент сигнализирующий прогресс выполнениня текущей операции посетителя).


## Отслеживаемые события при заблокированной прогрутке? ##

Отслеживаются и блокируются обработчики следующих событий:

1) "onkeydown" - Нажатие клавиш:

    * Пробел
    * "pageup"
    * "pagedown"
    * "end"
    * "home"
    * Стрелка "Влево"
    * Стрелка "Вверх"
    * Стрелка "Вправо"
    * Стрелка "Вниз"

2) "onmousewheel" - Прокрутка колеса

3) "ontouchmove" - скроллинг на емкостных экранах


## Поддержка браузеров ##

На данный момент решение адекватно работает во всех современных браузерах, включая IE8-


## Пример использования ##

### Для кроссбраузерного применения (IE 8 и раннее) ###
#### Вариант 1. Подключение внешних файлов ####

Подключитие необходимый для корректной работы решения, файл скрипта "event.preventDefault.polyfill.js" (Файл кроссбраузерной отмены действий по умолчанию браузера на события) в секцию HEAD html-страницы. Следом за ним подключитие файл скрипта "disableScroll.js" (или "disableScroll.min.js") в секцию HEAD html-страницы.

```html
<script defer type='text/javascript' src='/path/to/event.preventDefault.polyfill.js'></script>
<script defer type='text/javascript' src='/path/to/disableScroll.js'></script>
```

Далее можно вызывать действия "Блокировки/Активации" прокрутки с траницы в любом месте исполняемого JS-скрипта. Например, так:

```js
// Блокировка прокрутки страницы
disableScroll();
```

или так:

```js
// Активация прокрутки страницы
enableScroll();
```

Важно подключить JS-файл решения "Блокировки/Активации прокрутки страницы (disableScroll.js)" перед подключением исполняемого JS-скрипта. Также необходимо установить атрибут "defer" при подключении скриптов решения и исполняемого JS-скрипта, чтобы соблюсти очередность загружаемых файлов.


#### Вариант 2. Вставка блока кода непосредственно в исполняемый JS-файл ####

Вставьте последовательно один за другим блоки кода файлов "event.preventDefault.polyfill.js" и "disableScroll.js" в исполняемый JS-скрипт.

```html
<script type='text/javascript'>
    /* ==== Решение "preventDefault.js" ========================= *
     * ==== Отмена действия по умолчанию браузера на событие ==== *
     * ========================================================== */
    function preventDefault(event) { event = event || window.event; event.preventDefault ? event.preventDefault() : event.returnValue = false; }
    /* ========================================================== */

    /* ==== Решение "disableScroll.js" ========= *
     * ==== Блокировка/Активация прокрутки страницы ==== *
     * ================================================= */
    var keys = {32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};
    function preventDefaultForScrollKeys(event) { if (keys[event.keyCode]) { preventDefault(event); return false; } }
    function disableScroll() { if (window.addEventListener) { window.addEventListener('DOMMouseScroll', preventDefault, false); } window.onwheel = preventDefault; window.onmousewheel = document.onmousewheel = preventDefault; window.ontouchmove  = preventDefault; document.onkeydown  = preventDefaultForScrollKeys; }
    function enableScroll() { if (window.removeEventListener) { window.removeEventListener('DOMMouseScroll', preventDefault, false); } window.onwheel = null; window.onmousewheel = document.onmousewheel = null; window.ontouchmove = null; document.onkeydown = null; }
    /* ============== */
</script>
```

И далее в любом месте этого скрипта вызывайте методы "disableScroll()":

```js
// Блокировка прокрутки страницы
disableScroll();
```

или "enableScroll()":

```js
// Активация прокрутки страницы
enableScroll();
```


### Для кроссбраузерного применения в современных браузерах (IE 9 и позднее) ###
#### Вариант 1. Подключение внешних файлов ####

Подключитие файл скрипта "disableScroll.js" (или "disableScroll.min.js") в секцию HEAD html-страницы:

```html
<script defer type='text/javascript' src='/path/to/disableScroll.js'></script>
```

Далее можно вызывать действия "Блокировки/Активации" прокрутки с траницы в любом месте исполняемого JS-скрипта. Например, так:

```js
// Блокировка прокрутки страницы
disableScroll();
```

или так:

```js
// Активация прокрутки страницы
enableScroll();
```

Важно подключить JS-файл решения "Блокировки/Активации прокрутки страницы (disableScroll.js)" перед подключением исполняемого JS-скрипта. Также необходимо установить атрибут "defer" при подключении скриптов решения и исполняемого JS-скрипта, чтобы соблюсти очередность загружаемых файлов.


#### Вариант 2. Вставка блока кода непосредственно в исполняемый JS-файл ####

Вставьте последовательно один за другим блоки кода файлов "event.preventDefault.polyfill.js" и "disableScroll.js" в исполняемый JS-скрипт.

```html
<script type='text/javascript'>
    /* ==== Решение "disableScroll.js" ========= *
     * ==== Блокировка/Активация прокрутки страницы ==== *
     * ================================================= */
    var keys={32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1};function preventDefaultForScrollKeys(event){if(keys[event.keyCode]){event.preventDefault();return false;}}function disableScroll(){if(window.addEventListener){window.addEventListener('DOMMouseScroll',function(event){event.preventDefault();},false);}window.onwheel=function(event){event.preventDefault();};window.onmousewheel=document.onmousewheel=function(event){event.preventDefault();};window.ontouchmove=function(event){event.preventDefault();};document.onkeydown=preventDefaultForScrollKeys;}function enableScroll(){if(window.removeEventListener){window.removeEventListener('DOMMouseScroll',function(event){event.preventDefault();},false);}window.onwheel=null;window.onmousewheel=document.onmousewheel=null;window.ontouchmove=null;document.onkeydown=null;}
    /* ============== */
</script>
```

И далее в любом месте этого скрипта вызывайте методы "disableScroll()":

```js
// Блокировка прокрутки страницы
disableScroll();
```

или "enableScroll()":

```js
// Активация прокрутки страницы
enableScroll();
```

## Перечень файлов в пакете решения ##

В папаке "includingOldBrowsers" находятся версии поддерживающие старые версии браузеров, в том числе IE версий 8 и раннее
В папке "standart" находятся версии поддерживающие все современные браузеры начиная c IE 9 и позднее.

* disableScroll.min.js - минимизированная версия скрипта (удалены переносы строк и комментарии);
* disableScroll.js - полная версия скрипта с подробными комментариями.


## Демо-версии ##

Этот раздел пока не заполнен