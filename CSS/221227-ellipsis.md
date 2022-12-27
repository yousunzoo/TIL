# CSS에서 ellipsis를 처리하는 방법

웹 페이지를 작성할 때, 디자인적 측면에서 말줄임(`...`)을 사용해야 하는 경우가 있다. 말줄임표를 사용하면 해당 문장이 사실은 더 긴 문장이고 생략되었다는 것을 암시해주는 역할을 한다.





## 한줄 라인 글자수 제한

```html
<div class='txt'>
    안녕하세요. 오랜만입니다. 저는 지금 개발자 부트캠프를 하는 중입니다.
</div>
```

```css
.txt {
    width: 70px;
    padding: 0 5px;
    overflow : hidden;
    text-overflow : ellipsis; /* 말줄임 적용 */
    white-space : nowrap;
}
```

* block 태그에만 적용된다.
* `overflow : hidden` ➡️ 너비가 70px를 넘어서는 내용은 보이지 않게 처리
* `text-overflow : ellipsis` : 글자가 요소의 너비를 넘을 경우 생략부호를 표시함
* `white-space : nowrap` :  공백 문자가 있는 경우 줄바꿈하지 않고 한줄로 나오게 처리함



✔️ overflow, text-overflow, white-space 를 함께 사용해야 ellipsis가 적용된다!





## 멀티 라인 글자수 제한

```html
<div class="txt">
    어제 밤에 우리 아빠가 다정하신 모습으로 한 손에는 크레파스를 사가지고 오셨어요 음음 그릴 것은 너무 많은데 하얀 종이가 너무 작아서 아빠 얼굴 그리고 나니 잠이 들고 말았어요 음음
</div>
```

```css
.txt {
    display : -webkit-box;
    overflow : hidden;
    text-overflow : ellipsis;
    -webkit-line-clamp : 3; /* 라인 수 */
    -webkit-box-orient : vertical;
    word-wrap : break-word;
}



```

* `display : -webkit-box` : 해당 영역을 box 형태로 관리되도록 함
* `-webkit-line-clamp` : 지정된 라인 수로만 컨텐츠 내용을 제한하는 기능
  * `webkit` 기반의 속성을 지원하지 않는 브라우저에서는 이 속성이 동작하지 않는다.
* `-webkit-box-orient : vertical` : 영역 박스 내의 정렬을 수직으로 하도록 함
* `white-space : no-wrap`은 꼭 제거해줘야 한다.





---

## 참고

* [말줄임 표시 하는 방법](https://deeplify.dev/front-end/markup/text-ellipsis)
* [text-overflow : ellipsis 두줄 이상 처리](https://velog.io/@syoung125/CSS-text-overflow-ellipsis-%EB%91%90%EC%A4%84-%EC%9D%B4%EC%83%81-%EC%B2%98%EB%A6%AC)
