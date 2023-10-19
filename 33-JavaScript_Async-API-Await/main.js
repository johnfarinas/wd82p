// // Callback Functions / Callbacks
// // A callback function is a function that you run through another function and gets a result once it happens/takes place

// const container = document.getElementById("data-container");

// container.addEventListener("click", function () {
//   console.log("Hello!");
// });

// console.log("We are getting here");

// // XMLHtppRequest - OLD WAY of doing things
// // it is a constructor function
// const xhr = new XMLHttpRequest();

// // If your state in the send method changes, the code here will run ; this is the old callback function method
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     // JSON.parse turns a JSON value into a JS concept

//     displayData(data);
//   }
// };

// // First method - it sets the request method - this is where we specify the event that we want to happen
// // GET means you are trying to get data (there are different ways that data is interacted on the internet)
// // The URL is where we get/specify our data
// // When you add "1" in the URL, it will only return the first value
// xhr.open("GET", "https://dummyjson.com/quotes/1", true);

// // SEND will send the request based on the parameter that you passed ; this is an asynchronous task
// xhr.send();

// // displayData function - pass data from this address and display the data on the screen
// const containerTwo = document.getElementById("data-container");

// function displayData(obj) {
//   const p = document.createElement("p");
//   p.textContent = obj.quote;

//   container.appendChild(p);
// }

// Promise Object - this is built-in with JavaScript
// The parameter this needs a callback function
/* const p = new Promise(function (resolve, reject) {
  // Do an async task ; what do we want when the data comes back? was it resolved or not?

  if (// good condition ) {
    resolve("Success!")
  } else {
    reject("Failure")
  }
});
*/

// function displayData(data) {
//   const container = document.getElementById("data-container");

//   data.quotes.array.forEach((quote) => {
//     const p = document.createElement("p");
//     p.textContent = quote.quote;

//     container.appendChild(p);
//   });
// }

// // Always do a single function for a specific task
// // async keyword will let JS know that this is an async task/function
// // Create a fetchData function that accepts a URL parameter and returns the data
// async function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     // This is the callback function(async process)
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       // 4 means ready and 200 means successful(a data got returned with no error)
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const data = JSON.parse(xhr.responseText);
//           resolve(data);
//         } else {
//           reject(xhr.responseText);
//         }
//       }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
//   });
// }

// function displayError(error) {
//   const container = document.getElementById("text-container");
//   const p = document.createElement("p");
//   p.textContent = error;
//   container.appendChild(p);
// }

// // If the promise data is successful, we can use then. If not, we can use catch.
// fetchData("https://dummyjson.com/quotes/1")
//   .then((data) => {
//     displayData(data);
//   })
//   .catch((error) => {
//     displayError(error);
//   });

// UPDATED CODE
function displayData(data) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = data.quote;
  container.appendChild(p);
}

function displayError(error) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = error.message;
  container.appendChild(p);
}

// function fetchData(url) {
//   return fetch(url).then((reponse) => {
//     if (!Response.ok) {
//       throw new Error("Invalid API Endpoint");
//     }
//     return response.json();
//   });
// }

// fetchData("https://dummyjson.com/quotes/200")
//   .then((data) => {
//     displayData(data);
//   })
//   .catch((error) => {
//     displayError(error);
//   });

// ANOTHER WAY FOR FETCHDATA FUNCTION - MUCH EASIER
// ASYNC AND AWAIT SYNTAX - makes async programming much easier
// This is the most preferred way now
async function fetchDataAndDisplay(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayData(data);
}

fetchDataAndDisplay("https://dummyjson.com/quotes/2");

/* LONGER WAY FOR FETCHDATA FUNCTION
function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          const data = JSON.parse(xhr.responseText);
          reject(data);
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
}

fetchData("https://dummyjson.com/quotes/2")
  .then((data) => {
    displayData(data);
  })
  .catch((error) => {
    displayError(error);
  });
*/
