import React from 'react';

interface ButtonProps extends React.PropsWithChildren {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;