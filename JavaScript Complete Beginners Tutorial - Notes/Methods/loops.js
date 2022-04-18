// FOR LOOP

// first segment is: define variable and give it an initial value
// second segment is: run the loop as long as the condition is true
// third segment is: what happens with every loop run (usually we add 1 every time loop runs)

for(let i = 1; i <= 10; i++) {
    console.log("Hello!");
}
// run loop 10 times

// multiply number with the same number
for(let num = 1; num <= 20; num++) {
    console.log(`${num}x${num} = ${num * num}`);
}
// 1x1 = 1
// 2x2 = 4
// 3x3 = 9
// 4x4 = 16
// 5x5 = 25
// 6x6 = 36
// 7x7 = 49
// 8x8 = 64
// 9x9 = 81
// 10x10 = 100
// 11x11 = 121
// 12x12 = 144
// 13x13 = 169
// 14x14 = 196
// 15x15 = 225
// 16x16 = 256
// 17x17 = 289
// 18x18 = 324
// 19x19 = 361
// 20x20 = 400

// countdown
for(let i = 200; i >= 0; i -= 25) {
    console.log(i);
}
// 200 175 150 ... 0

// --- --- --->

// FOR LOOP for array
const examScores = [ 98, 77, 84, 91, 57, 66 ];

for(let i = 0; i < examScores.length; i++) {
    console.log(examScores[i]);
}
// 98
// 77
// 84
// 91
// 57
// 66

// --- --- --->

const students = [
    {
        firstName: 'Agatha',
        grade: 90
    },
    {
        firstName: 'Sophie',
        grade: 70
    },
    {
        firstName: 'Tedros',
        grade: 40
    }
];

for(let i = 0; i < students.length; i++) {
    let student = students[i]; // access to individual student object
    console.log(`${student.firstName} scored ${student.grade}`);
}
// return = 
// Agatha scored 90
// Sophie scored 70
// Tedros scored 40



// sum the score
let total = 0; // we use global variable because otherwise, if used inside a loop it will always update itself

for(let i = 0; i < students.length; i++) {
    let student = students[i]; // access to individual student object
    total += student.grade
}
console.log(total); // full sum of scores
console.log(total / students.length) // full sum of scores divided by students (avg)

// --- --- --->

// reverse order
const word = 'stressed';

for(let i = word.length-1; i >= 0; i--) {
    console.log(word[i]);
}
// d
// e
// s
// s
// e
// r
// t
// s

// --- --- --->

// reverse a word and assign to a variable
const word = 'stressed';
let reverseWord = '';

for(let i = word.length-1; i >= 0; i--) {
    reverseWord += word[i];
}
console.log(reverseWord);
// return = desserts

// --- --- --->

// NESTED LOOPS

// OUTER LOOP runs once per round while INNER LOOP runs it's full rounds before it gets back to OUTER LOOP
for(let i = 1; i <= 10; i++) {
    console.log('OUTER LOOP:', i); // from 1 to 10
    for(let j = 10; j >= 0; j-=2) {
        console.log('INNER LOOP:', j); // from 10 to 1
    }
}

// --- --- --->

// 2048 game example
const gameBoard = [
    [ 4, 32, 8, 4 ],
    [ 64, 8, 32, 2 ],
    [ 8, 32, 16, 4 ],
    [ 2, 8, 4, 2 ]
];

for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i]; // i is referring to a row [...]
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]); // j is referring to numbers in a row = 4, 32, 8, 4 etc.
    }
}



// now to sum up the numbers
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i]; // i is referring to a row [...]
    for(let j = 0; j < row.length; j++) {
        totalScore += row[j]; // j is referring to numbers in a row = 4, 32, 8, 4 etc.
    }
}

totalScore;
// return 230

// --- --- --->

// WHILE LOOP

// convert for loop to while loop
for (let i = 0; i <= 5; i++) {
    console.log(i); // from 1 to 5
}

let j = 0;
while(j <= 5) {
    console.log(j); // from 1 to 5
    j++;
}

// --- --- --->

