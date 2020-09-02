const myArray = [1, 2, 3, 4, 5];

//Implement Map
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
console.log(myArray.myMap(n => n + 1));
// [ 2, 3, 4, 5, 6 ]

//Implement Reduce
Array.prototype.myReduce = function(callback, initializer) {
    let accumulator = (initializer === undefined) ? 0 : initializer;
  
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
  
    return accumulator;
};
console.log(myArray.myReduce((a, b) => a + b, 10));
// 25


//Implement Filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }

    return result;
};
console.log(myArray.myFilter(n => n % 2 === 0));
// [ 2, 4 ]


//Implement Every
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) return false;
    }

    return true;
};
console.log(myArray.myEvery(n => n < 10));
//true


//Implement Some
Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) return true;
    }

    return false;
};
console.log(myArray.mySome(n => n > 10));
//false