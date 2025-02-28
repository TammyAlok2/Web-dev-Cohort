Object.prototype.chai = function(){
    console.log('Chai')
}
const tea = {
    name: 'Green Tea',
    type: 'Green',
}
tea.chai();

const teas =['Green Tea', 'Black Tea', 'Lemon Tea']
teas.chai() // it works because array is also an object
