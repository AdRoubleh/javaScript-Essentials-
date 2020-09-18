//selectors 

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");




//Event listener 
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions

function addTodo(event) {
    event.preventDefault();


    //create TodoDiv
    const TodoDiv = document.createElement('div');
    TodoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    TodoDiv.appendChild(newTodo);

    //Add to localStorage 
    saveLocalTodos(todoInput.value);

    //CHECK MARK BUTTON:COMPLETED
    completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></li>';
    completedButton.classList.add('complete-btn');

    TodoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON:COMPLETED
    trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></li>';
    trashButton.classList.add('trash-btn');

    TodoDiv.appendChild(trashButton);

    //Append to list 
    todoList.appendChild(TodoDiv);

    //clear Input Value

    todoInput.value = '';



}

function deleteCheck(e) {
    const item = e.target;
    const item1 = e.target.parentElement.textContent;
    if (item.classList[0] === "trash-btn") {
        removeLocalStorage(item1);
        const todoRemove = item.parentElement;
        //animation
        todoRemove.classList.add('fall');
        //waits until animation finishes

        todoRemove.addEventListener('transitioned', function() {
            todoRemove.remove();

        })

    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e) {
    let todos = todoList.childNodes;
    todos.forEach(function(todo) {

        if (todo.classList !== undefined) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "completed":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
        return;

    });


}

function saveLocalTodos(todo) {
    // Hey do I have a todo list already in the storage
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(todo => {
        //create TodoDiv
        const TodoDiv = document.createElement('div');
        TodoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        TodoDiv.appendChild(newTodo);

        //CHECK MARK BUTTON:COMPLETED
        completedButton = document.createElement('button');
        completedButton.innerHTML = '<li class="fas fa-check"></li>';
        completedButton.classList.add('complete-btn');

        TodoDiv.appendChild(completedButton);

        //CHECK TRASH BUTTON:COMPLETED
        trashButton = document.createElement('button');
        trashButton.innerHTML = '<li class="fas fa-trash"></li>';
        trashButton.classList.add('trash-btn');

        TodoDiv.appendChild(trashButton);

        //Append to list 
        todoList.appendChild(TodoDiv);

    });
}

function removeLocalStorage(item) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    console.log(item);
    todos.forEach((todo, index) => {

        if (todo === item) {
            todos.splice(index, 1);

        }
    });


    localStorage.setItem('todos', JSON.stringify(todos));
}