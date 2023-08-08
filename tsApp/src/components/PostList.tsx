import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/services/Post';

interface PostListProps {
	posts: Post[];
}

function PostList({ posts }: PostListProps) {
	return (
		<div>
			{posts?.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<p>{post.userId}</p>
				</div>
			))}
		</div>
	);
}

export default PostList;
