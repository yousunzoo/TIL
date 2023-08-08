// post 관련한 요청 보내는 쿼리 함수
import axios from 'axios';
import { axiosInstance } from '../axios';
import { Post, PostRequest } from '../../interfaces/Post';

export const getPosts = async () => {
	const { data } = await axiosInstance.get<Post[]>('api/posts');
	return data;
};

export const createPost = async (post: PostRequest) => {
	const { data } = await axiosInstance.post<Post>('api/posts', post);
	console.log(data);
	return data;
};
