# 2.4 렌더링은 어떻게 일어나는가?

> 렌더링 : HTML과 CSS 리소스를 기반으로 웹 페이지에 필요한 UI를 그리는 과정
> 

### 리액트의 렌더링

> 리액트 애플리케이션 트리 안에 있는 모든 컴포넌트들이 현재 자신이 가지고 있는 `props`와 `state`의 값을 기반으로 어떻게 UI를 구성하고 이를 바탕으로 어떤 DOM 결과를 브라우저에 제공할 것인지 계산하는 일련의 과정
> 

### 리액트의 렌더링 시나리오

Trigger → Render → Commit

1. 최초 렌더링 : 사용자가 처음 애플리케이션에 진입했을 때 최초 렌더링이 발생한 이후로 발생하는 모든 렌더링
2. 리렌더링 : 최초 렌더링 이후 발생하는 모든 렌더링
    1. 클래스형 컴포넌트의 `setState`
    2. 클래스형 컴포넌트의 `forceUpdate`
        - forceUpdate : component life cycle과 무관하게 리렌더링을 시켜야 하는 경우에 사용
    3. 함수형 컴포넌트의 `useState()` - setter function
    4. 함수형 컴포넌트의 `useReducer()` - dispatch
    5. 컴포넌트의 `key props` 변경
    6. `props`가 변경되는 경우
    7. 부모 컴포넌트가 리렌더링될 경우

### 🧐 **리액트는 props의 변경을 subscribe하고 있다?**

https://codesandbox.io/p/sandbox/test-props-h8jh2y?layout=%7B%22sidebarPanel%22%3A%22EXPLORER%22%2C%22rootPanelGroup%22%3A%7B%22direction%22%3A%22horizontal%22%2C%22contentType%22%3A%22UNKNOWN%22%2C%22type%22%3A%22PANEL_GROUP%22%2C%22id%22%3A%22ROOT_LAYOUT%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22UNKNOWN%22%2C%22direction%22%3A%22vertical%22%2C%22id%22%3A%22clq9bkwfz00063b6kf67cvvpe%22%2C%22sizes%22%3A%5B70%2C30%5D%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22EDITOR%22%2C%22direction%22%3A%22horizontal%22%2C%22id%22%3A%22EDITOR%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL%22%2C%22contentType%22%3A%22EDITOR%22%2C%22id%22%3A%22clq9bkwfz00023b6kh6s0k0b3%22%7D%5D%7D%2C%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22SHELLS%22%2C%22direction%22%3A%22horizontal%22%2C%22id%22%3A%22SHELLS%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL%22%2C%22contentType%22%3A%22SHELLS%22%2C%22id%22%3A%22clq9bkwfz00033b6kbwtfiny4%22%7D%5D%2C%22sizes%22%3A%5B100%5D%7D%5D%7D%2C%7B%22type%22%3A%22PANEL_GROUP%22%2C%22contentType%22%3A%22DEVTOOLS%22%2C%22direction%22%3A%22vertical%22%2C%22id%22%3A%22DEVTOOLS%22%2C%22panels%22%3A%5B%7B%22type%22%3A%22PANEL%22%2C%22contentType%22%3A%22DEVTOOLS%22%2C%22id%22%3A%22clq9bkwfz00053b6kn03peu59%22%7D%5D%2C%22sizes%22%3A%5B100%5D%7D%5D%2C%22sizes%22%3A%5B50%2C50%5D%7D%2C%22tabbedPanels%22%3A%7B%22clq9bkwfz00023b6kh6s0k0b3%22%3A%7B%22id%22%3A%22clq9bkwfz00023b6kh6s0k0b3%22%2C%22tabs%22%3A%5B%5D%7D%2C%22clq9bkwfz00053b6kn03peu59%22%3A%7B%22tabs%22%3A%5B%7B%22id%22%3A%22clq9bkwfz00043b6kp717yxhr%22%2C%22mode%22%3A%22permanent%22%2C%22type%22%3A%22UNASSIGNED_PORT%22%2C%22port%22%3A0%2C%22path%22%3A%22%2F%22%7D%5D%2C%22id%22%3A%22clq9bkwfz00053b6kn03peu59%22%2C%22activeTabId%22%3A%22clq9bkwfz00043b6kp717yxhr%22%7D%2C%22clq9bkwfz00033b6kbwtfiny4%22%3A%7B%22tabs%22%3A%5B%5D%2C%22id%22%3A%22clq9bkwfz00033b6kbwtfiny4%22%7D%7D%2C%22showDevtools%22%3Atrue%2C%22showShells%22%3Atrue%2C%22showSidebar%22%3Atrue%2C%22sidebarPanelSize%22%3A15%7D

`increase number` 버튼을 눌러보면 child 컴포넌트는 렌더링되지 않는다. 만약 `Child` 컴포넌트가 `props`의 교체를 구독하고 있었다면 버튼을 눌렀을 떄 렌더링이 이뤄져야 할 것이다.

하지만 `Child` 컴포넌트를 리렌더링해도 `props`로 가지고 있던 값은 바뀌지 않는다.

하지만 `Parent` 컴포넌트를 리렌더링하면 `Child`의 `props`가 변경된 상태로 렌더링이 이루어진다.

