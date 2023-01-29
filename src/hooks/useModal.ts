import { useState } from 'react';

export interface IUseModal {
	showModal: boolean;
	open: () => void;
	close: () => void;
}

export const useModal = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const open = () => {
		setShowModal(true);
	}

	const close = () => {
		setShowModal(false);
	}

	return {
		showModal,
		open,
		close
	}
}