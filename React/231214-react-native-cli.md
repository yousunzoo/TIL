### Expo CLI

- Javascript 만으로도 앱 작성 가능
- 앱의 빌드 크기가 큼

### React-Native

- react-native만 설치되어 있음
- 원하는 네이티브 모듈 작성 가능

### react-native-cli 기능

```bash
react-native init [ProjectName] --template templateName
```

- 최초 프로젝트 생성을 도와주는 command
- templateName에 주로 typescript 관련 template을 넣음

```bash
react-native run-ios
react-native run-android
```

- 앱을 실행시켜주는 커맨드

```bash
react-native start
react-native start -- --reset-cache // 남은 캐시가 있는 경우라면
```

- metro bundler를 실행시켜주는 커맨드
- webpack과 비슷하게 javascript를 하나의 파일로 만들기 위한 역할

```bash
react-native log-android
react-native log-ios
```

- android / ios native log를 보기 위한 것
