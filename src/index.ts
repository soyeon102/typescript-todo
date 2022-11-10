const $btn = document.getElementById('btn');
const $input = document.getElementById('todoInput') as HTMLInputElement;
const $form = document.getElementById('todoForm') as HTMLFormElement;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log('submitted!');
}

$form?.addEventListener('submit', handleSubmit);

$btn?.addEventListener('click', function () {
  $input.value = '';
});
