# DOCTYPE

문서 타입 정의(Document Type Declaration) 또는 DOCTYPE이란 어떤 SGML이나 XML 기반 문서 내에 그 문서가 특정 문서 형식 정의(DTD)를 따름을 지정하는 것이다.

본래 DTD에 기반한 SGML 도구를 이용해 <b>문서 해석 가능성과 유효성을 검사</b>하기 위한 목적으로 문서 내에 삽입되었다.



즉, 내가 작성하려는 **HTML 문서가 어떤 문서 형식을 갖고 있는지 선언**해주는 것을 말한다.



* SGML (Standard Generalized Markup Language) : 다른 마크업 언어를 기술하는 또 다른 마크업 언어 (HTML2~4에서 사용)
* XML (Extensible Markup Language) : W3C에서 개발한 마크업 언어를 만드는데 사용되는 다목적 마크업 언어



✔️ 웹 브라우저에서는 문서 형식 선언이 없으면 **쿼크 모드**로 렌더링을 해서 각 브라우저마다 다른 형태의 결과물을 보여주게 되는데, 이것을 방지하기 위해 문서 형식 선언을 하고 그로 인해 HTML 문서를 표준모드로 렌더링 할 수 있게 된다.

➡️ 크로스 브라우징



* 쿼크 모드 : 오래된 웹 페이지의 하위 호환성 유지를 위해 사용되며, W3C나 IETF의 표준을 엄격하게 준수하지 않는다. 같은 코드라도 웹 브라우저마다 다르게 해석해서 다른 결과물을 보여준다.



### DTD 종류

#### HTML5 DOCTYPE 선언

HTML5에서는 SGML에 기반을 두지 않아 DTD 참조가 필요 없으며, 최소한의 코드 작성이 기본 사항이라 매우 간단히 선언할 수 있다.

```html
<!DOCTYPE html>
```



#### XHTML 1.0 DOCTYPE 선언

##### Strict DTD

W3C가 의도했던 문서 타입으로, 구조와 표현을 분리하기 위해 단계적으로 사라질 표현에 관한 요소와 속성을 배제한 문서 타입.

center, font, iframe, strike, u, 새 창 띄우기 등이 제한된다.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1-strict.dtd">
```





##### Transitional DTD

기존에 만들어진 문서들과의 호환성을 유지하기 위해 사용한다.

iframe과 새 창 띄우기 등을 사용할 수 있어 XHTML 사용 시 transitional DTD 추천.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1-transitional.dtd">
```



##### Frameset DTD

현재는 거의 사용하지 않는 frameset을 구현하기 위해서 사용한다.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1-frameset.dtd">
```




