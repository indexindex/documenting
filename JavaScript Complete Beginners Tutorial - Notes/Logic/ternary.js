//  Ternary operator --->

// --- --- --->

let num = 7;

// if else example
if (num === 7) {
    console.log('lucky!');
}
else {
    console.log('unlucky!');
}

// ternary example
num === 7 ? console.log('lucky!') : console.log('unlucky!'); // condition ? if true : if false

// --- --- --->

// chat app example
let status = 'offline';

// if else
let color;
if (status === 'offline') {
    color = 'red';
} else {
    color = 'green';
}

// ternary
let color = status === 'offline' ? 'red' : 'green';