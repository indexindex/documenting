// * Good rules to follow:

// ? let or const? or var...?
let variable;
const variable;
var variable;

const array = [];
const object = {};
const customFunc = () => {};

// * in OOP best rules to combine with 'THIS'
const object = {
    canICatchThis: true,
    someFunc() {
        someOtherFunc = () => {
            // * arrow function won't have it's own 'THIS',
            // * so it will point to current parent function,
            // * which is someFunc()
            console.log('catched', this.canICatchThis);
        }
        someOtherFunc();
    }
}
object.someFunc();