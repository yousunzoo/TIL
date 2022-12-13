# Git Files
Git 저장소에 필요한 파일들을 알아보자.

## README.md
* 프로젝트와 Repository를 설명하는 책의 표지와 같은 문서
* 나와 동료, 이 repo의 사용자를 위한 문서
* 내 컨텐츠의 첫 인상!

```markdown
# Project Name
프로젝트에 대한 한 줄 요약,
프로젝트 샘플 링크

## Documentation

### Installation

### Supported Node.js versions
사용한 프로그램의 버전 명시 필요

### More Information
사용한 API의 주소나 참고한 사이트

### License
사용한 license 명시
```

## .gitignore
* git이 파일을 추적할 때, 어떤 파일이나 폴더 등을 추적하지 않도록 명시하기 위해 작성
* 해당 문서에 작성된 리스트는 수정사항이 발생해도 git이 무시함

* [gitignore.io](https://www.gitignore.io) 사이트에서 쉽게 설정 가능
* 프로젝트를 시작할 때 가장 먼저 세팅되어야 함

## License
오픈소스 프로젝트에서 가장 중요한 License는 만들 때에도, 배포할 때에도 가장 신경써야 하는 일 중 하나이다.

* 가장 많이 사용하는 License
	* MIT License
		- MIT에서 만든 라이센스, 모든 행동에 제약 없음, 저작권자는 소프트웨어와 관련한 책임에서 자유로움

	* Apache License 2.0
		- Apache 재단이 만든 라이센스, 특허권 관련 내용이 포함되어 있음
	* GNU General Public License 3.0
		- 가장 많이 알려져있으며, 의무사항이 존재

* github에서 repository 생성시 README.md와 License 생성!

