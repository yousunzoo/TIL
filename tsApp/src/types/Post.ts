// 우리가 응답으로 받는 그 Post의 형태가 어떠한지
export type Post = {
	id?: number;
	userId?: number;
	body: string;
	title: string;
};

export type PostRequest = {
	body: string;
	title: string;
};
