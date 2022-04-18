//  Logical operators --->

// --- --- --->

// && operator (both sides must be true)
let password = 'JavaScript';

if (password.length >= 8 && password.indexOf(' ') === -1) { // -1 means no space exists
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}

// pick a number between 1 - 10
let num = 3;

if (num >= 1 && num <= 10) {
    console.log('Number is between 1 and 10');
} else {
    console.log('Please guess a number between 1 and 10');
}

// --- --- --->

// || operator (one side must be true)
let age = 78;

if (age < 6 || age >= 65) {
    console.log("You get in for free");
} else {
    console.log("You must pay!");
}

// pick a color from "purple, lilac or violet"
let color = "violet";

if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log("Great Choice!");
} else {
    console.log("Choose purple, lilac or violet");
}

// --- --- --->

// ! operator (turns true into false and otherwise)
let loggedInUser;

if (!loggedInUser) {
    console.log('Get out of here!');
}

// flavor example
let flavor = "grape";

if (flavor !== 'grape' && flavour !== 'cherry') {
    console.log("We don't have that flovor!");
}