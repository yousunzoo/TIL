import { legacy_createStore as createStore, combineReducers } from 'redux';
import counter from './counter';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
	counter,
});

// store 안에 있는 값의 타입은 뭐지?
export type RootState = ReturnType<typeof rootReducer>;
// state의 타입은 바로 RootState
export const store = createStore(rootReducer);

// useSelector 쓸 때 state 부분에 일일이 state:RootState를 적어줄 필요가 없다.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
