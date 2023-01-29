import axios from 'axios';

export interface IUsers {
	id?: string;
	name: string | undefined;
	birthDate: string | undefined;
	email: string | undefined;
	lastName: string | undefined;
}

export const getUsers: Promise<{data: IUsers[]}> = axios.get('https://retoolapi.dev/eqsQ4S/users');

export const deleteUsers = (id: string) => axios.delete(`https://retoolapi.dev/eqsQ4S/users/${id}`);

export const createUser = (data: IUsers) => axios.post(`https://retoolapi.dev/eqsQ4S/users`, data );

export const editUser = (id: string, data: IUsers) => axios.patch(`https://retoolapi.dev/eqsQ4S/users/${id}`, data);