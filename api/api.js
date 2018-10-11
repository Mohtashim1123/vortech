


function signup() {

    var uName = document.getElementById('Uname').value;
    var password = document.getElementById('password').value;
    var obj = {
        name: uName,
        password: password,
    }
    console.log(obj)
    localStorage.setItem("user",JSON.stringify(obj) )
    alert("sign Up Success");
    console.log("hello");

}

function login(){
    alert()

   var result= localStorage.getItem("user")
    console.log(JSON.parse(result) )
   
}

