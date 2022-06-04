var input = document.getElementsByTagName('input');
var inputX = document.getElementById('X');
var inputY = document.getElementById('Y');
var button = document.getElementById('button');
var board = document.getElementById('board');
button.disabled = true;
input.type = 'text';

function buttonDisable (){
    (inputX.value && inputY.value) ? button.disabled = false : button.disabled = true;
}

function isInteger() {
    if (Number.isInteger(+inputX.value) && inputX.value > 0 && inputX.value <=10
        && Number.isInteger(+inputY.value) && inputY.value > 0 && inputY.value <=10) {
        chessBoard();
    } else {
        alert('Поля должны принимать только целые числа от 1 до 10')
    }
}

function chessBoard() {
    board.innerHTML = '';
    var table = '<table style="margin: 30px; border: solid black">';
    for(var i = 1; i <= inputY.value; i++) {
        table += "<tr>";
        for(var j = 1; j <= inputX.value; j++){
            if(i % 2 !== 0 && j % 2 !==0) {
                table += "<td style='background: white'></td>"
            } else if (i % 2 !== 0 && j % 2 === 0) {
                table += "<td style='background: black' ></td>"
            } else if(i % 2 === 0 && j % 2 !== 0) {
                table += "<td style='background: black' ></td>"
            } else {
                table += "<td style='background: white' ></td>"
            }
        }
        table += '</tr>';
    }
    table += '</table>';
    board.innerHTML += table;
}

board.onclick = function (event) {
    var target = event.target;
    if(target.tagName === 'TD') {
        changeColor()
    }
}

function changeColor (node){
    var td = document.getElementsByTagName('td');

    for (var m = 0; m < td.length; m++){
        if(td[m].style.background === 'black') {
            td[m].style.background = 'white'
        }
        else {
            td[m].style.background = 'black';
        }
    }
}

button.addEventListener('click', isInteger);
input[0].addEventListener('keyup', buttonDisable);
input[1].addEventListener('keyup', buttonDisable);

