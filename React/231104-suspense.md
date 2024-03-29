# Suspense 컴포넌트

## 🧐 Suspense, 왜 필요한가

React에서 비동기 데이터를 읽어오는 컴포넌트를 작성하면 몇 가지 문제가 발생하게 된다.

우선 최종 사용자(end user) 경험 측면에서 UI가 마치 폭포(**waterfall**)처럼 순차적으로 나타나는 현상이 나타날 수 있다.

waterfall 현상은 특히 한 페이지 상의 여러 컴포넌트에서 동시에 비동기 데이터를 읽어오는 경우 자주 발생한다. 상위 컴포넌트의 데이터 로딩이 끝나야지만 하위 컴포넌트의 데이터 로딩이 시작될 수 있기 때문에 일어난다.

뿐만 아니라 초기 랜더링 후에 데이터 로딩 후 다시 랜더링을 수행하는 방법은 **경쟁 상태**에도 취약하다. 비동기 통신은 반드시 요청한 순서대로 데이터가 응답된다는 보장이 없기 때문에 의도치 않게 싱크가 맞지 않은 데이터를 제공할 수도 있다.

마지막으로, 서버로부터 데이터를 불러온다던가 데이터를 로딩하는데 오래걸릴 때 컴포넌트에 일일이 if(!data || isLoading) return <Loading /> 같은 일종의 가드 코드를 작성한 적이 있을 것이다. 근데 if 조건문을 사용하여 컴포넌트를 보여줄지를 제어하는 것은 명령형 코드에 가깝기 때문에 선언적 코드를 지향하는 React의 기본 방향성과 맞지 않게 느껴진다. 좀 더 React스럽게 작성할 수 있는 방법이 있지 않을까?

그래서 등장했습니다. Suspense✨ (React 18부터 도입)

## ⚛️ Suspense

Suspense 는 React에서 비동기 작업을 관리하기 위한 기능이다. Suspense 는 컴포넌트가 일부 데이터를 기다리고 있음을 나타낼 수 있다.

Suspense 는 Promise 를 throw한다. Promise가 resolve 되거나 reject 될 때 까지 컴포넌트의 트리의 생성을 연기한다. 컴포넌트 트리의 생성을 연기하는 동안 해당 컴포넌트는 DOM에 존재하지 않게 된다. 컴포넌트 트리 생성이 완료되지 않은 컴포넌트는 커밋되지 않는다. 따라서 컴포넌트 트리 생성이 완료되고 DOM 트리에 배치되며 브라우저 화면에 업데이트 되기 때문에 생명주기 이벤트가 불일치 하는 일이 발생하지 않는다.

중요한 사실은 Suspense가 데이터를 페칭하는 라이브러리도 아니고, 상태를 관리하는 라이브러리도 아니다. 컴포넌트 일부 데이터의 비동기 작업(예를 들어 데이터 페칭)을 기다리는 동안 단순한 fallback 컴포넌트를 **선언적**으로 렌더링할 수 있다.

### ⚛️ Suspense 기본 문법

```
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

컴포넌트를 Suspense로 감싸주면 컴포넌트의 렌더링을 특정 작업 이후로 미루고, 그 작업이 끝날 때 까지는 fallback 속성으로 넘긴 컴포넌트를 대신 보여줄 수 있다.
