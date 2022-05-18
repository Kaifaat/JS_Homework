//func style
function Animal() {
    var self = this;
    self.feed = function () {
        return 'Насыпаем в миску ' + self.formatFoodAmount() + ' корма';

    }
    self.foodAmount = 50;

    self.formatFoodAmount = function () {
        return self.foodAmount + 'гр';
    }

    self.dailyNorm = function (amount) {
        if (!arguments.length) {
            return self.formatFoodAmount()
        } else if (amount < 50 || amount > 100) {
            throw new Error('Не пойму, вы хотите перекормить кота, или оставить голодным?')
        } else {
            self.foodAmount = amount;
        }
    }
}

function Cat() {
    Animal.call(this);
    var animalFeed = this.feed;
    this.feed = function () {
        console.log(animalFeed() + '\n' + 'Кот доволен ^_^')
        return this;

    }
    this.stroke = function () {
        console.log('Гладим кота.')
        return this;
    }

}

var myCat = new Cat();
myCat.dailyNorm(95);
myCat.feed();
myCat.stroke().feed().stroke().feed()

//proto style
function Animal() {
    this._foodAmount = 50;
}

Animal.prototype.feed = function () {
    return 'Насыпаем в миску ' + this._formatFoodAmount() + ' корма';
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + 'гр';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) {
        return this._formatFoodAmount()
    } else if (amount < 50 || amount > 100) {
        throw new Error('Не пойму, вы хотите перекормить кота, или оставить голодным?')
    } else {
        this._foodAmount = amount;
    }git 
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Cat() {
}

Cat.prototype.feed = function () {
    console.log(Animal.prototype.feed.apply(this) + '\n' + 'Кот доволен ^_^');
    return this;

}
Cat.prototype.stroke = function () {
    console.log('Гладим кота.')
    return this;
}

var myCat = new Cat();

myCat.dailyNorm(91);
myCat.feed();
myCat.stroke().stroke().stroke().feed().feed()
