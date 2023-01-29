import React, { useEffect, useState } from 'react';

import { getUsers, deleteUsers, IUsers } from '../services/users';
import { PaginationComponent, Table, FlexBlock, Loader,   } from '../components';
import { CreateButton, Form } from '../fragments';
import { closeModalAndRefresh } from '../common/function';


const headers: string[] = ['Имя', 'email', 'Фамилия', 'Дата рождения', ''];

const countDecade = (count: number) => {
	const first = count*10 -10;
	const end = count*10 -1;
	return {first, end};
}

export interface IFormState {
	name: string | undefined;
	email: string | undefined;
	birthDate: string | undefined;
	lastName: string | undefined;
}

export const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, data:IFormState,  func: (item:IFormState ) => void) => {
		const nameInput = e.target.name;
		const newValue = e.target.value ? e.target.value : null;
		func({...data, [nameInput]: newValue})
}

const filteringData = (data: IUsers[], filters: IFormState) => {
	let filteredData = data;
	filteredData = filteredData.filter((item) => filters.name ? item.name?.toLowerCase().includes(filters.name.toLowerCase()) : true );
	filteredData = filteredData.filter((item) => filters.lastName ? item.lastName?.toLowerCase().includes(filters.lastName.toLowerCase()) : true );
	filteredData = filteredData.filter((item) => filters.birthDate ? item.birthDate?.toLowerCase().includes(filters.birthDate.toLowerCase()) : true );
	filteredData = filteredData.filter((item) => filters.email ? item.email?.toLowerCase().includes(filters.email.toLowerCase()) : true );
	return filteredData;
}

export const FullTable = () => {
	const [users, setUsers] = useState<IUsers[]>([]);
	const [page, setPage] = useState<number>(1);
	const [thisPage, setThisPage] = useState<number>(1);
	const [shownUsers, setShownUsers] = useState<IUsers[]>([]);
	const [filterData, setFilterData] = useState<IFormState>({name: undefined, email: undefined, birthDate: undefined, lastName: undefined});
	const [loading, setLoading] = useState<boolean>(true);
	const [filteredUsers, setFilteredUsers] = useState<IUsers[]>([]);

	useEffect(() => {
		getUsers.then(res => {setUsers(res.data); setLoading(false); setFilteredUsers(res.data)});
	}
	,[]); 

	useEffect(() => {
		const {first, end} = countDecade(thisPage);
		setShownUsers(filteredUsers.filter((_, index: number) => first <= index &&  index<= end ));
	}, [filteredUsers, thisPage])

	useEffect(() => {
		setPage(Math.trunc((filteredUsers.length -1) / 10) +1);
	}, [filteredUsers]);

	useEffect(() => {
		setFilteredUsers(filteringData(users,filterData))
		if(((filteredUsers.length - 1) / 10) < thisPage) {
			setThisPage(1);
		}
		// eslint-disable-next-line
	}, [filterData])

	const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
		const input = e.target as HTMLElement;
		setThisPage(Number(input.innerText));
	}

	const onDeleteHandler = (id: string) => {
  	deleteUsers(id).then(() => closeModalAndRefresh());
	}

	const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeInput(e,filterData, setFilterData);
	}
	if (loading) return <Loader />


	return (
		<FlexBlock direction='column' gap='10px'>
			<>
				<CreateButton />
				<Form form={filterData} flexDirection='row' needTopBorder={true} onChange={onChangeInputHandler} />
				{shownUsers.length !== 0 ? 
				<>
					<Table headers={headers} data={shownUsers} onDelete={onDeleteHandler} />
					<PaginationComponent page={page} thisPage={thisPage} onClick={changePage}  />
				</> : 
				<div>Таблица пуста</div> }
			</>
		</FlexBlock>
	)
}


