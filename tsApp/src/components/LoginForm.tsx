import React, { useState } from 'react';
import { AuthResponse, LoginRequest } from '../interfaces/Auth';
import { UseMutateFunction } from 'react-query';
import { AxiosError } from 'axios';

interface LoginFomrProps {
	mutate: UseMutateFunction<AuthResponse, AxiosError, LoginRequest>;
}

// props로 mutate 함수를 받을 것
function LoginForm({ mutate }: LoginFomrProps) {
	const [user, setUser] = useState<LoginRequest>({ username: '', password: '' });

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate(user);
	};
	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='username' value={user.username} onChange={onChange} />
			<input type='password' name='password' value={user.password} onChange={onChange} />
			<button type='submit'>로그인</button>
		</form>
	);
}

export default LoginForm;
