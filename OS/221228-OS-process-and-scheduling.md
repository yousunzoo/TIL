# 프로세스 상태와 스케줄링

## 멀티 프로그래밍과 Wait

* 멀티 프로그래밍 : CPU 활용도를 극대화 하는 스케줄링 알고리즘
* Wait : 간단히 저장 매체로부터 파일 읽기를 기다리는 시간으로 가정



![멀티 프로그래밍과 Wait](https://blog.kakaocdn.net/dn/sd6pe/btqUtXbOSqT/0ZRRYqrVsacRUwHSrwhWS0/img.png)

* 프로세스 상태를 고려한 멀티 프로그래밍을 활용하면 CPU 활용도를 극대화하고 프로세스 실행 시간을 줄일 수 있다.





## 프로세스 상태

![프로세스 상태](https://images.velog.io/images/gndan4/post/62b70dea-b3ba-4feb-86ee-128c40fd6acc/image.png)



* `New`: **프로세스 생성 중**
* `Ready`: **프로세스가 CPU를 기다리는 상태**(실행 대기)
* `Running`: **프로세스가 CPU를 할당 받아 명령어를 수행 중인 상태**
* `blocked(waiting)`: **프로세스가 어떤 사건(event)이 완료되기를 기다리는 상태** (예: 파일 일기가 완료됨)
* `Exit`: **프로세스의 실행 종료**





## 프로세스 상태 간 관계

![상태 간 관계](https://images.velog.io/images/gndan4/post/cf297264-9c98-4a5d-85c4-53631344272e/process_state.png)

- running ➡️ block
  - 프로세스가 running 상태에 있다가 파일 읽기를 요청한 경우 block(waiting) 상태에 들어가게 된다.
- block ➡️ running
  - block 상태에서 특정한 이벤트를 받으면 스케쥴러에게 running 상태로 바꿔도 좋다라고 알려주기 위해서 우선은 ready 상태로 상태가 변경된다.
- running ➡️ ready
  - 프로세스가 타이머 등의 이유로 현재 실행 중인 프로세스를 중단시키게 되면 그 프로세스는 ready 상태로 들어가게 된다.
- ready ➡️ running
  - 현재 실행 중인 프로세스가 완료되거나 중단된 경우 ready 상태에 있는 프로세스가 running 상태로 들어가서 실행된다.

✔️ 프로세스 중간에 CPU에서 아무것도 실행하지 않는 상태 ➡️ idle 상태



---

## 참고

[프로세스의 스케줄링과 상태 변화](https://prinha.tistory.com/entry/System-Programming-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4%EC%9D%98-%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81%EA%B3%BC-%EC%83%81%ED%83%9C-%EB%B3%80%ED%99%94)