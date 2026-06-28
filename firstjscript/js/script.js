// json

let person = {
    firstName: "John Paul",
    middleName: "Silos",
    lastName: "Dela Cruz",
    hobbies:["Coding", "Anime", "Kdrama", "Games"],
    age: "21",
    Kdrama: {
        1:{
            name:"Weak-Hero",
            type:"Thriller"
        },
        2: {
            name: "Mantis",
            type: "Thriller"
        },
        3: {
            name:"Sweet-Home",
            type: "Thrilelr"
        },
        4: {
            name: "Squid-Game",
            type: "Thriller"

            
        },
            pets: {
                1: {
                    names: "Elgato",
                    type: "Dog"
                },
                2: {
                    names: "Ayam",
                    type: "Dog"
                },
                3: {
                    names: "Ikos",
                    type: "Cat"
                }

                
            }
    }
};
console.log(person);
console.log(person["firstName"]);
console.log(person.Kdrama[2]);
console.log(person.Kdrama);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
console.log(person.hobbies[3]);
console.log(`My name is ${person.firstName} ${person.middleName} ${person.lastName}`);
console.log("");
console.log(console.log(person.Kdrama[1]["name"]));
console.log(console.log(person.Kdrama[1]["type"]));
console.log(console.log(person.Kdrama[1].type));

console.log("JSON-JSON-JSON");
console.log(person.Kdrama.pets[1]["names"]);
console.log(person.Kdrama.pets[3]);

//JSON Write

let persona = {
    firstNAME:"John Poll",
    lastNAME:"Dela Cruz",
    aGe: 22
};
console.log(`My name is ${persona.firstNAME} ${persona.middleInital} ${persona.lastNAME}`);
console.log(persona);
persona.firstNAME = "Lebron";
persona.lastNAME = "James";
persona.middleInital = "S.";

console.log(persona);

console.log(`My name is ${persona.firstNAME} ${persona.middleInital} ${persona.lastNAME}`);



console.log("");
//JSON Stringify

let persons = {
    firstName:"John",
    lastName:"Doe",
    age:40
}
console.log(persons);
let persoon = JSON.stringify(`${persons.firstName} ${persons.lastName}`);
console.log(persoon);
console.log(persons.firstName);

//JSON Parsing
let strPerson = `{"firstName":"Jane", "lastName":"Doe","age":30}`;

console.log(strPerson);
let perrson = JSON.parse(strPerson);
console.log(perrson);

console.log("");
//JSON Array

let people = [
    {
        firstname:"John Paul",
        lastname:"Cruz",
        age:"23"

    },

    {
        firstname:"Thomas Guiller",
        lastname:"Cruz",
        age:"23"
    },

    {
        firstname:"John Paul",
        lastname:"Dela Cruz",
        age:"21"

    },

    {
        firstname:"Kyle Cedric",
        lastname:"Espin",
        age:"22"

    },

    {
        firstname:"Richmond",
        lastname:"Garaza",
        age:"20"
    },

    {
        firstname:"Jesus",
        lastname:"Gamboa",
        age:"21"
    }

];

console.log(people);
console.log(people[0].firstname);
console.log(people[0].lastname);
console.log(`${people[2].firstname} ${people[2].lastname}`);

//Tutorial Challenge
let peoples = [
    {
        firstname:"John Paul",
        lastname:"Cruz",
        age:"23"

    },

    {
        firstname:"Thomas Guiller",
        lastname:"Cruz",
        age:"23"
    },

    {
        firstname:"John Paul",
        lastname:"Dela Cruz",
        age:"21"

    },

    {
        firstname:"Kyle Cedric",
        lastname:"Espin",
        age:"22"

    },

    {
        firstname:"Richmond",
        lastname:"Garaza",
        age:"20"
    },

    {
        firstname:"Jesus",
        lastname:"Gamboa",
        age:"21"
    }

];

for (let i = 2; i < peoples.length;i++) {
    
    if (i > peoples.length-2) break;
    console.log(peoples[i].lastname);
    console.log(peoples[i].firstname);

    let strPeople = JSON.stringify(peoples[i]);
    console.log(peoples[i]);

    }

    console.log("");
    let strPeople = JSON.stringify(peoples);
    console.log(peoples);

