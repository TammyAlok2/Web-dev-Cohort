// Problem : Create an object representing a type of tea with propertiew for name ,tye and caffeine content
const teas ={
    name:"lemaon tea",
    type:"green",
    caffine:"low",
    'type1':"black"
}

// Problem 2 : Accesss and print the name and type properties of the tea object
console.log(teas.name);
console.log(teas.type);
console.log(teas["type1"])

// Problem 3 : Add a new property origin to the object 
teas.origin = "India";
console.log(teas)

// Problem 4 : Change the caffine level of the tea object to "medium"
teas.caffine = "medium";
console.log(teas)

// Problem 5 : Remove the type property from the object
delete teas.type;
console.log(teas)

// Problem 6 : Check if the tea objec has a property type origin
console.log("origin" in teas)

// Problem 7 : Use a for in loop to print all the properties of the tea object
for (let key in teas){
    console.log(key + ":" + teas[key])
}

// Probleme 8 : Create  a nested object representing types of teas and thier properties 
const myTeas = {
    greenTea:{
        name:"Green Tea",
        caffine:"low"
    },
    blackTea:{
        name:"Black Tea",
        caffine:"medium"
    }
}

// Problem 8 : Create a copy of the tea object
const teaCopy = {
    ...teas
} // creates swallow copy 
const teas1 = teas // this is not copy it is reference

const teaCopy1 = JSON.parse(JSON.stringify(teas)) // creates deep copy

// Problem 9 : Add a custom method describe to the tea object that returns a description string 
teas.describe = function(){
    return `This is a ${this.name} tea with ${this.caffine} caffine content`
}

// Problem 10 : Merge two objects representing different teas into one 
const teas2 = {
    name:"Green Tea",
    caffine:"low"
}
const teas3 = {
    name:"Black Tea",
    caffine:"medium"
}
const teas4 = {
    ...teas2,
    ...teas3
} // make swallow copy 

const teas5 = JSON.parse(JSON.stringify(teas2))
const teas6 = JSON.parse(JSON.stringify(teas3))
const teas7 = {
    ...teas5,
    ...teas6
} // make deep copy

