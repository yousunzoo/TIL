## 4.4 Exhaustiveness Checking으로 정확한 타입 분기 유지하기

> Exhaustiveness : 철저함, 완전함, 남김 없음
> 

`**Exhaustiveness Checking**`을 통해 예상치 못한 런타임 에러를 미연에 방지할 수 있게 됩니다.

```tsx
type Animal = 'puppy' | 'sparrow' | 'capybara'

const makeAnimalSounds = (target: Animal) => {
  switch (target) {
    case 'puppy':
      return '강아지 줍줍';
    case 'sparrow':
      return '참새 줍줍';
    case 'capybara':
      return '카피바라 줍줍';
    default:
      throw new Error('동...물..?!');
  }
};
```

`Animal`이라는 타입을 정의했고, 각 `Union` 타입마다 특정한 값을 반환합니다.

하지만, 만약 `Animal`이 갖는 타입이 추가되거나 변할 수 있다면 어떻게 될까요?

```tsx
type Animal = 'puppy' | 'sparrow' | 'capybara' | 'squirrel'
```

`squirrel` 이 `Animal` 타입에 추가되었지만, `squirrel`에 대한 분기문 처리가 되어있지 않으므로 `Error`가 `throw`될 것입니다.

문제는 해당 에러를 컴파일 단계에서 잡을 수 없다는 것입니다.

엥 그럼 타스 왜 쓰는 거임 ㅇㅅㅇ

침착하세요! 위와 같은 문제를 `Exhaustiveness Checking`으로 해결할 수 있습니다.

```tsx
type Animal = 'puppy' | 'sparrow' | 'capybara' | 'squirrel'

const exhaustiveCheck = (param: never) => {
  throw new Error('동...물..?!');
};

const makeAnimalSounds = (target: Animal) => {
  switch (target) {
    case 'puppy':
      return '강아지 줍줍';
    case 'sparrow':
      return '참새 줍줍';
    case 'capybara':
      return '카피바라 줍줍';
    default:
      exhaustiveCheck(target); // ERROR
			// Argument of type 'string' is not assignable to parameter of type 'never'.
  }
};
```

`exhaustiveCheck`는 인자로 `never` 타입을 갖습니다. `never` 타입은 `never` 타입을 제외한 어떤 타입도 할당할 수 없다는 거! 기억나시나요? 그렇기 때문에 `target`이 `never` 타입이 아닌 타입으로 추론될 경우에 TypeScript에서 에러 메시지를 출력하게 됩니다.

이를 해결하려면 철저하게 모든 케이스에 대해 분기 처리를 해줘야 합니다.

이 코드를 어디에 적용할 수 있을까요?

```tsx
// LoanApplyItem/index.tsx

const detailPath = (() => {
    switch (rateType) {
      case LOAN_TYPE.신용대출:
        return {
          pathname: '/creditLoan/result/product',
          query: { loReqtNo: rateId },
        };
      case LOAN_TYPE.개인회생자대출:
        return {
          pathname: '/revive-loan/result/product',
          query: { loReqtNo: rateId },
        };
      case LOAN_TYPE.주택담보대출:
        return {
          pathname: '/loans/result/agree',
          query: { id: rateId, code: 'all' },
        };
      default:
        throw new Error('해당 대출 타입이 존재하지 않습니다.');
    }
  })();
```

조회하기 페이지에서 대출 타입에 따라 다른 `detailPath`를 반환하는데요!

현재 상황에서는 `신용`, `개인회생`, `주택담보` 이렇게 세가지만 쓰이지만 추후 `자동차담보` 등이 추가될 때를 대비해 다음과 같이 `exhaustiveCheck` 유틸 함수를 도입하면 어떨까요?🙂

```tsx
const exhaustiveCheck = (errorMessage: string, param: never) => {
  throw new Error(errorMessage);
};
```

번외로, `eslint`에 `['@typescript-eslint/switch-exhaustiveness-check'](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)` 을 추가해 `exhaustiveness check`를 강제하도록 할 수 있다고 하네요!
