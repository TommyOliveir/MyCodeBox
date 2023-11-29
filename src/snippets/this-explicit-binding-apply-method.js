const person = {
  name: "Tommy",
  sayHi: function () {
    console.log(`hello ${this.name}`);
  },
};
//function is outside object and you can add arguments as an array
function sayHi(age) {
  console.log(`hello ${this.name} ${age}`);
}

sayHi.apply(person,[32]);
