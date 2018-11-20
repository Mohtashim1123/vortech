var body = document.getElementById('container');
var loader = document.getElementById('loader');
setTimeout(function () {
    body.style.display = 'block';
    loader.style.display = 'none';
}, 2500);

let errors = {
    Email: '',
    password: ''
}
var arry = []
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
        fnameerror.innerHTML = `Field is Empty`
    }
    else if ((Fname.value.length <= 2) || Fname.value.length > 20) {
        fnameerror.innerHTML = `Character Must be 3 to 20`;
    }
    else if (!Fname.value.match(/[a-zA-Z]/)) {
        fnameerror.innerHTML = `Invaild*`
    }
    // lname 
    else if (Lname.value === '') {
        Lnameerror.innerHTML = `Field is Empty`
    }
    else if ((Lname.value.length <= 2) || Lname.value.length > 20) {
        Lnameerror.innerHTML = `Character Must be 3 to 20`;
    }
    else if (!Lname.value.match(/[a-zA-Z]/)) {
        Lnameerror.innerHTML = `Invaild*`
    }
    // uname
    else if (Uname.value === '') {
        Unameerror.innerHTML = `Field is Empty`
    }
    else if (!Uname.value.match(/[a-zA-Z]/)) {
        Unameerror.innerHTML = `Invaild*`
    }
    else if ((Uname.value.length <= 2) || Uname.value.length > 20) {
        Unameerror.innerHTML = `Character Must be 3 to 20`;
    }
    // Email
    else if (Email.value === '') {
        Emailerror.innerHTML =`Field is Empty`
    }
    else if ((Email.value.length <= 2) || Uname.value.length > 20) {
        Emailerror.innerHTML = `Character Must be 3 to 20`;
    }
    else if (Email.value.indexOf('@') <= 0) {
        Emailerror.innerHTML = "** @ invaild**";
    }
    // password
    else if (password.value === '') {
        passworderror.innerHTML = `Field is Empty`
    }
    else if ((password.value.length <= 2) || Uname.value.length > 20) {
        passworderror.innerHTML = `Password Must be 3 to 20`;
    }
    // Cpassword
    else if (Cpassword.value === '') {
        CpasswordError.innerHTML = `Field is Empty`
    }
    else if ((Cpassword.value.length <= 2) || Uname.value.length > 20) {
        CpasswordError.innerHTML = `Password Must be 3 to 20`;
    }
    else if (password.value != Cpassword.value) {
        CpasswordError.innerHTML = "** Password not Match**";
    }
    else {
        spiner.className = "fa fa-spinner fa-spin";
        firebase.auth().createUserWithEmailAndPassword(Email.value, password.value)
            .then(function (users) {
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
                    confirmButtonColor: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/login.html">#fff</a>'
                })
            })
            .catch(function (error) {
                spiner.className = "";
                swal({
                    title: 'Error!',
                    text: 'Sign Up Already',
                    type: 'error',
                    confirmButtonText: 'Cancel'
                })
            })
    }
    Fname.addEventListener('blur', () => {
        if (Fname.value.length >= 3)
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
        if (password.value.length >= 3)
        passworderror.innerHTML = '';
    })
    Cpassword.addEventListener('blur', () => {
        if (Cpassword.value.length >= 3)
        CpasswordError.innerHTML = '';
    })
}
// Login
var spiner = document.getElementById('spiner')
function login() {
    let Email = document.getElementById('Email')
    let password = document.getElementById('password')
    spiner.className = "fa fa-spinner fa-spin";
    firebase.auth().signInWithEmailAndPassword(Email.value, password.value)
        .then(function (user) {
            spiner.className = "";
            swal({
                title: 'Login',
                text: 'Successfully',
                type: 'success',
                confirmButtonText: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/index.html">Ok</a>',
                confirmButtonColor: 'fff'
            })
        })
        .catch(function (error) {
            spiner.className = "";
            swal({
                title: 'Error!',
                type: 'error',
                confirmButtonText: 'Cancel'
            })
        });
}
// modal
function modal() {
    let firstName = document.getElementById('First_Name')
    let lastName = document.getElementById('Last_Name')
    let CNIC = document.getElementById('CNIC')
    let Age = document.getElementById('AGE')
    let bloodGroup = document.getElementById('Blood_Group')
    let errorFname = document.getElementById('ErrorFname')
    let errorLname = document.getElementById('ErrorLname')
    let errorCnic = document.getElementById('ErrorCnic')
    let errorAge = document.getElementById('ErrorAge')
    let errorBloodGroup = document.getElementById('ErrorBloodGroup')

    if (firstName.value === '') {
        errorFname.innerHTML = `Please Fill First Name*`
    }
    else if ((firstName.value.length <= 2) || firstName.value.length > 20) {
        errorFname.innerHTML = `Character Must be 3 to 20`;
    }
    else if (!firstName.value.match(/[a-zA-Z]/)) {
        errorFname.innerHTML = `Invaild*`
    }
    else if (lastName.value === '') {
        errorLname.innerHTML = `Please Fill Last Name*`
    }
    else if ((lastName.value.length <= 3) || lastName.value.length > 20) {
        errorLname.innerHTML = `Character Must be 3 to 20`;
    }
    else if (!lastName.value.match(/[a-zA-Z]/)) {
        errorLname.innerHTML = `Invaild*`
    }
    else if (CNIC.value === '') {
        errorCnic.innerHTML = `Please Fill CNIC*`
    }
    else if (CNIC.value.length < 14 || CNIC.value.length > 14) {
        errorCnic.innerHTML = `Invaild CNIC*`
    }
    else if (Age.value === '') {
        errorAge.innerHTML = `Age*`
    }
    else if (Age.value.length < 2 || Age.value.length > 2) {
        errorAge.innerHTML = `Invaild Age*`
    }
    else if(Age.value < 18){
errorAge.innerHTML=`If your Age 18 and 18+`
    }
    else if (bloodGroup.value === '') {
        errorBloodGroup.innerHTML = `Blood Group*`
    }
    else if (bloodGroup.value.length < 2 || bloodGroup.value.length > 2) {
        errorBloodGroup.innerHTML = `Invaild Group*`
    }
    else if (bloodGroup.value.indexOf('+') <= 0 && bloodGroup.value.indexOf('-') <= 0) {
        errorBloodGroup.innerHTML = `Invaild*`
    }
    else {
        var database = firebase.database();
        let uid = firebase.auth().currentUser.uid;
        database.ref('donors/' + uid).set({
            name: firstName.value,
            Lname: lastName.value,
            CNIC: CNIC.value,
            Age: Age.value,
            bloodGroup: bloodGroup.value
        }).then(() => {
            swal({
                title: 'Donated',
                type: 'success',
                confirmButtonText: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/index.html">Ok</a>',
                confirmButtonColor: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/index.html">#fff</a>'
            })
        })
    }
    firstName.addEventListener('blur', () => {
        if (firstName.value.length >= 3)
            errorFname.innerHTML = '';
    })
    lastName.addEventListener('blur', () => {
        if (lastName.value.length >= 3)
            errorLname.innerHTML = '';
    })
    CNIC.addEventListener('blur', () => {
        if (CNIC.value.length == 14)
            errorCnic.innerHTML = '';
    })
    Age.addEventListener('blur', () => {
        if (Age.value.length == 2)
            errorAge.innerHTML = '';
    })
    bloodGroup.addEventListener('blur', () => {
        if (bloodGroup.value.length == 2)
            errorBloodGroup.innerHTML = '';
    })
}
tableData();
function tableData() {
    firebase.database().ref('donors/').once('value', ((data) => {
        var user = data.val()
        for (const x in user) {
            const text = user[x];
            arry.push(text)
        }
        Data()
    }))
}
function Data() {
    console.log(arry)
    var row = document.getElementById('rowData')
    for (var i = 0; i < arry.length; i++) {
        row.innerHTML += `
            <table class="table">
            <tr>
            <th scope = "row" class = "numWidth">${i + 1}</th>
            <td class = "nameWidth">${arry[i].name}</td></div>
            <td class = "LnameWidth">${arry[i].Lname}</td>
            <td class = "AgeWidth">${arry[i].Age}</td>
            <td class = "CNICWidth">${arry[i].CNIC}</td>
            <td class = "bloodGroupWidth">${arry[i].bloodGroup}</td>
            </tr>
            </table>
            `;
    }
}

function logout() {
    firebase.auth().currentUser
    firebase.auth().signOut()
}

let input = document.getElementById("myInput");
input.addEventListener('keyup', filterItems);
function filterItems() {
    let filter = input.value.toUpperCase();
    let table = document.getElementById("rowData");
    let tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        let name = tr[i].getElementsByTagName("td")[0];
        let last = tr[i].getElementsByTagName("td")[1];
        let Age = tr[i].getElementsByTagName("td")[2];
        let CNIC = tr[i].getElementsByTagName("td")[3];
        let bloodGroup = tr[i].getElementsByTagName("td")[4];
        if (name.innerHTML.toUpperCase().indexOf(filter) > -1 
        || last.innerHTML.toUpperCase().indexOf(filter)>-1 
        || Age.innerHTML.toUpperCase().indexOf(filter)>-1
        || CNIC.innerHTML.toUpperCase().indexOf(filter)>-1 
        || bloodGroup.innerHTML.toUpperCase().indexOf(filter)>-1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
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


