let userinput = document.getElementById('form122');
let ul = document.getElementById('todo3');
let Emtyerror = document.getElementById('Emty_error');
var edit = false;

var todos = []

function addtodo() {

    if (userinput.value == "") {
        Emtyerror.innerHTML = 'You Do not Enter Task';
        Emtyerror.className = 'Error_text';
    }

    else {
        todos.push(userinput.value);
        render()
        console.log(todos)
    }
    userinput.addEventListener('blur', () => {
        if (userinput.value !== "")
            Emtyerror.innerHTML = '';
            Emtyerror.className = '';
    })
}

function render() {
    var items = document.getElementById('todolist');
    items.innerHTML = ''
    for (var i = 0; i <= todos.length - 1; i++) {
      
        items.innerHTML += `
        
            
       
            <li  name = ${i}>${todos[i]}</li>
            <div  class = "btn_parent test">
            <button id="delete" class="btn btn-default" onclick="deleteListElement(${i})">Delete <i class="fa fa-trash"></i></i></button>
            <button id = "edit" class="btn btn-default" onclick = "edit1(${i})">Edit <i class="fa fa-magic ml-1"></i></button>
            </div>
        
       
        `
 //  <li>${todos[i]}</li>
        // <div class = "btn_parent">
        // <button id="delete" class="btn btn-default" onclick="deleteListElement(${i})">Delete <i class="fa fa-trash"></i></i></button>
        // <button id = "edit" class="btn btn-default" onclick = "edit1()">Edit <i class="fa fa-magic ml-1"></i></button>
        // </div>`
    }
}



function deleteListElement(i) {
    todos.splice(i, 1);
    render()
   
}


function edit1(i)
{console.log(i)
    
  var hel =  document.getElementById("test")

    // document.getElementsByClassName('test').s
   
    // edit = !edit
    render()
    
}

