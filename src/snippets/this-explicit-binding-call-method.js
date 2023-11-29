const person = {
  name: "Tommy",
  sayHi: function () {
    console.log(`hello ${this.name}`);
  },
};
//function is outside object
function sayHi() {
  console.log(`hello ${this.name}`);
}

sayHi.call(person);
