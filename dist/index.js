"use strict";
var $btn = document.getElementById('btn');
var $input = document.getElementById('todoInput');
var $form = document.getElementById('todoForm');
function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
}
$form === null || $form === void 0 ? void 0 : $form.addEventListener('submit', handleSubmit);
$btn === null || $btn === void 0 ? void 0 : $btn.addEventListener('click', function () {
    $input.value = '';
});
