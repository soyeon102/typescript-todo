"use strict";
var $btn = document.getElementById('btn');
var $input = document.getElementById('todoInput');
$btn === null || $btn === void 0 ? void 0 : $btn.addEventListener('click', function () {
    alert($input.value);
    $input.value = '';
});
