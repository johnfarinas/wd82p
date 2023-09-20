//DOM MANIPULATIONS

// const container = document.querySelector("#container");
// const display = document.querySelector(".display");

// const div = document.createElement("div");
// div.classList.add("red-boxs");

// container.appendChild(div);

// container.style.backgroundColor = "red";

// Get a reference to the container
const container = document.querySelector("#container");
// const btn = document.getElementById("#btn");

// 1. Create a <p> element with red text
const pElement = document.createElement("p");
pElement.textContent = "Hey I'm red!";
pElement.style.color = "red";

// 2. Create an <h3> element with blue text
const h3Element = document.createElement("h3");
h3Element.textContent = "I'm a blue h3!";
h3Element.style.color = "blue";

// 3. Create a <div> element with black border and pink background
const divElement = document.createElement("div");
divElement.style.border = "1px solid black";
divElement.style.backgroundColor = "pink";

// 3.1. Create another <h1> element inside the div
const h1InsideDiv = document.createElement("h1");
h1InsideDiv.textContent = "I'm in a div";

// 3.2. Create a <p> element inside the div
const pInsideDiv = document.createElement("p");
pInsideDiv.textContent = "ME TOO!";

// 3.3. Append the <h1> and <p> to the div
divElement.appendChild(h1InsideDiv);
divElement.appendChild(pInsideDiv);

// Append all elements to the container
container.appendChild(pElement);
container.appendChild(h3Element);
container.appendChild(divElement);

