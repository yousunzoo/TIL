import React from 'react';
import LoginForm from '../components/LoginForm';
import { useMutation } from 'react-query';
import { login } from '../api/services/Auth';
import { setCookie } from '../utils/cookies';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	const navigate = useNavigate();
	const { mutate } = useMutation(login, {
		onSuccess: (data) => {
			setCookie('accesToken', data.accessToken, { path: '/', maxAge: (data.exp = data.iat) });
			navigate(`/posts`);
		},
		onError: (error: AxiosError) => {
			console.log(error);
		},
	});

	return <LoginForm mutate={mutate} />;
}

export default LoginPage;
