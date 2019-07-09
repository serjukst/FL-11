let login = prompt('Please, enter your email');
let minLoginLength = 6;
let minPassLength = 5;
let pass = 0;
let changePass = 0;
if (login === null || login === '') {
    alert('Canceled');
} else if (login.length < minLoginLength) {
    alert("I don't know any emails having name length less than 6 symbols");

} else if (login === 'user@gmail.com' || login === 'admin@gmail.com') {
    pass = prompt('Please, enter your password');

    if (pass === null || pass === '') {
        alert('Canceled');
    } else if (login === 'user@gmail.com' && pass === 'UserPass' ||
        login === 'admin@gmail.com' && pass === 'AdminPass') {
        changePass = confirm('Do you want to change your password?');

        if (changePass === false) {
            alert('You have failed the change');
        } else {
            pass = prompt('Please, enter your old password');

            if (login === 'user@gmail.com' && pass === 'UserPass' ||
                login === 'admin@gmail.com' && pass === 'AdminPass') {
                pass = prompt('Please, enter your new password');

                if (pass.length < minPassLength) {
                    alert('It’s too short password. Sorry');
                } else {
                    let checkPass = prompt('Please, enter your new password again');

                    if (checkPass !== pass) {
                        alert('You wrote the wrong password');
                    } else {
                        alert('You have successfully changed your password')
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert("I don't know you");
}


