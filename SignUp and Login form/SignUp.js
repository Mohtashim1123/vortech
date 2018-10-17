




function signUp1() {
    console.log('hello')
    // e.preventDefault();
    let FirstName = document.getElementById('FirstName').value;
    let Lname = document.getElementById('LastName').value;
    let Uname = document.getElementById('UserName').value;
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('password').value;
    let Cpassword = document.getElementById('Cpassword').value;
    let fnameerror = document.getElementById('F_Name_Error');
    let Lnameerror = document.getElementById('L_Name_Error');
    let Unameerror = document.getElementById('U_Name_Error');
    let Emailerror = document.getElementById('Email_Error');
    let passworderror = document.getElementById('Password_Error');
    let CpasswordError = document.getElementById('Cpassword_Error');
    var load = document.getElementById("load");
    load.classList.remove("hide");



    // fname
    if (FirstName == "") {
        load.classList.add("hide");
        fnameerror.innerHTML = "**Plz fill First name Field**";
        return false;
    }
    else if (FirstName !== "") {
        fnameerror.innerHTML = "";
    }

    if ((FirstName.length <= 3) || FirstName.length > 20) {
        load.classList.add("hide");
        fnameerror.innerHTML = "** Fname must be 3 to 20 Character **";
        return false;
    }

    if (!isNaN(FirstName)) {
        load.classList.add("hide");
        fnameerror.innerHTML = "** Only Character Allow**";
        return false;
    }

    // Lname
    if (Lname == "") {
        load.classList.add("hide");
        Lnameerror.innerHTML = "**Plz fill Last name Field**";
        return false;
    }
    else if (Lname !== "") {
        Lnameerror.innerHTML = "";
    }

    if ((Lname.length <= 3) || Lname.length > 20) {
        load.classList.add("hide");
        Lnameerror.innerHTML = "** Lname must be 3 to 20 Character **";
        return false;
    }

    if (!isNaN(Lname)) {
        load.classList.add("hide");
        Lnameerror.innerHTML = "** Only Character Allow**";
        return false;
    }

    // username
    if (Uname == "") {
        load.classList.add("hide");
        Unameerror.innerHTML = "**Plz fill User name Field**";
        return false;
    }
    else if (Uname !== "") {
        Unameerror.innerHTML = "";
    }

    if ((Uname.length <= 3) || Uname.length > 20) {
        load.classList.add("hide");
        Unameerror.innerHTML = "** User name must be 3 to 20 Character **";
        return false;
    }

    if (!isNaN(Uname)) {
        load.classList.add("hide");
        Unameerror.innerHTML = "** Only Character Allow**";
        return false;
    }

    // Email
    if (Email == "") {
        load.classList.add("hide");
        Emailerror.innerHTML = "**Plz fill Email Field**";
        return false;
    }
    else if (Email !== "") {
        Emailerror.innerHTML = "";
    }

    if (Email.indexOf('@') <= 0) {
        load.classList.add("hide");
        Emailerror.innerHTML = "** @ at invaild position **";
        return false;
    }


    // password

    if (password == "") {
        load.classList.add("hide");
        passworderror.innerHTML = "**Plz fill Password Field**";
        return false;
    }
    else if (password !== "") {
        passworderror.innerHTML = "";
    }
    if ((password.length <= 3) || password.length > 10) {
        load.classList.add("hide");
        passworderror.innerHTML = "**Password must be greater than 3 digt**";
        return false;
    }

    if (Cpassword == "") {
        load.classList.add("hide");
        CpasswordError.innerHTML = "**Plz fill Password Field**";
        return false;
    }

    if (password != Cpassword) {
        load.classList.add("hide");
        CpasswordError.innerHTML = "** Password not Match**";
        return false;
    }
    else if (Cpassword !== "") {
        CpasswordError.innerHTML = "";
    }

    else {
        setTimeout(function () {
            var data = {
                FirstName: FirstName,
                Lname: Lname,
                Uname: Uname,
                Email: Email,
                password: password,
                Cpassword: Cpassword
            }
            load.classList.add("hide")
            var storage = localStorage.setItem("userInfo", JSON.stringify(data));
            then(() => {
                document.getElementById("FirstName").value = "";
                document.getElementById("LastName").value = "";
                document.getElementById("UserName").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("password").value = "";
                document.getElementById("Cpassword").value = "";
                location = "./signUp.html"
            })
            
              
        }, 300000);



        swal(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        
    

    }

    





}














    // console.log(obj)
    // localStorage.setItem("user", JSON.stringify(obj))
    // alert("sign Up Success");
    // console.log("hello");




