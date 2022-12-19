# Web Standards

## 웹 표준이란?

최근 웹 접근성 수준 향상에 대한 요구로 인해 웹 표준에 대한 관심이 고조되고 있다. 웹 접근성 이슈를 통해 웹 표준이 주목을 받고 있는 이유는 웹 접근성 수준을 향상시킬 수 있는 다양한 방법론의 중심이 웹 표준에 있기 때문이다.

 

웹 표준이란, '웹에서 표준적으로 사용되는 기술이나 규칙'을 의미하는데, 웹에서의 표준은 W3C의 토론을 통해 나온 권고안을 말하며, 권고안 이외 단계 수준의 스펙은 비표준이거나 독자 확장 요소를 의미하기 때문에 구분해서 사용해야 한다.



------

## 웹 표준 관련 기술의 소개



![img](https://blog.kakaocdn.net/dn/qBzMK/btrGDLHaRJr/npCV0oThALECSdiH74ewmK/img.png)





### 구조 언어 HTML & XML

HTML은 'HyperText Markup Language'의 약자로, 하이퍼텍스트를 표현하기 위한 마크업 언어라고 정의할 수 있다.

HTML은 태그의 운용법이나 오류의 처리 방법 등이 일반적인 컴퓨터 언어보다 매우 관대하기 때문에 HTML이 빠르게 확산될 수 있었지만, 점점 복잡해지고 다양해지는 웹과 환경에 적용하기에는 어려움이 있었다.

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko-KR">
<head>
  <title>문서 제목</title>
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
</head>
<body>
  <h1>본문 제목</h1>
  <p>본문 내용 1</p>
  <p>본문 내용 2</p>
</body>
</html>
```

 

XML은 'eXtensible Markup Language'의 약자로, 웹에서 구조화된 문서를 전송할 수 있도록 설계된 표준화된 텍스트 형식이다. 인터넷에서 기존에 사용하던 HTML의 한계를 극복하고 SGML의 복잡함을 해결하는 방안으로 HTML에 담겨져 있는 형식적 요소를 완전히 배제하고 순수 데이터 포맷으로 작성되었다. 간단히 말하자면 HTML에 사용자가 새로운 태그를 정의할 수 있는 기능이 추가되었다고 보면 된다.

```
<?xml version="1.0" encoding="utf-8" ?>
<일기장>
  <작성자>김데레사</작성자>
  <날짜>10월 4일</날짜>
  <제목>웹표준</제목>
  <본문>웹표준은 W3C에서 정한 기술 사양을 말합니다.</본문>
</일기장>
```

 

현재 사용하고 있는 HTML5는 HTML4의 다음 버전으로, 특정 플러그인에 의존하지 않고 콘텐츠를 제공하는 것이 목표이다. irefox, Opera, Safari, Chrome 등 최신의 웹 브라우저에서 기본적으로 HTML5를 지원하고 있다.

 

가장 최신 표준인 HTML5에서는 기존 div 요소 외에 다양한 구조 요소를 지원하는데, 새로운 구조 요소에는 header, footer, aside, figure, section, article 등이 있다.





### 표현 언어 CSS

CSS(Cascading StyleSheet)는 HTML 3.2부터 지원하기 시작한 것으로, 웹 제작자와 사용자들의 필요에 의해 특별히 개발되었다. CSS에서는 폰트, 색상, 공백, 공간과 그 밖의 문서 표현 등을 자유롭게 지정할 수 있는 기능을 제공한다.

기존의 HTML은 웹 문서를 다양하게 설계하고 수시로 변경하는 데에 많은 제약이 있었기 때문에 이것을 보완하기 위해 CSS를 만든 것이다.



CSS를 이용하여 웹 페이지의 스타일(작성 형식)을 미리 저장해 두면 웹 페이지의 한 가지 요소만 변경해도 관련되는 전체 페이지의 내용이 한꺼번에 변경되므로 문서 전체의 일관성을 유지할 수 있고, 작업 시간도 단축할 수 있다.

 

따라서 웹 개발자들은 보다 풍부한 디자인으로 웹을 설계할 수 있고, 글자의 크기와 서체, 줄 간격, 배경, 색상, 배열 위치 등을 자유롭게 선택하거나 변경할 수 있게 되었으며, 아울러 유지 보수도 간편해졌다. 또 서로 다른 사용자 환경에서도 같은 형태의 문서를 제공할 수 있다. CSS는 W3C 표준이므로 CSS를 이용하여 만든 문서는 사용자의 웹 브라우저 환경에 따라 홈페이지가 다르게 나타나지 않고, 어느 환경에서나 제작자가 의도한 대로 표현할 수 있다.

```CSS
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-size: 1.4rem;
  font-family: "Spoqa Han Sans";
  font-weight: 400;
  background-color: #fff;
  color: #181818;
}
```





### 동작 및 제어를 위한 DOM & ECMA Script

웹 페이지의 요소를 객체화해서 동작을 제어하는 데 사용하는 웹 표준 기술에는 DOM과 ECMA Script(Javascript)가 있다.

DOM(Document Object Model)은 웹 페이지의 구성 체계를 말하는데, 이것은 HTML을 작성하면서 생성되는 논리적 규칙이다. 웹 브라우저는 이 논리적 구성 체계인 DOM을 해석하여 페이지를 표시하거나 ECMA Script 등의 기술을 통하여 DOM의 구조를 변경할 수 있다. 즉, 사용자 측에서 작동하는 많은 동적 요소들이 DOM을 이용하여 객체 모델에 접근한 후, 스크립트 언어인 ECMA Script를 이용하여 웹 페이지의 요소의 동작을 제어하는 방법으로 작성한 것이다. DOM과 ECMA Script를 이용하면 웹 페이지에 동적인 효과를 적용할 수 있다.

```
function calcRatio() {
  const ratio = this.ratio.split(':');
  const w = ratio[0];
  const h = ratio[1];
  const result = h/w * 100;
  console.log(result);
  return{
    paddingTop: result + '%'
  }
}
```





## 웹 표준의 장점

### 웹접근성 수준의 향상

스크린 리더, 최신의 웹 브라우저, 모바일 등 웹에 접근할 수 있는 환경은 매우 다양하다. 이러한 다양성이 때로는 개발을 어렵게 만드는 원인이 되기도 하지만 이러한 문제는 웹 표준을 준수하는 것 만으로도 쉽게 해결할 수 있다. 웹 표준을 준수한 웹 사이트는 다양한 웹 브라우저나 새로운 기기에서도 올바르게 표시된다.

 

### 검색 친화적인 웹 사이트 구현

meta 요소를 이용한 정확한 문서 정보의 제공과 적절한 제목(heading 요소)의 사용, 의미에 맞는 마크업은 검색 시 결과에 영향을 미칠 수 있는 중요한 정보이다. 따로 홍보를 위한 비용을 지출하지 않더라도 충실하게 작성된 문서 정보만으로도 검색의 효율성을 높일 수 있다.



### 구조와 표현의 분리

테이블(table)을 레이아웃의 용도로 활용하여 사용하던 과거의 방식은 구조와 표현이 뒤섞여 접근 및 사용을 어렵게 하는 원인으로 작용했다. 그러나 웹표준 방법론에서 구조는 HTML이나 XHTML 등의 마크업 언어를 구축하고, 디자인과 같은 표현 정보는 CSS를 이용함으로써 구조와 표현이 분리된 독립적인 구현이 가능하도록 도와준다.

 

### 손쉬운 유지 보수 및 비용 절감 효과

구조와 표현을 분리하여 제작하면 유지 보수 시 많은 이점을 얻을 수 있다. 리뉴얼을 위해 디자인만 변경하고자 할 경우 기존의 마크업 코드는 그대로 재사용하고 디자인을 위한 CSS 코드만 재작성하면 되기 때문이다. 또 구조와 표현을 분리했을 경우, 소스의 경량화로 인해 서버의 트래픽 비용이 감소하는 부수적인 효과도 얻을 수 있다.

### 호환성 확보

올바른 마크업과 CSS를 이용하여 웹 사이트를 제작하면 오래된 버전의 웹 브라우저에서도 콘텐츠가 적절하게 표시되고 웹 표준을 지원하는 최신의 기기나 환경에서도 항상 동일한 결과를 기대할 수 있기 때문에 하위 호환성이나 상위 호환성을 확보할 수 있다.



---

## 참고 

[https://seulbinim.github.io/WSA/standards.html#%EC%9B%B9%ED%91%9C%EC%A4%80%EC%9D%98-%EC%9E%A5%EC%A0%90](https://seulbinim.github.io/WSA/standards.html#웹표준의-장점)