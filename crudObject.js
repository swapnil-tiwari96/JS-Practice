//Create Object
const person = {
    name: "Swapnil Tiwari",
    jobTitle: "Full Stack Engineer",
    email: "swaptiwari@outlook.com",
    isVerified: false
}

//Read the Object
console.log(person.name, person.isVerified);

//Update the Object
person.isVerified = true;
console.log(person.isVerified);

//Delete a property
delete person.name;

//Add new 
person.firstName = "Swapnil"
person.lastName = "Tiwari"
console.log(person)