# 우당탕탕 커스텀 Select 만들기

## 마주친 문제

`ant-design` Select를 걷어내기 위해 커스텀 Select를 만들고 있었습니다.

```tsx
const SpaceSelect = ({ onChange }: SpaceSelectProps) => {
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [isSelectOpen, setIsSelectOpen] = useOutsideClick(selectRef, false);

  ...

  const handleOptionClick = (selectedValue: string | number) => () => {
    onChange(selectedValue); // 여기!
    setIsSelectOpen(false);
  };

  return (
    <S.SpaceSelectContainer>
      <S.SelectedOption onClick={handleSelectClick} $isDisabled={isDisabled}>
        <S.SelectedText>{isDisabled ? options[0].label : selectedLabel}</S.SelectedText>
        <DownArrow stroke={styledTheme.blueGray[300]} />
      </S.SelectedOption>

      <S.SelectContainer ref={selectRef} $isActive={isSelectOpen}>
        <S.Select>
          {options.map(({ value, label, key }) => (
            <S.SelectOption key={key} onClick={handleOptionClick(value)}>
              <span>{label}</span>
            </S.SelectOption>
          ))}
        </S.Select>
      </S.SelectContainer>
    </S.SpaceSelectContainer>
  );
};

export default SpaceSelect;
```

`onChange`는 select option이 변경됨에 따라 `setState`를 해주는 함수인데요!

데이터의 타입에 따라 매개변수 `value`는 `string` 또는 `number`가 됩니다.

그래서 저는 처음에 `onChange`의 타입을 다음과 같이 지정해줬어요.

## 🧐 1트

```tsx
export type SpaceSelectProps = {
	onChange: (value: string | number) => void;
};
```

그랬더니 props로 onChange 함수를 내려줬을 때 다음과 같은 에러가 발생했습니다.

<aside>
🚨 Type '(value: string) => void' is not assignable to type '(value: string | number) => void'.

</aside>

함수의 매개변수는 반공변성을 따르기 때문에 `(x: string | number) ⊂ (x: string)` 처럼 넓은 타입을 좁은 타입에 대입해야 해서 에러가 발생한 것이었습니다.

(참고 : [https://inpa.tistory.com/entry/TS-📘-타입스크립트-공변성-반공변성-💡-핵심-이해하기](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B3%B5%EB%B3%80%EC%84%B1-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-%F0%9F%92%A1-%ED%95%B5%EC%8B%AC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0))

그래서 타입을 다음과 같이 수정해봤어요.

## 🧐 2트

```tsx
type ChangeSelect1 = (value:string) => void;
type ChangeSelect2 = (value:number) => void;

export type SpaceSelectProps = {
  onChange: ChangeSelect1 | ChangeSelect2
};

const SpaceSelect = ({ onChange }: SpaceSelectProps) => {
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [isSelectOpen, setIsSelectOpen] = useOutsideClick(selectRef, false);

  ...

  const handleOptionClick = (selectedValue: string | number) => () => {
    onChange(selectedValue); // 🚨 에러 발생
    setIsSelectOpen(false);
  };

```

이제는 props에서의 오류가 사라지고 onChange를 호출할 때 에러가 발생하게 되었습니다.

<aside>
🚨 Argument of type 'string | number' is not assignable to parameter of type 'never'.

</aside>

컴포넌트 안에서 onChange의 타입을 확인해보니 `(value : never) ⇒ void` 로 찍히고 있었어요!

찾아보니 `TypeScript`가 함수 타입을 `union` 으로 결합할 때, 서로 다른 매개변수 타입을 가진 함수 타입에 대해 런타임 시점에서 어떤 유형의 함수가 전달될지를 정확하게 추론할 수 없으므로 `never` 타입을 사용한다고 합니다.

## 🧐 최종 ver.

```tsx
const SelectContainer = () => {
	// 동 상태 변경
	const handleDongChange = (value: string) => {
		// setState 로직
	};

	// 호 상태 변경
	const handleHoChange = (value: number) => {
		// setState 로직
	};
	return (
		<div>
			<Select onChange={handleChange1} />
			<Select onChange={handleChange2} />
		</div>
	);
};

export default SelectContainer;
```

```tsx
export type SpaceSelectProps<T> = {
	value: T;
	isDisabled?: boolean;
	options: { label: string; value: T; key: T }[];
	onChange: SelectChange<T>;
};

const SpaceSelect = <T extends string | number>({ value, isDisabled, options, onChange }: SpaceSelectProps<T>) => {
	const selectRef = React.useRef<HTMLDivElement>(null);
	const [isSelectOpen, setIsSelectOpen] = useOutsideClick(selectRef, false);

	const handleSelectClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		if (isDisabled) return;
		setIsSelectOpen((prev) => !prev);
	};

	const selectedLabel = options.find((option) => option.value === value)?.label;

	const handleOptionClick = (selectedValue: T) => () => {
		onChange(selectedValue);
		setIsSelectOpen(false);
	};

	return (
		<S.SpaceSelectContainer>
			<S.SelectedOption onClick={handleSelectClick} $isDisabled={isDisabled}>
				<S.SelectedText>{isDisabled ? options[0].label : selectedLabel}</S.SelectedText>
				<DownArrow stroke={styledTheme.blueGray[300]} />
			</S.SelectedOption>

			<S.SelectContainer ref={selectRef} $isActive={isSelectOpen}>
				<S.Select>
					{options.map(({ value, label, key }) => (
						<S.SelectOption key={key} onClick={handleOptionClick(value)}>
							<span>{label}</span>
						</S.SelectOption>
					))}
				</S.Select>
			</S.SelectContainer>
		</S.SpaceSelectContainer>
	);
};

export default SpaceSelect;
```

제네릭을 사용해서 함수의 매개변수를 동적으로 설정하도록 세팅했습니다.

다만, value는 string | number 타입이여야 하므로 `extends` 구문을 사용해 제약조건을 걸어줬습니다.

[화면 기록 2023-11-01 오후 11.39.04.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/985439c2-c6eb-4961-875d-0c60d2cd75a9/21734254-5935-472e-9393-5d0b6e83cd94/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2023-11-01_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.39.04.mov)

더 이상 타입 에러가 발생하지 않고, 컴포넌트도 잘 동작하는 것을 볼 수 있어요. 야호! 🤸‍♂️
