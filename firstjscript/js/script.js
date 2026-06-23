///Switch Statement

let difficulty =1;
let diff = "Difficulty";

switch(difficulty) {
    case 1:
        console.log("Easy");
        break;
    case 2:
        console.log("Normal");
        break;
    case 3: 
        console.log("Hard");
        break;
    case 4:
        console.log("Extreme");
        break;
    default:
        console.log(`Invalid ${diff}.`);
}


let letter ="a";

switch(letter) {
    case "a":
    case "A":
        console.log("Letter Alpha");
        break;
    case "b":
    case "B":
        console.log("Letter B");
        break;
    case "c":
    case "C":
        console.log("Letter C");
        break;
    default:
        console.log("Unknown Letter");
        break;    
}   

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayIndex = new Date().getDay(); 
let today;

switch(dayIndex) {
    case 0: today = days[0]; break;
    case 1: today = days[1]; break;
    case 2: today = days[2]; break;
    case 3: today = days[3]; break;
    case 4: today = days[4]; break;
    case 5: today = days[5]; break;
    case 6: today = days[6]; break;
    default: today = "Unknown";
}

console.log(`Today is ${today}`);


const myBirthMonth = "10";
const myBirthDate = 2;
const myBirthYear = 2004;

let birthmonth;
let birthdate;
let birthyear;
let yearNow = 2026;


switch (myBirthMonth) {
    case 1: birthmonth = "January"; break;
    case 2: birthmonth = "February"; break;
    case 3: birthmonth = "March"; break;
    case 4: birthmonth = "April"; break;
    case 5: birthmonth = "May"; break;
    case 6: birthmonth = "June"; break;
    case 7: birthmonth = "July"; break;
    case 8: birthmonth = "August"; break;
    case 9: birthmonth = "September"; break;
    case 10: birthmonth = "October"; break;
    case 11: birthmonth = "November"; break;
    case 12: birthmonth = "December"; break;
    default: birthmonth = "Invalid Date"; break;
}

switch (myBirthDate) {
    case 1: birthdate = 1; break;
    case 2: birthdate = 2; break;
    case 3: birthdate = 3; break;
    case 4: birthdate = 4; break;
    case 5: birthdate = 5; break;
    case 6: birthdate = 6; break;
    case 7: birthdate = 7; break;
    case 8: birthdate = 8; break;
    case 9: birthdate = 9; break;
    case 10: birthdate = 10; break;
    case 11: birthdate = 11; break;
    case 12: birthdate = 12; break;
    case 13: birthdate = 13; break;
    case 14: birthdate = 14; break;
    case 15: birthdate = 15; break;
    case 16: birthdate = 16; break;
    case 17: birthdate = 17; break;
    case 18: birthdate = 18; break;
    case 19: birthdate = 19; break;
    case 20: birthdate = 20; break;
    case 21: birthdate = 21; break;
    case 22: birthdate = 22; break;
    case 23: birthdate = 23; break;
    case 24: birthdate = 24; break;
    case 25: birthdate = 25; break;
    case 26: birthdate = 26; break;
    case 27: birthdate = 27; break;
    case 28: birthdate = 28; break;
    case 29: birthdate = 29; break;
    case 30: birthdate = 30; break;
    case 31: birthdate = 31; break;
    default: birthdate = "Invalid Date";
        break;

}


switch (myBirthYear) {
    case 2000: birthyear = 2000; break;
    case 2001: birthyear = 2001; break;
    case 2002: birthyear = 2002; break;
    case 2003: birthyear = 2003; break;
    case 2004: birthyear = 2004; break;
    case 2005: birthyear = 2005; break;
    case 2006: birthyear = 2006; break;
    case 2007: birthyear = 2007; break;
    case 2008: birthyear = 2008; break;
    case 2009: birthyear = 2009; break;
    case 2010: birthyear = 2010; break;
    case 2011: birthyear = 2011; break;
    case 2012: birthyear = 2012; break;
    case 2013: birthyear = 2013; break;
    case 2014: birthyear = 2014; break;
    case 2015: birthyear = 2015; break;
    case 2016: birthyear = 2016; break;
    case 2017: birthyear = 2017; break;
    case 2018: birthyear = 2018; break;
    case 2019: birthyear = 2019; break;
    case 2020: birthyear = 2020; break;
    case 2021: birthyear = 2021; break;
    case 2022: birthyear = 2022; break;
    case 2023: birthyear = 2023; break;
    case 2024: birthyear = 2024; break;
    case 2025: birthyear = 2025; break;
    case 2026: birthyear = 2026; break;
    default: birthyear = "Invalid Year"; break;
}

let age = yearNow - birthyear;
console.log(`I born in ${birthmonth} ${birthdate},${birthyear} and I'm ${age} years old.`);