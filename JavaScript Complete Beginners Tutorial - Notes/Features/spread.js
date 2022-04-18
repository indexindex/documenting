// Spread [...] (Expanding iterable)

//Spread in function call
Math.max(3,4,5,6,7,8) // return max argument number, which is 8
Math.min(3,4,5,6,7,8) // return min argument number, which is 3

const nums = [45,23,34,7,5]; // list of numbers but itself is not a number so .max can't work
Math.max(nums)
// NaN

Math.max(...nums) // Spread breaks the array of numbers down to just numbers and .max can work
// 45

function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

giveMeFour(4,5,6,7);
// a 4
// b 5
// c 6
// d 7

const colors = ['red', 'orange', 'yellow', 'green'];
giveMeFour(colors);
// (4) ["red", "orange", "yellow", "green"]

giveMeFour(...colors);
// a red
// b orange
// c yellow
// d green

const str = 'GOAT';
giveMeFour(...str);
// a G
// b O
// c A
// d T

// --- --- --->
// TODO: SPREAD IN ARRAY LITERALS

const agatha = ['goodness', 'magic', 'princess'];
const tedros = ['goodness', 'magic', 'king'];
const sophie = ['evil', 'magic', 'witch'];

// * we make new array that has the contents of agatha array and sophie array mixed together
const characteristics = [...agatha, ...sophie];
// ["goodness", "magic", "princess", "evil", "magic", "witch"]

// ! order does matter

// * we can combine arrays with strings as well
const characteristics = ['Agatha has:', ...agatha, 'Sophie has:', ...sophie];
// ["Agatha has:", "goodness", "magic", "princess", "Sophie has:", "evil", "magic", "witch"]

// * most common usecase for spread is to make a copy of an array
// ! but the copy made will not copy nested arrays, only the first level items
const copyAgatha = [...agatha];

// --- --- --->
// TODO: SPREAD IN OBJECT LITERALS

const agatha = {
    magic: goodness,
    title: princess
};

const sophie = {
    magic: evil,
    title: witch
}

// * we can make new object and include properties from another object
// ! order does matter, if we have 2 conflicting properties then the last one stays
const maria = {
    ...agatha,
    isHappy: true
}

// * same as with arrays we can copy objects with spread
const agathaCopy = {...agatha};

// * we can combine different data types (we would have hello spread by each character and then object inside array)
const random = [...'hello', {...agatha}];