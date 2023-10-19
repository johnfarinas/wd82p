// The Class Syntax - one of the added ways for object-oriented programming

// Constructor syntax
function dog(breed, color) {
  this.breed = breed;
  this.color = color;
  this.bark = function () {
    console.log("Arf arf arf!");
  };
}

// Factory syntax
function dogFactory(breed, color) {
  const bark = () => console.log("Arf arf arf!");

  return { breed, color, bark };
}

// For the Class Syntax, we use the reserved "class" keyword
// Constructor will be the one to catch the set parameters
// If you are making a -- in the class, you do not need to use the function syntax
class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  get breed() {
    return this._breed;
  }

  set breed(value) {
    this._breed = value;
  }

  bark() {
    console.log("Arf arf arf!");
  }
}

const dog1 = new Dog("Golden Retriever", "Golden Yellow");
// console.log(dog1.breed);
dog1.breed = "Rottwelier";
console.log(dog1.breed); // The returned value got changed due to there being a setter, so the default golden retriever value got changed to rottweiler
dog1.color = "black/brown";
console.log(dog1.color);

/* Getters = a method that we use to get a specfic property in our object
console.log(dog1.breed);

EXAMPLE:
  get breed() {
    return this._breed;
  }

*/
/* Setters = a method that we use to set the value of that property

EXAMPLE:
  set breed(value) {
    this._breed = value;
  }
 */

/* MODULE PATTERN CONCEPT
  - the concept of this is that instead of reusing a function to create an object over and over again, we wrap them in in a immediately invoke function expression (IIFE)
  - this will allow us to run it once and it cannot be used again
  - it is assigned to a certain/specific variable
  - if you know you will only use the object once, this is a better approach to use. you cannot create another calculator using the same parameters

  SYNTAX:
  const VARTERM = (() =>{
  
})()
*/

// function calculator(a, b) {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;

//   return {
//     add,
//     sub,
//     mul,
//     div,
//   };
// }

// const myCalculator = calculator();

// console.log(myCalculator.add(1, 2));
// console.log(myCalculator.div(1, 5));

// IIFE EXAMPLE

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  return {
    add,
    sub,
    mul,
    div,
  };
})();

console.log(calculator.add(1, 5));
console.log(calculator.add(1, 6));
