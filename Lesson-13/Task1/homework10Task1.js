var table = document.getElementById('table');
var button = document.getElementById('button');
var addTd = document.getElementsByTagName('TD');
var input = document.createElement('input');
input.type = 'text';

var addRow = function () {
    var addTr = document.createElement('tr');
    var rows = document.getElementsByTagName('tr');
    addTr.innerHTML = "<td></td><td></td><td></td>";

    table.insertBefore(addTr, rows[0]);
}

table.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'TD' && target.id !== 'button') {
        addInput(target)
    }
}

function addInput(node) {
    addTd = node;
    var text = event.target.textContent;
    event.target.appendChild(input).focus();
    input.value = text;
    addTd.setAttribute('style', 'color: white;')

}

table.addEventListener("focusout", function (event) {
    addTd.innerHTML = event.target.value;
    event.target.value = null;
    addTd.setAttribute('style', 'color: black;')
});

function pressEnter(event) {
    if (event.keyCode === 13) {
        addTd.textContent = input.value;
    }
}

table.addEventListener('keydown', pressEnter);
button.addEventListener('click', addRow);

