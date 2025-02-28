let fname = 'alok'
let fname1 = fname;
fname1='sachin'
console.log(fname1) // sachin
console.log(fname)  // alok 

// It is beacuase of the primitive data type it stored on the stack 



let p1 = {
    fname:'Alok kumar',
}
let p2 = p1;
p2.fname = 'Muskan'
console.log(p1.fname) // Muskan
console.log(p2.fname) // Muskan

// It is beacuase of the reference data type it stored on the heap memory and stored pointer in the 
// stack memory


// ways of copying objects which create new memory in the heap 
// 1. Object assign
// 2. Spread operator
// 3. JSON.parse(JSON.stringfy())
// 4. Object.create()
// 5. Object.assign()
// 6. Array.from()



// spread operator doesn't work in inner objects/ nested objectes / nested array  because it creates a shallow copy 
let p3 = { 
    fname:'Alok kumar',
    lname:'Singh',
    address:{
        city:'Delhi',
        state:'Delhi'
    }
}
//console.log(p3.address)
let p4 = {
    ...p3
}
p4.address.city = 'Noida'
// console.log(p3.address)
// console.log(p4.address)


// using json parse and json stringify - it is a deep copy 
const p3KaString = JSON.stringify(p3);
const p5 = JSON.parse(p3KaString);
p5.address.city = 'Mumbai'
// console.log(p3)
// console.log(p5)


// using object.assign - it is a swallow copy
const p6 = Object.assign({},p3)
p6.address.city = 'Chennai'
// console.log(p3)
// console.log(p6)

// using object.create - it is a deep copy 
const p7 = Object.create(p3)
p7.address.city = 'Bangalore'
console.log(p3)
console.log(p7,'p7')