# PopUp Plugin #

Данное решение позволяет создавать всплывающее окно на лету и вставлять в него данные.


## Где применяется? ##

Решение может применяться в ситуациях, когда необходимо вызвать в модальном окне какие-либо данные. Вот некоторые из таких ситуаций:

* Уведомление посетителя о новых событиях произошедших за период отсутствия посетителя на сайте;
* Подтверждение действий посетителя;
* Запрос ввода каких-либо данных для совершения какого-либо действия.


## Пример использования ##

### Для кроссбраузерного применения в современных браузерах (IE 9 и позднее) ###
#### Вариант 1. Подключение внешних файлов ####

Подключитие файлы в секцию HEAD html-страницы в следующем порядке:
1) "plugin.popUp.css";
2) "plugin.popUp.js" (или "plugin.popUp.min.js").

```html
<link href="plugin.popUp.css" rel="stylesheet" type="text/css">
<script defer type='text/javascript' src='/path/to/plugin.popUp.js'></script>
```

Далее можно вызывать действие создания всплывающего окна можно в любом месте исполняемого JS-скрипта. Например, так:

```js
// Допустим, элементом который вызывает всплывающее окно является кнопка с атрибутом "value"

// Создание экземпляра объекта "Всплывающее окно" с значением "action1" атрибута "value" кнопки в качестве ID.
var popup = new popUp("action1", {type: "alert", header: "Уведомление", data:"Это всплывающее окно с уведомлением о каком либо действии или новости!", navigation:"minimal"});
```

Важно подключить JS-файл решения "Всплывающее окно (plugin.popUp.js)" перед подключением исполняемого JS-скрипта. Также необходимо установить атрибут "defer" при подключении скриптов решения и исполняемого JS-скрипта, чтобы соблюсти очередность загружаемых файлов.


#### Вариант 2. Вставка блока кода непосредственно в исполняемый JS-файл ####

Вставьте блок кода файла "plugin.popUp.min.js" в исполняемый JS-скрипт.

```html
<script type='text/javascript'>
    /**
     * Плагин создания "Всплывающего окна"
     */
    function popUp(f,a){function g(){var b=document.createElement("div");b.setAttribute("class","controls");b.innerHTML='<a class="closeWindow" href="/" target="_self"><span class="icon -m"></span></a>';return b}function h(){var b=document.createElement("div");b.setAttribute("class","header");a.header&&(b.innerHTML='<div class="title">'+a.header+"</div>");b.appendChild(g());return b}function k(){var b=document.createElement("div");b.setAttribute("class","content");b.innerHTML=a.data;return b}a=a||{};a.type=a.type||"alert";a.header=a.header||null;a.data=a.data||"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0431\u044b\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b!";a.navigation=a.navigation||"standart";document.querySelector("body").appendChild(function(){for(var b=["popupWindow","wrapper","container"],a=null,c=0;c<b.length;c++){var d=document.createElement("div");if(0==c)var e=d;d.setAttribute("class",b[c]);a&&a.appendChild(d);a=d;c==b.length-1&&(a.appendChild(h()),a.appendChild(k()))}e.setAttribute("id",f);return e}())};
</script>
```

И далее в любом месте этого скрипта созадвайте экземпляры окон:

```js
// Допустим, элементом который вызывает всплывающее окно является кнопка с атрибутом "value"

// Создание экземпляра объекта "Всплывающее окно" с значением "action1" атрибута "value" кнопки в качестве ID.
var popup = new popUp("action1", {type: "alert", header: "Уведомление", data:"Это всплывающее окно с уведомлением о каком либо действии или новости!", navigation:"minimal"});
```

## Поддержка браузеров ##

На данный момент решение адекватно работает во всех современных браузерах, начиная с IE9 и выше


## Перечень файлов в пакете решения ##

В корневой директории плагина размещаются два файла (полоная и компилированная версии кода):

* plugin.popUp.min.js - минимизированная версия скрипта (удалены переносы строк и комментарии);
* plugin.popUp.js - полная версия скрипта с подробными комментариями.


## Демо-версии ##

Демо версия работы плагина размещены по адресу "/Demos/plugin.popUp/index.php"
