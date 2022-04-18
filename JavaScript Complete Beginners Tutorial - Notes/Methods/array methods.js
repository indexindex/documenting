// Find (expects a callback and returns only ONE value match)

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

// find a specific movie by providing included title piece
const movie = movies.find(movie => {
    return movie.includes('Mrs');
})

// find a specific movie thet starts with provided title piece
const movie = movies.find(movie => (
    movie.indexOf('Mrs') === 0 // looks for 'Mrs' at index of 0
));

// --- --- --->

const anime = [
    {
        title: 'Naruto',
        episodes: [220],
        rating: 7.8
    },
    {
        title: 'Fairy Tail',
        episodes: [175],
        rating: 7.2
    },
    {
        title: 'Bakemonogatari',
        episodes: [12],
        rating: 6.7
    },
    {
        title: 'Konosuba',
        episodes: [10],
        rating: 8.6
    }
];

// find an anime that has a rating higher than 7.2

const goodAnime = anime.find( show => show.rating >= 7.2 );
goodAnime; // Naruto, the first match

// find first anime that has 12 episodes
const epCount = anime.find( show => show.episodes.includes(12));
epCount; // Bakemonogatari, if some anime has 125 episodes for example then it still only catches the one that has exactly 12

// --- --- --->

// Filter (expects a callback and returns only true/false values to new Array)

const numbers = [11, 20, 30, 40, 51, 60, 70, 80, 93, 100];

const odds = numbers.filter(num => num % 2 === 1) // we are looking for odd numbers
odds;
// return = [11, 51, 93]

const evens = numbers.filter(num => num % 2 === 0) // we are looking for even numbers
evens;
// return = [20, 30, 40, 60, 70, 80, 100]

// filter numbers that are larger than 50
const bigNums = numbers.filter(num => num > 50);
bigNums;
// return = [51, 60, 70, 80, 93, 100]

// --- --- --->

const anime = [
    {
        title: 'Naruto',
        episodes: [220],
        rating: 7.8,
        genre: ['fighting', 'martial-arts', 'tragic']
    },
    {
        title: 'Fairy Tail',
        episodes: [175],
        rating: 7.2,
        genre: ['fighting', 'martial-arts', 'comedy']
    },
    {
        title: 'Bakemonogatari',
        episodes: [12],
        rating: 6.7,
        genre: ['paranormal', 'vampires', 'comedy']
    },
    {
        title: 'Konosuba',
        episodes: [10],
        rating: 8.6,
        genre: ['magic', 'isekai', 'comedy']
    }
];

// find an anime that has a rating higher than 7
const goodAnime = anime.filter(num => num.rating > 7);
goodAnime;
// returns me books that are higher than 7 in ratings

const comedyAnime = anime.filter(category => category.genre.includes('comedy'));
comedyAnime;
// returns me books that have comedy in their genre Array

const animeGenres = anime.filter(category => (
    category.genre.includes('fighting') || 
    category.genre.includes('comedy')
));
animeGenres;
// returns me books that have comedy or fighting in their genre Array

// search for a specific word in anime titles
const query = 'Tail';
const results = anime.filter(word => {
    const title = word.title.toLowerCase();
    return title.includes(query.toLowerCase());
})
results;

// --- --- --->

// Some & Every (expects a callback and returns only true/false values)



/* Every (need all to pass condition)
(it takes a boolean function, it runs it on every element 
in the array and if it always gets true for the entire array, 
then every itself returns true)
*/

const words = [ "dog", "dig", "log", "bag", "wag" ];

const all3Letters = words.every(word => word.length === 3);
// return true if every string character in an array is only 3 letters in length, otherwise return false

const allEndingG = words.every(word => {
    const last = word.length -1; // pick the last item (length is always one more than index)
    return word[last] === 'g'
})
// return true if every string character in an array has "g" at the end of each letter, otherwise return false



/* Some (need 1 to pass condition)
(return true if ANY of the array elements pass the test function)
*/

const words = [ "dog", "dig", "log", "bag", "wag" ];

const someStartD = words.some(word => word[0] === 'd');
// return true if atleast one string character in an array has "d" at the beginning of each letter, otherwise return false

// --- --- --->

const anime = [
    {
        title: 'Naruto',
        episodes: [220],
        rating: 7.8,
        genre: ['fighting', 'martial-arts', 'tragic']
    },
    {
        title: 'Fairy Tail',
        episodes: [175],
        rating: 7.2,
        genre: ['fighting', 'martial-arts', 'comedy']
    },
    {
        title: 'Bakemonogatari',
        episodes: [12],
        rating: 6.7,
        genre: ['paranormal', 'vampires', 'comedy']
    },
    {
        title: 'Konosuba',
        episodes: [10],
        rating: 8.6,
        genre: ['magic', 'isekai', 'comedy']
    }
];

// check if every anime has atleast 3.5 or higher as a score for rating
const everyRating = anime.every(rating => rating.rating >= 3.5);
everyRating;

// check if any of the given anime has atleast 2 different genres
const multipleGenres = anime.some(genre => genre.genre.length >= 2);
multipleGenres;

// --- --- --->

// Sort (mutates the original array)

const prices = [ 400.50, 3000, 99.99, 35.99, 12.00, 9500 ];

