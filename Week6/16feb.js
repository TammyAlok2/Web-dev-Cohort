Function.prototype.describe = function (){
    console.log(`Function is ${this.name}`)
}

function greet(name){
    return `Hello ${name}`
}

greet.describe(); 