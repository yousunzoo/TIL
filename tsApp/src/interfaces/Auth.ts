export interface LoginRequest {
	username: string;
	password: string;
}

export interface RegisterRequest extends LoginRequest {
	email: string;
}
export interface UserPayload {
	id: number;
	username: string;
	email: string;
	accessToken: string;
}

export interface AuthResponse extends UserPayload {
	iat: number;
	exp: number;
}
