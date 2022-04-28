// TODO: EVENTS

// * recommended way to add events, is through method called .addEventListener
// * with that method, we can attach as many event listeners to element as we want
// ? BASIC EXAMPLE
element.addEventListener('click', function() {
    alert('clicked me');
});

// * in order to give one event listener to many elements, we could use a loop
// ? BASIC EXAMPLE
const elements = [el1, el2, el3, el4];
elements.forEach(element => {
    element.addEventListener('click', function() {
        alert('clicked me');
    });
})

// * getting THIS from event listener
// * if we run a function and not specify any parameters, then by default we already get our current element THIS
// ? BASIC EXAMPLE
// * runFunc is a function
element.addEventListener('click', runFunc);
// * runFunc will have access to current element THIS (to access it, runFunc itself should be declared without ES6 way)

// * differences between 'keydown', 'keyup', 'keypress':
// * KEYDOWN only occurs when we press down any key or while holding it down;
// * KEYUP only occurs when we release the key that was pressed, key released state;
// * KEYPRESS only occurs if a real character was typed,
     // * meaning if input aquired new character after key press, then the event gets called (enter and space also count)
     

// * catching form submit data without reloading page
const form = document.querySelector('#form'),
      input = document.querySelector('#input');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // * prevent default behavior, will not refresh page
    console.log(input.value); // * will show me the selected input value after submit
});



// ! BAD WAY

// * there are ways to write event listeners that are not recommended:

    // * WAY 1 - through HTML, inline events
    <button onclick="alert('clicked me');"></button>
    // * not recommended because we want to separate JS from HTML, not to create a mess

    // * WAY 2 - in JS file as a method
    element.onclick = function() {
        alert('clicked me');
    }
    // * not recommended because it overwrites functionality whenever we assign a new functionality to the same method