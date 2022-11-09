# Todo with TS

### TS에서 DOM 다루기 개념

<br />

> **! : non-null 단언 연산자**

- 변수 선언 뒤에 !를 붙임으로써 절대 null이 되지 않을 것이라고 단언.
- 값이 확실하고 옵셔널 체이닝을 쓰기 번거로운 경우에 편리하게 쓸 수 있음.
- 확실하지 않을 땐 사용하지 말자!

```javascript
const btn = document.getElementById('btn')!;
```

<br />
<br />

> **Type Assertion**

- input 값의 value는 HTMLElement 타입의 공통 요소가 아님.
- Type Assertion으로 Input요소임을 알려줘야 value의 값을 읽을 수 있다.

```javascript
let mystery: unknown = 4;
const numChars = (mystery as string).length;
```

<br />
<br />

> **? : 옵셔널 체이닝**

- 변수 뒤에 ?를 붙임으로써 해당 값이 있을 때만 출력.
- 없으면 undefined 반환.

```javascript
$btn?.addEventListener('click', function () {
  alert($input.value);
  $input.value = '';
});
```
