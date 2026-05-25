
// - string concatenation, (fname, lname, )
//   template literals,

const fname = "Shaik";
const lname = "Riyaz";

// const fullName = fname + " " + lname + ".";

const description = "I am a web developer, having 2 years experience."
// console.log("I am", fullName, description);

const userDetails = `I am ${fname}${lname}. ${description}`;
console.log(userDetails)