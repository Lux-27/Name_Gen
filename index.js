var superheroes = require("superheroes");
var supervillains = require("supervillains");

document.getElementById("Hero").addEventListener("click", function () {
  userInput = "Hero";
  // console.log("hiii");
  var hero = superheroes.random();
  alert("Your hero name is : " + hero);
});

document.getElementById("Villain").addEventListener("click", function () {
  userInput = "Villain";
  // console.log("hiii");
  var villains = supervillains.random();
  alert("Your villain name is : " + villains);
});

// function generateName(userInput) {
//   if (userInput === "Hero") {
//     var hero = superheroes.random();
//     alert("Your hero name is : " + hero);
//   } else if (userInput === "Villain") {
//     var villains = supervillains.random();
//     alert("Your villain name is : " + villains);
//   }
// }

// Name Generation Logic

// const readline = require("readline");

// const read1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let userInput = "";

// read1.question("Do you wanna be a hero or a villain?! ", function (answer) {
//   userInput = answer;

//   if (userInput === "Hero" || userInput === "hero") {
//     console.log("Oh, so you want to be " + userInput);
//     var superheroes = require("superheroes");
//     var hero = superheroes.random();
//     console.log("Your hero name is : " + hero);
//   } else if (userInput === "Villain" || userInput === "villain") {
//     console.log("Oh, so you want to be " + userInput);
//     var supervillains = require("supervillains");
//     var villains = supervillains.random();
//     console.log("Your villain name is : " + villains);
//   } else {
//     console.log("Can't type properly and want to be famous, u wek.");
//   }
//   read1.close();
// });
