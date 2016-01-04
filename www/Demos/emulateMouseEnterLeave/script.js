// Явное указание на режим строгого соответствия современному стандарту
"use strict";

document.addEventListener("DOMContentLoaded", function() {


   var debag = document.querySelector('textarea');

    // 
    function animate(el, action){
        switch(action){
            case 'show':
                debag.innerHTML += 'Назначаем ему новые стили!\n';
                el.style.backgroundColor = 'pink';
                break;
            case 'hide':
                debag.innerHTML += 'Сбрасываем его стили!\n';
                el.style.backgroundColor = '';
                break;
        }
    }
 
    
    // Получение ссылки на объект, которому необходимо назначить обработчик
    var section = document.querySelector('section'), // Получаем ссылку на элемент, которому будем назначать обработчики событий "mouseover" и "mouseout"
        animatedElClass = 'animated', // Указываем имя CSS-класса анимируемого элемента
        cursorOn = null; // Запоминаем, что по умолчанию курсор не над анимируемым элементом
    
    section.onmouseover = section.onmouseout = function(event){

        debag.innerHTML += cursorOn+'\n';

        // Объявляем переменные:
        var type = event.type, // Тип события
            target = event.target; // Элемент, на котором произошло событие

        // Выходим из обработчика, если:
        // - событие произошло на элементе, которому был назначен обработчик
        // - если переходы происходят внутри анимируемого элемента
        if( target == this || (type == 'mouseout' && !cursorOn) || (type == 'mouseover' && cursorOn) ){
            debag.innerHTML += 'Выходим из обработчика!\n------------------------\n';
            return;
        }

        var relatedTarget = event.relatedTarget, // Исходный элемент до возникновения события
            targetEl = (type == 'mouseover')? target: relatedTarget, // Элемент, над которым сейчас курсор
            relatedTargetEl = (type == 'mouseover')? relatedTarget: target, // Элемент, с которого перешла мышь
            action = (type == 'mouseover')? 'show': 'hide', // Анимационное действие (в зависимости от события)
            animatedElCssClass = '.'+animatedElClass.replace(' ', '.');

        if(targetEl && relatedTargetEl){
            // Вносим информацию в блок отладчика
            debag.innerHTML += '"'+type+'" на '+target.tagName+'.'+target.className+'\n';
            debag.innerHTML += 'Перешли с '+relatedTargetEl.tagName+'.'+relatedTargetEl.className+' на '+targetEl.tagName+'.'+targetEl.className+'\n';
        }

        if(!cursorOn){
            var parent = targetEl.parent(animatedElCssClass);
            // Вносим информацию в блок отладчика
            debag.innerHTML += 'Курсор перешел на анимируемый элемент!\n';
            if(targetEl.classList.contains('animated')){
                // Запоминаем, что курсор перешел на анимируемый элемент
                cursorOn = targetEl;
            }else if(parent){
                cursorOn = parent;
            }
            // Изменяем CSS-свойсва анимируемого элемента
            animate(cursorOn, action);
            // Вносим информацию в блок отладчика
            debag.innerHTML += '------------------------\n';
            return;
        }
        
        // Выходим из обработчика, если переход был внутри анимируемого элемента
        if( targetEl && (parent == cursorOn) ){
            debag.innerHTML += 'Это внутренний переход!\nВыходим из обработчика!\n------------------------\n';
            return;
        }
        
        // Вносим информацию в блок отладчика
        debag.innerHTML += 'Курсор вышел из анимируемого элемента!\n';
        // Изменяем CSS-свойсва анимируемого элемента
        animate(cursorOn, action);
        // Запоминаем, что курсор перешел на анимируемый элемент
        cursorOn = null;
        // Вносим информацию в блок отладчика
        debag.innerHTML += '------------------------\n';
    }

});