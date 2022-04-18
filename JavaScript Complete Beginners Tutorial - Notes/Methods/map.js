// MAP (create new Array from an existing Array) !NB always must have a value returned

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// we store map Array in variable
const doubles = numbers.map(function(num) { // num parameter will add every "numbers" Array value in new Array, which is stored in a variable "doubles"
    return num * 2; // we have to return a value
});

// --- --- --->

const numbers = [11, 20, 30, 40, 50, 60, 73, 80, 90, 100];

// check if number is even or odd
const evenOrOdd = numbers.map(function(n) { // n parameter will add every "numbers" Array value in new Array, which is stored in a variable "evenOrOdd"
    return {
        value: n, // just a number
        isEven: n % 2 === 0 // if even then true if not then false
    }
})

evenOrOdd;

/* i get:
0: {value: 11, isEven: false}
1: {value: 20, isEven: true}
2: {value: 30, isEven: true}
3: {value: 40, isEven: true}
4: {value: 50, isEven: true}
5: {value: 60, isEven: true}
6: {value: 73, isEven: false}
7: {value: 80, isEven: true}
8: {value: 90, isEven: true}
9: {value: 100, isEven: true}
*/

// --- --- --->

const affirmations = ['be positive', 'fear is just an illusion', 'you are brave', 'you are successful'];

// all letters in CAPS and separated with a period .
const transform = affirmations.map(function(word) {
    return word.toUpperCase().split('').join('.') // split with empty quotes = each element is one character aka "A", "B", "C"
});

transform
// return = ["B.E. .P.O.S.I.T.I.V.E", "F.E.A.R. .I.S. .J.U.S.T. .A.N. .I.L.L.U.S.I.O.N", "Y.O.U. .A.R.E. .B.R.A.V.E", "Y.O.U. .A.R.E. .S.U.C.C.E.S.S.F.U.L"]

// --- --- --->

const anime = [
    {
        title: 'Naruto',
        episodes: ['220'],
        rating: 7.8
    },
    {
        title: 'Fairy Tail',
        episodes: ['175'],
        rating: 7.2
    },
    {
        title: 'Bakemonogatari',
        episodes: ['12'],
        rating: 6.7
    },
    {
        title: 'Konosuba',
        episodes: ['10'],
        rating: 8.6
    }
];

// extract titles from anime Array and add to new Array (does not impact original Array)
const animeTitles = anime.map(function(title) {
    return title.title;
})

// --- --- --->