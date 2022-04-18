//  VARIABLES --->

// --- --- --->

// declaration
let age = 72;

// --- --- --->

// calculating with variable (does not update the value inside variable)
age + 1;
// 73

age;
//return 72

// --- --- --->

// updating variable
age = age + 1;

age;
//return 73

// --- --- --->

// declare
let score = 0;
// update
score = score + 10;
// update with a shorthand
score += 1;

// --- --- --->

// use variable to change variable (score is 33)
let bonusMult = 3;
score *= bonusMult;
score;
// return 33

// counter increment
let counter = 0;
counter++;

// --- --- --->

// Quiz

// 1. What is the value of eggCount ?
let eggCount = 42;
eggCount + 2;

// answer = 42

// 2. What is the value of rating after this code runs ?
const rating = 7.5;
rating = 8;

// answer = Error, cannot change the const (it stays 7.5)

// 3. What's the value of wind_speed ?
let wind_speed = 76;
wind_speed += 5; // 81
wind_speed--;

// answer = 80

// What's the minor issue with this code?
// answer = variable naming, should use camelCase