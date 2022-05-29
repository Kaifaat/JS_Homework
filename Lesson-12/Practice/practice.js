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
console.log(firstPar.children);
firstPar.children[0].classList.add('link');
firstPar.children[1].classList.add('link');
}

button.onclick = childOne;

var secondParLinkOne = secondPar.children[0];
var secondParLinkTwo = secondPar.children[1];

var changeLink = function (){
    event.preventDefault();

    alert('https://google.com');
}

secondParLinkOne.addEventListener('click', changeLink);
secondParLinkTwo.addEventListener('click', changeLink);

