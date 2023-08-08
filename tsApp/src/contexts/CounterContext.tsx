import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import { CounterState, counterReducer, CounterAction } from '../reducers/counterReducer';

type CounterProviderProps = {
	children: ReactNode;
};

type CounterDispatch = Dispatch<CounterAction>;
export const CounterStateContext = createContext<CounterState | null>(null);
export const CounterDispatchContext = createContext<CounterDispatch | null>(null);

export function CounterProvider({ children }: CounterProviderProps) {
	const [state, dispatch] = useReducer(counterReducer, 0);

	return (
		<CounterStateContext.Provider value={state}>
			<CounterDispatchContext.Provider value={dispatch}>{children}</CounterDispatchContext.Provider>
		</CounterStateContext.Provider>
	);
}

export function useCounterDispatch() {
	const dispatch = useContext(CounterDispatchContext);
	if (!dispatch) throw new Error('Cannot find CounterProvider');
	return dispatch;
}
