import React from 'react';
import PostList from '../components/PostList';
import { getPosts } from '../api/services/Post';
import { useQuery } from 'react-query';

function PostsPage() {
	const { data: posts, isLoading, error } = useQuery('posts', getPosts);

	if (isLoading) return <>로딩중</>;
	if (error || !posts) return <>에러발생</>;
	return <PostList posts={posts} />;
}

export default PostsPage;
