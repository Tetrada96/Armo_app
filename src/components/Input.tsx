import React from 'react';

interface IInputProps {
	name: string;
	value: string | undefined;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({name, value, onChange}: IInputProps) => {

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<label>{name}</label>
			<input onChange={onChange} style={{padding: '10px'}} placeholder={name} value={value ? value : undefined} name={name} id={name}/>
		</div>
	)

}