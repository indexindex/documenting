// Functions (are in fact Objects)

function agatha() { // declare the function
    console.log('Hi, you called for me?');
    console.log('What can i do for you?');
    console.log('Want me to assist you in battle between good and evil?');
}

agatha(); // call the function

// --- --- --->

// dice 1 - 6
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1; // random number from 1 - 5 and + 1 to make it up to 6 (1 - 6)
    console.log(`Rolled: ${roll}`);
}

rollDice(); // call the function

function throwDice() { // by calling throwDice() i get rollDice() 6 times
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
}

// --- --- --->

// Arguments

// without argument
function greet() {
    console.log('Hi');
}
 
// with argument (placeholder) v1
function greet(nickname) {
    console.log(nickname);
    console.log('Hi');
}

// if i now run:
greet('Aggy');
// i get:
// Aggy
// Hi



// with argument (placeholder) v2
function greet(nickname) {
    console.log(`Hi, ${nickname}`);
}

// if i now run:
greet('Aggy');
// i get:
// Hi, Aggy

// --- --- --->

// DICE with argument
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1; // random number from 1 - 5 and + 1 to make it up to 6 (1 - 6)
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) { // using argument
    for(let i = 0; i < numRolls; i++) {
        rollDice();
    }
}

throwDice(3) // i can now give any number and loop will return me the corresponding outcome
// return:
// Rolled: 3
// Rolled: 5
// Rolled: 2

// --- --- --->

// multiple arguments
function square(num) { // num is a parameter placeholder (defined value)
    console.log(num * num);
}

square(4) // 4 is an argument (called value)
// prints 16



// arguments without order
function sum(x, y) {
    console.log(x + y);
}

sum(4,5)
// prints 9 (order doesn't matter, both ways will be 9)



// arguments with order
function divide(x, y) {
    console.log(x / y);
}

divide(1,4)
// prints 0.25 (order does matter)

// --- --- --->

// return statement
function square(x) {
    return x * x; // return, when executed stops the whole process of the function
    console.log('ALL DONE!'); // never runs
}

// runs either true or false depending on the input
function isPurple(color) {
    if(color.toLowerCase() === 'purple') {
        return true;
    }
    else {
        return false;
    }
} // still not an ideal way of writing this function

// improved way (shorter)
function isPurple(color) {
    if(color.toLowerCase() === 'purple') {
        return true;
    }
    return false; // when first condition is not met then all that is left is to return false
}

// improved way (shortest way) (works only for simple yes/no situations)
function isPurple(color) {
    return color.toLowerCase() === 'purple';
}

// --- --- --->

function containsPurple(arr) {
    for(let color of arr) { // i declare a variable 'color' and iterate through 'arr' variable
        if(color === 'purple' || color === 'red') {
            return true;
        }
    }
    return false; // returns false only after it runs through all selections in array
}

// --- --- --->

// Exercise

// 1 Challenge

function isValidPassword(username, password) {
    if(password.length < 8 || password.includes(' ') || password.includes(username)) {
        return false;
    }
    return true;
}

isValidPassword('zippelgazz', 'supersecret');

// --- --- --->

// Colt approach v1
function isValidPassword(password, username) {
    if (password.lenght < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
 }
 
 isValidPassword('hellooooo', 'Agatha');
 
 
 // Colt approach v2
 function isValidPassword(password, username) {
     const tooShort = password.lenght < 8;
     const hasSpace = password.indexOf(' ') !== -1;
     const tooSimilar = password.indexOf(username) !== -1;
 
     if (tooShort || hasSpace || tooSimilar) return false;
     return true;
  }
  
  isValidPassword('hellooooo', 'Agatha');

// --- --- --->

// 2 Challenge

function avg(array) {
    let sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum += array[i]; // access individual number in an array and add them to 'sum'
        }
    return sum / array.length;
}

avg([75, 76, 80, 95, 100]); // return 85.2

// --- --- --->

// Colt approach
function avg(array) {
    let total = 0;

    // loop over each num
    for (let num of array) {
        total += num; // add them together
    }

    // divide by number of nums
    return total / array.length;
}

avg([0, 25]); // return 12.5

// --- --- --->

// 3 Challenge

// Colt approach
// with indexOf() method
function isPangram(string) {
    let lowerCased = string.toLowerCase();
    for (let check of 'abcdefghijklmnopqrstuvwxyz') { // i declare a variable 'check' and iterate through 'abcd...' string (we get all individual letters)
        if(lowerCased.indexOf(check) === -1) { // if a specific letter has not been found we get -1 and thus return false
            return false;
        }
    }
    return true;
}

isPangram('The five boxing wizards jump quickly');

// Colt approach
// with inludes() method
function isPangram(string) {
    let lowerCased = string.toLowerCase();
    for (let check of 'abcdefghijklmnopqrstuvwxyz') { // i declare a variable 'check' and iterate through 'abcd...' string (we get all individual letters)
        if(!lowerCased.includes(check)) { // if argument string does not contain alphabet letters then return false
            return false;
        }
    }
    return true;
}

isPangram('The five boxing wizards jump quickly');

// --- --- --->

// 4 Challenge

function getCard() {

    function generate(array) {
        const randomPick = Math.floor(Math.random() * array.length);
        return array[randomPick];
    }

    const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    const generatedValue = generate(values);

    const suits = ["clubs", "spades", "hearts", "diamonds"];
    const generatedSuit = generate(suits);

    return  {
        value: generatedValue,
        suit: generatedSuit
    };
}

getCard();

// --- --- --->

// Colt approach
function getCard() {
   const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
   const valueIndex = Math.floor(Math.random() * values.lenght); // goes from 0 - 13 (counting from 0)
   const value = values[valueIndex];

   const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
   const suitIndex = Math.floor(Math.random() * suits.lenght); // goes from 0 - 3 (counting from 0)
   const suit = suits[suitIndex];

   return { value: value, suit: suit };
}

// Colt approach
// reusable functioning v1
function pick(array) {
    // return random element from array
    const index = Math.floor(Math.random() * array.lenght);
    return array[index];
}

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const value = pick(values);
 
    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
    const suit = pick(suits);

    return { value: value, suit: suit };
}

// Colt approach
// reusable functioning v2
function pick(array) {
    // return random element from array
    const index = Math.floor(Math.random() * array.lenght);
    return array[index];
}

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

    return { value: pick(values), suit: pick(suits) };
}