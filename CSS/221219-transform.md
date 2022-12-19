# Transform

CSS `transform` 속성으로 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다. `transform`은 CSS 시각적 서식 모델의 좌표 공간을 변경한다.



## 작성 방법

`transform : 변환함수1 변환함수2 변환함수3 ...;`

`transform : 원근법 translate(이동) scale(크기) rotate(회전) skew(기울임);`



## 2D 변환 함수

* `translate(x,y)` : 이동(x축, y축)
* `translateX(x)` : 이동(x축)
* `translateY(y)` : 이동(y축)
* `scale(x, y)` : 크기(x축, y축)
* `scaleX(x)` :  크기(x축)
* `scaleY(y)` : 크기(y축)
* `rotate(deg)` : 회전(각도)
* `skew(x, y)` : 기울임(x축, y축)
* `skewX(x)` : 기울임(x축)
* `skewY(y)` : 기울임(y축)
* `matrix(n,n,n,n,n,n)` : 2차원 변환 효과
  * 기본적으로 브라우저 내에서 `matrix`라는 함수로 변환 함수가 동작하지만, 사용자의 편의를 위해 `translate`, `scale`, `rotate`, `skew`의 개별적인 변환 함수를 사용한다.



`translate`의 단위는 `px`, `scale`의 단위는 없음(배수), `rotate`의 단위는 `deg`이다.



## 3D 변환 함수

* `translateZ(z)` : 이동(z축)
* `translate3d(x, y, z)` : 이동(x축, y축, z축)
* `scaleZ(z)` : 크기(z축)
* `scale3d(x, y, z)` : 크기(x축, y축, z축)
* `perspective(n)` : 원근법(거리)
* `rotateX(x)` : 회전(x축)
* `rotateY(y)` : 회전(y축)
* `rotateZ(z)` : 회전(z축)
* `rotate3d(x, y, z, a)` : 회전(x축, y축, z축, 각도)
* `matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)` : 3차원 변환 효과



### Perspective (투영점)

`transform`의 함수가 아닌 CSS의 속성.



`perspective()`의 값은 '해당 물체를 내가 얼마나 떨어져서 보고 있는가'를 나타낸다. 즉, 500px만큼 떨어져서 보고 있는 셈이다.

이 값이 작으면 작을 수록 더 가까이에서 보는 것으로 처리되어 원근감이 더 극적으로 나타나게 된다.

![perspective-distance](https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2014/12/perspective-distance.png)



위 이미지에서 파란색 원형은 3d 공간 상의 물체이다.

d는 보는 사람과 화면과의 거리이고(=`perspective`) Z는 z축 상 요소의 위치를 의미한다.

d가 작을 수록 원형이 더 극적으로 보이는 것을 알 수 있다.



#### perspective 속성과 함수 차이점

| 속성 / 함수                      | 적용 대상        | 기준점 설정          |
| -------------------------------- | ---------------- | -------------------- |
| `perspective : 600px;`           | 관찰 대상의 부모 | `perspective-origin` |
| `transform : perspective(600px)` | 관찰 대상        | `transform-origin`   |



### backface-visibility

3D 변환으로 회전된 요소의 뒷면 숨김 여부를 결정한다.

* `visible` : 뒷면 보임(기본값)
* `hidden` : 뒷면 숨김



---

## 참고

[https://tympanus.net/codrops/css_reference/perspective/](https://tympanus.net/codrops/css_reference/perspective/)