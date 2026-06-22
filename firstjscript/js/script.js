//ARRAYSS

//Arrays of Strings
let F1Teams = ["Mclaren ", "Ferarri ", "Redbull Racing ", "Aston Martin "];
alert(`The lenght Arrays of F1Teams's variable is ${F1Teams.length}.`);

console.log(F1Teams);
console.log(F1Teams.length);

alert(`The Arrays of index 1 is ${F1Teams[1]}.`);
console.log(`The Arrays of index 1 is ${F1Teams[1]}.`);

F1Teams[F1Teams.length-2] = "Alpine Motosport ";
console.log(F1Teams[F1Teams.length-2]);

console.log(F1Teams);

F1Teams[0] = "Audi Motosport ";
console.log(F1Teams);

//Add using push 
F1Teams.push('Kick Sauber ');
F1Teams.push("and Cadillac");

//Add using unshift
F1Teams.unshift('Racing Bulls ');
F1Teams.unshift('HAAS ');

console.log(`Here are the teams that qualified as teams in Formula 1 2026 "${F1Teams}."`);

console.log(F1Teams.length);

F1Teams.length = 5;
console.log(F1Teams);


let named = ["Thomas", "John PaulC", "Kyle Cedric", "John PaulDC", "Jesus", "Richmond"];

console.log(named.length);
console.log(named);

named.length = 5;
console.log(named);
named.pop();
console.log(named);
named.shift();
console.log(named);

let namess = ["Ian", "Ceejhay", "Eunich", "Joshua", "Mika", "Jeyp"];
let sliced = namess.slice(0, 3);
console.log(sliced);
let sliced2 = namess.slice(0, 1);
console.log(sliced2);


//Arrays of Numbers
let ages = [90, 32, 23, 33, 52];
console.log(ages);
ages[1] = 44;
console.log(ages);


//Tutorial Challenge

let firstName = ["John Paul", "Thomas Guiller", "Richmond", "John Paul", "Jesus", "Kyle Cedric"];
let lastName = ["Dela Cruz", "Cruz", "Garaza", "Cruz", "Gamboa", "Espin"];
let age = [21, 23, 20, 23, 22, 22];

let index = 1;
console.log(`Index       :${index}`);
console.log(`First Name  :${firstName[index]}`);
console.log(`Last Name   :${lastName[index]}`);
console.log(`Age         :${age[index]}`);
console.log("");

 index = 0;
console.log(`Index       :${index}`);
console.log(`First Name  :${firstName[index]}`);
console.log(`Last Name   :${lastName[index]}`);
console.log(`Age         :${age[index]}`);
console.log("");
 index = 3;
console.log(`Index       :${index}`);
console.log(`First Name  :${firstName[index]}`);
console.log(`Last Name   :${lastName[index]}`);
console.log(`Age         :${age[index]}`);