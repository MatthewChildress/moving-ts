import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const StyledButton = styled.button`
    padding: 2em 1em;
    border: none;
    cursor: pointer;
    text-align: center;
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;