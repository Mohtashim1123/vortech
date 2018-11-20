
firebase.auth().onAuthStateChanged((donors) => {
    if (donors) {
        document.getElementById('UserNameId').innerHTML = donors.email
        console.log(document.getElementById('UserNameId'), donors.email)
    } else {
        window.location.replace(`./index.html`);

    }
})