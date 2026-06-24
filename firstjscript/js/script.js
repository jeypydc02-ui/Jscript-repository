//WHILE LOOP

let i =10;
let a = 3;

while(i >= 5) {
    console.log(i);
    i--;
}

while(a >=1) {
    console.log(a);
    a--;
}

let people = ["Jepy", "Lebron", "Lewis", "Faker", "Karltzy", "Manny Pacquiao", "John Cena"];
let peeps = 2;

while(people[peeps]) {
    console.log(people[peeps]);
    peeps--;
    
}
console.log("");

let peoples = ["TLPH", "ONIC", "OMG", "RORA", "FLCN", "TWIS", "APBR", "TNC"];

let p = peoples.length-3;

while(peoples[p]) {
    console.log(peoples[p]);
    p++;
}
console.log("");

let peopless = ["TLPH", "ONIC", "OMG", "RORA", "FLCN", "TWIS", "APBR", "TNC"];

let pp = peopless.length-3;

while(peopless[pp]) {
    console.log(peopless[pp]);
    pp--;
}

console.log("");
let cof = ["Aljean", "Charles", "Gwynenth", "Jean", "John Paul", "Micaella", "Prince", "Zere May" ];

let cofs = 3;
let search = 5;
console.log(cof[0]);
console.log(cof[1]);
console.log(cof[2]);
console.log(cof[3]);
console.log(cof[4]);
console.log(cof[5]);
console.log(cof[6]);
console.log(cof[7]);

console.log(cof[cofs]);

console.log("");
while (cof[cofs]) {
   

    if(cofs ===search) {
        break;
    }
    console.log(cof[cofs]);
    cofs++;
}


//do-while loop

let num = 9;

do{
    console.log("hello");
    num++
}while(num > 20);



//Tutorial Challenge

let oneToTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;
let arr = 0;

while (oneToTwenty[arr]) {
    sum+= oneToTwenty[arr];
    arr++;
}

console.log("");
console.log("The sum of all numbers: ")
alert(sum);
console.log(sum);

alert(`The sum of all numbers in Array is ${sum}.`)
console.log(`The sum of all numbers in Array is ${sum}.`)