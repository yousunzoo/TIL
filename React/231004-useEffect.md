# useEffect란 무엇인가

모든 리액트 컴포넌트에는 생명주기가 존재한다.  
생명주기의 때에 따라 어떤 작업을 처리해야 하는지 지정해줘야 불필요한 업데이트를 방지할 수 있다.  
리액트의 생명 주기 메서드와 useEffect에 대해서 알아보자.🏃‍♀️

---

## ♻️ 생명 주기 메서드

![생명 주기 메서드](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbboNpw%2Fbtr37BIFOh6%2FjatVkTcjag1ijZhh9bLkt0%2Fimg.jpg)

컴포넌트는 생성(mounting) ➡️ 업데이트(updating) ➡️ 제거(unmounting)의 생명주기를 갖는다.

클래스형 컴포넌트에서는 생명 주기 메서드를 통해 생명 주기를 관리한다.

### 🌱 1. 마운트(Mount)

➡️ 컴포넌트의 인스턴스가 생성되어, DOM에 삽입될 때 순서대로 호출된다.

**◼️ constructor()**

컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드.  
this.props, this.state에 접근할 수 있으며 리액트 요소를 반환한다.

\***\*◼️** getDerivedStateFromProps()\*\*

props에 있는 값을 state에 동기화 시킬 때 사용하는 메서드

\***\*◼️** render()\*\*

UI를 렌더링하는 메서드

\***\*◼️** componentDidMount()\*\*

컴포넌트가 웹 브라우저 상에 나타난 후 즉 첫 렌더링을 마친 후에 호출하는 메서드  
라이브러리나 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval과 같은 **비동기 작업**을 처리하면 되고, setState 호출도 이 메서드에서 호출하는 경우가 많다.

### 🌿 2. 업데이트(Update)

➡️ props나 state가 변경되면 render가 진행되며 순서대로 호출된다.

\***\*◼️** getDerivedStateFromProps()\*\*

마운트 과정에서 호출되며, 업데이트가 시작하기 전에도 호출된다.  
props의 변화에 따라 state 값에도 변화를 주고 싶은 경우에 사용한다.

\***\*◼️** shouldComponentUpdate()\*\*

props또는 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드.  
true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하면 작업을 중지한다.

\***\*◼️** render()\*\*

컴포넌트를 리렌더링하는 메서드.

\***\*◼️** getSnapshotBeforeUpdate()\*\*

컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드.

\***\*◼️** componentDidUpdate()\*\*

컴포넌트 업데이트 작업이 끝난 후 호출하는 메서드.

### 🍂 3. 언마운트 (Unmount)

➡️ 컴포넌트를 DOM에서 제거하는 과정

\***\*◼️** componentWillUnmount()\*\*

컴포넌트를 DOM에서 제거할 때 실행한다.  
componentWillUnmount 이후에 컴포넌트는 다시 렌더링 되지 않으므로, 여기에서 setState()를 호출하면 안된다.

## ✨ useEffect

useEffect는 리액트 컴포넌트가 렌더링 될때마다 특정 작업(side effect)을 실행할 수 있도록 하는 hook이다.  
component가 mount, update, unmount됐을 때 작업을 처리할 수 있다.

또한 useEffect는 클래스 컴포넌트에서 사용하는 생명 주기 메소드의 네가지 메소드의 기능을 모두 수행한다.  
(componentDidMount, componentDidUpdate, componentWillUnmount, getDerivedStateFromProps)

> ⏰ **useEffect가 실행되는 타이밍**  
> 컴포넌트 렌더링 - 화면 업데이트 - useEffect 실행  
> ➡️ 최초 렌더링 이후에 useEffect가 실행됨!
>
> ❗️ **화면을 다 그리기 이전에 동기화하는 방법**  
> **➡️** useLayoutEffect를 활용하여 컴포넌트 렌더링 - useLayoutEffect 실행 - 화면 업데이트 순으로 effect를 실행시킬 수 있다.

#### **📂** useEffect 함수 불러오기

```
import React, { useEffect } from "react";
```

**1\. Component가 Mount 되었을 때(나타날 때)**

```
  useEffect(() => {
    console.log("렌더링 될때마다 실행");
  });
```

deps 부분을 생략한다면 해당 컴포넌트가 렌더링 될 때마다 useEffect가 실행된다.

만약 맨 처음 렌더링 될 때 한 번만 실행하고 싶다면 deps 위치에 빈 배열을 넣어준다.

```
  useEffect(() => {
    console.log("맨 처음 렌더링될 때 한 번만 실행");
  },[]);
```

**2\. Component가 Update 되었을 때(props, state 변경)**

```
  useEffect(() => {
    console.log(name);
    console.log("name이라는 값이 업데이트 될 때만 실행");
  },[name]);
```

특정값이 업데이트될 때만 실행하고 싶을 때는 deps위치의 배열 안에 실행 조건을 넣어준다.

업데이트 뿐만 아니라 마운트 될 때도 실행되므로 업데이트될 때만 실행시키고 싶다면 아래와 같은 방법을 사용한다.

```
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log(name);
      console.log("업데이트 될 때마다 실행");
    }
  }, [name]);
```

**3\. Component가 Unmount 되었을 때(사라질 때) & Update 되기 직전에**

```
  useEffect(() => {
    console.log("컴포넌트 나타남");
    console.log(name);
    return () => {
      console.log("cleanUp 함수");
    };
  });
```

useEffect 안에서의 return은 정리 함수(clean-up)를 사용하기 위해 쓰인다.

1.  메모리 누수 방지를 위해 UI에서 컴포넌트를 제거하기 전에 수행
2.  state에 의해 컴포넌트가 재렌더링되면 다음 effect가 수행되기 전에 이전 effect 정리

Unmount 될 때만 clean-up 함수를 실행시키고 싶다면 deps에 빈 배열을, 특정 값이 업데이트되기 직전에 clean-up 함수를 실행시키고 싶다면 deps에 해당 값을 넣어주면 된다.
