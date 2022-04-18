// --- --- --->
// TODO: DESTRUCTURING ARRAYS

// * destructuring array in old way
const arrayWithItems = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5'
];

const firstPlace = arrayWithItems[0];
const secondPlace = arrayWithItems[1];
const thirdPlace = arrayWithItems[2];

// * destructuring array in new way
const arrayWithItems = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5'
];

// * go to arrayWithItems array and set variables based on position
// ! position matters (index based)
const [firstPlace, secondPlace, thirdPlace] = arrayWithItems;
// firstPlace   = "item1"
// secondPlace  = "item2"
// thirdPlace   = "item3"

// * also if we want to skip to fourth item for example, we can skip by adding commas
const [firstPlace, , , fourthPlace] = arrayWithItems;
// firstPlace   = "item1"
// fourthPlace  = "item4"

// * also possible to combine destructuring with REST
// * outcome will be firstPlace set to item1 and others set to array of remaining items
const [firstPlace, ...others] = arrayWithItems;

// --- --- --->
// TODO: DESTRUCTURING OBJECTS

const objectWithItems = {
    first:  'item1',
    second: 'item2',
    third:  'item3',
    fourth: 'item4',
    fifth:  'item5'
};

// * we can store the value by accessing property with the same name as a variable
const {first, last} = objectWithItems;
// first    > "item1"
// second   > "item2"

// * we can store object value to a different variable name like so:
const {second: itemIWant} = objectWithItems;
// itemIWant > "item2"

// * and with REST we can store values like so:
const {first, second, ...other} = objectWithItems;
// * and ...other will contain an object with keys: third, fourth and fifth

// --- --- --->
// TODO: NESTED DESTRUCTURING

const sge = [{
        name: 'Agatha',
        side: 'good',
        power: 'forgivness'
    },
    {
        name: 'Tedros',
        side: 'good',
        power: 'leading'
    },
    {
        name: 'Sophie',
        side: 'evil',
        power: 'revenge'
    },
]

// * let's pick "Agatha" and "Sophie", assign them to variables "love" and "hate"
// * we can skip "Tedros" by adding comma
const [{name: love},,{name: hate}] = sge;

// * we can skip the first object and pick second object like so:
const [,king] = sge;

// --- --- --->
// TODO: DESTRUCTURING PARAMETERS

const agatha = {
    name: 'Agatha',
    side: 'good',
    power: 'forgivness'
}

// * access values "name" and "side"
function print(person) {
    const {name, side} = person;
    console.log(`${name}`, `${side}`);
}
print(agatha)

// * but we could also do this in parameter area
function print({name, side}) {
    console.log(`${name}`, `${side}`);
}
print(agatha)

// * another usecase could be to extract response status
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

// * now to extract status
function parseResponse([protocol, statusCode, contentType]) {
    console.log(`status: ${statusCode}`)
}
parseResponse(response);
// status: 200 OK