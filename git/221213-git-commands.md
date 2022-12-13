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
