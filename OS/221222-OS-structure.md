# 운영체제 구조

## 시스템 콜

### 응용 프로그램, 운영체제, 컴퓨터 하드웨어 관계

#### 도서관으로 비유하기

* 운영체제는 도서관
* 응용 프로그램은 시민
* 컴퓨터 하드웨어는 책
* 운영체제의 역할
  * 시민은 도서관에 원하는 책(자원)을 요청함
  * 도서관은 적절한 책(자원)을 찾아서, 시민에게 빌려줌
  * 시민의 대여 기한이 다 되면, 도서관이 해당 책(자원)을 회수함



✔️ 운영체제는 응용 프로그램이 요청하는 메모리를 허가하고, 분배한다.

✔️ 운영체제는 응용 프로그램이 요청하는 CPU 시간을 제공한다.

✔️ 운영체제는 응용 프로그램이 요청하는 IO Devices 사용을 허가/제어한다.

![Operating systems](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/800px-Operating_system_placement.svg.png)



### 운영체제는 사용자 인터페이스를 제공

#### **쉘 (Shell)**

* 사용자가 운영체제 기능과 서비스를 조작할 수 있도록 인터페이스를 제공하는 응용 프로그램
* 쉘은 터미널 환경(CLI)과, GUI 환경 두 종류로 분류



### 운영체제는 응용 프로그램을 위해서도 인터페이스를 제공

#### API (Application Programming Interface)

* 각 언어 별 운영체제 기능 호출 인터페이스 함수 (각 언어 별 인터페이스)
* 응용 프로그램과 운영체제 사이에 위치함
* API 문서에는 개발자가 요청과 응답을 구성하는 방법에 대한 정보가 들어 있음

* 보통은 함수의 기능을 묶어 라이브러리 (library) 형태로 제공
  * C library



#### 시스템 콜

* 시스템 콜 또는 시스템 호출 인터페이스
* API (library)와 운영체제 사이에 위치
* 운영체제 기능을 호출하는 함수
* API 내부에는 시스템 콜을 호출하는 형태로 만들어지는 경우가 대부분



##### 운영체제를 만든다면?

1. 운영체제를 개발한다. (kernel)
2. 시스템 콜을 개발
3. 프로그래밍 언어로 된 API (library) 개발 (보통 C언어 사용)
4. API를 가지고 Shell 프로그램 개발
5. 응용 프로그램 개발



##### 운영체제와 시스템 콜

* 시스템 콜 정의 예
  * POSIX API, 윈도우 API



### 정리

* 운영체제는 컴퓨터 하드웨어와 응용 프로그램을 관리한다.
* 사용자 인터페이스를 제공하기 위해 쉘 프로그램을 제공한다.
* 응용 프로그램이 운영체제 기능을 요청하기 위해서, 운영체제는 시스템 콜을 제공한다.
  * 보통 시스템 콜을 직접 사용하기 보다는, 해당 시스템 콜을 사용해서 만든 각 언어 별 라이브러리(API)를 사용한다.



---



## 사용자 모드와 커널 모드

### CPU Protection Rings

* CPU도 권한 모드라는 것을 가지고 있다.
  * 사용자 모드 (user mode) : 응용 프로그램이 CPU를 쓸 때 사용하는 모드 - Ring 3
  * 커널 모드 (kernel mode) : 특권 명령어 실행과 원하는 작업 수행을 위한 자원 접근을 가능케 하는 모드. OS가 CPU를 쓸 때 사용하는 모드 - Ring 0

![Protection Rings](https://velog.velcdn.com/images%2Foen%2Fpost%2F0e9df501-6c44-4789-9063-9cb74c93a902%2Fimage.png)

(사진은 인텔 기준으로, 4개의 Rings이 있다.)

(Ring 0 : 커널, /Ring 1,2 : OS 서비스 / Ring 3 : 응용 프로그램)



### 응용 프로그램과 운영체제

* 응용 프로그램에서 실행하는 명령 중 어떤 것은 사용자 영역에서 실행되고, 어떤 것은 시스템 콜을 통해서 커널 영역에서 실행된다.



#### 시스템 콜은 커널 모드로 실행

* 커널 모드에서만 실행 가능한 기능들이 있음
* 커널 모드로 실행하려면, 반드시 시스템 콜을 거쳐야 함
* 시스템 콜은 운영체제 제공



### 사용자 모드와 커널 모드

* 함부로 응용 프로그램이 전체 컴퓨터 시스템을 헤치지 못함
* 주민등록등본은 꼭 동사무소 또는 민원24시(정보 사이트)에서 특별한 신청서(시스템 콜)를 써야만 발급 - 사용자 모드
  * 동사무소 직원이 특별한 권한을 가지고, 주민등록등본 출력 명령 실행 - 커널 모드



![사용자 모드와 커널 모드](https://velog.velcdn.com/images%2F0mi%2Fpost%2F704e4bae-151f-4402-babe-618910d5a760%2Fimage.png)





---

## 참고

[What is API?](https://aws.amazon.com/ko/what-is/api/)