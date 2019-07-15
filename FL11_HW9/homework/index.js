//Task 0;

function getNumber(str) {
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

//Task 2;

function executeforEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

//Task 3;

function mapArray(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

//Task 4;

function filterArray(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

//Task 5;

function showFormattedDate(date) {
    let year = date.getFullYear();
    let monthIndex = date.getMonth()
    let dayOfMonth = date.getDate();
    let formatMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let formatDate = 'Date: ' + formatMonth[monthIndex] + ' ' + dayOfMonth + ' ' + year;
    return formatDate;
    /*let options = {
            month : 'short',
            day : 'numeric',
            year : 'numeric'
        }
        return 'Date: ' + date.toLocaleString('en-GB', options)
    */
}

//https://www.toptal.com/software/definitive-guide-to-datetime-manipulation

//Task 6;

function canConvertToDate(date) {
    let check = new Date(date).toString();
    if (check === 'Invalid Date') {
        return false;
    } else {
        return true;
    }
}

//Task 7;

function daysBetween(data1, data2) {
    const msecs = 1000;
    const seconds = 60;
    const hours = 24;
    let convertData1 = data1.getTime();
    let convertData2 = data2.getTime();
    let microSecondsDiff = Math.abs(convertData1 - convertData2);
    let daysDiff = Math.floor(microSecondsDiff / (msecs * seconds * seconds * hours));
    return daysDiff;
}

//Task 8;

function getAmountOfAdultPeople(data) {
    const daysFor18Years = 6573;
    let nowDate = new Date();
    let countAdultPeople = 0;
    for (let i = 0; i < data.length; i++) {
        let birthDay = new Date(data[i].birthday);
        let checkDay = daysBetween(nowDate, birthDay);
        if (checkDay > daysFor18Years) {
            countAdultPeople += 1;
        }
    }

    return countAdultPeople;
}

//Task 9;

function getKeys(obj) {
    let result = [];
    for (prop in obj) {
        result.push(prop);
    } 
    return result;

}
