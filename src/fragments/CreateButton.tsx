import React, { useState } from 'react';

import { IFormState, ModalWithForm, onChangeInput } from './';
import { Button } from '../components/Button';
import { useModal } from '../hooks/useModal';
import { createUser } from '../services/users';
import { closeModalAndRefresh } from '../common/function';

export const CreateButton = () => {
	const [form, setForm] = useState<IFormState>({name: undefined, email: undefined, birthDate: undefined, lastName: undefined});
	
	const modal = useModal();

	const onCreateItem = () => {
		modal.open()
	};

	const onCreateHandler = () => {
		createUser(form).then(() => closeModalAndRefresh(modal));
	};

	const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeInput(e,form, setForm)
	}

	return ( 
		<>
		<Button onClick={onCreateItem}>Создать новую запись</Button>
		{modal.showModal ? <ModalWithForm form={form} onChangeInput={onChangeInputHandler}  onConfirm={onCreateHandler} modal={modal} /> : null}
		</>
	)
}

