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
            result.Number = countNumber;
        } else if (typeof arguments[i] === 'string') {
            countString += 1;
            result.String = countString;
        } else if (typeof arguments[i] === 'boolean') {
            countBoolen += 1;
            result.Boolen = countBoolen;
        } else {
            countObject += 1;
            result.Object = countObject;
        }
    }
    return result;
}

function executeforEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

function mapArray(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function filterArray(arr, fn){
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i])){
           res.push(arr[i]);
        }
    }
    return res;
}