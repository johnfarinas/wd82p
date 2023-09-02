// JavaScript Basic Data Types
// 1. Numbers
/* 
-Integers (e.g 10, 400, -5)
-Floating point numbers ( e.g 12.5, 56.245345634)
-Doubles
**/
let age = 28;
let tempInCelsius = 38.5;

let myAge = parseInt("28");
let temInFahrenheit = parseFloat("89.9");

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = parseInt("5");

console.log(6 + 9);
console.log(20 - 15);
console.log(3 * 7);
console.log(10 / 5);
console.log(5 ** 2); //exponent
console.log(8 % 3); //remainder / modulo
console.log((5 % 9) * 10);

let year = 2023;
//increment
year++;
//decrement
year--;
console.log(year);

// assignment (=)
let x = 3;
let y = 4;
x *= y;

console.log(x);

// comparison
let a = 5;
let b = 5;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// 2. Strings
let string = "This is a string";
let single = "Single quotes";
let double = "Double quotes";
let backtick = `Backtick`;

console.log(typeof single);
console.log(typeof double);
console.log(typeof backtick);

console.log("The value of single: " + single);

const name = "Carlo";
const greeting = `Hello, ${name}`;

console.log(greeting);

const one = "Hello";
const two = "how are you?";
const joined = `${one}, ${two}`;

console.log(joined);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;

const newline = `One day you finally know
what you had to do, and began`;

console.log(output);

// 3. Boolean
// true or false
