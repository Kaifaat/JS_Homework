var button = document.getElementById('button');
var usersList = document.getElementById('content');
var blockInfo = document.getElementsByClassName('main-block')[0];
var images = document.createElement('img');
var nameDiv = document.getElementsByClassName('first-name')[0];
var firstName = document.createElement('p');
var lastName = document.createElement('p');
var users = document.getElementsByTagName('span');


blockInfo.appendChild(images);
blockInfo.appendChild(nameDiv);
nameDiv.appendChild(firstName);
nameDiv.appendChild(lastName);

button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    xhr.send();
    xhr.onload = function () {
        var statusType = +String(this.status)[0];
        console.log((statusType === 2) ? JSON.parse(this.response).data : this.status);

        addUsers(JSON.parse(this.response));

    }
    xhr.onerror = function () {
        console.error(this.status);
        console.log('Error');
        var statusType = this.status;
        var attention = document.createElement('div');
        document.body.appendChild(attention);
        attention.className = 'error';
        attention.innerHTML = 'The Data does not send! Error ' + statusType;
    };
    xhr.onloadend = function () {
        console.log('Запрос завершен');


    }
}, {once: true})

function addUsers(response) {

    for (var i = 0; i < response.per_page; i++) {
        var userBar = document.createElement('span');
        userBar.innerHTML = 'User ' + (i + 1);
        usersList.insertBefore(userBar, blockInfo);

        (function (){
            var user = response.data[i];
            users[i].addEventListener('click', function () {
                for(var i = 0; i < users.length; i++){
                    users[i].classList.remove('buttonsChange')
                }
                event.target.classList.add('buttonsChange');
                selectUsers(user, event.target);
            });
        })()

    }
    selectUsers(response.data[0], users[0]);
}

    function selectUsers(user, buttonsChange){
        blockInfo.setAttribute('id', 'main-block');
        buttonsChange.classList.add('buttonsChange')
        firstName.innerHTML = 'First name: ' + user.first_name;
        lastName.innerHTML = 'Last name: ' + user.last_name;
        images.src = user.avatar;
    }










