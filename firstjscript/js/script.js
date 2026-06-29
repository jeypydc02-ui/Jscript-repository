let person = {
    firstname:"Joshua",
    lastname:"Marzan",
    age:"24"
};
for (let j in person) {
    console.log(`${j} : ${person[j]}`);
}

console.log("");
let keys = Object.keys(person);
for(let b = 0; b < keys.length;b++) {
    console.log(`${keys[b]} : ${person[keys[b]]}`);


}

//Tutorial Challenge
    let gradeSub = {
        mathGrade: 96,
        engGrade: 90,
        sciGrade: 92,
        filGrade: 87,
        comGrade: 99
    };
    let average =0;
    console.log("");

    for( let gwa in gradeSub){
        console.log(` ${gwa} : ${gradeSub[gwa]}`);
        average += gradeSub[gwa];
    }

    average /= Object.keys(gradeSub).length
    console.log("");
    console.log(`General Weight Average : ${average}`);


