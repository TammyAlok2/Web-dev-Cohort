
function increment(){
    let count =0;
count++;
console.log(count,`this is count ${count}`);
}
// increment()
// increment()

let count1 =0;
function increment1(){
   
count1++;
console.log(count,`this is count ${count1}`);
}
// increment1()
// increment1()

function increment3(){
    let count =0;

    // clousure function (function binded by its lexical scope)
    return function(){
        count++;
        return count;
        
    }
}
let  x = increment3()
// console.log(x())
// console.log(x())
// console.log(x())

function createInstance(){
    
}