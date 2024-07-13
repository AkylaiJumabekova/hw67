import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, calculate, reset, removeLastCharacter } from './CalculatorSlice';
import Button from '../../components/Button/Button';
import CalculatorDisplay from '../../components/CalculatorDisplay/CalculatorDisplay';
import { RootState } from '../../app/store';
import './Calculator.css';

const Calculator: React.FC = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.calculator.value);
    const total = useSelector((state: RootState) => state.calculator.total);

    return (
        <div className="calculator">
            <CalculatorDisplay value={value} total={total} />
            <div className="buttons">
                <Button onClick={() => dispatch(addCharacter('1'))}>1</Button>
                <Button onClick={() => dispatch(addCharacter('2'))}>2</Button>
                <Button onClick={() => dispatch(addCharacter('3'))}>3</Button>
                <Button onClick={() => dispatch(addCharacter('4'))}>4</Button>
                <Button onClick={() => dispatch(addCharacter('5'))}>5</Button>
                <Button onClick={() => dispatch(addCharacter('6'))}>6</Button>
                <Button onClick={() => dispatch(addCharacter('7'))}>7</Button>
                <Button onClick={() => dispatch(addCharacter('8'))}>8</Button>
                <Button onClick={() => dispatch(addCharacter('9'))}>9</Button>
                <Button onClick={() => dispatch(addCharacter('0'))}>0</Button>
                <Button onClick={() => dispatch(addCharacter('+'))}>+</Button>
                <Button onClick={() => dispatch(addCharacter('-'))}>-</Button>
                <Button onClick={() => dispatch(addCharacter('*'))}>*</Button>
                <Button onClick={() => dispatch(addCharacter('/'))}>/</Button>
                <Button onClick={() => dispatch(calculate())}>=</Button>
                <Button onClick={() => dispatch(reset())}>C</Button>
                <Button onClick={() => dispatch(removeLastCharacter())}>DEL</Button>
            </div>
        </div>
    );
};

export default Calculator;
