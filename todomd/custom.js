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
    } else {
        todos.push(userInput.value);
        renderItem(value);
    }
}

/**
 * @param {Element} element
 * @param {String} text
 */
function renderItem(text) {
    const id = new Date().getMilliseconds()
    ul.innerHTML += `
    <li data-set-mode = "false" id = "${id}">
        <p>${text}</p>
        <button type="button" class="btn btn-primary" onclick="onEdit(${id})" style="width: 95px">Edit</button>
        <button type="button" class="btn btn-danger" onclick = "remove(this.parentElement.id)">Delete</button>
    </li>
    `;
}

/**
 * @param {Number} id   
 */
function remove(id) {
    document.getElementById(id).remove();
}

/**
 * @param {Element} element
 */
function onEdit(id) {
    const li = document.getElementById(id);
    li.dataset.editMode = !li.dataset.editMode;

    if (li.dataset.editMode) {
        const p = li.querySelector('p');
        const text = p.innerHTML;
        li.outerHTML = `
        <li id="${id}" data-set-mode="true">
            <input class="form-control EditForm form-control-lg" type="text" value="${text}" placeholder="Typing..."> 
            <button type="button" class="btn btn-success" onclick = "modify(this.previousElementSibling.value, ${id})">Update</button>
            <button type="button" class="btn btn-danger" onclick = "remove(this.parentElement.id)">Delete</button>
        </li>
        `;
    }
}

/**
 * @param {String} text
 * @param {id} Number
 */
function modify(text, id) {
    document.getElementById(id).innerHTML = " ";
    document.getElementById(id).innerHTML += `
        <p>${text}</p>
        <button type="button" class="btn btn-primary" onclick="onEdit(${id})" style="width: 95px">Edit</button>
        <button type="button" class="btn btn-danger" onclick = "remove(this.parentElement.id)">Delete</button>
    `;
}

