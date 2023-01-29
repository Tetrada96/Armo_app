import React from 'react';

import { Form, IFormState } from './';
import { Modal } from '../components/Modal';
import { IUseModal } from '../hooks/useModal';

interface IModalWithFormProps {
	form: IFormState;
	modal: IUseModal;
	modalTitle?: string;
	onConfirm: () => void;
	onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ModalWithForm = ({form ,modal, modalTitle='Создать новую запись', onConfirm, onChangeInput}: IModalWithFormProps) => {

	return (
		<>
		 <Modal confirmText='Добавить' onClose={modal.close} onConfirm={onConfirm} isDisabledConfirmButton={!form.name} showModal={modal.showModal} title={modalTitle}>
				<Form form={form} onChange={onChangeInput} flexDirection='column' />
		  </Modal>
		</>
	)
}