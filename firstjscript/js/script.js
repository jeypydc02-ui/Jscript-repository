//Functions

//Says Hello
function sayHello() {

    for(let i =0; i <10;i++) {
        if(i > 8) break;
        console.log("hello");
        console.log("World");
        console.log("");

    }
    
}
sayHello();
console.log("");

function equal(num1, num2, num3) {
    let sum = (num1 + num2) / num3;
    console.log(sum);
}
equal(45, 5, 10);
console.log("");

console.log("Addition:");

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}   

console.log("");
console.log("Multiplication:");


function multiply (num4, num5) {
    let product = num4 * num5;
    product /= 3;
    console.log(product);
}

multiply


let name = ["John", "Jane", "John Paul", "Klarenze"];
let lastName = ["Doe", "Smith", "Dela Cruz", "Almazar"];


function printFullName(name, lastName) {
    for (let person in name) {
        console.log(`${name[person]} ${lastName[person]} `);
}
}
printFullName(name, lastName);

console.log("");
console.log("Using normal for-loop");


function printFullName2(name) {
    for (let a = 0; a < name.length; a++) {
        console.log(`${name[a]} ${lastName[a]}`);
    }
}
printFullName2(name);


//Using return statement
console.log("");
console.log("Using return statement");

function addNumber(num1, num2) {
    return num1 + num2;


}

let sum = addNumber(10,10);
sum*=7;
console.log(`(10 + 10) * 7 = ${sum}`);


//explore

function adds(num1, num2) {
    return num1 + num2;
    
    }

function multiply( num3, num4) {
    return num3 * num4;
}

console.log(` ${adds(3, 10)} + ${multiply(3, 10)} = ${adds(3, 10) + multiply(3, 10)}`);


console.log("");
function adds(num1, num2) {
    return num1 + num2;
    
    }

function multiply( num3, num4) {
    return num3 * num4;
}


//Using string names
let lastNamee = "Doe";

function appendLastName(firstName) {
    return `${firstName} ${lastNamee}`;

}

let fullName = appendLastName("John");
console.log(fullName);


// Variable Scoping
let x = 10;

function sayX(x) {
    console.log(x);

}

function addX(x) {
    console.log(x + 10);

}

sayX(x);
addX(x);

console.log("");

function sayY() {
    let y = 10;
    console.log(y);
}

let global = sayY();
function addY(num) {
    console.log(global + num);

    sayY();
    addY(10);
}


let summation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function summationArray(summation) {
    for (let i = 0; i < summation.length; i++) {
        console.log(summation[i]);
    }

    return summation[0] + summation[1] + summation[2] + summation[3] + summation[4] + summation[5] + summation[6] + summation[7] + summation[8] + summation[9];
    
}

let sums =summationArray(summation);

console.log(`The sum of the array is ${sums}`);

console.log("");

let summations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let summ = 0;

function summationArrays(summations) {
    for (let i = 0; i < summations.length; i++) {
        console.log(summations[i]);
        summ += summations[i];
    }
      
        return summ;
    
}

summationArrays(summations);

console.log(`The sum of the array is ${summ}`);