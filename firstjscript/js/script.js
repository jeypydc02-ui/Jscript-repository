


//Convert String to Numbers
let num1 = "10";
let num2 = 20;
console.log(num1 + num2); //Output: 1020
alert(num1 + num2); //Output: 1020
document.getElementById("results").innerHTML = num1 + num2; //Output: 1020

let num3 = 44;
let num4 = 1;
console.log(num3 + num4); //Output: 45
alert(num3 + num4);
document.getElementById("results2").innerHTML = num3 + num4; //Output: 45

let num5 = "44";
let num6 =23;
console.log(parseInt(num5) + num6);


let num = parseInt("123");
let num7 = 12;
console.log(num + num7); //Output: 135


let num8 = "889sdfsefse";
let num9 = 11;
num8 = parseInt(num8);
console.log(num8 + num9); //Output: 900

let num10 = "15.98";
num10 = parseInt(num10);
console.log(num10); //Output: 15
num10 = parseFloat("15.98");
console.log(num10); //Output: 15.98

//Convert String to Numbers using Math.round()
let num11 = "15.98";
num11 = Math.round(num11);
console.log(num11); //Output: 16


//PEMDAS
let xx = 5;
let yy = 10;
console.log((xx+yy)/xx); //Output: 3


//Shorthand Operators
let num12 = 5
num12 += 10; //num12 = num12 + 10
console.log(num12); //Output: 15

let num13 = 5
num13 -= 10;
console.log(num13); //Output: -5

let num14 = 5
num14 *= 10;
console.log(num14); //Output: 50

//Increment and Decrement Operators

//Prefix
let x = 10;
console.log(++x); //Output: 11
console.log(x); //Output: 11

//PostFix
let y = 10;
console.log(y++); //Output: 10
console.log(y); //Output: 11


//Tutorial Challenge
// GWA
let Websys = parseFloat("4.00")
let Database = parseFloat("3.50")
let WebProgramming = parseFloat("3.75")
let MobileProgramming = parseFloat("3.25")
let Adinfosec = parseFloat("3.75")
let GWA = (Websys + Database + WebProgramming + MobileProgramming + Adinfosec);
GWA /=5

console.log("Web Systems and Technologies   : " + Websys);
console.log("Database Management Systems    : " + Database);
console.log("Web Programming                : " + WebProgramming);
console.log("Mobile Programming             : " + MobileProgramming);
console.log("Advanced Information Security  : " + Adinfosec);
console.log();
console.log("General Weight Average         : " + GWA)








