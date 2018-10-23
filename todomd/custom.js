let userInput = document.getElementById('input');
let ul = document.getElementById('todolist');
let EmtyError = document.getElementById('Emty_error');

let todos = []

function addTodo(){
    const{value} = userInput;
    if(userInput.value === ''){
        EmtyError.innerHTML  = `<div class = "alert alert-danger" role= "alert">
        You do not enter task
        </div>`;
        userInput.addEventListener('blur', () =>{
            if (userInput.value !== ''){
                EmtyError.innerHTML='';
            }
        })
    }else{
        todos.push(userInput.value);
        renderItem(value);
    }
}
/**
 * @param String text
 */
function renderItem(text){
    ul.innerHTML += `
    <li data-set-mode = "false" id = "${new Date().getMilliseconds()}">
    <p>${text}</p>
    `
}

// function addTodo() {
//     const { value } = userInput;
//     if (userInput.value === '') {
//         console.log(userInput)
//         EmtyError.innerHTML = `<div class="alert alert-danger" role="alert">
//         You Do Not Enter Task
//       </div>`;
//         userInput.addEventListener('blur', () => {
//             if (userInput.value !== '') {
//                 EmtyError.innerHTML = '';
//             }
//         })
//     } else {
//         todos.push(value);
//         renderItem(value);
//     }
// }

// /**
//  * @param {Number} id 
//  */
// function remove(id) {
//     document.getElementById(id).remove();
    
// }

// /**
//  * 
//  * @param {Element} element 
//  * @param { String } text
//  */

// function renderItem(text) {
    
//     ul.innerHTML += 
//     `
//         <li data-edit-mode="false" id="${new Date().getMilliseconds()}">
//             <p>${text}</p>
//             <button onclick="onEdit(this)">Edit</button>
//             <button onclick="remove(this.parentElement.id)">Delete</button>
//         </li>
//     `;
    
// }

// /**
//  * 
//  * @param { String } text
//  * @param { Number } id
//  */
// function modify(text, id) {
//     document.getElementById(id).innerHTML = `
//         <li data-edit-mode="false" id="${id}">
//             <p>${text}</p>
//             <button onclick="onEdit(this)">Edit</button>
//             <button onclick="remove(this)">Delete</button>
//         </li>
//     `;
   
// }

// /**
//  * 
//  * @param {Element} element 
//  */
// function onEdit(element) {
//     const parent = element.parentElement;
//     element.parentElement.dataset.editMode = !element.parentElement.dataset.editMode;
  

//     if (element.parentElement.dataset.editMode) {
//         const p = parent.querySelector('p');
//         const text = p.innerHTML;
//         parent.innerHTML = `
//                     <li id="${parent.id}">
//                         <input type="text" value="${text}" />
//                         <button onclick="modify(this.previousElementSibling.value, this.parentElement.id)">Modify</button>
//                     </li>
//         `;
        
//     }
// }

