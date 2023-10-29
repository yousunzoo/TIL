# Virtual DOM 동작 원리와 이해

리액트는 가상돔(Virtual DOM)을 사용해 보다 효율적으로 우리가 원하는 페이지를 브라우저에 빠르게 그려준다고 한다.

근데 가상돔이 뭐야? 일반 돔이랑 차이가 뭐야? 뭐야뭐야?

리액트의 동작 원리를 아는 멋찐 개발자가 되기 위해 이번 시간에는 가상돔에 대해 짚고 넘어가자.🏃‍♀️

---

## 🌐 DOM

DOM은 *Document Object Model*의 약자로, HTML, XML 등의 문서를 프로그래밍 언어에서 쉽게 조작할 수 있도록 문서를 객체 형태로 나타내는 인터페이스를 의미한다.

DOM은 문서의 구조를 트리 형태로 나타낸다. HTML 문서의 경우, DOM 트리는 HTML 문서의 요소, 속성, 텍스트 등의 모든 내용을 포함한다. 이러한 요소들은 객체로 표현되어 프로그래밍 언어에서 사용될 수 있다.

DOM은 브라우저에서 HTML 요소들을 조작할 수 있는 다양한 메서드와 속성을 제공한다. 예를 들어, DOM을 사용하여 HTML 요소들의 속성 값을 변경하거나, 새로운 HTML 요소를 동적으로 생성할 수 있다. 또한, DOM을 사용하여 이벤트 핸들링을 구현하고, 브라우저에서 발생하는 이벤트에 대응할 수 있다.

### ⚙️ 기존 렌더링 방식

![기존 렌더링 방식](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdnKujt%2Fbtr7OOkOt35%2FePyS6nNM9L4YQjifrj1byK%2Fimg.png)

1.  브라우저는 서버가 보내준 HTML 파일을 해석(Parsing)하여 DOM 트리를 만든다.
2.  브라우저는 서버가 보내준 CSS 파일을 해석(Parsing)하여 CSSOM 트리도 만든다.
3.  DOM 트리 + CSSOM 트리를 결합해 렌더 트리를 만든다.
4.  렌더 트리로 각 노드의 위치와 크기를 계산한 레이아웃을 만든다. 뷰포트(Viewport) 내에서 각 노드들의 위치와 크기를 계산한다.
5.  Layout 계산이 완료되면 요소들을 실제 화면에 그리는 페인트(Paint)를 한다.

#### 💻 DOM 조작하는 코드

```
document.getElementById("hello").innerHTML = 'hello world!'
document.body.style.background = 'blue'
```

### 🤨 기존 렌더링 방식의 문제점

DOM은 새로운 요청이나 변경사항이 있을 때마다 **매번** 리렌더링을 한다. 변경될 때마다 DOM을 반복적으로 직접 조작하면 그만큼 브라우저가 렌더링을 자주하게 되고, PC 자원을 많이 소모하게 되는 문제가 일어나게 된다.

## 🌐 Virtual DOM

Virtual DOM은 브라우저에서 HTML을 렌더링하기 위해 사용되는 가상의 DOM이며, 실제 DOM과 구조가 동일하지만 메모리 상에 존재하며 빠른 업데이트를 가능하게 해준다. Virtual DOM은 실제 DOM이 아닌 JS 객체 형태로 메모리 안에 저장되어 있다.

Virtual DOM은 실제 DOM의 복사본이기 때문에 실제 DOM의 모든 요소와 속성을 공유한다. DOM과의 차이점은 브라우저에 있는 문서에 직접적으로 접근할 수 없다는 것이다. 때문에 화면에 보여지는 내용을 직접 수정할 수 없다.

그렇다면 Virtual DOM은 어떻게 사용하는 것일까?

### ⚛️ Virtual DOM의 작동 원리 (Reconciliation)

![reconciliation](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxNq1H%2Fbtr7UJbC0sl%2FBu3C1MwBQ3C3ewownf1cq0%2Fimg.png)

Reconciliation은 React에서 Virtual DOM을 사용하여 UI를 업데이트하는 과정이다. 이 과정에서 React는 변경된 부분만을 업데이트하여 성능을 향상시킨다.

Reconciliation의 핵심은 변경 사항을 최소화하면서도 UI를 업데이트하는 것이다. React는 이를 위해 Virtual DOM을 사용하여 변경 사항을 비교하고, 변경된 부분만을 DOM에 업데이트한다.

### ⚙️ Reconciliation 과정

1.  업데이트된 컴포넌트의 새로운 Virtual DOM 트리 생성
2.  새로운 Virtual DOM 트리와 이전 Virtual DOM 트리를 비교하여 변경된 부분 찾기 (diffing 알고리즘)
3.  변경된 부분을 실제 DOM에 반영

### ⚛️ Reconciliation with batching

React에서 상태나 프로퍼티가 변경될 때마다 Reconciliation이 발생한다. 그러나 매번 Reconciliation을 수행하는 것은 비용이 크므로, React는 이를 최적화하기 위해 변경 사항을 batch로 묶어서 처리합니다. 이를 **batching**이라고 한다.

이 과정에서 React는 변경된 컴포넌트만 다시 렌더링하고, 변경된 부분만 업데이트하여 불필요한 렌더링을 방지한다. 또한 React는 컴포넌트의 상태나 프로퍼티가 변경될 때마다 Reconciliation 과정을 수행한다.

React는 일정 시간 내에 여러 상태나 프로퍼티 변경이 발생하면, 해당 변경 사항을 일시적으로 대기열에 저장하고 일정 시간이 지나거나 일정 개수 이상의 변경 사항이 발생하면 한 번에 처리한다. 이를 통해 성능을 향상시키고 불필요한 Reconciliation을 방지할 수 있다.

또한 React는 이러한 batching을 통해 불필요한 렌더링을 방지한다. 예를 들어, 상태 변경 후 Reconciliation이 발생하기 전에 다른 변경 사항이 발생한 경우, React는 이전 대기열에 저장된 변경 사항을 처리하고, 변경된 부분만을 업데이트한다. 이를 통해 불필요한 렌더링을 방지하고 성능을 향상시킨다.

### 🧐 그렇다면 Virtual DOM은 정말 빠를까?

결론부터 말하자면 아니오 라 할 수 있다. 리액트 공식 문서에는 다음과 같은 문장이 있다.

_지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하기._

즉, 간단한 작업(예, 단순한 라우팅 작업만 있을 경우)일 경우에는 리액트를 사용하지 않는 편이 더 효과적일 때가 있다는 말이다. 또한 코드 최적화를 열심히 한다면 속도 문제를 개선할 수 있을 것이다.

리액트가 보장하는 성능은 **업데이트 처리 간결성**이다. 무조건적으로 리액트를 사용하는 것이 아닌 유연하게 개발하는 자세가 필요하다.
