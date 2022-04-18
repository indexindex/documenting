// Function Scope

// --- --- --->

function agatha() {
    let magic = 'smile'; // scoped only to this function
    const power = 'heart'; // scoped only to this function
    var color = 'black'; // scoped only to this function

    console.log(magic); // is defined
}

function sophie() {
    let magic = 'eyes'; // scoped only to this function
    const power = 'lies'; // scoped only to this function
    var color = 'pink'; // scoped only to this function

    console.log(magic); // is defined
}

agatha();
sophie();

console.log(magic); // not defined
console.log(power); // not defined
console.log(color); // not defined

// --- --- --->

/*********************************************************/
/**/                                                   /**/
/**/   let agatha = 'princess'; // outside scope       /**/
/**/                                                   /**/
/**/   /*******************************************/   /**/
/**/   /**/                                     /**/   /**/
/**/   /**/   function isShePrincess() {        /**/   /**/
/**/   /**/      // inside scope                /**/   /**/
/**/   /**/      let agatha = 'Yes, she is!';   /**/   /**/
/**/   /**/   }                                 /**/   /**/
/**/   /**/                                     /**/   /**/
/**/   /*******************************************/   /**/
/**/                                                   /**/
/*********************************************************/

// --- --- --->

// Block Scope {...} (code between {} is considered a block)

// let
if(true) {
    let animal = 'fox';
}
console.log(animal); // not defined

// const
if(true) {
    const animal = 'fox';
}
console.log(animal); // not defined

// var
if(true) {
    var animal = 'fox';
}
console.log(animal); // defined (var is not restricted) !problematic

// --- --- --->

// scope with let example
let books = [ 'Book 1', 'Book 2', 'Book 3' ];
let i = 10; // outside scope
for (let i = 0; i < books.length; i++) { // inside scope
    console.log(i, books[i]) // outputs index number and books
}
console.log(i) // i is 10

// scope with var example
let books = [ 'Book 1', 'Book 2', 'Book 3' ];
var i = 10; // no scope
for (var i = 0; i < books.length; i++) { // no scope
    console.log(i, books[i]) // outputs index number and books
}
console.log(i) // i is 3 (was 0 and after loop increment (i++) ended up being 3)

// --- --- --->

function doubleArray(array) {
    const result = []; // function scope
    for(let num of array) { // block scope
        let double = num * 2;
        result.push(double);
    }
    return result;
}

// --- --- --->

function outer() {
    let movie = "The Witcher"

    function inner() {
        console.log(movie.toUpperCase());
    }
    inner(); // will console log "The Witcher" (only works within function outer()) 
}

// --- --- --->

// Lexical Scope

// nested function scope example
function firstLayer() {
    let nxbPull = '3 star card'; // third option (if missing returns error)

    function secondLayer() {
        let nxbPull = '4 star card'; // second option (if missing then moves up one layer)
    
        function thirdLayer() {
            let nxbPull = '5 star card'; // first option (if missing then moves up one layer)
            console.log(nxbPull);
        }
    thirdLayer();
    }
secondLayer();
}

// --- --- --->

// Function Expressions (Functions are in fact Objects)

// usual function expression
function agatha(magic, power) {
    return magic + power;
}
agatha(smile, heart);

// variable based function expression (anonymous function)
const agatha = function (magic, power) {
    return magic + power;
}
agatha(smile, heart);

// variable based function expression (named function)
const agatha = function combine(magic, power) {
    return magic + power;
}
agatha(smile, heart);

// --- --- --->

// Function accessibility

