function Cat(name) {
    this.name = name;
    this.feed = function () {
        console.log('Насыпаем в миску ' + this.formatFoodAmount() + ' корма');
    };
    this.foodAmount = 50;
    this.formatFoodAmount = function () {
        return this.foodAmount + 'гр';
    };
}

var myCat = new Cat('Steve');
console.log(myCat.feed());


function Cat(name) {
    this.name = name;
    this.feed = function () {
        console.log('Насыпаем в миску ' + this.formatFoodAmount() + ' корма');
    };
    var foodAmount = 0;
    this.dailyNorm = function (amount) {
        if (amount < 50 || amount > 100) {
            throw new Error('Не пойму, вы хотите перекормить кота, или оставить голодным?')
        } else if (amount == null) {
            throw new Error('Может все-таки покормим?')
        } else {
            return foodAmount = amount;
        }
    }
}

var myCat = new Cat('Steve');
console.log(myCat.dailyNorm(60));