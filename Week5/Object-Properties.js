// hasOwnProperty : This method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

const obj1 = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello');
    }
}
console.log(obj1.hasOwnProperty('name')); // true
console.log(obj1.hasOwnProperty('greet')); // true
console.log(obj1.__proto__size); // false