/*
 * Reference of Sign In Forms
 */
const signInFields = {
    email: document.getElementById('emailLogin'),
    password: document.getElementById('passwordLogin')
};

/*
 * Reference of Sin Up Forms
 */
const signUpFields = {
    username: document.getElementById('usernameRegister'),
    email: document.getElementById('emailRegister'),
    password: document.getElementById('passwordRegister')
};

/**
 * Card Tabs
 */
const tabs = {
    register: document.getElementById('register-tab'),
    login: document.getElementById('login-tab'),
};

/**
 * Auth Forms
 */
const forms = {
    login: document.querySelector('.login-form'),
    register: document.querySelector('.register-form')
};

/**
 * Action Buttons
 */
const buttons = {
    login: document.getElementById('login-btn'),
    register: document.getElementById('register-btn')
};

/**
 * Register a current user
 */
const register = () => {
    const {
        email,
        password,
        username
    } = signUpFields;

    saveUserToLocalStorage({
        email: email.value,
        password: password.value,
        username: username.value,
        level: 'employee',
    });
};

/**
 * Login the user
 */
const login = () => {
    let {
        email,
        password
    } = signInFields

    let users = JSON.parse(localStorage.getItem('users'));

    const user = users && users.filter((user) => user.email === email.value && user.password === password.value);

    if (user.length === 1) {
        localStorage.setItem('currentUser', JSON.stringify(...user));
        window.location.reload();
    }
    else {
        console.log('failed');
    }
}

/**
 * Save current user to database
 */
const saveUserToLocalStorage = (user) => {
    if (checkForDuplicateEmail(user.email)) {
        let users = localStorage.getItem('users');
        users = JSON.parse(users) || [];
        users = [...users, user];
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        alert('email already exist');
    }
};

/**
 * Check for duplicate Email
 */
const checkForDuplicateEmail = (email) => {
    let users = JSON.parse(localStorage.getItem('users'));
    const isExist = users && users.filter((user) => user.email === email);
    console.log(isExist);

    return !!!isExist.length
}

/**
 * Adding Event Listeners to the tabs
 */
tabs.login.addEventListener('click', (e) => {
    e.preventDefault();
    // make the tab active
    e.target.classList.add('active');
    tabs.register.classList.remove('active');
    // make the form active
    forms.login.classList.add('active');
    forms.register.classList.remove('active');
});

tabs.register.addEventListener('click', (e) => {
    e.preventDefault();
    // make the tab active
    e.target.classList.add('active');
    tabs.login.classList.remove('active');
    // make the form active
    forms.register.classList.add('active');
    forms.login.classList.remove('active');
});

/**
 * Adding listener for login and register
 */
buttons.register.addEventListener('click', (e) => {
    e.preventDefault();
    register();
})

/**
 * Adding listener for login and register
 */
buttons.login.addEventListener('click', (e) => {
    e.preventDefault();
    login();
})
