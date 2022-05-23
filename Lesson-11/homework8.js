//1
function filterNumbersArr(numbers){
     return numbers.filter(function (item){
       return item > 0;
    })
}
console.log(filterNumbersArr([-1, 0, 2, 34, -2, 16, 32]));

//2
function filterPositiveNumber(arr) {
    var firstNumber = arr.find(function (item) {
        return item > 0;
    })
    return firstNumber;
}
arr1 = [-1, 0, 2, -6, 0, 25];
console.log(filterPositiveNumber(arr1));

//3
function palindromesCheck(word) {
    var arr1 = word.toLowerCase().split('').reverse();
    var arr2 = word.toLowerCase().split('');
    return (arr1.join('') === arr2.join(''));

}

console.log(palindromesCheck('kot'));
console.log(palindromesCheck('Оно'));

//4
function areAnagrams(word1, word2) {
 var wordOne = word1.toLowerCase().split('').sort();
 var wordTwo = word2.toLowerCase().split('').sort();
 return (wordOne.join() === wordTwo.join())
}
console.log(areAnagrams('sota', 'oats'));
console.log(areAnagrams('soft', 'tfsa'));

//5
function divideArr(arr, counter) {
    var result = [];
    var number = Math.ceil(arr.length / counter)
    for (i = 0; i < number; i++) {
        result[i] = arr.slice((i * number), (i * number) + number);
    }
    console.log(result);
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);


//6
function isSqrtTwo(number) {
    if (number / 2 === 1) {
        console.log(true)
    } else if (number % 2 === 0) {
        isSqrtTwo(number / 2);
    } else if (number === 1) {
        console.log(true);
    } else if (number % 2 !== 0) {
        console.log(false);
    } else {
        console.log(false);
    }
}

isSqrtTwo(4);
isSqrtTwo(21);
isSqrtTwo(1);
isSqrtTwo(40);
isSqrtTwo(128);
isSqrtTwo(1);
isSqrtTwo(11);
