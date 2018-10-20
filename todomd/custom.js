let userinput = document.getElementById('form122');
let ul = document.getElementById('todo3');
let Emtyerror = document.getElementById('Emty_error');

var todos = []

function addtodo() {
   
    if (userinput.value == "") {
        Emtyerror.innerHTML = 'You Do not Enter Task';
    }

    else {
        todos.push(userinput.value);
        render()
console.log(todos)
    }
    userinput.addEventListener('blur', () => {
        if (userinput.value !== "")
            Emtyerror.innerHTML = '';
    })
}

function render() {
    var items = document.getElementById('todolist');
    items.innerHTML = ''
    for (var i = 0; i <= todos.length - 1; i++) {

        items.innerHTML += `<li>${todos[i]}</li>
        <div class = "btn_parent">
        <button id="delete" class="btn btn-default" onclick="deleteListElement(${i})">Delete <i class="fa fa-trash"></i></i></button>
        
        <button class="btn btn-default">Edit <i class="fa fa-magic ml-1"></i></button>
        </div>
`
       
    }
}



function deleteListElement(i) {
    todos.splice(i, 1);
    render()
}

