function formatTime(minutes) {
    let day = 0;
    let hour = 0;
    let time = 0;
    if (minutes >= 0) {
        day = Math.floor(minutes / 1440);
        hour = Math.floor((minutes - day * 1440) / 60);
        minutes = minutes - day * 1440 - hour * 60;
        time = day + ' day(s)' + hour + ' hour(s) ' + minutes + ' minute(s).';

    } else {
        time = "Please, enter positive number!"

    }

    return time;
}
formatTime();
