interface Todo {
  text: string;
  completed: boolean;
}

const $btn = document.getElementById('btn');
const $input = document.getElementById('todoInput') as HTMLInputElement;
const $form = document.getElementById('todoForm') as HTMLFormElement;
const $list = document.getElementById('todoList');

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: $input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  $input.value = '';
}

function createTodo(todo: Todo) {
  const newLi = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  $list?.append(newLi);
}

$form?.addEventListener('submit', handleSubmit);
