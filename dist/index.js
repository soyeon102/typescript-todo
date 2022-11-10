"use strict";
var $btn = document.getElementById('btn');
var $input = document.getElementById('todoInput');
var $form = document.getElementById('todoForm');
var $list = document.getElementById('todoList');
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: $input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    $input.value = '';
}
function createTodo(todo) {
    var newLi = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    $list === null || $list === void 0 ? void 0 : $list.append(newLi);
}
$form === null || $form === void 0 ? void 0 : $form.addEventListener('submit', handleSubmit);
