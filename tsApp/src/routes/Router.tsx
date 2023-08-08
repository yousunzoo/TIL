import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PostCreatePage from '../pages/PostCreatePage';
import PostsPage from '../pages/PostsPage';
import ProtectedRouter from './ProtectedRouter';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/posts' element={<PostsPage />} />
				<Route element={<ProtectedRouter />}>
					<Route path='/posts/new' element={<PostCreatePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
