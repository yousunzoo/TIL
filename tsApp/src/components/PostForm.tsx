import React, { useState } from 'react';
import { Post, PostRequest } from '../interfaces/Post';
import { UseMutateFunction, useMutation } from 'react-query';
import { AxiosError } from 'axios';

// PostForm은 mutate 함수를 props로 받아서 사용
// 컴포넌트마다 props의 타입에 대해서 지정해줘야 함
// mutate 함수의 타입이 뭔지에 대해서 지정을 해줘야 함
interface PostFormProps {
	mutate: UseMutateFunction<Post, AxiosError, PostRequest>;
}

// mutate의 타입은 UseMutateFunction
// 요청보내는 함수 -> 뭘로 요청보낼건지, 요청보냈을 때 응답은 어떨지
// UseMutationFunction<응답, 에러, 요청보낼 때 필요한 인자의 타입>
function PostForm({ mutate }: PostFormProps) {
	const [post, setPost] = useState<PostRequest>({ title: '', body: '' });

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPost({ ...post, [name]: value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate(post);
	};
	return (
		<form onSubmit={onSubmit}>
			<input onChange={onChange} value={post.title} type='text' name='title' />
			<input onChange={onChange} value={post.body} type='text' name='body' />
			<button type='submit'>작성하기</button>
		</form>
	);
}

export default PostForm;
