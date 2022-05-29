var block = document.getElementById('container');
var firstParagraph = document.createElement('p'),
    secondParagraph = document.createElement('p'),
    firstLink = document.createElement('a'),
    secondLink = document.createElement('a');
block.appendChild(firstParagraph);
block.appendChild(secondParagraph);
firstParagraph.appendChild(firstLink);
secondParagraph.appendChild(secondLink);
firstParagraph.innerText = 'Привет';
secondParagraph.innerText = 'Привет';
firstLink.href = 'https://www.youtube.com/';
secondLink.href = 'https://ru.packetlosstest.com/';