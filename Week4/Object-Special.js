const person = {
    firstName: 'Alok tamrakar',
    lastName: 'tamrakar',
    hobbies: ['Coding', 'Gym', 'playing'],
    isMarried: false,
    hasGf: false,
    hadGg: false,
    hadCrush:Infinity,
    getFullName: function () {
        return this.firstName + ''+ this.lastName;
    },
    address:{
        city: 'Kathmandu',
        country: 'Nepal',
        state:'Bagmati',
        getFullAddress: function(){
            return this.city + ' ' + this.state + ' ' + this.country;
        }
    }
}

const remote = {
    brand: 'Samsung',
    model: 'Smart TV',
    size: '50 inch',
    price: 50000,
    getFullDetails: function () {
        return this.brand + ' ' + this.model + ' ' + this.size + ' ' + this.price;
    }
}

console.log(person.getFullName())
console.log(person.address.getFullAddress())
console.log(person.hobbies)

