/*function Cat(name) {
    this.name = name;
    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
    var foodAmount = 50;
    function formatFoodAmount () {
        return foodAmount + 'гр';
    };
}

var myCat = new Cat('Steve');
console.log(myCat.feed());

*/

/*function Cat(name) {
    this.name = name;
    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + 'гр корма');
    };
    var foodAmount = 0;
    this.dailyNorm = function (amount) {
        if (amount < 50 || amount > 100) {
            throw new Error('Не пойму, вы хотите перекормить кота, или оставить голодным?')
        } else if (!arguments.length) {
            return foodAmount;
        } else {
            return foodAmount = amount;
        }
    }
}

var myCat = new Cat('Steve');
myCat.dailyNorm(76);
myCat.feed();*/

function Cat(name) {
    this.name = name;
    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
    var foodAmount = 56;
    function formatFoodAmount() {
        return foodAmount + 'гр';
    };
    this.dailyNorm = function (amount) {

        if (!arguments.length) {
            return formatFoodAmount()
        } else if (amount < 50 || amount > 100) {
            throw new Error('Не пойму, вы хотите перекормить кота, или оставить голодным?')
        } else {
            foodAmount = amount;
        }
    }
}

var myCat = new Cat('Steve');
myCat.dailyNorm(59)
console.log(myCat.dailyNorm());
console.log(myCat.feed());