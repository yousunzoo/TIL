# Webpack

* Webpack : Javasript 애플리케이션을 위한 module bundler
  * module : 개별적인 기능을 하는 작은 단위
    * Webpack에서는 javascript 뿐만 아니라 HTML, CSS, JS, Images, Font 등 많은 파일들을 모듈이라고 한다.
  * bundler : 애플리케이션을 구성하는 모든 모듈을 병합하고 압축해서 만들어진 하나 이상의 파일
* 빠른 로딩 속도와 높은 성능 지원



## Webpack 설치

1. webpack과 webpack-cli 설치

```
$ npm i webpack webpack-cli webpack-dev-server@next -D
```

* webpack-cli : webpack과 관련된 명령어를 CLI에서 사용할 수 있게 해주는 패키지



2. package.json의 `"scripts"`에 해당 코드 작성

```json
"scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
}
```



3. 프로젝트 최상단에 webpack.config.js 파일 생성
   * Webpack이 실행될 때 참조하는 설정 파일

```javascript
// import
const path = require("path")

// export
module.exports = {
  mode: "development",
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: {
    main: "./src/app.js",
  },
  // output : 결과물(번들)을 반환하는 설정
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '[folderName]'),
    clean : true
  },
}
```

​	

 * entry : 파일을 읽어들이기 시작하는 진입점 설정 (상대경로)
   * 다중 진입점 설정 가능
 * output : 결과물(번들)을 반환하는 설정
   * filename : 번들링된 파일의 이름
   * path :  번들링된 파일을 저장할 경로 (절대경로)
     * `path.resolve()` :  절대경로 반환
     * `__dirname` : 노드에서 제공하는 현재 디렉토리의 경로에 대한 변수
   * clean : 번들 불러올 때 이전에 있던 데이터 초기화
   * path와 filename을 생략하면 기본적으로 path는 dist 폴더가, filename은 진입했던 파일명이 설정된다.





## plugins

* index.html을 main.js에 연결해서 개발서버 오픈



1. html-webpack-plugin 패키지 설치

```
$ npm i -D html-webpack-plugin
```



2. webpack.config.js에 다음 코드 작성

```javascript
// import
const path = require("path")
const HtmlPlugin = require('html-webpack-plugin')
// export
module.exports = {
  mode: "development",
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: {
    main: "./src/app.js",
  },
  // output : 결과물(번들)을 반환하는 설정
  output: {
    clean : true
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: {
      new HtmlPlugin({
      	template: './index.html'
  	})
  }
}
```

* template에 index.html을 작성하면 배포 시 app.js와 index.html을 병합한 합본을 dist 폴더에 만들어진다.





## 정적 파일 연결

1. 프로젝트 내부에 static 폴더를 만들어 정적 파일들을 static 폴더 안에 저장한다.
   * 이미지 파일은 static 폴더 내에 images 폴더를 만들어 따로 보관
2. `npm i -D copy-webpack-plugin` 설치
3. webpack.config.js 내에 해당 코드 작성

```javascript
// import
const path = require("path")
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  mode: "development",
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: {
    main: "./src/app.js",
  },
  // output : 결과물(번들)을 반환하는 설정
  output: {
    clean : true
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: {
      new HtmlPlugin({
      	template: './index.html'
  	  }),
      new CopyPlugin({
    	patterns: [
    	{from:'static'}
    	]
	})
  }
}
```

* 'static' 폴더의 내용이 dist 폴더 안에 들어가도록 해줌
  * 경로 여러 개 설정 가능
* index.html에서 이미지 파일을 불러올 때 `<img src='./images/logo.png' />` 형식으로 사용가능
  * static 폴더를 가져오는게 아니라 폴더 안의 내용을 가져오는 것임을 주의!





## Loader

> Webpack은 모든 파일을 모듈로 본다. 하지만 Webpack은 자바스크립트 밖에 읽지 못한다. 때문에 HTML, CSS, Images,  Font 등을 Webpack이 읽을 수 있게 변환해줘야 하는데, 이 역할을 하는게 바로 로더이다.



### 예제 : CSS 사용

* app.js 파일 내에 `import '../css/main.css'` 코드 작성.

  * Webpack에서 파일을 읽어들이기 시작하는 진입점은 entry에서 설정한 app.js이다.
  * main.js에 css 파일을 import했기 때문에, Webpack이 코드를 읽고 해당 css 파일도 불러온다.
  * main.js에 연결되어있는 index.html에 css 파일이 전달되면서 css 파일도 dist 폴더에 들어가게 된다.
  * app.js에 css 파일 연결했으면 index.html에서 파일 연결할 필요 없음!

* Webpack 자체는 css 파일을 읽을 수는 없고 단지 css를 다른 파일과 합쳐서 dist 폴더로 내어주는 역할만 할 수 있다.

  * `$ npm i -D css-loader style-loader` 패키지 설치
    * `css-loader` : CSS를 자바스크립트 코드로 변경해주기만 함
    * `style-loader` : 자바스크립트 코드로 변경된 CSS를 DOM에 추가하기 위해 필요
  * webpack.config.js에 css-loader 와 style-loader 에 관련된 설정 추가
    * `test` : 로더를 적용할 파일 형식으로 일반적으로 정규 표현식 사용
    * `use` : 해당 파일을 처리할 로더 이름. 역순으로 로더 동작
    * 뜻 : `.css` 확장자로 끝나는 모듈을 읽어들여 `css-loader`를 적용하고 그 다음 `style-loader`를 적용한다.

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  ```

  

* Sass 패키지 연결
  * `npm i -D sass-loader sass` 설치
  * `test : /\.s?css$/` 작성
  * `use`에 `css-loader` 동작 전에 `sass-loader`가 먼저 실행되도록 배열의 맨 마지막에 작성



* autoprefixer 패키지 연결

  * `npm i -D postcss autoprefixer postcss-loader` 설치
  * `use`에 `sass-loader` 전에 `postcss-loader` 작성 (sass 실행 이후 postcss 실행)
  * package.json에 `"browserslist" : []` 추가
  * root 경로에 `.postcssrc.js` 생성 및 아래 코드 작성

  ```javascript
  module.exports = {
      plugins: [
          require('autoprefixer')
      ]
  }
  ```



* babel 연결

  * `npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime` 실행
  * root 경로에 `.babelrc.js` 파일 생성

  ```javascript
  module.exports = {
      presets: ['@babel/preset-env'],
      plugins: [
          ['@babel/plugin-transform-runtime']
      ]
  }
  ```

  * webpack.config.js의 module[rules]에 새로운 객체 생성

  ```javascript
  {
      test: /\.js$/,
      use: [
          'babel-loader'
      ]
  }
  ```

  * `npm i -D babel-loader` 추가 설치





## NPX, Degit로 프로젝트 불러오기

* 원격 저장소에 있는 프로젝트를 다운 받을 경로에서 `npx degit  github-username/project-name 만들_폴더명`  실행
  * degit : 원격 저장소에 있는 프로젝트를 현재 경로에 다운받음
  * npx degit : npx를 통해 degit을 따로 설치하지 않고 바로 degit 실행
* 프로젝트를 버전 내역 없이 프로젝트로 다운받아 새롭게 버전관리 할 때 유용
  * `git clone` : 버전 내역까지 가져옴



---

## 참고

* [웹팩 이해하기](https://tecoble.techcourse.co.kr/post/2021-07-10-webpack-exercise/)