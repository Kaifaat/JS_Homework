//1
function transformIntoObject(array) {
    var result = array.map(function (i) {
        return {
            name: i,
        }
    })
    return result;
}

console.log(transformIntoObject(['Leonardo', 'Donatello', 'Raphael']));

//2
function timeChecking(array) {
    var time = array.reduce(function (i, current) {
        return i + ' : ' + current;
    }, 'Текущее время')
    return time;
}

console.log(timeChecking(['15', '25', '58']));

//3
function vowelLetterSearcher(str) {
    var trueLetters = 'аоеёиуыэюя';
    var text = str.toLowerCase().split('').reduce(function (sum, i) {
        (trueLetters.indexOf(i) !== -1) ? sum++ : false;
        return sum;
    }, 0);
    return text;
}

console.log(vowelLetterSearcher('Я скажу то, что для тебя не новость: мир не такой уж солнечный и приветливый. ' +
    'Это очень опасное, жесткое место, и если только дашь слабину, он опрокинет с такой силой тебя, что больше ' +
    'уже не встанешь. Ни ты, ни я, никто на свете, не бьёт так сильно, как жизнь! Совсем не важно, как ты ударишь,' +
    ' а важно, какой держишь удар, как двигаешься вперёд. Будешь идти — ИДИ! Если с испугу не свернёшь... ' +
    'Только так побеждают! ' + 'Если знаешь, чего ты стоишь — иди и бери своё! Но будь готов удары держать, а не плакаться и говорить: ' +
    '«Я ничего не добился из-за него, из-за неё, из-за кого-то!» Так делают трусы! А ты не трус! Быть этого не может!'))


//4
function countSentencesLetters(string) {
    var finalResult = [];
    var newString = string.split(/[.!?]/);
    var words = newString.filter(function (i) {
        return i !== '';
    })
    var result = words.map(function (item){
        return item.trim() + ': Letters quantity is: ' +item.replace(/[, ]+/g, " ").trim().split(' ').join('').length
    })

    for(var i = 0; i < result.length; i++){
        finalResult += result[i] + '\n'
    }
    return finalResult
}

console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'))