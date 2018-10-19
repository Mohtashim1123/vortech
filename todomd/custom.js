let userinput = document.getElementById('form122');
let ul = document.getElementById('todo3');
let Emtyerror = document.getElementById('Emty_error');

var todos = []
debugger
function addtodo() {
    debugger
    if (userinput.value == "") {
        Emtyerror.innerHTML = 'You Do not Enter Task';
    }
  
    else {
        todos.push(userinput.value);
        render()

    }
    userinput.addEventListener('blur',() =>{
        if (userinput.value !=="")
        Emtyerror.innerHTML='';
    })
}

function render() {
    var items = document.getElementById('todolist');
    items.innerHTML = ''
    for (var i = 0; i <= todos.length - 1; i++) {

        items.innerHTML += `<li>${todos[i]}</li>`
    }
}