즉, 리액트는 `props`의 변경을 구독하고 있지 않다. 정확히는 `props`는 `immutable`하고, 이 `props`는 부모 컴포넌트가 렌더링될 때 가져오는 것이기 때문에 이를 부모의 렌더링 없이 변경하는 것은 불가능하고, `Parent`가 렌더링될 때 비로소 `Child`에게 넘겨주는 `props`가 교체된다.

흔히들 `props`가 변경되면 컴포넌트가 리렌더링된다고 하지만, `props` 변화가 렌더링을 일으키는 것이 아니라, 부모의 렌더링이 이뤄질 때 비로소 자식 컴포넌트의 `props`가 변경되고 이에 맞게 자식의 렌더링이 이루어지는 것이다.

### 리액트에서 배열에 key를 사용해야 하는 이유

key : 리렌더링이 발생하는 동안 형제 요소들 사이에서 동일한 요소를 식별하는 값

- 리렌더링 발생 시 `current` 트리와 `workInProgress` 트리 사이 변경된 컴포넌트 구별하는 식별값
- key 없을 시 파이버 내부의 `sibling` 인덱스만을 기준으로 판단하게 됨

## 렌더와 커밋

### Render

**render** : 컴포넌트를 렌더링하고 변경사항을 계산하는 모든 작업ㄱ

⇒ 렌더링 프로세스에서 컴포넌트를 실행해 결과값을 계산하고(React Element 객체 반환), 해당 값과 이전 가상 DOM을 비교하는 과정을 거쳐 변경이 필요한 컴포넌트를 체크하는 단계

- 크게 `type`, `props`, `key`를 비교하며, 이 중에 하나라도 변경되면 변경이 필요한 컴포넌트로 체크

**초기 렌더**

```tsx
function App() {
  return (
    <main>
      <h1>hello world</h1>
      <Item />
    </main>
  );
}
function Item() {
  return <div>Item </div>;
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
```

`render()` 메소드가 호출되면 리액트는 `createElement()`로 `<main>`, `<h1>`, `<div>` HTML 요소들을 생성한다.

**re-render**

이전에 생성한 가상 DOM 트리와 새로 만든 가상 DOM 트리를 비교해 실제 DOM에 반영할 변경 사항들을 파악한다. (`reconciliation`)

리렌더가 발생하면 리액트는 렌더 간 어떤 요소와 속성들이 변했는지를 파악하고, 이 정보를 커밋 단계에서 사용한다.

### Commit

**commit** : 렌더 단계의 변경 사항을 실제 DOM에 적용해 사용자에게 보여주는 과정

- 렌더에서 변경사항이 감지되지 않는다면 커밋 단계는 생략 가능
- 실제 DOM에 적용한다는 것 ⇒ DOM 노드를 새로 생성, 수정 또는 삭제해 새로운 컴포넌트 트리와 동기화하는 과정

check) 리액트의 렌더링이 일어난다고 해서 무조건 DOM 업데이트가 일어나는 것은 아니다.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 동시성 렌더링

기존 리액트의 렌더링은 항상 동기적으로 작동하기 떄문에 렌더링 과정이 길어질수록 애플리케이션의 성능 저하로 이어지고, 그 시간만큼 브라우저의 다른 작업을 지연시킬 가능성이 있다.

이를 개선하기 위해 React 18에서 동시성 렌더링(= 비동기 렌더링)이 도입됐다.

동시성 렌더링은 렌더 단계가 비동기로 작동해 특정 렌더링의 우선순위를 낮추거나, 중단 및 재시작하거나, 경우에 따라서는 포기할 수도 있다.

React 18버전에서는 기존 리액트의 `render` 대신 `createRoot`로 루트를 생성하게 된다.

동시성은 작업이 겹칠 수 있음을 의미한다.

동시성이 없다는 것은 한 번에 하나의 작업만 할 수 있음을 의미한다.

아래 예시에서 Bob과 전화(= **setState**)하기 위해서는 Alice와의 전화를 마쳐야만 한다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/76784541-cf1f-47f0-9111-f8451ff8eafe/d67d7627-ecf6-4973-9bfb-53209cdbc66d/Untitled.png)

동시성은 한 번에 두 개 이상의 전화를 할 수 있음을 의미한다.

이는 두 사람에게 동시에 전화를 건다는 뜻은 아니다.

다만, 같은 시간 동안 동시에 전화를 두 번 이상 진행하면서도 이중 어떤 전화가 더 중요한지 결정할 수 있다는 의미이다.

예를 들어, Alice를 **대기 상태**로 두고 Bob과 잠시 대화한 다음 다시 Alice와 대화하도록 전환할 수 있다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/76784541-cf1f-47f0-9111-f8451ff8eafe/8706a4ce-e56f-4566-8130-26526c86e5af/Untitled.png)

동시성 렌더링을 통해서 리액트는 렌더링 자체에 개입하고, 이를 중단하거나 재개하고 또는 폐기할 수도 있다.

이로써 리액트는 무거운 렌더링 작업을 하는 동안에도 사용자와의 상호작용에 더 빨리 반응할수 있게 된다.

[Glossary + Explain Like I'm Five · reactwg/react-18 · Discussion #46](https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786)
