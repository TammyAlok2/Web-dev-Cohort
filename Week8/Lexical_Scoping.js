let fname = "Alok Tamrakrar"

function printName(){
   let fname = 'Muskan Tamrakar'
    console.log(fname)
}

// console.log(fname)
// printName()

function sayName(){
    console.log(fname)
    function sayName2(){
        console.log(fname)
    }   
    sayName2()
}
sayName()