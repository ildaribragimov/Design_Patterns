// Инициализация API ВКонтакте
VK.init({
    apiId: 5218692, // ID приложения для подключения к API
});



var authStatus = false, // Свойство "Статус авторизации". По умолчанию - false (не авторизован).
    firstName = null,
    lastName = null,
    photo = null,
    src = null;


// Узнаем текущий статус авторизации посетителя и получаем сесионые данные
VK.Auth.getLoginStatus(function(response){
    // Актуализируем переменную статуса авторизации посетителя
    authStatus = (response.session) ? true: false;
    if(!authStatus){
        var warning = document.createElement("p");
        warning.innerHTML = "<strong>Представьтесь!<br>Анонимы не могут оставлять отзыв.</strong>";    
        document.querySelector('.window-wrapper').appendChild(warning);        
    }
});

VK.Api.call('users.get', {}, function(r) {
    if(r.response[0]) { 
        var userName = document.createElement("h3");
            userName.className = "name";
            userName.innerHTML = r.response[0].first_name+' '+r.response[0].last_name;
        document.querySelector('.user-profile').appendChild(userName);
    } else {
        console.log('sdsd');
    }
});

// Вывод переменной статуса авторизации посетителя сайта в консоль
console.log( (authStatus) ? 'Посетитель идентифицирован!' : 'Посетитель не идентифирован' );