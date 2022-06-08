//practice
var button = document.getElementById('button');
var container = document.getElementById('container');

var firstPar = document.createElement('p');
var secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href = https://web.telegram.org>Link1</a> and <a href = https://web.telegram.org>Link2</a>';
secondPar.innerHTML = 'Hello, here are <a href = https://google.com>Link3</a> and <a href  = https://google.com>Link4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var childOne = function () {
    for (var i = 0; i < firstPar.children.length; i++) {
        firstPar.children[i].classList.add('link');
    }
}

var changeLink = function (event) {
    event.preventDefault();
    var target = event.target;
    if (localStorage[target.textContent]) {
        alert((JSON.parse(localStorage.getItem(target.innerText))).path);
    } else {
        localStorage.setItem(target.textContent, JSON.stringify({path: target.getAttribute('href')}));
        alert('Your link was saved');
    }
    target.setAttribute('href', '#');
}

window.onload = function() {
    localStorage.clear();
};

button.onclick = childOne;
secondPar.addEventListener('click', changeLink);


