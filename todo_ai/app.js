document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const dueDateInput = document.getElementById('due-date');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        const dueDate = dueDateInput.value;
        if (todoText !== '') {
            addTodoItem(todoText, dueDate);
            todoInput.value = '';
            dueDateInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    todoList.addEventListener('click', function (e) {
        const target = e.target;
        if (target.classList.contains('delete-btn')) {
            target.parentElement.remove();
        } else if (target.tagName === 'LI') {
            target.classList.toggle('completed');
        }
    });

    function addTodoItem(todoText, dueDate) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText + (dueDate ? ` - Due Date: ${dueDate}` : '');
        todoItem.classList.add('todo-item');
        todoList.appendChild(todoItem);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        todoItem.appendChild(deleteBtn);
    }
});
