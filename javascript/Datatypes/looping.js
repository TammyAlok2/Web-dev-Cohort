
let myArray = [1, 2, 3, 4, 5, 6]
// function is also known as factory 

function sum(array) {
    let sum = 0;
    let i = 0;
    let n = array.length;
    while (n > i) {
        sum += array[i];
        i++;
    }
    return sum;
}

console.log(sum(myArray));

function sum1(array) {
    let sum = 0;
    let i = 0;
    let n = array.length;
    do {
        sum += array[i];
        i++;
    }
    while (n > i)
    return sum;
}
console.log(sum1(myArray))

function sum2(array) {
    let sum = 0;
    let i = 0;
    let n = array.length;
    for (i = 0; i < n; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sum2(myArray))

function sum3(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    })
    return sum;
}
console.log(sum3(myArray))

function sum4(array) {
    return array.reduce((acc, curr) => acc + curr, 0
    )
}
console.log(sum4(myArray))