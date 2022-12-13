# Shell
- 운영체제의 커널과 사용자를 이어주는 소프트웨어
- sh(Bourne Shell) : AT&T Bell 연구소의 Steve Bourne이 작성한 유닉스 쉘
- csh : 버클리의 Bill Joy가 작성한 유닉스 쉘
- bash(Bourne Again Shell) : Brian Fox가 작성한 유닉스 쉘
	- 다양한 운영체제에서 기본 쉘로 채택
- zsh : Paul Falstad가 작성한 유닉스 쉘
	- sh 확장형 쉘
	- 현재까지 가장 완벽한 쉘



## Shell Command

### Shell 주석처리

```shell
# 한줄 주석, 특정 부분 주석은 #으로 처리한다.

:<< "END"
여러줄로 된 주석이나 블럭을
주석 처리할 수 있다.
:<< "END" 혹은 :<< 'END'로 시작하고
주석을 마무리할 때 END로 마무리한다.
END
```

### 디렉토리 이동 command

```shell
$ # shell이 사용자의 입력을 받을 준비가 되었다는 뜻
$ cd Documents/ # Documents/ 디렉토리로 이동 (change directory)
$ cd .. # 상위 디렉토리로 이동
$ pwd # print working directory (절대 경로로 표현된다.)

```

### 파일에 관한 command
```shell
$ touch README.md # 새로운 파일 생성

$ mv README.md bin/ # bin/ 디렉토리로 README.md 파일 이동(move)
$ mv bin/README.md . # 다른 디렉토리에서 현재 디렉토리로 당겨오기 가능

$ cp README.md dev/ # 해당 파일을 복사 (copy)
# 현재 디렉토리에 동일한 이름의 파일을 복사하는 것은 불가능하다. 다른 이름으로 변경할 것!

$ mv README.md ./readme.md # 기존 파일의 이름 변경

$ rm readme.md # 해당 파일 삭제 (remove)
$ rm -r bin/ # bin 디렉토리에 있는 모든 파일 삭제 후 bin 디렉토리도 삭제
$ rm -rf bin/ # 강제 삭제
$ rm *.* # 모든 이름의, 모든 확장자명 삭제

$ cat readme.md # 해당 파일의 내용을 shell에 출력한다.

$ vi readme.md # 해당 파일을 vim 에디터로 오픈한다.

$ clear # 화면을 지우고 최상단 디렉토리부터 다시 시작
```

### chmod
Linux 시스템의 파일 및 디렉토리에 대한 권한/그룹 관리

1. 권한에 대한 관리
파일이나 디렉토리의 permittion을 관리한다.

* 명령어 : `chmod [권한값] [파일명]`
* 권한값에 대한 정의 : `ls -al` 명령을 통해 파일/디렉토리의 권한을 확인할 수 있다.


