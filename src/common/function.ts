import { IUseModal } from '../hooks/useModal';

export const closeModalAndRefresh = (modal?: IUseModal) => {
	modal && modal.close();
	window.location.reload();
}