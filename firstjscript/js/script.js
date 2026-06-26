//FOR-LOOP
for (let a = 0; a <= 10;a++){
   
    if (a > 7) break;
 console.log(a);
}

console.log("");



//FOR-LOOP ITERRATING ARRAYS

let people = ["Aljean", "Charles", "Gwyneth", "Jean", "Jenny", "John Paul", "Micaella", "Prince", "Zere May"];

console.log(people[people.length-2]);
console.log(people[7]);

for(let b = 0; b <people.length;b++){

    if(b > people.length-2) break;
    console.log(people[b]);
    

}
console.log("");

for( let c = people.length-1; c >=0;c--) {
    console.log(people[c]);
}

console.log("");
//FOR/IN LOOP
console.log("FOR/IN LOOP");

for( let d in people) {
    console.log(d);
    console.log(people[d])
    
}

console.log("");

for(let e in people) {
    console.log(`${parseInt(e)+1}. ${people[e]}`);
}
console.log("");

//FOR/OF LOOP
console.log("FOR/OF LOOP");

for(let person of people) {
    console.log(person);
}
console.log("");
let f =1;
for (let personn of people) {
    console.log(`${f}. ${personn}`);
    f++;
}



//Tutorial Challenge

let names = ["Aljean", "Charles", "Gwyneth", "Jean", "Jenny", "John Paul", "Micaella", "Prince", "Zere May"];
console.log("");
console.log("Tutorial Challenge");
let search = "Gwyneth";
let found = false;

for (let i = 0; i < names.length; i++) {
    if (names[i] === search) {
        found = true;
        console.log(`Found ${names[i]} at index ${i}.`);
        break; 
    }
}

if (!found) {
    console.log(`${search} Not Found. He's not belong to the group`);
}

console.log("");
console.log("For/OF Loop");
//FOR/OF LOOP
for (let persons of names) {
    if(persons.toLowerCase() === search.toLowerCase()) {
        isFound = true;
         console.log(`Found ${persons}.`);
         break;
    }
}
if (!found) {
    console.log(`${search} Not Found. He's not belong to the group`);
}

console.log("");
console.log("For/In Loop");
//FOR/IN LOOP
for(let persoon in names ) {
    if(names[persoon].toLowerCase() === search.toLowerCase()) {
        isFound = true;
          console.log(`Found ${names[persoon]}.`);
         break;
    }
}
if (!found) {
    console.log(`${search} Not Found. He's not belong to the group`);
}