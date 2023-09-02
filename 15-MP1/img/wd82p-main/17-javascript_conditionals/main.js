let hour = 11;
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("good evening!");
}
//
let grade = parseInt(prompt("What is your grade?"));

if (grade < 75) {
  console.log("Failed");
} else if (grade <= 80) {
  console.log("Pass!");
} else if (grade <= 85) {
  console.log("Good!");
} else if (grade <= 90) {
  console.log("Verry Good");
} else {
  console.log("Excellent");
}
