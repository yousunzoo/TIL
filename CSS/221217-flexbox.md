# Flexbox

## Flex (flex box)란?

아이템들을 가로 방향으로 배치할 수 있는 방식으로 요소의 크기가 불분명하거나 동적인 경우에도 각 요소를 정렬할 수 있는 효율적인 방법을 제공함
Flex의 속성은 컨테이너에 적용되는 속성, 아이템에 적용되는 속성으로 나뉨
![img](https://velog.velcdn.com/images%2Fsukong%2Fpost%2F5a3bb83e-7521-451e-add5-0ddb5dbf24ea%2Fimage.png)

### 1. Container에 적용할 수 있는 속성

| 속성            | 의미                                     | 인자                                                         |
| --------------- | ---------------------------------------- | ------------------------------------------------------------ |
| display         | Flex Container 정의                      | **flex**                                                     |
| justify-content | 가로선 상에서의 정렬 방식 (위치)         | **flex-start** : 요소들을 컨테이너의 왼쪽으로 정렬 <br />**flex-end** : 요소들을 컨테이너의 오른쪽으로 정렬<br />**center** : 요소들을 컨테이너의 가운데로 정렬 <br />**space-between** : 요소들 사이에 동일한 간격을 둠 <br />**space-around** : 요소들 주위에 동일한 간격을 둠 |
| align-items     | 세로선 상에서의 정렬 방식 (위치)         | **flex-start** : 요소들을 컨테이너의 꼭대기로 정렬<br />**flex-end** : 요소들을 컨테이너의 바닥으로 정렬 <br />**center** : 요소들을 컨테이너의 세로선 상의 가운데로 정렬 <br />**baseline** : 요소들을 컨테이너의 시작 위치에 정렬 <br />**stretch** : 요소들을 컨테이너에 맞도록 늘림 |
| flex-direction  | 컨테이너 내 요소들의 정렬 방향           | **row** : 요소들을 텍스트의 방향과 동일하게 정렬 <br />**row-reverse** : 요소들을 텍스트의 반대 방향으로 정렬 <br />**column** : 요소들을 위에서 아래로 정렬 <br />**column-reverse** : 요소들을 아래에서 위로 정렬 |
| flex-wrap       | items의 줄 바꿈 설정                     | **nowrap**: 모든 요소를 한 줄에 정렬 <br />**wrap**: 요소들을 여러 줄에 걸쳐 정렬 <br />**wrap-reverse**: 요소들을 여러 줄에 걸쳐 '반대로' 정렬 |
| flex-flow       | flex-direction와 flex-wrap의 단축 속성   | **flex-flow : direction 인자 wrap 인자**                     |
| align-content   | 여러 줄의 간격 지정 (한 줄일 경우 효과X) | **flex-start** : 여러 줄들을 컨테이너의 꼭대기에 정렬 <br />**flex-end** : 여러 줄들을 컨테이너의 바닥에 정렬 <br />**center** : 여러 줄들을 세로선 상의 가운데에 정렬 <br />**space-between** : 여러 줄들 사이에 동일한 간격을 둠 <br />**space-around** : 여러 줄들 주위에 동일한 간격을 둠 <br />**stretch** : 여러 줄들을 컨테이너에 맞도록 늘림 |



### 2. Items에 적용할 수 있는 속성

order, align-self, flex 등

| 속성       | 의미                                                         | 인자                                                    |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| order      | flex item의 순서 결정                                        | 정수 (숫자가 작을수록 앞으로, 클수록 뒤에 위치하게 됨 ) |
| align-self | 해당 아이템의 세로선 상에서의 정렬 방식 (위치) align-self를 개별 요소에 적용할 수 있는 방식 | flex-start, flex-end, center, baseline, stretch         |



### Flexbox 연습할 수 있는 사이트

#### Flexbox Froggy

CSS코드 게임으로 Flexbox의 속성을 요구한 대로 입력하면 다음 단계로 넘어갈 수 있는 게임
Flexbox의 속성을 실습하며 익히기 좋다.

[Flexbox Froggy로 이동](https://flexboxfroggy.com/#ko)