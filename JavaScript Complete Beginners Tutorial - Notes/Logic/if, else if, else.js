//  IF --->

// --- --- --->

// if true
if (1 === 1) {
    console.log("It's True!");
}
// return It's True!

// if false
if (1 !== 1) {
    console.log("It's False!");
}
// return (console will be empty)

// --- --- --->

let rating = 3;

if (rating === 3) {
    console.log('You are a Superstar!');
}

// --- --- --->

let num = 37;

if (num % 2 !== 0) {
    console.log("ODD NUMBER!");
}

// --- --- --->

//  ELSE IF --->

// --- --- --->

// else if
let rating = 3;

if (rating === 3) {
    console.log('You are a Superstar!');
} else if (rating === 2) {
    console.log('Meets Expectations!');
} else if (rating === 1) {
    console.log('Needs Improvement!');
}

// --- --- --->

//  ELSE --->

// --- --- --->

// else
let rating = 3;

if (rating === 3) {
    console.log('You are a Superstar!');
} else if (rating === 2) {
    console.log('Meets Expectations!');
} else if (rating === 1) {
    console.log('Needs Improvement!');
} else {
    console.log('Invalid Rating!');
}

// --- --- --->

// game score example
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good Game. Unfortunately, your score of ${userScore} 
    did not beat the high score of ${highScore}`);
}

// --- --- --->

//  NESTING --->

// --- --- --->

// nesting
let password = 'hello kitty';

if (password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log('Password is long enough but cannot contain spaces');
    }
} else {
    console.log("Password must be longer!");
}