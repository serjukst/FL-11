function getNumber(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            result.push(+str[i]);
        }
    }
    return result;
}

function findTypes() {
    let result = {};
    let countObject = 0;
    let countNumber = 0;
    let countString = 0;
    let countBoolen = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            countNumber += 1;
        } else if (typeof arguments[i] === 'string') {
            countString += 1;
        } else if (typeof arguments[i] === 'boolean') {
            countBoolen += 1;
        } else {
            countObject += 1;
        }
    }
    result = { Object: countObject, Number: countNumber, String: countString, Boolen: countBoolen }
    return result;
}