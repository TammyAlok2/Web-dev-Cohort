Object.prototype.chai = function () {
    console.log('Chai')
}

const array = [1, 2, 3, 4, 5]
//array.chai() 

// like whenever to check the 

Array.prototype.chaiCode = () => {
    console.log('Chai and code')
}

//array.chaiCode()


// Polyfill provide a way to add new features  to the older version of js  
if (!Array.prototype.fill) {
    throw new Error('Polyfill for Array.fill is needed')
}


const array1 = [1, 2, 3, 4, 4, 12]

// Error : .forEach is not a function does not exist on arr variable 
// Real signature ko samjo  - No return , function input , value ,index 
// calls my fn for every value 

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFunction) {
        const originalArray = this; // jo bhi array ya object ka reference lena ho 
        for (let i = 0; i < originalArray.length; i++) {
            userFunction(originalArray[i], i)
        }

    }
}
// array1.myForEach((value,index)=>{
//     console.log(value,index) 
// })

// Polyfill for map 
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFunction) {
        const result = [];
        const orginalArray = this;

        // start iterarting 
        for (let i = 0; i < orginalArray.length; i++) {

            const value = userFunction(orginalArray[i], i);
            result.push(value);
        }
        return result;
    }
}

// array1.myMap((value,index)=>{
//     console.log(value,index)    
// })

// polyfills for the includeOf learn more about that 

if (!Array.prototype.myIncludeOf) {

    Array.prototype.myIncludeOf = function(userFunction)
    {
        const index = -1;

        const originalArray = this;
        for(let i = 0;i<originalArray.length;i++){
            const value = userFunction(originalArray[i], i);
            if(originalArray[i] == value){
                index =i;
            }
        }
        return index;
    }
}

const result = array1.myIncludeOf(12)
console.log(result)