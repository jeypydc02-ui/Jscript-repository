console.log("Hello World");
alert("Hello World");

x = 10;
y = 20;
z = x + y;
console.log(z);
document.getElementById("results").innerHTML = z;


//String
let firstname = "John Paul";
document.getElementById("results2").innerHTML =firstname;
console.log(firstname);

firstname = "Joshua";
document.getElementById("results3").innerHTML = firstname;
console.log(firstname);

const firstName = "John";
console.log(firstName);




//Number
let age = 21;
//Boolean
let isStudent = true;
//Undefined
let nickname;
//Null
let lastname = null;



//Concatenation
const word = "Hello";
const word2 = "World";
const sentence = word + " " + word2;
console.log(sentence);

const birthYear = 2004;
const currentYear = 2024;
const age2 = currentYear - birthYear;

console.log("I am " + age2 + " years old.");


const pangalan = "Adie";
const pronoun = "She";
const pangalan2 = "Jeypy";
const drink = "coffee";
const sentence2 = pangalan + ", is a student, waved at "
 + pangalan2 + " and " + pronoun + " walked by " + pangalan2 + "'s house. " + pangalan2 + " smiled back and invited " + pangalan + " in for a cup of " + drink + ".";
 alert(sentence2);
 console.log(sentence2);
 document.getElementById("results4").innerHTML = sentence2;