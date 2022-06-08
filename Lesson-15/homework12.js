var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};
//1
/*function createClone (obj){
    if(typeof obj === 'object' && !Array.isArray(obj)) {
        var copy = {};
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                copy[key] = createClone(obj[key]);
            }
        }
        return copy;

    } else if(typeof obj === 'object' && obj.length) {
        var copy = [];
        for(var i = 0; i < obj.length; i++) {
            copy[i] = createClone(obj[i]);
        }
        return copy;

    } else  {
        return obj;
    }
}*/

function createClone (obj1, obj2) {
    if(obj1 === obj2) {
        return true
    } else if(obj1.length && obj2.length) {
        if(obj1.length !== obj2.length) {
            return false;
        }
        for(var key in obj1){

        }
    }

}


var clonedObj = createClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);