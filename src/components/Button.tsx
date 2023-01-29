import React from 'react';

interface IButtonProps {
	children: JSX.Element | string | number;
	style? : React.CSSProperties,
	disabled?: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({children, style, disabled, onClick}: IButtonProps) => {
	return (
		<button disabled={disabled} style={{padding: '10px', ...style}} onClick={onClick}>{children}</button>
	)
}