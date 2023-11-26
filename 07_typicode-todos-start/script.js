const itemForm=document.getElementById('todo-form');
const divItem=document.getElementById('todo-list');

//link => https://jsonplaceholder.typicode.com/todos

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos(){

    fetch(`${apiUrl}?_limit=5`).then(res => res.json())
    .then((data) => {
        data.forEach((todo) => {
            createTodo(todo);
        });
    });
}

function createTodo(todo){

    const div =document.createElement('div');
    div.classList.add(`todo-${todo.id}`);
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id',todo.id);

    if(todo.completed){
        div.classList.add('done');
    }

    divItem.appendChild(div);
}

function addTodo(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: e.target.firstElementChild.value,
            body: 'bar',
        }),
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    }).then( (res) => res.json())
    .then((data) => createTodo(data)); 
}


function updateId(id,completed)
{
    fetch(`${apiUrl}/${id}` , {
        method: 'PUT',
        body: JSON.stringify({completed}),
        headers:{
            'Content-Type': 'application/json',
        }
    });
}

function updateItem(e){
    if(e.target.dataset.id){
        e.target.classList.toggle('done');
        updateId(e.target.dataset.id, e.target.classList.contains('done'));
    };
}

function deleteItem(e){
    const id = e.target.dataset.id;
    if(id){

        fetch(`${apiUrl}/${id}`,{
            method: 'DELETE',
        });
        e.target.remove();
    }
}

function init(){
    document.addEventListener('DOMContentLoaded',getTodos);
    itemForm.addEventListener('submit',addTodo);
    divItem.addEventListener('click',updateItem);
    divItem.addEventListener('dblclick',deleteItem);
}

init();
