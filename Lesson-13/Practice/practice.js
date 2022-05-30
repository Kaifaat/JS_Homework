//practice
var button = document.getElementById('button');
var container = document.getElementById('container');

var firstPar = document.createElement('p');
var secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href = https://web.telegram.org>Link1</a> and <a href = https://web.telegram.org>Link2</a>';
secondPar.innerHTML = 'Hello, here are <a href = https://google.com>Link2</a> and <a href  = https://google.com>Link2</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var childOne = function(){
    for(i = 0; i < firstPar.children.length; i++){
        firstPar.children[i].classList.add('link');
    }
}

var changeLink = function (event){
    event.preventDefault();
    var target = event.target;
    if(target.tagName === 'A') {
        alert(target.getAttribute('href'))
    }
}

button.onclick = childOne;
secondPar.addEventListener('click', changeLink);


