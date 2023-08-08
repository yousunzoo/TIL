// ducks 패턴
// 액션 타입
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY_DIFF = 'counter/INCREASE_BY_DIFF' as const;

// 액션 객체 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseByDiff = (diff: number) => ({ type: INCREASE_BY_DIFF, payload: { diff } });

// 타입 만들어놓기
type CounterAction = ReturnType<typeof increase | typeof decrease | typeof increaseByDiff>;
type CounterState = {
	count: number;
};

// 초기값
const initialState: CounterState = {
	count: 0,
};

// 리듀서 함수 작성
export default function counter(state: CounterState = initialState, action: CounterAction) {
	switch (action.type) {
		case INCREASE:
			return { count: state.count + 1 };
		case DECREASE:
			return { count: state.count - 1 };
		case INCREASE_BY_DIFF:
			return { count: state.count + action.payload.diff };
		default:
			return state;
	}
}
