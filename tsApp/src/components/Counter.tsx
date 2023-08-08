import React, { useContext, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { increase } from '../modules/counter';

// 요청보내고 응답받는 상황이라면
// 요청에 대해서도 타입을 만들어놓고, 응답에 대해서도 타입을 만들어놓음
// 지금 선언한 state 값이 정확히 요청에 필요한 값이 맞는지를 검사

function Counter() {
	const state = useSelector((state: RootState) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					dispatch(increase());
				}}>
				+
			</button>
			<span>{state}</span>
		</div>
	);
}

export default Counter;
