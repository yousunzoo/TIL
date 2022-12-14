# Git-flow
Vincent Driessen의 브랜칭 모델.
Git으로 개발할 때 거의 표준과 같이 사용되는 방법론.

[git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

## Git-flow의 브랜치
Git-flow에는 5가지 종류의 브랜치가 존재한다.
항상 유지되는 메인 브랜치들(main, develop)과 일정 기간 동안만 유지되는 보조 브랜치들(feature, release, hotfix)이 있다.

* main : 제품으로 출시될 수 있는 브랜치
* develop : 다음 출시 버전을 개발하는 브랜치
* feature : 기능을 개발하는 브랜치
* release : 이번 출시 버전을 준비하는 브랜치
* hotfix : 출시 버전에서 발생한 버그를 수정하는 브랜치

![git flow](https://techblog.woowahan.com/wp-content/uploads/img/2017-10-30/git-flow_overall_graph.png)

## Git-flow의 개발 흐름
1. 일단 main 브랜치에서 시작한다.
2. 동일한 브랜치를 develop에도 생성한다. 개발자들은 develop 브랜치에서 개발을 진행한다.
3. 개발을 진행하다가 회원가입, 로그인 등의 기능 구현이 필요할 경우 작업 단위마다 feature 브랜치를 생성해서 기능을 구현한다.
4. 완료된 feature 브랜치는 검토를 거쳐 다시 develop 브랜치에 합친다.
5. 모든 기능이 완료되면 develop 브랜치를 release 브랜치로 만든다.
그래고 QA(품질검사)를 하면서 보완점을 보완하고 버그를 픽스한다.
6. QA 통과하면 release 브랜치를 main 브랜치와 develop 브랜치로 보낸다. main 브랜치에서 버전 추가를 위해 태그를 하나 생성하고 배포를 한다.
7. 배포를 했는데 미처 발견하지 못한 버그가 있을 경우 hotfix 브랜치를 만들어 긴급 수정 후 태그를 생성하고 바로 수정 배포를 한다.

## Getting started
1. 초기화 
- 기존 git 저장소 내에서 초기화하는 것으로 git-flow의 사용을 시작한다.
```shell
$ git flow init
```

2. 새 기능 시작하기
- 새 기능의 개발은 develop 브랜치에서 시작한다.
- develop에 기반한 새 기능 브랜치를 생성하고 자동으로 그 브랜치로 전환한다.
```shell
$ git flow feature start {feature-name}
```

3. 기능 완료
- 기능 브랜치를 develop 브랜치에 merge한다.
- 기능 브랜치를 삭제한 뒤, develop 브랜치로 전환한다.
```shell
$ git flow feature finish {feature-name}
```

4. publish
4-1. 기능 게시
- 기능을 공동으로 개발할 시, 원격 서버에 게시하여 다른 사용자들도 사용할 수 있게 한다.
```shell
$ git flow feature publish {feature-name}
```

4-2. 게시된 기능 가져오기
- 다른 사용자가 게시한 기능을 가져온다.
```shell
$ git flow feature pull origin {feature-name}
```

5. release 시작
- release를 시작하려면 git-flow의 release 명령을 사용한다.
- develop 브랜치로부터 release 브랜치를 생성한다.
```shell
$ git flow release start [version]
```

6. release 완료
- release 브랜치를 main 브랜치에 merge
- release를 release 이름으로 tag 생성
- release를 develop 브랜치로 재병합(back-merge)
- release 브랜치 삭제
```shell
$ git flow release finish [version]
```
7. 원격 저장소와 동기화
```shell
$ git push -u origin develop # -u는 브랜치 최초 생성 시에 사용
$ git push origin main
$ git push --tags
```
