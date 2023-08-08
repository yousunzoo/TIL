// 리액트에서 타입을 다루다보면 객체로 이루어진 자료형을 씀
// Post -> 해당 데이터는 어떤 자료형으로 구성되어있는지 정의해줘야함

// interface Post {
// 	title: string;
// 	body: string;
// 	id?: number;
// 	sayHello: (name: string) => string;
// }

// // 작성자가 있는 글, 작성자가 없는 글
// interface UserPost extends Post {
// 	author: string | null;
// }

// const post: Post = {
// 	title: 'Hello',
// 	body: 'Hello World',
// 	id: 1,
// 	sayHello: (name) => {
// 		return name;
// 	},
// };

// const userPost: UserPost = {
// 	title: 'Hello',
// 	body: 'Hello World',
// 	id: 1,
// 	author: 'Jong',
// 	sayHello: (name) => {
// 		return name;
// 	},
// };

type Post = {
	title: string;
	body: string;
	id?: number;
};

type UserPost = Post & {
	author: string;
};

const post: Post = {
	title: 'Hello',
	body: 'Hello World',
};

const userPost: UserPost = {
	title: 'Hello',
	body: 'Hello World',
	author: 'Jong',
};

// 백엔드에서 넘어오는 DB와 관련한 자료형태는 type
// 컴포넌트 props에 대한 자료형은 interface

// 제네릭
// 유저한테 인풋을 받는 컴포넌트를 만든다
// 유저가 뭘 입력할지 모르는 경우

// T를 우리가 함수를 사용하면서 명시할 수 있게 됨
function getInput<T>(userInput: T): T {
	return userInput;
}

const numInput = getInput<number>(123);

const str = 'increase';
const strAsConst = 'increase' as const;

const obj = {
	str,
};
const objAsConst = {
	strAsConst,
};

type str = ReturnType<() => string>; // type str = string
type num = ReturnType<() => number>; // type num = number

// 액션 타입
const KIM = 'KIM' as const;

// 액션 객체 생성 함수
const user = () => {
	return {
		name: KIM,
	};
};

// 이 타입은 액션 객체의 타입 (액션 타입이 타입으로서 들어가있음)
type user = ReturnType<typeof user>; // type user = {name: "KIM"}
