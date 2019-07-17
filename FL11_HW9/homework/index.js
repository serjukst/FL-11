//Task 0;

function getNumbers(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            result.push(+str[i]);
        }
    }
    return result;
}

//Task 1;

function findTypes() {
    let result = {},
        countObject = 0,
        countNumber = 0,
        countString = 0,
        countBoolen = 0,
        countUndefined = 0;

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
        }else if (typeof arguments[i] === 'undefined') {
            countUndefined += 1;
            result.Undefined = countUndefined;
        } else {
            countObject += 1;
            result.Object = countObject;
        }
    }
    return result;
}

//Task 2;

function executeforEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

//Task 3;

function mapArray(arr, fn) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(fn(el));
    });
    return result;
}

//Task 4;

function filterArray(arr, fn) {
    let result = [];
    executeforEach(arr, function (el) {
        if (fn(el)) {
            result.push(el);
        }
    });
    return result;
}

//Task 5;

function showFormattedDate(date) {
    let year = date.getFullYear();
    let monthIndex = date.getMonth()
    let dayOfMonth = date.getDate();
    let formatMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${formatMonth[monthIndex]} ${dayOfMonth} ${year}`;
}

//Task 6;

function canConvertToDate(date) {
    let check = new Date(date).toString();
    return check !== 'Invalid Date';
}

//Task 7;

function daysBetween(data1, data2) {
    const msecs = 1000;
    const seconds = 60;
    const hours = 24;
    let microSecondsDiff = Math.abs(data1.getTime() - data2.getTime());
    return Math.ceil(microSecondsDiff / (msecs * seconds * seconds * hours));
}

//Task 8;

function getAmountOfAdultPeople(data) {
    const daysFor18Years = 6574;
    let nowDate = new Date();
    let arr = filterArray(data, function (el) {
        let birthday = new Date(el.birthday);
        return daysBetween(birthday, nowDate) >= daysFor18Years;
    });
    return arr.length;
}


//Task 9;

function keys(obj) {
    let result = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}

//Task 10;

function values(obj) {
    let result = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(obj[prop]);
        }
    }
    return result;
}