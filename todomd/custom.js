let userInput = document.getElementById('input');
let ul = document.getElementById('todolist');
let EmtyError = document.getElementById('Emty_error');

let todos = []

function addTodo() {
    const { value } = userInput;
    if (userInput.value === '') {
        EmtyError.innerHTML = `
        <div class = "alert alert-danger" role= "alert">
            You do not enter task
        </div>
        `;
        userInput.addEventListener('blur', () => {
            if (userInput.value !== '')
                EmtyError.innerHTML = '';
        })
    }
    else if (userInput.value.length > 20) {
        EmtyError.innerHTML = `<div class = "alert alert-danger" role= "alert">
        Character Must Be Less Than 20
    </div>`;
    userInput.addEventListener('blur',() =>{
        if(userInput.value!=='')
        EmtyError.innerHTML = '';
    })
    }
    else {
        todos.push(userInput.value);
        localStorage.setItem("todoData", JSON.stringify(todos))
        renderItem(value);
    }
}

function renderItem(text) {
    const id = new Date().getMilliseconds()
    ul.innerHTML +=
        `
    <li data-mode = "false" id = "${id}"
    <p>${text}</p>
    <button type="button" class="btn btn-primary" onclick="onEdit(${id})" style="width: 95px">Edit</button>
     <button type="button" class="btn btn-danger" onclick = "remove(this.parentElement.id)">Delete</button>
    `
}
/**
 * @param {Number} id
 */
function remove(id) {
    document.getElementById(id).remove();
}
/**
 * @param {Number} id
 */
function onEdit(id) {
    const li = document.getElementById(id)
    li.dataset.editMode = !li.dataset.editMode;
    if (li.dataset.editMode) {
        const p = li.querySelector('p')
        const text = p.innerHTML;
        li.outerHTML =
            `<li id = ${id} data-edit-mode = "true">
        <input class="form-control EditForm form-control-lg" type="text" value="${text}" placeholder="Typing..."> 
        <button type="button" class="btn btn-success" onclick = "modify(this.previousElementSibling.value, ${id})">Update</button>
        <button type="button" class="btn btn-danger" onclick = "remove(this.parentElement.id)">Delete</button>
        `
    }
}
/**
 * @param {String} text
 * @param {Number} id
 */
function modify(text, id) {
    localStorage.setItem("todoData", JSON.stringify(text))
    document.getElementById(id).innerHTML = " ";
    document.getElementById(id).innerHTML +=
        `
    <p>${text}</p>
    <button type="button" class="btn btn-primary" onclick="onEdit(${id})" style="width: 95px">Edit</button>
     <button type="button" class="btn btn-danger" onclick = "remove(this.parentElement.id)">Delete</button>
    `;
}