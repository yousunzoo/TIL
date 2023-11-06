## 🔍 styled-components css

styled-components에서 제공하는 css는 보간이 포함된 템플릿 리터럴에서 CSS를 생성하는 헬퍼 함수입니다.

주로 컴포넌트에 props의 값에 따라 바꾸고 싶은 CSS 속성이 여러 개일 경우에 css 함수를 사용해서 여러 개의 CSS 속성을 묶어서 정의할 수 있습니다.

## 💬 마주친 문제

부동산 상세 조회 페이지에서 시세 그래프 코드에서 문제가 일어난 부분을 간단하게 작성해봤습니다.

기존 코드 리팩토링을 진행하면서, 변경된 테마에 맞춰 `styleTheme`을 사용해서 색상을 지정하려고 했습니다.

https://codesandbox.io/embed/styled-component-theme-pn2emy?fontsize=14&hidenavigation=1&theme=dark

`tooltipEl.style = containerStyle` 에서는 배경색이 정상적으로 적용되었지만,

`tooltipEl.style = containerStyleWithVariable` 에서는 배경색이 적용되지 않는 것을 확인할 수 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/985439c2-c6eb-4961-875d-0c60d2cd75a9/d0d6c7b9-7dbb-4f33-b949-b9714a46914f/Untitled.png)

css 함수를 사용해 작성된 스타일 변수를 콘솔에 한번 찍어볼까요?

![스크린샷 2023-11-08 오전 1.18.06.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/985439c2-c6eb-4961-875d-0c60d2cd75a9/dea0d7b9-eb6f-4668-ae4c-ce3e6134e51b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-11-08_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.18.06.png)

`containerStyle`은 하나의 문자열로 출력되는 반면, 변수를 사용한 `containerStyleWithVariable`은 변수를 기준으로 문자열이 쪼개지는 것을 확인할 수 있습니다.

이렇게 쪼개진 배열을 element.style에 할당하려고 하니~~~ 동작을~~~~ 안 하는 거였어요!!!!!

결론) css 헬퍼 함수는 styled-components 안에서만 사용하자.

여러분은 속 편하게 아예 문자 리터럴로 작성하거나 객체로 작성하세요~!

(물론 js 환경에서는 자동 완성도 안되고,,, 귀찮고,,, 하지만 타스 환경에서는 CSSProperties 사용하면 되니깐요~!)