// getting a target number
const target = Math.floor(Math.random() * 10); // generate random whole number (static number)
let guess = Math.floor(Math.random() * 10); // generate random whole number (dynamic number)

while(guess !== target) { // run as long as 'guess' is not the same value as 'target' (when value matches, loop stops)
    console.log(`Target: ${target} Guess: ${guess}`); // to see 'target' and 'guess' at every turn
    guess = Math.floor(Math.random() * 10); // loops random number till it matches the target number
}

console.log(`Target: ${target} Guess: ${guess}`); // prints out the match (otherwise we won't see the final values as the loop stops)
console.log('You Win!');

// --- --- --->

// BREAK
const target = Math.floor(Math.random() * 10); // generate random whole number (static number)
let guess = Math.floor(Math.random() * 10); // generate random whole number (dynamic number)

while (true) { // behind the scenes will run infitely
    if(target === guess) break; // break out of CURRENT loop when 'target' value and 'guess' value are equal
    console.log(`Target: ${target} Guess: ${guess}`); // to see 'target' and 'guess' at every turn
    guess = Math.floor(Math.random() * 10); // loops random number till it matches the target number
}

console.log(`Target: ${target} Guess: ${guess}`); // prints out the match (otherwise we won't see the final values as the loop stops)
console.log('You Win!');

// --- --- --->

// FOR OF LOOP
let webDev = [ "HTML", "CSS", "JavaScript" ];

// for loop way
for (let i = 0; i < webDev.length; i++) {
    console.log(webDev[i]); // has access to array values
}
// return "HTML", "CSS", "JavaScript"



// for of way
for (let lang of webDev) { // i declare a variable 'lang' and iterate through 'webDev' variable
    console.log(lang); // has access to array values
}
// return "HTML", "CSS", "JavaScript"

// --- --- --->

// Comparison for & for of
const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8 ]
];

// for loop
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i]; // has access to array values [...]
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]); // has access to individual array value (numbers)
        sum += row[j]; // gets a total of each individual array value (numbers)
    }
    console.log(`${row} summed to ${sum}`);
}
// return 
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15



// for of loop
for (let row of magicSquare) { // i declare a variable 'row' and iterate through 'magicSquare' variable
    let sum = 0;
    for (let num of row) { // i declare a variable 'num' and iterate through 'row' variable (which is holding all individual rows [...])
        sum += num; // gets a total of each individual array value (numbers)
    }
    console.log(`${row} summed to ${sum}`);
}
// return 
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15

// --- --- --->

const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
}
// return: 
// mailbox
// milkshake
// bathtub
// blackberry

// --- --- --->

// FOR OF WITH OBJECTS
const ratings = {
    Movie1: 9,
    Movie2: 7,
    Movie3: 4.3,
    Movie4: 9.5,
    Movie5: 5.5,
    Movie6: 6,
    Movie7: 3
}

for (let x of ratings) {
    console.log(x)
}
// ERROR! not gonna work with objects



// get Object keys
for (let movie of Object.keys(ratings)) { // i declare a variable 'movie' and iterate through variable 'ratings' object, that holds keys
    console.log(movie);
}
// return:
// Movie1
// Movie2
// Movie3
// Movie4
// Movie5
// Movie6
// Movie7



// get Object values
for (let movie of Object.keys(ratings)) { // i declare a variable 'movie' and iterate through variable 'ratings' object, that holds keys
    console.log(movie, ratings[movie]); // output keys and individual values
}
// return:
// Movie1 9
// Movie2 7
// Movie3 4.3
// Movie4 9.5
// Movie5 5.5
// Movie6 6
// Movie7 3



// rating average
const sumRatings = Object.values(ratings); // i declare a variable 'sumRatings' and iterate through variable 'ratings' object, that holds values
let total = 0;
for (let r of sumRatings) { // i declare a variable 'r' and iterate through variable 'sumRatings', which has access to individual values of object 'ratings'
    total += r; // gets a total of each individual value (numbers)
}
let avg = total / sumRatings.length; // all numbers summed up are now divided by the amount of values in that object
console.log(avg);
// return = 6.328571428571428


