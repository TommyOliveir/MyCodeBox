const person = {
    name: 'Tommy',
    sayHi: function() {
        console.log(`hello ${this.name}`)
    }
}

person.sayHi()