import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import verifyToken from '../hooks/verifyToken';

function ProtectedRouter() {
	const isAuthenticated = verifyToken();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated === 'FAILURE') {
			navigate('/login');
		}
	});
	return <Outlet />;
}

export default ProtectedRouter;
