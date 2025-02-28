let pizzaSize;
let numberOfGuest = 4; 
if(numberOfGuest<2){
pizzaSize ="small";
}
else if(numberOfGuest <=4 && numberOfGuest >=2){
pizzaSize="medium";
}
else {
    pizzaSize="large";
}
console.log(pizzaSize);