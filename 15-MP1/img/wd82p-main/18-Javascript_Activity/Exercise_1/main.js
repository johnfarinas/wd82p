// Declare a variable called 'balance' and assign it a starting balance of 1000.
// Create variables 'transaction1', 'transaction2', and 'transaction3' to represent three transactions.
// Update the 'balance' variable after each transaction:
// - 'transaction1': Add 500 to 'balance'.
// - 'transaction2': Deduct 200 from 'balance'.
// - 'transaction3': Deduct 1000 from 'balance'.

// Your code here

// Log the final 'balance' after all three transactions.

let balance;
balance = parseInt("1000");

let transaction1 = 500;
let transaction2 = 200;
let transaction3 = 1000;

balance = balance + transaction1 - transaction2 - transaction3;

console.log("balance " + balance);
