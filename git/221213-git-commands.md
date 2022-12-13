# Git

## Vim
Vim : Visual editor improve의 줄임말.
- CLI (Command Line Interface)를 기반으로 한 에디터
- 모든 Linux/Unix 시스템에서 사용가능
- 마우스 입력 장치가 필요 없으며, 키보드 입력으로 모든 기능 사용 가능 -> 터미널 환경에서 주로 사용

### Vim command
```shell
i # insert mode
v # visual mode (drag n drop 가능)
ESC # back to normal mode
:q # quit
:q! # quit discarding all changes
:w # write
:wq # write and quit
:{number} # jump to {number}th line.
```
* Normal 모드에서만 모드 변경하므로, 모드 변경 시에는 `ESC` 눌러주기!

[Vim 연습게임 - VIM Adventures](https://www.vim-adventures.com)

---
## Git

### Git의 특성
- VSC(Version Control System) : 버전관리 시스템
- SCM(Source Code Management)라고 부르기도 함.
- 단순한 구조와 빠른 속도를 가짐.
- 분산형 저장소를 지원함.
- 비선형적 개발(수천개의 브랜치) 가능
- <b>git은 github와 같지 않다!</b>
	- git : 버전 관리 시스템
	- github : git을 기반으로 한 클라우드 저장 서비스

### Git의 장점
- 소스코드 주고받기 없이 동시작업 가능해져 생산성 증가
- 수정내용은 `commit` 단위로 관리, 배포 뿐 아니라 원하는 시점으로 `Checkout` 가능
- 새로운 기능 추가는 `Branch`로 개발하여 편안한 실험이 가능하며, 성공적으로 개발이 완료되면 `Merge`하여 반영
- 인터넷이 연결되지 않아도 개발할 수 있음

### git objects
* Blob : 파일 하나의 내용에 대한 정보
* Tree : Blob이나 subtree의 메타데이터(디렉토리 위치, 속성, 이름 등)
* Commit : 커밋 순간의 스냅샷

### git Process Flow
![git Process Flow](https://res.cloudinary.com/practicaldev/image/fetch/s--M_fHUEqA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/128hsgntnsu9bww0y8sz.png)

#### Working Directory
* untracked : 아직 tracking이 되지 않은 파일
- 기존에 존재하던 프로젝트에서 git을 초기화하거나 파일을 새로 만들면(또는 처음 저장소를 clone하면) untracked 상태이다.

* tracked : unmodified/modified로 나눌 수 있다. checkout된 이후 수정사항이 있지만 stage 되지 않으면 modified된 상태이다.
- modified된 파일만 staging area로 옮겨갈 수 있다.

#### Staging Area
* tracked & staged 상태
* `git add` 명령어를 통해 파일을 Staging Area에 올릴 수 있다.
* `git reset HEAD {파일 이름}`를 이용하면 unstage (staging area -> working directory)가 가능하다.

#### Localrepo
* 오프라인에서도 flow에 따라 작업 가능한 로컬 저장소
* `git commit`을 통해 Staging Area에서 Localrepo로 올릴 수 있다.
* 작업 단위에 따라 파일들을 commit할 수 있다.

#### Remoterepo
* 원격 저장소
* `git push` 명령어를 통해 로컬 저장소에서 원격 저장소로 파일과 commit 업로드 가능
* push를 하면 이력을 지울 수 없으므로 주의해야 한다.


---
### Before start
* windows에서는 git bash 프로그램 통해서 git 사용
* git 설치 확인 : `$ git -v`
* git 초기 설정
```shell
$ git config --global user.name "username"
$ git config --global user.email "useremail"
$ git config --global core.ditor "vim"
$ git config --global core.pager "cat"
```

* `$ git config --list`로 설정 정상적으로 되었는지 확인
* 수정이 필요할 경우, `$ vi ~/.gitconfig`에서 수정 가능

### First Repo
```shell
$ mkdir first-repo && cd first-repo
$ git init # 새로운 git 저장소 생성
$ git remote add origin https://github.com/{username}/{reponame}.git # 해당 주소로 원격 저장소 생성
$ touch README.md
$ git add README.md # stage에 README.md 올림
$ git commit -m "first push" # 해당 내용의 commit 생성
$ git push -u origin master # 원격 저장소로 보냄

# git status로 현재 git 상태 확인 가능
```

### Second push to First Repo
```shell
# make some change on README.md

$ git add . # 변화가 일어난 전체 파일을 stage에 올림
$ git commit # vim으로 진입해서 commit의 제목 및 설명 작성 가능
$ git push origin main # 원격 저장소로 보냄
```

### start project with clone
* github에서 repository를 형성한다.
```shell
$ git clone {repo address}
```

## Git Commits
ref : [conventional commits reference](https://www.conventionalcommits.org/ko/v1.0.0/)

1. commit의 제목은 commit을 설명하는 하나의 구나 절로 완성. (문장형 x)
2. importance of capitalize `Importance of Capitalize`
3. prefix 꼭 달기
	- `feat:` 기능 개발 관련
	- `fix:` 오류 개선 혹은 버그 패치, 파일트리 변경
	- `docs:` 문서화 작업
	- `test:` test 관련
	- `conf:` 환경설정 관련
	- `build:` 빌드 관련
	- `ci:` Continuous Integration 관련

	* `TIL` repository에서는 md 파일은 feat 역할. 수정하면 docs 역할

### Prefix example
* Commit Convention은 팀마다 다를 수 있으니 관련 문서를 참조할 것!

```shell
feat: Add server.py
fix: Fix Typo server.py
docs: Add README.md, LICENSE
conf: Create .env, .gitignore, dockerfile
BREAKING CHANGE: Drop Support /api/v1
refactor: Refactor user classes
```

### Commit할 때 기억해야 할 것
* commit은 동작 가능한 최소단위로 자주 할 것. `ex) 컴포넌트 한 단위, function 한 단위`
* 해당 작업 단위에 수행된 모든 파일 변화가 해당 commit에 포함되어야 함
* 모두가 이해할 수 있는 log를 작성할 것
* Open source contribution 시 영어가 강제되지만, 그렇지 않을 경우 팀 내 사용 언어를 따라 쓸 것
* 제목은 축약(50자 이내), 내용은 문장형으로 작성
* 제목과 내용은 한 줄 띄워 분리할 것 (vim 사용 시)
* 내용은 이 commit의 구성과 의도를 충실히 작성

### HEAD
해당 branch의 마지막 commit을 뜻한다.
HEAD는 항상 현재 checkout된 branch의 가장 최신 commit을 포인팅한다. (내가 현재 내가 바라보고 있는 commit)
그 외의 branch의 최신 commit은 commit hash 뒤에 ([branch name])으로 표기된다.

### origin
git을 통해 remote repository에서 프로젝트 코드를 checkout하면 나는 나만의 local repository를 갖게 되고, commit과 push, pull 등의 commands를 통해 remote repository와 협업을 하게 된다.
이 때, remote repository의 URL을 일일이 입력하기에는 번거롭기 때문에 "origin"이라고 하는 키워드(alias)를 대신 활용한다.
즉, `origin/branch_name`이라고 하면 remote repository에 존재하는 branch_name을 가지는 branch를 참조하게 되는 것이다.

`$ git remote` command를 사용하면 remote repository 리스트를 볼 수 있는데, 이 때 repository의 URL이 출력되지 않고 alias인 `origin`이 대신 출력되는 것을 볼 수 있다.

`$ git remote -v`를 사용하면 alias와 URL이 함께 출력되는 것을 볼 수 있다.
