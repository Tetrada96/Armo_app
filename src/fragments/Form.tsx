import React from 'react';

import { IFormState } from '.';
import { Input } from '../components';

export type FlexDirection = "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined;

interface IFormProps {
	form: IFormState;
	flexDirection: FlexDirection;
	needTopBorder?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({form, flexDirection, needTopBorder, onChange}: IFormProps) => {
	return (
		<form  style={{display: 'flex', width: 'calc(100% - 20px)', gap: '10px',  justifyContent: 'space-between', padding: '10px', borderTop: needTopBorder ? '1px solid black' : undefined, flexDirection:flexDirection }}>
			{Object.entries(form).map(item => {
				return (
					<Input key={item[0]} name={item[0]} value={item[1]} onChange={onChange} />
				)
			})}

		</form>
	)
}