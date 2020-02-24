// DRY

function checkBankBalanceBefore(a, b, c) {
    // This function first check bank balances then it ....
    // ..
    const SERVICE_UNAVAILABLE = 9;

    if (dbResultCode == SERVICE_UNAVAILABLE) {
        ascascac
    }
    if ((x > b) && (b <= c)) {
        return true;
    } else {
        return false;
    }
}


function isUserAuthenticated(user, password) {

    return authenticated;
}

function getCustomerAddress(user, password) {
    let authenticated = false;
    if ((user === 'admin') && (password === 'password')) {
        authenticated = true;
    }    if (authenticated) {
        console.log('read customer address');
    }
}

function getCustomerEmail(user, password) {
    let authenticated = false;
    if ((user === 'admin') && (password === 'password')) {
        authenticated = true;
    }
    if (authenticated) {
        console.log('read customer email');
    }
}

function extracted(user, password) {
    let authenticated = false;
    if ((user === 'admin') && (password === 'password1')) {
        authenticated = true;
    }
    return authenticated;
}

function getOrderHistory(user, password) {
    let authenticated = extracted(user, password);
    if (authenticated) {
        console.log('read order history');
    }
}

function getUserDateOfBirth(user, password) {
    let authenticated = false;
    if ((user === 'admin') && (password === 'pass')) {
        authenticated = true;
    }
    if (authenticated) {
        console.log('read user date of birth');
    }
}

