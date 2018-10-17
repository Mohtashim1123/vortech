
function signup() {

    let Fname = document.getElementById('Fname').value;
    let Lname = document.getElementById('Lname').value;
    let Uname = document.getElementById('Uname').value;
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    let fnameerror = document.getElementById('f_name_error');
    let Lnameerror = document.getElementById('L_name_error');
    let Unameerror = document.getElementById('U_name_error');
    let Emailerror = document.getElementById('E_name_error');
    let passworderror = document.getElementById('P_error');
    let repassworderror = document.getElementById('Rp_error');


    // Fname
    if (Fname == "") {
        fnameerror.innerHTML= "Plz fill First name Field"
        return false;
    }
    if ((Fname.length <= 3) || Fname.length > 20) {
        fnameerror.innerHTML = "** Fname must be 3 to 20 Character **";
        return false;
    }
    if (!isNaN(Fname)) {

        fnameerror.innerHTML = "** Only Character Allow";
        return false;
    }
    // Lname
    if (Lname == "") {
        Lnameerror.innerHTML = " ** Plz fill Last name Field**";
        return false;
    }
    if ((Lname.length <= 3) || Lname.length > 20) {
        Lnameerror.innerHTML = "** Lname must be 3 to 20 Character**";
        return false;

    }
    if (!isNaN(Lname)) {

        Lnameerror.innerHTML = "** Only Character Allow";
        return false;
    }
    // Username
    if (Uname == "") {
        Unameerror.innerHTML = " ** Plz fill User name Field**";
    }
    if((Uname.length <=3) || Uname.length > 20){
        Unameerror.innerHTML = "Uname must be 3 to 20 Character";
        return false;
    }
    if (!isNaN(Uname)){
        Unameerror.innerHTML = "Only Character allow";
    }

    // email
if(Email == ""){
    Emailerror.innerHTML = "Plz fill Email";
}
if ((Email.length <=3) || Email.length >20){
    Emailerror.innerHTML = "Email must be 3 to 20 Character";
}
// password
if((password.length <=3) || password.length > 20){
    passworderror.innerHTML = "Password must be 3 to 20 Character";
    return false;
}
if (password != repassword) {
    alert("Passwords do not match.");
    return false;
}
   
    let obj = {
        Fname: fname,
        Lname: Lname,
        Uname: Uname,
        Email: Email,
        password: password,
        repassword: repassword,
    }

    console.log(obj)
    localStorage.setItem("user", JSON.stringify(obj))
    alert("sign Up Success");
    console.log("hello");

}

function login() {
    let Fname = document.getElementById('Fname').value;
    let Lname = document.getElementById('Lname').value;
    let Uname = document.getElementById('Uname').value;
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    console.log(Name)
    console.log(password)

    let result = JSON.parse(localStorage.getItem("user"))

    console.log((result))
    if (result.name === Name && result.password === password) {
        alert("User name true");
        window.location.href = "file:///F:/vortech.git/api/home.html";
    }
    else {
        alert("wrong pass")
    }

}

function logout() {
    localStorage.clear();
    window.location.href = "file:///F:/vortech.git/api/api.html?";

}

