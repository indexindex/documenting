// --- --- --->
// TODO: THE ARGUMENTS OBJECT (NOT NEW)

// * old way of using rest (passing in many arguments)
// * "arguments" will inherit all passed in arguments
// ! but because "arguments" does not have array methods, we need to turn it into arrray
function sum() {
    const argsArr = [...arguments];
    return argsArr.reduce((total, currVal) => {
        return total + currVal;
    })
}
sum(1,2,3,4,5);
// 15

function fullName(first, last) {
    // * "arguments" doesn't care about the defined parameters, it includes everything that was passed 
    console.log(arguments);
    // * but we still can access "first" and "last" parameter
    console.log(first);
}

// ! "arguments" does not work with arrow functions

// --- --- --->
// TODO: REST PARAMETERS (NEW)

// * to collect all arguments with REST, all we need is to use "...name" and it will be an array
function sum(...nums) {
    // * nums is an array of all arguments and array methods can be applied
    console.log(nums);
    return nums.reduce((total, currVal) => {
        return total + currVal;
    })
}
sum(4,5,6,7);
// 22

// * not only does REST collect all parameters, it also collects all remaining params
// ! REST must always be last parameter
function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}
fullName('Andri', 'Suvorov', 'Wizard', 'Snake abilities');
/* 
first   > Andri
last    > Suvorov
titles  > Array [ "Wizard", "Snake abilities" ]
*/

// * we of course can use REST with arrow functions
const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)
multiply(2,3,4);
// 24