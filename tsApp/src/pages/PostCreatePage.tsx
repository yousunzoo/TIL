import React from 'react';
import PostForm from '../components/PostForm';
import { useMutation } from 'react-query';
import { createPost } from '../api/services/Post';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function PostCreatePage() {
	const navigate = useNavigate();
	const { mutate } = useMutation(createPost, {
		onSuccess: (data) => {
			navigate(`/posts`);
		},
		onError: (error: AxiosError) => {
			console.log(error);
		},
	});
	return <PostForm mutate={mutate} />;
}

export default PostCreatePage;
