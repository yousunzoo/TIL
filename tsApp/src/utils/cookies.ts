import { Cookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (name: string) => {
	try {
		return cookies.get(name);
	} catch (error) {
		console.error(error);
	}
};

export const setCookie = (name: string, value: Cookie, option?: CookieSetOptions) => {
	try {
		cookies.set(name, value, { ...option });
	} catch (error) {
		console.error(error);
	}
};

export const removeCookie = (name: string, option?: CookieSetOptions) => {
	try {
		cookies.remove(name, { ...option });
	} catch (error) {
		console.error(error);
	}
};
