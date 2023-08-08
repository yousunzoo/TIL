import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { verify } from '../api/services/Auth';
import { getCookie } from '../utils/cookies';

type authType = 'PENDING' | 'SUCCESS' | 'FAILURE';

function verifyToken() {
	const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING');
	const verifyResult = useQuery(['auth', 'verify'], verify, {
		onSuccess: () => {
			setIsAuthenticated('SUCCESS');
		},
		onError: () => {
			setIsAuthenticated('FAILURE');
		},
		retry: 0,
		enabled: !!getCookie('accessToken'),
	});

	return isAuthenticated;
}

export default verifyToken;
