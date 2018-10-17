
function signUp1() {
    let FirstName = document.getElementById('FirstName');
    let Lname = document.getElementById('LastName');
    let Uname = document.getElementById('UserName');
    let Email = document.getElementById('Email');
    let password = document.getElementById('password');
    let Cpassword = document.getElementById('Cpassword');
    let fnameerror = document.getElementById('F_Name_Error');
    let Lnameerror = document.getElementById('L_Name_Error');
    let Unameerror = document.getElementById('U_Name_Error');
    let Emailerror = document.getElementById('Email_Error');
    let passworderror = document.getElementById('Password_Error');
    let CpasswordError = document.getElementById('Cpassword_Error');
    var load = document.getElementById("load");
    load.classList.remove("hide");



    // fname
    if (FirstName.value == "") {
        load.classList.add("hide");
        fnameerror.innerHTML = "**Plz fill First name Field**";
        // return false;
    }


    else if ((FirstName.value.length <= 3) || FirstName.value.length > 20) {
        load.classList.add("hide");
        fnameerror.innerHTML = "** Fname must be 3 to 20 Character **";
        // return false;
    }

    else if (!isNaN(FirstName.value)) {
        load.classList.add("hide");
        fnameerror.innerHTML = "** Only Character Allow**";
        // return false;
    }

    // Lname
    else if (Lname.value == "") {
        load.classList.add("hide");
        Lnameerror.innerHTML = "**Plz fill Last name Field**";
        // return false;
    }

    else if ((Lname.value.length <= 3) || Lname.value.length > 20) {
        load.classList.add("hide");
        Lnameerror.innerHTML = "** Lname must be 3 to 20 Character **";
        // return false;
    }

    else if (!isNaN(Lname.value)) {
        load.classList.add("hide");
        Lnameerror.innerHTML = "** Only Character Allow**";
        // return false;
    }

    // username
    else if (Uname.value == "") {
        load.classList.add("hide");
        Unameerror.innerHTML = "**Plz fill User name Field**";
        // return false;
    }

    else if ((Uname.value.length <= 3) || Uname.value.length > 20) {
        load.classList.add("hide");
        Unameerror.innerHTML = "** User name must be 3 to 20 Character **";
        // return false;
    }

    else if (!isNaN(Uname.value)) {
        load.classList.add("hide");
        Unameerror.innerHTML = "** Only Character Allow**";
        // return false;
    }

    // Email
    else if (Email.value == "") {
        load.classList.add("hide");
        Emailerror.innerHTML = "**Plz fill Email Field**";
        // return false;
    }

    else if (Email.value.indexOf('@') <= 0) {
        load.classList.add("hide");
        Emailerror.innerHTML = "** @ at invaild position **";
        return false;
    }

    // password

    else if (password.value == "") {
        load.classList.add("hide");
        passworderror.innerHTML = "**Plz fill Password Field**";
        return false;
    }

    else if ((password.value.length <= 3) || password.value.length > 10) {
        load.classList.add("hide");
        passworderror.innerHTML = "**Password must be greater than 3 digt**";
        return false;
    }

    else if (Cpassword.value == "") {
        load.classList.add("hide");
        CpasswordError.innerHTML = "**Plz fill Password Field**";
        return false;
    }

    else if (password.value != Cpassword.value) {
        load.classList.add("hide");
        CpasswordError.innerHTML = "** Password not Match**";
        return false;
    }

    else {
        fnameerror.innerHTML = ""
        Lname.innerHTML = ""
        Uname.innerHTML = ""
        Email.innerHTML = ""
        password.innerHTML = ""
        Cpassword.innerHTML = ""

        function store() {
            var data = {

                FirstName: FirstName,
                Lname: Lname,
                Uname: Uname,
                Email: Email,
                password: password,
                Cpassword: Cpassword
            }
            console.log(data)
            load.classList.add("hide")
            var storage = localStorage.setItem("userInfo", JSON.stringify(data));


        }

        var div = document.getElementById('pop_success');


        // swal(
        //     'Good job!',
        //     'You clicked the button!',
        //     'success'
        // )

    }
    FirstName.addEventListener('blur', () => {
        if (FirstName.value.length >= 3)
            fnameerror.innerHTML = '';
    })

    Lname.addEventListener('blur', () => {
        if (Lname.value.length >= 3)
            Lnameerror.innerHTML = '';
    })

    Uname.addEventListener('blur', () => {
        if (Uname.value.length >= 3)
            Unameerror.innerHTML = '';
    })

    Email.addEventListener('blur', () => {
        if (Email.value.length >= 3)
            Emailerror.innerHTML = '';
    })

    password.addEventListener('blur', () => {
        if (password.value, length >= 3)
            passworderror.innerHTML = '';
    })

    Cpassword.addEventListener('blur', () => {
        if (Cpassword.value.length >= 3)
            CpasswordError.innerHTML = '';
    })


}














    // console.log(obj)
    // localStorage.setItem("user", JSON.stringify(obj))
    // alert("sign Up Success");
    // console.log("hello");




