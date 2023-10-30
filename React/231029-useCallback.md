# useCallback이란 무엇인가

## ✨ useCallback

컴포넌트 내부에서 함수를 생성하는 경우, 매 렌더링마다 새로운 함수가 생성되어 성능에 영향을 미칠 수 있다. 이러한 경우에 useCallback 훅을 사용하면 함수를 메모이제이션하여 불필요한 함수 생성을 방지할 수 있다.

컴포넌트의 최상위 수준에서 useCallback을 호출하여 재렌더링 사이에 함수 정의를 캐시할 수 있다.

### 📌 매개변수

```
useCallback(fn, dependencies)
```

- fn : 캐시하려는 함수 값

  - 모든 인수를 취하고 모든 값을 반환할 수 있다.
  - React는 초기 렌더링 중에 함수를 반환합니다(호출이 아님!).
  - 다음 렌더링에서 React는 마지막 렌더링 이후 deps가 변경되지 않은 경우 동일한 함수를 다시 제공한다.
  - deps가 변경된 경우 현재 렌더링 중에 전달한 함수를 제공하고 나중에 재사용할 수 있도록 저장한다.

- dependencies : fn 코드 내에서 참조되는 모든 반응 값 목록
  - 반응형 값에는 컴포넌트 body 내에서 직접 선언된 props, 상태 및 모든 변수와 함수가 포함된다.
  - linter가 React에 대해 구성된 경우 모든 반응 값이 종속성으로 올바르게 지정되었는지 확인한다.
  - React는 Object.is 비교 알고리즘을 사용하여 각 종속성을 이전 값과 비교한다.

### 📌 주의 사항

- useCallback은 Hook이므로 구성 요소 또는 Custom Hook의 최상위 수준에서만 호출할 수 있다. 루프나 조건 내에서 호출할 수 없다.   
  React는 특별한 이유가 없는 한 캐시된 함수를 버리지 않는다. 개발 및 프로덕션 모두에서 React는 초기 마운트 중에 컴포넌트가 일시 중단되면 캐시를 삭제한다.
- useCallback을 성능 최적화로 사용하는 경우 이는 예상과 일치해야 한다. 그렇지 않으면 상태 변수 또는 ref가 더 적절할 수 있다.

### 📌 사용 예시

```
function Counter({ increment }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    increment(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

위 코드에서 handleClick 함수는 매 렌더링마다 새로운 함수가 생성된다. 이를 방지하기 위해 useCallback을 사용하여 함수를 메모이제이션할 수 있다.

```
function Counter({ increment }) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    increment(count + 1);
  }, [count, increment]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

handleClick 함수를 useCallback으로 감싸면, 이 함수는 count와 increment에 의존하게 된다. 이제 count나 increment가 변경될 때마다 새로운 함수를 생성하게 된다.

useCallback은 useMemo와 마찬가지로 불필요한 함수 생성을 방지하여 성능을 향상시킬 수 있다.

그러나 모든 함수에 useCallback을 적용하는 것은 필요하지 않을 수 있다. 오히려 메모리를 낭비하는 꼴이 될 수도 있다.

함수가 매우 간단하거나 렌더링 성능에 큰 영향을 미치지 않는 경우에는 useCallback을 적용하지 않는 것이 좋다.

### ✅ useMemo? useCallback?

React에서 useMemo와 useCallback은 모두 성능 최적화를 위한 Hook이다.

**useMemo**는 계산 결과를 캐시하여 같은 계산이 중복되어 실행되지 않도록 하고, 이전에 계산된 값을 재사용할 수 있도록 한다. 이는 복잡한 계산이나 렌더링 작업을 최적화하거나, 불필요한 렌더링을 방지할 때 유용하다.

```
const memoizedValue = useMemo(() => expensiveComputation(a, b), [a, b]);​
```

expensiveComputation 함수가 복잡한 계산을 수행하는 경우, a와 b가 변경되었을 때만 expensiveComputation 함수가 호출되고 그 외의 경우에는 이전에 계산된 결과가 반환된다.

반면, **useCallback**은 콜백 함수를 메모이제이션하여 불필요한 함수 생성을 방지하고, 자식 컴포넌트에게 콜백 함수를 전달할 때 유용하다.

```
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

memoizedCallback 함수는 a와 b가 변경되지 않으면 이전에 생성된 함수를 사용한다. 이전에 생성된 함수를 사용하므로 자식 컴포넌트에게 전달된 콜백 함수가 변경되지 않아도 된다.

따라서, **useMemo**는 계산 결과를 캐시하고 재사용하는데 사용되며, **useCallback**은 콜백 함수를 메모이제이션하여 불필요한 함수 생성을 방지하는데 사용된다.
