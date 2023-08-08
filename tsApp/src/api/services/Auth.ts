import { UserPayload } from './../../interfaces/Auth';
import { AuthResponse, LoginRequest } from '../../interfaces/Auth';
import { axiosInstance } from '../axios';

export const login = async (user: LoginRequest) => {
	const { data } = await axiosInstance.post<AuthResponse>('api/auth/login', user);
	return data;
};

export const register = async (user: LoginRequest) => {
	const { data } = await axiosInstance.post<AuthResponse>('api/auth/register', user);
	return data;
};

export const verify = async () => {
	const { data } = await axiosInstance.get<UserPayload>('api/auth/verify');
	return data;
};
