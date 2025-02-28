// problem : Create an object representing a type of tea with propertiew for name ,tye and caffeine content
const teas = {
    name: 'Lemaon tea',
    type: "Green",
    "type1": "Black",
    caffine: 'low'
}
// Problem 2 : Access and print the name of the tea and type properties of the tea obeject 
console.log(teas.name);
console.log(teas.type)
console.log(teas["type1"])

// Problem 3: Add a new property origin to the object 
teas.origin = "India";

// Problem 4: Change the caffient level of the tea object to "medium"
teas.caffine = "medium";

// Problem 5 : Remove the type property from the object 
delete teas.type;
console.log(teas)

// Problem 6 : Check if the tea object has a propert type 
console.log("origin" in teas)

// Problem 7 : Use a for in loop to print the all propeties of the tea object .
for (let key in teas) {
    console.log(key + " : " + teas[key])
}


// problem 8 : create a nested obeject representing different types of teas with properties for names and caffine content
const myTeas = {
    greenTea: {
        name: "Green Tea",
        caffine: "low"
    },
    cups: {
        one: '1',
        two: '2',
    },
    blackTea: {
        name: "Black Tea",
        caffine: "medium"
    }
}

// Problem 9 : create a copy of the tea object 

// Learn difference between the shallow copy and deep copy 


const teaCopy = {
    ...myTeas // using spread operator this will be a shallow copy beacuse it is a nested object  so it will not be a deep copy
}
console.log(teaCopy)

const anotherCopy = teas; // this is referennce only 