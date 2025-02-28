// problem : Create an array containing different types of teas
const teas = ["green tea","black tea","herbal tea","oolang tea"];


/// Problem 1 : Add an chamoile tea to the existing list of teas
teas.push("chomile tea")
//console.log(teas)

// Problem 2 : Remove "ollang tea from the list of teas "
const index= teas.indexOf("oolang tea")
//console.log(index)
if(index > -1){
teas.splice(index,1);
}
//console.log(teas)

// Problem 3 : Filter the list to oly include tea that are caffeinated. 
const caffeinatedTeas = teas.filter(teas=>teas!== "herbal tea")
// console.log(caffeinatedTeas)

// Problem 4 : Sort the list of teas in alphbetical order . 
teas.sort();
//console.log(teas)



// Problem 5 : Use a for loop to print the each type of teea in the array
// for(let i =0;i<teas.length;i++){
//     console.log(teas[i])
// }
// teas.forEach(element => {
//     console.log(element)
// });


// Problem 6 : Use a for loop to count how many teas are caffeinated (excluding "herbal taea")
let count =0;
for(let i =0;i<teas.length;i++){
    if(teas[i] !== "herbal tea"){
        count++;
    }
}
// console.log(count)


// Problem 7 : Use a for loop to create a new array with all tea names in upper case 
const upperCaseTeas =[]
for(let i =0;i<teas.length;i++){
    upperCaseTeas.push(teas[i].toUpperCase())
}


// Problem 8 : Use a for loop to find the tea name with most charcters .
let longestTea ="";
for(let i =0;i<teas.length;i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea)

// Problem 9  : Use a for loop to reverse teh order of teas in teh array 
const reverseTeas = [];
for(let i =teas.length-1;i>=0;i--){
    reverseTeas.push(teas[i])
}
console.log(reverseTeas)