function add(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x * y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

const operations = [ add, subtract, multiply, divide ]; // array with all 4 functions

operations[1] // gives me function "subtract" (will not execute the function)

operations[1](20, 10) // will execute function "subtract" and return me value 10

// looping over those 4 functions with for of loop
for (let func of operations) {
    let result = func(20, 10); // will execute all functions with given argument
    console.log(result);
}

// we can assign functions to objects
const funcAsObject = {
    setFunc: multiply
}

funcAsObject.setFunc(10, 10);
// will return 100

// --- --- --->

// Functions through Arguments

function callAgatha(calling) {
    calling();
    calling();
    calling();
}

function agatha() {
    console.log("Hi, my name is Agatha and I'm a student");
}

callAgatha(agatha); // will run function "agatha" 3 times



// advanced way of declaring action and number
function repeatAmount(action, num) {
    for (let i = 0; i < num; i++) { // loop runs depending on num amount
        action(); // action is executed depending on loop amount
    }
}

repeatAmount(agatha, 10); // repeats function "agatha" 10 times



// pick a random function
function pickFunc(f1, f2) { // picks one function depending on loop outcome
    let random = Math.random(); // generates random number with decimals
    if(random < 0.5) {
        f1(); // calls function one if number is below 0.5
    } else {
        f2(); // calls function two if number is above 0.5
    }
}

pickFunc(agatha, sophie); // i dont have function "sophie" declared but this is the syntax to run both functions

// --- --- --->

function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3); // num is set to 3
triple(6); // calls the triple variable which contains function, values that are passed are = x is 6 and num is 3

const double = multiplyBy(2); // num is set to 2
double(5); // calls the double variable which contains function, values that are passed are = x is 5 and num is 2

// --- --- --->

// FACTORY
function fitBetween(x, y) {
    return function(num) {
        return num >= x && num <= y; // if this expression is true, then returns true, otherwise false
    }
}

// PATTERN FOR FACTORY PRESET
const isChild = fitBetween(0, 18); // "fitBetween" function now has x = 0 and y = 18
isChild(17); // we pass in a num argument and it returns true

// i can add different checking variables to the function
const isInNineties = fitBetween(1990, 1999); // "fitBetween" function now has x = 1990 and y = 1999
isInNineties(1997); // we pass in a num argument and it returns true

const isNiceWeather = fitBetween(15, 25); // "fitBetween" function now has x = 15 and y = 25
isNiceWeather(20) // we pass in a num argument and it returns true

// --- --- --->

// PRACTICE

// FACTORY (check gem amount given against gem amount needed to perform a multi summon)
function canIMulti(x) {
    return function(num) {
        return num >= x;
    }
}

// PATTERN FOR FACTORY PRESET
const gems = canIMulti(500); // check against x value
gems(50); // pass in amount (num value)

// --------------------------------------------------

// FACTORY (check gem amount given against gem amount needed to perform a multi summon and return a number indicating how many multi summons i can do)
function canIMulti(x) {
    return function(num) {
        return Math.floor(num / x);
    }
}

// PATTERN FOR FACTORY PRESET
const gems = canIMulti(500); // check against x value
gems(50); // pass in amount (num value)

// --------------------------------------------------

// FACTORY (check gem amount given against gem amount needed to perform a multi summon and return a string that says how many multi summons i can do)
function canIMulti(x) {
    return function(num) {
        return `${Math.floor(num / x)} summons`;
    }
}

// PATTERN FOR FACTORY PRESET
const gems = canIMulti(500); // check against x value
gems(50); // pass in amount (num value)

// --- --- --->

// Callbacks

// reusable function example
function agatha() {
    alert("Hi, you called me?");
}

setTimeout(agatha, 5000); // function "agatha" runs after 5s



// one-time function example
setTimeout(function() {
    alert("Welcome!");
}, 5000); // function runs after 5s

// --- --- --->

// DOM example with button click (named function)
function agatha() {
    alert("Hi, you called me?");
}

const btn = document.querySelector('button');
btn.addEventListener('click', agatha); // when button is clicked run function "agatha"



// DOM example with button click (anonymous function)
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert("You clicked me!");
}); // when button is clicked run function

// --- --- --->

// Hoisting (reading var before it is assigned with a value)

// VAR (Hoisted)
console.log(animal); // is undefined (but not error)
var animal = 'Fox'; // assigns a value
console.log(animal); // is Fox

// LET & CONST (not Hoisted)
console.log(animal); // error
let animal = 'Wolf'; // assigns a value
console.log(animal); // is Wolf

// FUNCTIONS (Hoisted)
// works this way
function knock() {
    console.log("Who's there!");
}
knock();

// also works this way
knock();

function knock() {
    console.log("Who's there!");
}



sophie(); // gives out an error (it is still Hoisted but we can't execute undefined variable)
var sophie = function() {
    console.log("Am I not beautiful?");
}

sophie(); // gives out an error (let & const are not Hoisted)
let sophie = function() {
    console.log("Am I not beautiful?");
}

// --- --- --->