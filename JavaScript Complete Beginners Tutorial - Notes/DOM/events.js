// --- --- --->
// TODO: WAYS TO NOT WRITE EVENTS

// * 1: inline events

// * 2: as a method
const element = document.querySelector('.element');
element.onclick = function() {
    alert('BAD WAY OF WRITING EVENT');
}

// --- --- --->
// TODO: EVENT LISTENERS

// * we can attach as many event listeners to element as we want

element.addEventListener('click', function() {
    console.log('clicked');
});

// * to add event listener to many elements, use a loop

// * when function is called through event listener, it gets access to 'this'
const runFunc = function() {
    console.log('this', this); // * refers to element
}
element.addEventListener('click', runFunc);

// watch 156