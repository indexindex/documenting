// Arrays (usually const is used all the time with Arrays) --->

// Arrays are reference types, meaning that when i use const i can change whatever is inside an array but not the reference pointer itself, i can't assign new array to it

// --- --- --->

// simple array with string values
let shoppingList = ['Bread', 'Milk', 'Butter'];

// number array
let lotto = [44, 12, 33, 56, 66];

// mixed array
let myCollection = [12, 'dog', true, null, NaN];

// making new array method (less used)
new Array(1,2,3,4,5)
// return [1, 2, 3, 4, 5]

// --- --- --->

// "grab last item in array" method syntax
array[array.length-1];

// --- --- --->

// Change Arrays
let shoppingList = ['Product1', 'Product2', 'Product3'];

// access Product3 and change it to New Product (update value)
shoppingList[2] = 'New Product';

// add new value to array
shoppingList[3] = 'Product4';

// "always add to the end of the array" method
shoppingList[shoppingList.length] = 'New Product';

// --- --- --->

// Array methods

// Push() adds element to the end of an array
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap'
];

webDevelopment.push('JavaScript'); // adds 'JavaScript' to the end

// Pop() removes element from the end of an array
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.pop();
// returns JavaScript (and removes it from the array)

// Unshift() adds element to the beginning of an array
let webDevelopment = [
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.unshift('HTML'); // adds 'HTML' to the beginning
// we can also pass in multiple items
webDevelopment.unshift('HTML', 'HTML5'); // adds 'HTML' and 'HTML5' to the beginning (preserves order this way)

// Shift() removes element from the beginning of an array
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.shift();
// returns HTML

// --- --- --->

// Concatenating

// combine array with another array
let array1 = ['hello', 'Agatha'];
let array2 = ['hello', 'Sophie'];
let array3 = ['hello', 'Tedros'];

array1.concat(array2);
// return ['hello', 'Agatha', 'hello', 'Sophie']

let allArrays = array1.concat(array2, array3);
// return ['hello', 'Agatha', 'hello', 'Sophie', 'hello', 'Tedros']

// --- --- --->

// Includes

// does the array include true or false depending on the value we search
// it looks for exact match
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.includes('HTML');
// return true
webDevelopment.includes('npm');
// return false

// check for something using include
if(webDevelopment.includes('Bootstrap')) {
    console.log('Damn, i thought i can pass it!');
}

// --- --- --->

// IndexOf

// search for value and return the index of where that value was found
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.indexOf('Bootstrap');
// return 3
webDevelopment.indexOf('Boat');
// return -1 (meaning 'not found')

// --- --- --->

// Reverse

// reverses an array
let honey = ["A", "H", "T", "A", "G", "A"];

honey.reverse()
// return ["A", "G", "A", "T", "H", "A"]

// --- --- --->

// Join

// returns a single string out of many string values in an array
let honey = ["A", "G", "A", "T", "H", "A"];

honey.join()
// return "A,G,A,T,H,A"

honey.join('') // i can pass whatever i want between quotes and it will be added between string characters (i can add space too like that ' ')
// return "AGATHA"

// --- --- --->

// Slice

// select part of an array and add onto new array
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.slice(0, 3);
// slice from index of 0 (HTML) to index of 3 (Sass)
// !NB index of 3 will not be executed, it only goes up to 3 without selecting an item at that index

webDevelopment.slice(2)
// returns everything from index of 2 (Sass, Bootstrap, JavaScript)

webDevelopment.slice()
// just copies the whole array and you can assign it to a new variable

// --- --- --->

// Splice

// removes or replaces elements, also can add in new elements

// insert method of splice()
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.splice(1, 0, 'npm');
// first num is start index ('HTML')
// second num is how many items i want to delete
// third value is the added value
// return ["HTML", "npm", "CSS", "Sass", "Bootstrap", "JavaScript"]

// delete method of splice()
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.splice(2, 2);
// first num is start index
// second num is how many items i want to delete
// return ["Sass", "Bootstrap"]

// replace method of splice()
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.splice(0, 2, 'HTML & CSS', 'Sass & SCSS');
// first num is start index
// second num is how many items i want to delete
// return ["HTML", "CSS"]
// and array is now ["HTML & CSS", "Sass & SCSS", "Sass", "Bootstrap", "JavaScript"]

// --- --- --->

// Sort

// sort array alphabetically
let webDevelopment = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript'
];

webDevelopment.sort();
// return ["Bootstrap", "CSS", "HTML", "JavaScript", "Sass"]

// sorting with numbers (converts to string and compares numeric standing)
let nums = [35, 100, 10000, 66, 99];

nums.sort();
// return [100, 10000, 35, 66, 99]

// --- --- --->

// Access nested arrays

const floors = [
    [ 'floor', '1' ],
    [ 'floor', '2' ],
    [ 'floor', '3' ]
]

// access floor 3
floors[2][1]
// return '3'

// update value
floors[2][1] = 4 