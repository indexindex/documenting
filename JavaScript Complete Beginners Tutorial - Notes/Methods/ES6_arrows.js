// => same workflow just shorter syntax

// default way of running funtions
const square = function(x) {
    return x * x;
}

// arrow function method
const square = (x) => {
    return x * x;
}

// --- --- --->

const numbers = [11, 20, 30, 40, 50, 60, 73, 80, 90, 100];

const isEven = (num) => {
    return num % 2 === 0;
}

isEven(47)
// return false
isEven(40)
// return true

// --- --- --->

const multiply = (x, y) => {
    return x * y;
}

multiply(4,7);
// return 28

// --- --- --->

// technically if we have only one parameter, we can leave () and just write the param name

// before
const square = (x) => {
    return x * x;
}

// after
const square = x => {
    return x * x;
}

// when we don't have a parameter then () are a must
const square = () => {
    console.log("Hi!");
}

// --- --- --->

// Implicit return

// before
const square = n => {
    return n * n;
}
square(8) // 64

// after, () are indicating that everything inside is going to be included
const square = n => ( 
    n * n 
);
square(8) // 64

// one-liner, includes only the first line
const square = n => n * n;
square(8) // 64

// --- --- --->

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// double every number and add to new Array (old way)
const doubleNums = numbers.map(function (num) {
    return num * 2;
})
doubleNums;
// return = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]



// double every number and add to new Array (new way)
const doubleNums = numbers.map(num => {
    return num * 2;
});
doubleNums;
// return = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]



// double every number and add to new Array (shortest way)
const doubleNums = numbers.map(num => num * 2);
doubleNums;
// return = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]

// --- --- --->

// pair numbers with either 'even' or 'odd' (old way)
const pairs = numbers.map(function (num) {
    if (num % 2 === 0) return 'even';
    return 'odd';
})

// pair numbers with either 'even' or 'odd' (new way)
const pairs = numbers.map((num) => {
    if (num % 2 === 0) return 'even';
    return 'odd';
})

// pair numbers with either 'even' or 'odd' (shortest way)
const pairs = numbers.map((num) => (
    n % 2 === 0 ? 'even' : 'odd'
));

// --- --- --->