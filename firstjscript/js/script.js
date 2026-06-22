// WORD LENGTH
let word = "Hello Philippines";
let len = word.length;
alert(len);
console.log(len);


let word1 = "Jeypy";
alert(word1.length);
console.log(word1.length);

//String Indices
let name = "Joshua";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);

name[name.length-6];
name[name.length-5];
name[name.length-4];
name[name.length-3];
name[name.length-2];
name[name.length-1];

console.log(
 `"${name[name.length - 6]}${name[name.length - 5]}${name[name.length - 4]}${name[name.length - 3]}${name[name.length - 2]}${name[name.length - 1]}"`
);


//Different Methods

let names = " John Paul S. Dela Cruz ";
console.log(names.length);
console.log(names.toUpperCase());
console.log(names.toLowerCase());
console.log(names.trim());
console.log(names.trimEnd());
console.log(names.trimStart());

console.log(names.trim().length);
console.log(names.trimEnd().length);
console.log(names.trimStart().length);

console.log(names.replace("Dela Cruz", "Salonga"));
console.log(names.replaceAll(names, "Lewis Hamilton"));
console.log(names);

let newName = "Ian Kenneth Siangio";

// slice from start
console.log(newName.slice(0, 3));         // "Ian"
console.log(newName.slice(0, 3).length);  // 3

// slice full name using length
console.log(newName.slice(0, newName.length));         // "Ian Kenneth Siangio"
console.log(newName.slice(0, newName.length).length);  // 19

console.log(newName.slice(newName.length - 19, newName.length));      
console.log(newName.slice(newName.length - 19, newName.length).length);                          

//String Templace Literals
let words = `String "Literals"`;
console.log(words);

let kangaranan = "Jampol";
console.log(`Hi, my name is ${kangaranan}. I want to become a Software Engineer someday. I'm gonna be a Lebron James in my Profession`);

let numss1 =5, numss2 = 10
let sum = numss1 + numss2;
console.log(`${numss1} + ${numss2} = ${sum}`);


//Tutorial Challenge
let who = "Jeyp";
let who2 = "Zere May";
let pronoun= "She";
let drinks = "coffee";


console.log(`${who2}, the frienly neighbor, waved at ${who} as ${pronoun} walked by ${who}'s house. ${who} smiled back and invited ${who2} in for a cup of ${drinks}. `)








