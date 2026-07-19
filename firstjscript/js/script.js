//Document Object Model

//Using GetElementById
let result = document.getElementById("results");
console.log(result);


//Using QuerySelector
let result2 = document.querySelector(".container2 .results");
console.log(result2);

//Using GetElementByClassName
let result3 = document.getElementsByClassName("results");
console.log(result3);

//Using QuerySelctorAll
let allClass = document.querySelectorAll(".container2 .results");
console.log(allClass);

let innerHTML = document.querySelector(".container #results4").innerHTML = `This is the new innerHTML`;
console.log(innerHTML);

let innerText = document.querySelector(".container #results4");
console.log(innerText);

console.log("");
//Stored in an Array

let allResults = document.querySelectorAll(".container2 .results");



console.log(allResults[0]);
console.log(allResults[1]);
console.log(allResults[2]);

console.log("");

//Accessing Array for Specific Element
let firstResults = allResults[0].innerHTML = `This is the new innerHTML for first element`;
let secondResults = allResults[1].innerHTML = `This is the new innerHTML for second element`;
let thirdResults = allResults[2].innerHTML = `This is the new innerHTML for third element`;

console.log(allResults[0]);
console.log(firstResults);
console.log(secondResults);
console.log(thirdResults);









//MANIPULATE ATTRIBUTES

let textInput = document.querySelector("#input");
textInput.placeholder = `Enter your first name`;

let textButton = document.querySelector("#btn");
textButton.textContent = `Pindotin ako`;




//Image

let imagee = document.querySelector("#image");
imagee.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28LgmC2T4_ftwGSxmAZAshdkcJ41C8NMqqBgjkO7JU-eJnRMfbPvKx5k&s=10"

let changeLink = document.querySelector("#link");

changeLink.href = "https://www.instagram.com/jppdlcrz/"
changeLink.target = "_blank";

let changeBody = document.querySelector("body");
changeBody.style.backgroundColor = "lightgray";

let changeH1 = document.querySelector("#results");
changeH1.style.textAlign = "center";
changeH1.style.fontFamily = "Arial, Helvetica, sans-serif";
changeH1.style.color = "maroon";
changeH1.style.borderBottom = "2px solid maroon";


