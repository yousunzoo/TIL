# Javascript 함수

## 함수란?

> 함수란 **어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록**이다.

* **매개변수**(parameter) : 함수 내부로 입력을 전달 받는 변수
* **인수**(argument) : 힘수 외부에서 내부로 입력 하는 값 
  * 인수는 arguments라는 객체에 자동으로 값이 저장된다.
* **반환값**(return value) : 함수 실행 결과 출력되는 값
  * return이 선언되는 즉시 함수가 종료된다.



## 함수 사용하는 이유

* 코드 중복 및 코드의 재사용
* 유지 보수의 펀의성을 높이고 코드의 신뢰성을 높임



## 함수 선언 방법

1) 함수 선언
   ```javascript
   function add(x,y){
       return x + y;
   }
   ```

   

2) 함수 표현
   ```javascript
   var add = function(x,y){
       return x + y;
   }
   ```





## 화살표 함수

* ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표 `=>` 를 사용해 축약형으로 함수를 선언할 수 있다.
* 화살표 함수는 항상 익명 함수로 정의한다.
* `(x) => {return ...}`은 축약해서 `x => ...`으로 작성할 수 있다. (한 줄일 때 가능)
* 객체 데이터를 축약형으로 반환하려면 `({...})` 형식으로 소괄호로 감싸줘야 한다. 

```javascript
// () => {} vs function () {}

const double = function(x){
    return x * 2
}
console.log('double :', double(7)) // double : 14

// 화살표 함수
const doubleArrow = (x) => {return x * 2}
// return 축약형
const doubleArrow = x => x * 2
console.log('doubleArrow :', doubleArrow(7)) // doubleArrow : 14


// 객체 축약형으로 반환
const name = x => ({name : 'Seon'});

```





## 즉시 실행 함수

* IIFE(Immediately-Invoked Function Expression)
* 함수 정의와 동시에 즉시 호출되는 함수
* 단 한번만 호출되며, 다시 호출 불가능
* 익명 함수 사용
* IIFE는 반드시 그룹 연산자 `(...)`로 감싸야 한다.
* 즉시 실행 함수도 인수 전달이 가능하다. `(function(a,b){return a * b}(3,5))` 형식으로 함수의 바로 뒤에 `(argument)`를 입력한다.

```javascript
const a = 7;

// 일반 함수
function double(){
    console.log(a*2)
}

double(); // 14

// IIFE
(function (){
    console.log(a*2)
})(); // 14

(function (){
    console.log(a*2)
}()); // 14
```





## 호이스팅

* 함수 선언문이 유효 범위 최상단으로 끌어올려지는 현상
* 함수 표현식을 작성하면 변수 호이스팅이 일어나 TypeError가 발생함
* 함수 선언문을 사용해야 함수 호이스팅이 일어남.

```javascript
const a = 7;

double1(); // TypeError: double is not a function

const double1 = function(){
    console.log(a*2)
}

double2(); // 14
function double(){
    console.log(a*2)
}
```





## 타이머 함수

* `setTimeout(함수, 시간)` : 일정 시간 후 함수 실행
* `setInterval(함수, 시간)` : 시간 간격마다 함수 실행
* `clearTimeout(함수명)` : 설정된 Timeout 함수를 종료
* `clearInterval(함수명)` : 설정된 Interval 함수를 종료

✔️ 타이머 함수 내의 함수는 익명 함수로 작성!



```javascript
const timer = setTimeout(() => {
    console.log('Seon')
}, 3000) // 3초 뒤에 실행

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearTimeout(timer)
}) // 클릭 시 timer 함수 실행 종료
```

```javascript
const timer = setInterval(() => {
    console.log('Seon')
}, 3000) // 3초마다 함수 실행

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearInterval(timer)
}) // 클릭 시 timer 함수 실행 종료
```





## 콜백 함수

* **콜백 함수** :함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
  * 예) `setTimeout()` 내부의 함수
* **고차 함수** : 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수 

```javascript
// setTimeout(함수, 시간)

function timeout(cb){ // 콜백 함수는 매개변수를 통해 전달됨
    setTimeout(() => {
        console.log('Seon')
        cb()
    }, 300)
}
timeout(() => {
	console.log('Done!');    
}); // timeout 안에 들어가는 콜백 함수

```



---

## 참고

* 모던 자바스크립트 딥 다이브 12장 - 함수