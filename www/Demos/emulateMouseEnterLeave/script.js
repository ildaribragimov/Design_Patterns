// Явное указание на режим строгого соответствия современному стандарту
"use strict";

document.addEventListener("DOMContentLoaded", function() {

    var debag = document.querySelector('textarea');
    
    // 
    function animate(el, action){
        switch(action){
            case 'show':
                debag.innerHTML += 'Назначаем новые стили!\n';
                el.style.backgroundColor = 'pink';
                break;
            case 'hide':
                debag.innerHTML += 'Сбрасываем стили!\n';
                el.style.backgroundColor = '';
                break;
        }
    }
 
    
    function emulateMOverMOut(event){
        // Объявляем переменные:
        var target = event.target; // Элемент, на котором произошло событие
        // Выходим из обработчика, если событие произошло на элементе, которому был назначен обработчик
        if(target == this){
            // Вносим информацию в блок отладчика
            debag.innerHTML += 'Событие произошло на элементе, которому был назначен обработчик!\nВыходим из обработчика!\n------------------------\n';
            return;
        }
        // Объявляем переменные:
        var type = event.type, // Тип события
            relatedTarget = event.relatedTarget, // Исходный элемент до возникновения события
            animatedElCssClass = '.'+animatedElClass.replace(' ', '.'), // Замена пробелов на точки в строке значения атрибута "class" для корректного поиска родеителей по CSS-селектору
            targetParent = target.parent(animatedElCssClass), // Ссылка на родителя с искомым CSS-классом
            relatedTargetParent = relatedTarget.parent(animatedElCssClass); // Ссылка на родителя с искомым CSS-классом
        // Обрабатываем события на потомках, если хотя бы у одного из элементов был найден искомый родитель
        if( targetParent || relatedTargetParent ){
            // Костли для свойств объекта EVENT, если элемент - тег <a>
            target = (target.tagName == 'A') ? toString.call(target): target;
            relatedTarget = (relatedTarget.tagName == 'A') ? toString.call(relatedTarget): relatedTarget;
            // Выходим из обработчика, если переход был совершен в пределах одного анимируемого элемента
            if( targetParent == relatedTargetParent || target == relatedTargetParent || relatedTarget == targetParent ){
                // Вносим информацию в блок отладчика
                debag.innerHTML += 'Переход внутри анимируемого элемента\n------------------------\n';
                return;                                          
            }
            // Вносим информацию в блок отладчика
            debag.innerHTML += 'Прыжок на потомка анимируемого элемента\nЕго родителю ';
            // Переопределяем целевой элемент, если он - сам анимируемый элемент 
            target = targetParent || target;
        }
        // Если элемент является анимируемым
        if( target.classList.contains(animatedElClass) ){
            // Объявляем переменные:
            var action = (type == 'mouseover')? 'show': 'hide'; // Анимационное действие (в зависимости от события)
            // Переопределяем значение переменной
            cursorOn = ( cursorOn == null || cursorOn != target ) ? target: null;
            // Изменяем CSS-свойсва анимируемого элемента
            animate(target, action);
            // Вносим информацию в блок отладчика
            debag.innerHTML += '------------------------\n';
        }
    }


    
    // Получение ссылки на объект, которому необходимо назначить обработчик
    var section = document.querySelector('section'), // Получаем ссылку на элемент, которому будем назначать обработчики событий "mouseover" и "mouseout"
        animatedElClass = 'animated', // Указываем имя CSS-класса анимируемого элемента
        cursorOn = null; // Запоминаем, что по умолчанию курсор не над анимируемым элементом

    section.onmouseover = section.onmouseout = emulateMOverMOut;
    
});