prices.sort();
// [12, 3000, 35.99, 400.5, 9500, 99.99]

const ascSort = prices.sort((a, b) => a - b);
ascSort;
// [12, 35.99, 99.99, 400.5, 3000, 9500] Ascending order

const desSort = prices.sort((a, b) => b - a);
desSort;
// [9500, 3000, 400.5, 99.99, 35.99, 12] Descending order

// --- --- --->

const anime = [
    {
        title: 'Naruto',
        episodes: [220],
        rating: 7.8,
        genre: ['fighting', 'martial-arts', 'tragic']
    },
    {
        title: 'Fairy Tail',
        episodes: [175],
        rating: 7.2,
        genre: ['fighting', 'martial-arts', 'comedy']
    },
    {
        title: 'Bakemonogatari',
        episodes: [12],
        rating: 6.7,
        genre: ['paranormal', 'vampires', 'comedy']
    },
    {
        title: 'Konosuba',
        episodes: [10],
        rating: 8.6,
        genre: ['magic', 'isekai', 'comedy']
    }
];

// sort by anime rating in ascending order
const ascSort = anime.sort((a, b) => a.rating - b.rating);
ascSort;

// sort by anime rating in descending order
const desSort = anime.sort((a, b) => b.rating - a.rating);
desSort;

// --- --- --->

// Reduce (expects a callback, it takes an array of values and it reduces them down to a single value)

/*
    EXAMPLE

    [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    --------------------------------------------------------
    Callback    accumulator     currentValue    return value
    --------------------------------------------------------
    first call      3               5               8
    second call     8               7               15
    third call      15              9               24
    fourth call     24              11              35

*/

const nums = [3,4,5,6,7];
const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
})
product;
// 2520

// --- --- --->

const grades = [ 33, 45, 25, 88, 67, 93, 58, 49 ];

// finding max value
const maxGrade = grades.reduce((max, currentVal) => {
    if(currentVal > max) return currentVal;
    return max;
})
maxGrade;
// return 93

/*
    --------------------------------------------------------
    Callback        max         currentVal      return value
    --------------------------------------------------------
    first call      33              45              45
    second call     45              25              45
    third call      45              88              88
    fourth call     88              67              88
    fifth call      88              93              93
    sixth call      93              58              93
    seventh call    93              49              93

    return 93

*/

// finding max value with Math.max()
const maxGrade = grades.reduce((max, currentVal) => {
    return Math.max(max, currentVal);
})
maxGrade;
// return 93

// finding min value with Math.min()
const minGrade = grades.reduce((min, currentVal) => {
    return Math.min(min, currentVal);
})
minGrade;
// return 25

// --- --- --->

// initial reduce way
[ 10,20,30,40,50 ].reduce((sum, currentVal) => {
    return sum + currentVal;
})
// return 150

// custom reduce way (with custom set value)
[ 10,20,30,40,50 ].reduce((sum, currentVal) => {
    return sum + currentVal;
}, 10) // sum starts with 10
// return 150

// --- --- --->

// Tallying results from an array

const summon = [ 'bronze card', 
                 'silver card', 
                 'silver card', 
                 'bronze card', 
                 'bronze card', 
                 'bronze card', 
                 'silver card', 
                 'golden card', 
                 'bronze card' ];
const result = summon.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue]++; // if acc... has the same value already it will increment it by one
    } else {
        accumulator[currentValue] = 1; // otherwise if this value has not been found, add it and give it a number 1
    }
    return accumulator;
}, {}) // initial value is set to empty object
result;



// shorter syntax
const result = summon.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    // initial acc... is empty and equals current acc... which does not exist (undefined) or 0. acc... = 0 + 1 (bronze card: 1)
    // next run which hits 'bronze card' checks if acc... is 0 or it has a value, and this time the value is 1. now it will be acc... = 1 + 1 (bronze card: 2)
    return accumulator;
}, {}) // initial value is set to empty object
result;

// --- --- --->

const anime = [
    {
        title: 'Naruto',
        episodes: [220],
        rating: 7.8,
        genre: ['fighting', 'martial-arts', 'tragic']
    },
    {
        title: 'Fairy Tail',
        episodes: [175],
        rating: 7.2,
        genre: ['fighting', 'martial-arts', 'comedy']
    },
    {
        title: 'Bakemonogatari',
        episodes: [12],
        rating: 6.7,
        genre: ['paranormal', 'vampires', 'comedy']
    },
    {
        title: 'Konosuba',
        episodes: [10],
        rating: 8.6,
        genre: ['magic', 'isekai', 'comedy']
    }
];

const sortedAnimeByRatings = anime.reduce((groupedAnime, show) => {
    const key = Math.floor(show.rating); // key is the value of each anime show rating (whole number)
    if(!groupedAnime[key]) // is there a key with a value of 6, next run will check for 7 and after that 8
        groupedAnime[key] = []; // if this value was not found we will create a new array, for example value 3 = ({3: []})
        // if this value already exists then don't create new array but just add to it
        groupedAnime[key].push(show); // push the entire anime show into this array
        return groupedAnime;
}, {}) // initial value is set to empty object
sortedAnimeByRatings;

// --- --- --->