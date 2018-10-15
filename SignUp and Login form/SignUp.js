function signUp1(){
let FirstName = document.getElementById('FirstName').Value;
let Lname = document.getElementById('LastName').Value;
let Uname = document.getElementById('UserName').Value;
let Email = document.getElementById('Email').Value;
let password = document.getElementById('password').Value;
let Cpassword = document.getElementById('Cpassword').Value;
let fnameerror = document.getElementById('F_Name_Error');
let Lnameerror = document.getElementById('L_Name_Error');
let Unameerror = document.getElementById('U_Name_Error');
let Emailerror = document.getElementById('Email_Error');
let passworderror = document.getElementById('Password_Error');
let repassworderror = document.getElementById('Cpassword_Error');


    // fname
    debugger;
    if (FirstName == "") {
        fnameerror.innerHTML= "Plz fill First name Field";
        return false;
    }
    
    if (!isNaN(FirstName)) {

        fnameerror.innerHTML = "** Only Character Allow";
        return false;
    }





    let obj = {
        FirstName: FirstName,
        Lname: Lname,
        Uname: Uname,
        Email: Email,
        password: password,
        Cpassword: Cpassword,
    }

    console.log(obj)
    localStorage.setItem("user", JSON.stringify(obj))
    alert("sign Up Success");
    console.log("hello");



}