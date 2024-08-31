const todoList = [{
    name: 'wash dishes',
    dueDate: '2002-03-18'
}, { 
    name: 'make dinner',
    dueDate: '2002-03-18'
}];

renderTodoList();

function renderTodoList() {
    
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button class="delete-todo-buttom js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton, index) => {
        deletebutton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}