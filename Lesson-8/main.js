function objectTransformer(obj) {
    var duplicate = [];
    var countOfValues = {};

    for (var key in obj) {
        duplicate.push(obj[key])
        obj[key] = key + '_length:' + obj[key].length;
    }
    for (var i = 0; i <= duplicate.length; i++) {
        if (countOfValues[duplicate[i]]) {
            ++countOfValues[duplicate[i]];
        } else {
            countOfValues[duplicate[i]] = 1
        }
    }
    for (var keys in countOfValues) {
        if (countOfValues[keys] === 1) {
            delete countOfValues[keys]
        } else {
            countOfValues[keys] += ' times';
        }
    }
    obj["Duplicated values"] = countOfValues;

    return obj;
}


var forExample = {
    name: 'Shrek',
    wife: 'Fiona',
    bestFriend: 'Donkey',
    mainEnemy: 'Lord Forquaad',
    secondBestFriend: 'Donkey',
    thirdBestfriend: 'Donkey',
    fourthBestfriend: 'Donkey'
}
console.log(objectTransformer(forExample))
