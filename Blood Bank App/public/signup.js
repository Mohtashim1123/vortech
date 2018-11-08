
let errors = {
    Email: '',
    password: ''
}
function signUp() {
    let Fname = document.getElementById('firstName');
    let Lname = document.getElementById('lastName');
    let Uname = document.getElementById('userName');
    let Email = document.getElementById('Email');
    let password = document.getElementById('Password');
    let Cpassword = document.getElementById('ConformPassword');
    let fnameerror = document.getElementById('firstNameError');
    let Lnameerror = document.getElementById('lastNameError');
    let Unameerror = document.getElementById('UserNameError');
    let Emailerror = document.getElementById('EmailError');
    let passworderror = document.getElementById('passwordError');
    let CpasswordError = document.getElementById('CpasswordError');

    // Fname
    if (Fname.value === '') {
        debugger
        fnameerror.innerHTML = `
        <div class="md-form form-sm text-danger">
        <i class="fa fa-user prefix" text-danger></i>
        <input type="text" id="firstName" name="firstName" class="text-danger my-field form-control form-control-sm">
        <label for="inputSMEx"class = "text-danger">First Name</label>
        </div>
        `
    }
    // lname 
    else if (Lname.value === '') {
        Lnameerror.innerHTML = `
        <div class="md-form form-sm text-danger">
        <i class="fa fa-user prefix" text-danger></i>
        <input type="text" id="lastName" name="lastName" class="text-danger my-field form-control form-control-sm">
        <label for="inputSMEx" class= "text-danger">Last Name</label>
        </div>
        `
    }
    // uname
    else if (Uname.value === '') {
        Unameerror.innerHTML = `
        <div class="md-form form-sm text-danger">
              <i class="fa fa-user prefix" text-danger></i>
                <input type="text" id="userName" name="userName" class="text-danger my-field form-control form-control-sm">
                    <label for="inputSMEx" class = "text-danger">User Name</label>
        </div>
        `
    }
    // Email
    else if (Email.value === '') {
        Emailerror.innerHTML = `
        <div class="md-form form-sm text-danger">
                        <i class="fa fa-envelope prefix" text-danger></i>
                        <input type="text" id="Email" name="Email" class="text-danger my-field form-control form-control-sm">
                        <label for="inputSMEx" class = "text-danger">Email</label>
                    </div>
        `
    }
    // password
    else if (password.value === '') {
        passworderror.innerHTML = `
        <div class="md-form form-sm text-danger">
                    <i class="fa fa-lock prefix" text-danger></i>
                    <input type="text" id="Password" name="Password" class="text-danger my-field form-control form-control-sm">
                    <label for="inputSMEx"class= "text-danger">Password</label>
                </div>
        `
    }
    // Cpassword
    else if (Cpassword.value === '') {
        CpasswordError.innerHTML = `
        <div class="md-form form-sm text-danger">
        <i class="fa fa-lock prefix" text-danger></i>
        <input type="text" id="ConformPassword" name="ConformPassword" class="text-danger my-field form-control form-control-sm">
        <label for="inputSMEx"class="text-danger">Conform Password</label>
    </div>
        `
    }
    else {

        firebase.auth().createUserWithEmailAndPassword(Email.value, password.value)
            .then(function (user) {
                let obj = {
                    name: Fname.value,
                    Lname: Lname.value,
                    user: Uname.value,
                    email: Email.value,
                    password: password,
                    Cpassword: Cpassword
                }
                let uid = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + uid).set(obj)
                swal({
                    title: 'Sign Up',
                    text: 'Successfully',
                    type: 'success',
                    confirmButtonText: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/login.html">Ok</a>',
                     
                })
            })
            .catch(function (error) {
                // Handle Errors here.
                swal({
                    title: 'Error!',
                    text: 'Sign Up Already',
                    type: 'error',
                    confirmButtonText: 'Cancel'
                })
            })
    }
}

// Login
var spiner = document.getElementById('spiner')
function login(){
    console.log("djkaczsjl")
    let Email = document.getElementById('Email')
    let password = document.getElementById('password')
    spiner.className="fa fa-spinner fa-spin";
    firebase.auth().signInWithEmailAndPassword(Email.value, password.value)
    .then(function(user){
        spiner.className = "";
        swal({
            title: 'Sign Up',
            text: 'Successfully',
            type: 'success',
            confirmButtonText: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/index.html">Ok</a>',
             
        })
    })
    .catch(function(error) {
        spiner.className = "";
        swal({
            title: 'Error!',
            text: 'Sign Up Already',
            type: 'error',
            confirmButtonText: 'Cancel'
        })
      });
}















   // let fields = document.getElementsByClassName('my-field form-control form-control-sm')
    // let EmailNull = document.getElementsByClassName('Email')
    // for (let i = 0; i < fields.length; i++) {
    //     const label = fields[i].parentElement.getElementsByTagName('label')[0].textContent;


    //     if (fields[i].value === '') {
    //         fields[i].parentElement.innerHTML = `
    //                 <div class="md-form form-sm text-danger"} >
    //                  <i class="fa fa-user prefix text-danger"></i>
    //                     <input type="text" id="${fields[i].id}" name="${fields[i].name}" class="text-danger my-field form-control form-control-sm">
    //                     <label for="inputSMEx">${label}</label>
    //                 </div>`
    //                 ;

    //     }
    //     else if (EmailNull===('@') <= 0) {
    //         fields[i].innerHTML = `
    //         <div class="md-form form-sm text-danger">
    //         <i class="fa fa-envelope prefix text-danger"></i>
    //         <input type="text" id="Email" name="Email" class=" text-danger my-field form-control form-control-sm">
    //         <label for="inputSMEx" class="text-danger">Email</label>
    //         </div>
    //         `

    //     }


    // }
