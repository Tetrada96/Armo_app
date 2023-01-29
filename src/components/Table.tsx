import React from 'react';

import { Button } from './';
import { IUsers } from '../services/users';
import { EditButton } from '../fragments';

const Th = ({children}: {children: string}) => {
  return <th style={{padding: '15px'}}>{children}</th>
}

const Tr = ({children}: {children: JSX.Element}) => {
  return <tr style={{outline: '1px solid black'}}>{children}</tr>
}

interface ITableProps {
  headers: string[];
  data: IUsers[];
  onDelete: (id: string) => void;
}

export const Table = ({headers, data, onDelete}: ITableProps) => {

	return (
		<div>
		{data !== undefined ? (
    <div>
      <table style={{width: '-webkit-fill-available'}}>
		    <thead>
          <Tr>
            <>
             {headers.map((header: string, index: number) => <Th key={index}>{header}</Th>)}
            </>
          </Tr>
		    </thead>
        <tbody>
          {data.map((item) => {
            return(
            <Tr key={item.id}>
              <>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.lastName}</td>
                <td>{item.birthDate}</td>
                <td style={{display: 'flex', justifyContent: 'flex-end', gap: '10px', padding: '0 10px'}}>
                  <EditButton data={item} />
                  <Button onClick={() => onDelete(item.id as string)}>{'Удалить'}</Button>
                </td>
              </>
            </Tr>
            )})
          }
        </tbody>
      </table>
		</div>)
    : null
		}
		</div>
	)
};
		