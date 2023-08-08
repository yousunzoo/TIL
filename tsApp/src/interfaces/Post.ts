export interface PostRequest {
	title: string;
	body: string;
}

export interface Post extends PostRequest {
	id: number;
	userId: number;
}
