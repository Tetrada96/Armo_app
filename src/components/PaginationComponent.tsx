import React from 'react';

import { Button } from './';

interface IPaginationComponentProps {
	page: number;
	thisPage: number;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export const PaginationComponent = ({page, thisPage, onClick}: IPaginationComponentProps) => {

	const countPage = (page: number) => {
		const arrayPage: number[] = [];
		for(let i = 1; i<=page; i++) {
			arrayPage.push(i);
		}
		return arrayPage;
	}

	return (
		<div>
		{countPage(page).map((item: number) => <Button key={item} style={{backgroundColor: thisPage === Number(item) ? 'rgba(0,0,0,0.4)' : undefined}} onClick={onClick} children={item} />)}
		</div>
	)
}