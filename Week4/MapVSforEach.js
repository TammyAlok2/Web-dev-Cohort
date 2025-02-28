

const array = [1, 2, 3, 4, 5];
// array.map((index) => {
//     console.log(index);
// })

const newArray = array.map(index => {
    console.log(index)
    return index ;
})

console.log('map returns this thing ',newArray)

const newArray1 = array.forEach(index => {
    console.log(index)
    return index ;
})
console.log('for each return this',newArray1)