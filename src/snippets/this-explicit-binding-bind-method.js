
const person = {
  name: "John",
};

function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}
// Create a bound function does not call the function immediately
const greetJohn = greet.bind(person);

// Invoke the bound function
greetJohn("Alice"); // Outputs: Hello, Alice! My name is John.
