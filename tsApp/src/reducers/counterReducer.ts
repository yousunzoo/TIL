// 카운터를 위한 리듀서

// state 자체의 타입
export type CounterState = number;

// action 객체의 타입(payload 부분의 타입)
// 얼마만큼 증가시킬지 (payload)를 받아서 증가시키는 경우라면?
export type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'INCREMENT_BY_DIFF'; payload: number };

export function counterReducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'INCREMENT_BY_DIFF':
			return state + action.payload;
		default:
			return state;
	}
}
