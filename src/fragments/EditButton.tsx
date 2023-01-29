import React, { useState } from 'react';

import { IFormState, ModalWithForm, onChangeInput } from './';
import { Button } from '../components/Button';
import { useModal } from '../hooks/useModal';
import { editUser, IUsers } from '../services/users';
import { useEffect } from 'react';
import { closeModalAndRefresh } from '../common/function';

export const EditButton = ({data}: {data:IUsers}) => {
	const [form, setForm] = useState<IFormState>(data);

	useEffect(() => {
		setForm({name: data.name, email: data.email, birthDate: data.birthDate, lastName: data.lastName})
	}, [data])
	
	const modal = useModal();

	const onEditHandler = () => {
		editUser(String(data.id),form).then(() => closeModalAndRefresh(modal));
	}

		const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeInput(e,form, setForm);
	}

	return ( 
		<>
		<Button onClick={modal.open}>Редактировать</Button>
		{modal.showModal ? <ModalWithForm form={form} onChangeInput={onChangeInputHandler} onConfirm={onEditHandler} modal={modal} modalTitle='Редактировать текущую запись' /> : null}
		</>
	)
}