// forEach (is an Array method)

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// most of the time we use anonymous functions because we only need them to run once
numbers.forEach(function(num) {
    console.log(num); // num will have each value one at a time
})
// return = 10, 20, 30, 40, 50, 60, 70, 80, 90, 100



// calling function after it is defined with forEach
function printTriple(num) {
    console.log( num * 3);
}

// refers to an array and does forEach method on it after which it runs function "printTriple"
numbers.forEach(printTriple);

// call an index after a number
numbers.forEach(function(num, i) { // forEach has 2 parameters, first is item and second is index
    console.log(i, num);
});

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

// print each title
anime.forEach(function(show) {
    console.log(show.title);
})

// for of example
for (let show of anime) {
    console.log(show.title);  
}

// for loop example
for (let i = 0; i < anime.length; i++) {
    console.log(show.title);
}

// --- --- --->