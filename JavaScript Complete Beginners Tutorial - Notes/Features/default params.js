// Default Parameters

function multiply(x, y) {
    return x * y;
}

multiply(4, 5)
// return 20

multiply(4) // error, need to specify second argument

// --- --- --->
// old way of specifying default value
    if (typeof y === 'undefined') {
        y = 1;
    }

    // if y equal undefined then y is set to 1
// --- --- --->

multiply(4)
// return 4 (4 * 1)

// --- --- --->
// new way of specifying default value
function multiply(x, y = 1) {
    return x * y;
}

// if y equal undefined then y is set to 1
// --- --- --->



// --- --- --->

const greet = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`);
}