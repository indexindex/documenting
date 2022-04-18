// --- --- --->
// TODO: TASTE OF DOM

// * document is the entry point that we use to access the DOM
document

// * selects first element with the id set to "name" (can be one)
document.getElementById('name');

// * selects all tags (for now input) on the page (can be many)
document.getElementsByTagName('input');

// * selects all elements with the class set to "name" (can be many)
document.getElementsByClassName('name');

// * narrowing search example (selects all elements with class set to "name" within selected ul)
const ul = document.getElementsByTagName('ul');
ul.getElementsByClassName('name');

// ! querySelector only gives back first match
// ! querySelectorAll gives back all matches
document.querySelector('h1');

// * with querySelector we can search for everything

// * tag
document.querySelector('h1');

// * id
document.querySelector('#name');

// * class
document.querySelector('.name');

// --- --- --->
// TODO: DOM ACCESS

// ? innerText
// * get text between tags
// <h1 class="header">My Webpage</h1>
const h1 = document.querySelector('h1');
h1.innerText;
// = "My Webpage"

// ? innerContent
// * get text between tags and preserve spaces
// <h1 class="header">My Webpage</h1>
const h1 = document.querySelector('h1');
h1.textContent;
// = "My Webpage"

// ! difference between innerText and textContent is that textContent turn everything into text and preserves spaces and indentation
// ! textContent gives exact content from HTML file while innerText only returns text shown on webpage

// ? innerHTML
// * get HTML back as a string
/*
    <div class="html-content">
        <p>HTML</p>
    </div>
*/
const htmlContent = document.querySelector('.html-content');
htmlContent.innerHTML;
// = "<p>HTML</p>"

// ! innerHTML is used to insert HTML content and DOM will render it accordingly

// ? value
// * get value from input
element.value;

// ? checked
// * checkbox checked or not
element.checked;

// ? getAttribute
// * get value from selected attribute
element.getAttribute('value');

// ? setAttribute
// * set value for selected attribute
element.setAttribute('value', '100');

// ? get parent element
element.parentElement;

// ? get all children elements
element.children;

// ? get previous element
element.previousElementSibling;

// ? get next element
element.nextElementSibling;



// ? changing styles
element.style.color = 'orangered';

// * if i don't specify a value for selected style property then it will return empty string (if inline style does not exist, else it will return a value of inline style of that property)
element.style.color

// * grab all li elements and add each of them corresponding color
const allLis = document.querySelectorAll('li');
const colors = ['red', 'orangered', 'green', 'pink', 'blue', 'yellow'];

allLis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
});



// ? get a computed CSS value from given element (shows currently applied value and can be dynamically changed)
const computedStyles = getComputedStyle(element);
computedStyles.color



// ? manipulation with classes
element.classList.add('new-class');
element.classList.remove('new-class');
// * toggle is useful, if class exists it returns true, else false
element.classList.toggle('new-class');



// ? creating elements
const newh2 = document.createElement('h2');
// return = <h2></h2>

// ? old way ->
// * adding inner text and class
newh2.innerText = 'Agatha where are you?';
newh2.classList.add('agatha');
// return = <h2 class="agatha">Agatha where are you?</h2>

const section = document.querySelector('section');
// * appendChild will append inside section element (which is a parent), and will be placed as a last child
section.appendChild(newh2);
// ? old way <-

// ? insert before element
// * insertBefore works a bit differently, we first target the parent, then say insertBefore and now specify the element we are inserting and before which element
const newElement = document.createElement('p');
newElement.innerText = 'Hello';
section.insertBefore(newElement, newh2);

// * there is another way of inserting elements, key values are: beforebegin, afterbegin, beforeend, afterend
section.insertAdjacentElement('afterbegin', newElement);

// * append to the very beginning of the parent
section.prepend(newElement);

// * append to the very end of the parent
section.append(newElement);



// ? removing elements

// ? old way ->
const parent = document.querySelector('ul.parent');
const child = parent.querySelector('li.target');

parent.removeChild(child);
// ? old way <-

// * select target and remove it
element.remove();