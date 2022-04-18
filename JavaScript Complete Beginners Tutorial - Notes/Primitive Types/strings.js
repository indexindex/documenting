// STRINGS (text '' "")

// we can use typeof to check the type of our value
typeof "87"
// returns "string"

typeof 87
// returns "number"

// --- --- --->

// String properties

// length property (counts from 1)
"hello".length
// return 5

let mySong = "Hi!"
mySong.length
// return 3

// accessing (counts from 0)
mySong[0]
// return "H"

// grab last character in a string
let word = "Agatha"
word[word.length - 1]
// return "a"

// --- --- --->

// STRING METHODS - thing.method()

let msg = "Hi, friend!"
msg.toUpperCase()
// return "HI, FRIEND!"

let msg = "Hi, friend!"
msg.toLowerCase()
// return "hi, friend!"

let msg = "          Hi, friend!       "
msg.trim()
// return "Hi, friend!"

// combining methods
let msg = "          Hi, friend!       "
msg.trim().toUpperCase()
// return "HI, FRIEND!"

// --- --- --->

// ARGUMENTS

"baseball".indexOf("ball")
// return 4 (meaning it starts at index of 4)

"baseball".indexOf("b")
// return 0 (meaning it only outputs the first character that matches the search)

"baseball".indexOf("entertaining")
// return -1 (meaning it was not found)



"baseball".slice(4)
// return ball (meaning it will return everything when reaches index of 4)

"superhero".slice(0,5)
// return super (first value points to where slice should start and second value means where it should end)
// ! sidenote: the index 5 is "h" but the slice never outputs that, it basically returns everything before index of 5

"superhero".slice(5,7)
// return he

"$50.60".slice(1)
// return 50.60



"baseball is entertaining".replace("entertaining", "ok")
// return "baseball is ok"
// it takes two arguments, first is what you want to replace and second is what the replaced word will be

"ha ha ha".replace("ha", "hi")
// return hi ha ha
// replaces the first occurrence

// --- --- --->

// Quiz

// 1. What is the value of age ?
const age = "5" + "4";
// answer = "54"

// 2. What does this evaluate to ?
"pecan pie"[7];
// answer = i

// 3. What does this evaluate to ?
"PUP"[3];
// answer = undefined

// 4. What is the value of song ?
let song = "london calling";
song.toUpperCase();
// answer = "london calling"
// NB! the value is not changed

// 5. What is the value of cleanedInput ?
let userInput = "  TODD@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();
// answer = "todd@gmail.com"

// 6. What is the value of index ?
let park = 'Yellowstone';
const index = park.indexOf('Stone');
// answer = -1

// 7. What is the value of index ?
let yell = 'GO AWAY!!';
let index = yell.indexOf('!');
// answer = 7

// 8. What does this evaluate to ?
'GARBAGE!'.slice(2).replace("B", '');
// answer = RAGE!

// --- --- --->

// Template string (`` + ${})

`${1 + 5}`
// return = "6"

`You owe me ${20 + 80}`
// return = "You owe me 100"

// interpulating data inside of a string
let sound = "zzzzzz"
let animal = "bee"
`${animal} says ${sound}`
// return "bee says zzzzzz"

`${animal} says ${sound.toUpperCase()}`
// return "bee says ZZZZZZ"

// another good example of template string
let item = '"150 pack gems"';
let price = 9.99;
let quantity = 1;

`You bought ${quantity} ${item}, total price: $${price * quantity}`;
// return "You bought 1 "150 pack gems", total price: $9.99"

// --- --- --->

// possible practical example of template literal string usage
const minAge = 21;
let yourAge = 19;

`You must be ${minAge} or older to enter. Come back in ${minAge - yourage} years.`
// return "You must be 21 or older to enter. Come back in 2 years."

// --- --- --->

// Null (intentional absence of any value)
let user = null;
user;
// return null

user = 'Agatha';
user
// return Agatha

// --- --- --->

// Undefined (stands for 'not defined value' or 'there's nothing in there')

// --- --- --->

// parseInt and parseFloat

// parseInt() converts string number into actual number value
parseInt('21')
// 21 (as a number value)

parseInt('21') + 1
// 22

// --- --- --->

// parseFloat() converts string number into actual number value and also counts in decimals
parseFloat('33.5')
// 33.5 (as a number value)