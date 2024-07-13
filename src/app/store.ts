import { configureStore } from '@reduxjs/toolkit';
import { CalculatorReducer, CalculatorState } from '../containers/Calculator/CalculatorSlice';

export const store = configureStore<{ calculator: CalculatorState }>({
    reducer: {
        calculator: CalculatorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
