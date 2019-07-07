let a = prompt('Please, enter length sides A');
let b = prompt('Please, enter length sides B');
let c = prompt('Please, enter length sides C');

if (isNaN(a) && isNaN(b) && isNaN(c)) {
    console.log('Triangle doesn’t exist');

} else {
    a = +a;
    b = +b;
    c = +c;

    if (a + b <= c || a + c <= b || c + b <= a) {
    console.log('Triangle doesn’t exist');

    } else if (a === 0 || b === 0 || c === 0) {
        console.log('Triangle doesn’t exist');

    } else if (a === b && b === c) {
        console.log('Eequivalent triangle');
        
    } else if (a === b || c === a || c === b) {
        console.log('Isosceles triangle');
        
    } else {
        console.log('Normal triangle');
    }
}