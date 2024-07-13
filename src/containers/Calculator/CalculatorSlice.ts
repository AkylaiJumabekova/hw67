import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorState {
    value: string;
    total: number;
}

const initialState: CalculatorState = {
    value: '',
    total: 0,
};

export const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<string>) => {
            const newChar = action.payload;
            const operators = ['+', '-', '*', '/'];
            const lastChar = state.value.slice(-1);

            if (operators.includes(lastChar) && operators.includes(newChar)) {
                return;
            } else {
                state.value += newChar;
            }
        },
        reset: (state) => {
            state.value = '';
            state.total = 0;
        },
        removeLastCharacter: (state) => {
            if (state.value.length > 0) {
                state.value = state.value.slice(0, -1);
            }
        },
        calculate: (state) => {
            try {
                state.total = eval(state.value);
            } catch {
                state.total = 0;
            }
        },
    },
});

export const CalculatorReducer = CalculatorSlice.reducer;

export const { addCharacter, reset, removeLastCharacter, calculate } =
    CalculatorSlice.actions;