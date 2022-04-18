//  Switch statements --->

// --- --- --->

// if, else if, else, example comparison to switch
let day = 3;

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log('Invalid day');
}

// switch
switch (day) {
    case 1:
    console.log('Monday');
    break;
    case 2:
    console.log('Tuesday');
    break;
    case 3:
    console.log('Wednesday');
    break;
    case 4:
    console.log('Thursday');
    break;
    case 5:
    console.log('Friday');
    break;
    case 6:
    console.log('Saturday');
    break;
    case 7:
    console.log('Sunday');
    break;
default: 
    console.log('Invalid day');
}

// --- --- --->

// second example of switch

// each case individual
let emoji = 'happy face';

switch (emoji) {
    case 'happy face':
        console.log('yellow');
        break;
    case 'sad face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
        console.log('red');
        break;
    case 'lips':
        console.log('red');
        break;
}

// case combination depending on the value
let emoji = 'happy face';

switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'lips':
    case 'heart':
        console.log('red');
        break;
}