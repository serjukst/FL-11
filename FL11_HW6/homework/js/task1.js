let a1 = +prompt('Please, enter number A(x)');
let a2 = +prompt('Please, enter number A(y)');
let b1 = +prompt('Please, enter number B(x)');
let b2 = +prompt('Please, enter number B(y)');
let c1 = +prompt('Please, enter number C(x)');
let c2 = +prompt('Please, enter number C(y)');
let divider = 2;
let midpointX = (a1 + b1)/divider;
let midpointY = (a2 + b2)/divider;
if (midpointX === c1 && midpointY === c2) {
    console.log(true);
} else {
    console.log(false);
}
