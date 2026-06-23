// Logical Operators

//AND OPERATORS
let age =18; experience =3; 
language = ["JavaScript", "Java", "C#", "Python"];

console.log(age >=18 && experience >2);
console.log(age >=18 && experience >3);


if (age >= 18 && experience >2 && language === "JavaScript", "Java", "C#", "Python") {
    alert("You are Qualified for the Job");
    console.log("You are Qualified for the Job");
}else {
    alert("You are NOT Qualified for the Job");
    console.log("You are NOT Qualified for the Job");
}



//OR OPERATOS

let hasJob = true;
let jobExperience = 1;

console.log(`OR OPERATORS`);
console.log(hasJob || jobExperience >3 );
console.log(hasJob || jobExperience >=1 );

if(hasJob || jobExperience >4) {
    console.log(`You are QUALIFIED for the Job even you have ${jobExperience} year experience only.`);
    alert(`You are QUALIFIED for the Job even you have ${jobExperience} year experience only.`);
}else {
    console.log(`You do NOT QUALIFIED for this Job`);
}


//NOT Operators
console.log("NOT OPERATORS:");
let hasDegree = true;
let experienceJob = 2;

console.log(hasDegree);
console.log(!hasDegree);

console.log(experienceJob);
console.log(!experienceJob);

if(!hasDegree) {
    console.log(`Wow, yabang!`);
}else {
    console.log(`Batugan ka kasi`);
}


//NESTED CONDITIONAL STATEMENT
console.log(`NESTED CONDITIONAL STATEMENT:`);
let ages =18;
let experience2 = 1;


if(ages >=18){

    if(experience2 >=2) {
        console.log(`Congratulations!, You're Hired for the Job, Junior Full Stack Software Developer.`);
    }else {
        console.log(`I'm Sorry, I can't hire you because you don't have enough experience even you are in Legal age.`);
    }
}


//Tutorial Challenge

let agee =19; agee2 = 17; isRegistered = true;
let votes = ["Valid Voter", "Register Frist", "Invalid Voter", "Non Voter"];
    if(isRegistered && agee >= 18) {
        console.log(`You are a ${votes[0]}.`);

        if(!isRegistered && agee>= 18) {
            console.log(`You are a ${votes[0]}.`);
        }else {
            console.log(`${votes[1]}!`);
        }
    
    }

    if(isRegistered &&  agee2 < 18) {
        console.log(`You are a ${votes[2]}.`);

        if(!isRegistered && agee2 < 18) {
            console.log(`You are a ${votes[2]}.`);
        }else {
            console.log(`You are a ${votes[3]}.`);
        }
    }