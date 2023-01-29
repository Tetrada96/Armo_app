import React from 'react';
import { createPortal } from 'react-dom';

import { Button } from './';

interface IModalProps {
	title: string;
	children: JSX.Element;
	confirmText: string;
	onConfirm: () => void;
	onClose: () => void;
	showModal: boolean;
	isDisabledConfirmButton?: boolean;
}


export const Modal = ({title, children, confirmText, onConfirm, onClose, showModal, isDisabledConfirmButton}: IModalProps) => {

let element = document.getElementById('root');

if(!showModal) return null;
	
return createPortal(
		<div style={{position: 'fixed', top: '0', backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems: 'center', zIndex: '10'}}>
			<div style={{height: '50vh', width: '50vw', backgroundColor: 'white', display: 'flex', flexDirection: 'column'}}>
			<div style={{padding: '10px', borderBottom: '1px solid black', textAlign: 'center'}}>{title}</div>
				<div style={{height: '100%'}}>{children}</div>
				<div style={{display: 'flex', padding: '10px', gap: '10px', justifyContent: 'space-between'}}>
					<Button onClick={onClose}>{'Отмена'}</Button>
					<Button disabled={isDisabledConfirmButton} onClick={onConfirm}>{confirmText}</Button>
				</div>
			</div>
			
		</div>, element as Element
	)
}