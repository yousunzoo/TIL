import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = () => {
	const config: AxiosRequestConfig = {
		baseURL: import.meta.env.VITE_SERVER_URL,
		headers: {
			'Content-Type': 'application/json',
		},
		withCredentials: true,
	};
	const instance = axios.create(config);
	instance.defaults.timeout = 3000;

	// 요청보낼 때 쿠키에 있는 액세스 토근 가져와서 헤더에 셋
	// 지금 로그인한 유저가 요청보낼 때 그 토큰을 가져와서 셋
	instance.interceptors.request.use(
		(request) => {
			const token = getCookie('accessToken');
			if (token) {
				request.headers['Authorization'] = `Bearer ${token}`;
			}
			return request;
		},
		(error: AxiosError) => Promise.reject(error)
	);
	return instance;
};

export const axiosInstance = getAxiosInstance();
