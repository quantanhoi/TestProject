import React from 'react';
import './Button.css';
interface ButtonProps {
    onClick: () => void;
    text: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <button className='my-button ' onClick={onClick}>{text}</button>
    );
};

export default Button;