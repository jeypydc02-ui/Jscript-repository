//Conditional Statement
let x =10;

console.log(x =="10");
console.log(x==="10");
console.log(x===parseInt("10"));
console.log("");
console.log(x !="10");
console.log(x !=="10");
console.log(x !== parseInt("10"));

let a = "Hello World";
let b = "hello world";
console.log(a == b);


 //age conditional statement

let age = -19;           
let ageCategory = [
 "Senior Citizen", //0, 60+
 "Adult",          //1, 40-59
 "Young Adult",    //2, 20-39
 "Teenager",       //3, 13-19
 "Kid",            //4, 4-12
 "Toddler",        //5, 2-3
 "Baby"];          //6, 0-1


if(age >=60) {
    console.log(`"You are ${ageCategory[0]}."`);

}else if(age >=40) {
    console.log(`You are ${ageCategory[1]}.`);

}else if(age >=20) {
    console.log(`You are ${ageCategory[2]}.`);

}else if(age >=13) {
    console.log(`You are ${ageCategory[3]}.`);

}else if (age >= 4) {
    console.log(`You are ${ageCategory[4]}.`);

}else if (age >= 2) {
    console.log(`You are ${ageCategory[5]}.`);

}else if (age>=0) {
    console.log(`You are ${ageCategory[6]}.`);

}else if (age < 0) {
    console.log(`Age doesn't exist`);
}else {
     console.log(`Age doesn't exist`);
}



let mathGrade = 96;
let scienceGrade = 93;
let englishGrade = 90;
let filipinoGrade =87;
let computerGrade = 99;

let gradeCategory = ["With Highest Honor", "With High Honor", "With Honor", "Passed", "Failed"];

let gwa = mathGrade + scienceGrade + englishGrade + filipinoGrade + computerGrade;
gwa /= 5;

let fgwa = parseFloat(gwa.toFixed(2));

console.log("GRADES:")
console.log(`Math                         : ${mathGrade}`);
console.log(`Science                      : ${scienceGrade}`);
console.log(`English                      : ${englishGrade}`);
console.log(`Filipino                     : ${filipinoGrade}`);
console.log(`Computer                     : ${computerGrade}`);
console.log(`General Weight Average       : ${fgwa.toFixed(2)}`);

if (fgwa > 100) {
    console.log(`Invalid Grade`);

}else if (fgwa >=98) {
    console.log(`You are ${gradeCategory[0]}.`);

}else if (fgwa >= 95) {
    console.log(`You are ${gradeCategory[1]}.`);

}else if (fgwa >= 90) {
    console.log(`You are ${gradeCategory[2]}.`);

}else if (fgwa >= 75) {
    console.log(`You are ${gradeCategory[3]}.`);

}else if (fgwa < 75) {
    console.log(`You are ${gradeCategory[4]}.`);

}else if (fgwa < 0) {
    console.log(`Invalid Grade`);
} else {
     console.log(`Invalid Grade`);
}