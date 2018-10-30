const users = JSON.parse(localStorage.getItem('users')) || [];

if (users) {
    const admin = users && users.filter((user) => user.level === 'admin');
    if (admin && admin.length !== 1) {

        localStorage.setItem('users', JSON.stringify([...users, {
            username: 'Usama Baig',
            email: 'ubaig54@codecamp.com',
            password: 'ubaig54',
            level: 'admin'
        }]));
    }
}


const user = JSON.parse(localStorage.getItem('currentUser'));

if (user) {
    const { location } = window;

    switch (user.level) {
        case 'admin':
            if (location.pathname !== '/pages/admin.dashboard.html')
                location.replace('/pages/admin.dashboard.html')
            break;
        case 'employee':
            if (location.pathname !== '/pages/dashboard.html')
                location.replace('/pages/dashboard.html')
            break;

        default:
            break;
    }
 
} else {
    if (location.pathname !== '/index.html')
        location.replace('/index.html');
}


