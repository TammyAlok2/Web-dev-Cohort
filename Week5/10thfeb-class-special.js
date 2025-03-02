const obj1 = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello');
    }
}

const obj2 ={
    name: 'John',
    age: 30,
}

obj2.__proto__ = obj1; // This is known as prototype chaining 

// prototype inhertance 



obj2.greet();// not work 

const arr = []
console.log(arr.__proto__) // this is object (Array.prototype)
console.log(arr.__proto__.__proto__) // this is object (Object.prototype)

console.log()


class People {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getuFullName(){
        return this.fname+ this.lname;;
    }
}

const person1 = new People('John', 'Doe');
const person2 = new People('Alok', 'Tamrakar')
const person3 = new People('Muskan', 'Tamrakar')
// console.log(person3.getuFullName())

