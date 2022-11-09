const $btn = document.getElementById('btn');
const $input = document.getElementById('todoInput') as HTMLInputElement;

$btn?.addEventListener('click', function () {
  alert($input.value);
  $input.value = '';
});
