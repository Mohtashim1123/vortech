function signUp() {
    let Firstname = document.getElementById('firstName');
    let Lastname = document.getElementById('lastName');
    let Username = document.getElementById('userName');
    let Email = document.getElementById('Email');
    let password = document.getElementById('Password');
    let ConformPassword = document.getElementById('ConformPassword');
    let FnameError = document.getElementById('firstNameError');


    if (Firstname.value === '') {
        FnameError.innerHTML = `<div class="md-form form-sm text-danger">
        <i class="fa fa-user prefix text-danger"></i>
        <input type="text" id="firstName" class="form-control form-control-sm text-danger">
        <label for="inputSMEx" class="text-danger" >First Name</label>
    </div>`;
    Firstname.addEventListener('blur', () => {
        if (Firstname.value !== '')
        FnameError.innerHTML = '';
    })
    }
    

    else {
        let signupOBJ = {
            FirstName: Firstname,
            LastName: Lastname,
            UserName: Username,
            Email: Email,
            Password: password,
            Conformpassword: ConformPassword

        }
        console.log(signupOBJ)
        localStorage.setItem("user", JSON.stringify(signupOBJ))
        alert("sign Up Success");
        // console.log("hello");
    }
}