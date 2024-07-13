import React from 'react';

interface CalculatorDisplayProps {
    value: string;
    total: number;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value, total }) => {
    return (
        <div className="display">
            <div className="total">{total !== 0 ? total : ''}</div>
            <div className="value">{value || '0'}</div>
        </div>
    );
};

export default CalculatorDisplay;

