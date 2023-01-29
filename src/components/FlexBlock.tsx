import React from 'react';

import { FlexDirection } from '../fragments';

interface IFlexBlockProps {
	direction?: FlexDirection;
	gap?: string;
	children: JSX.Element
}

export const FlexBlock = ({direction, gap, children}: IFlexBlockProps) => {
	return <div style={{flexDirection:direction, gap: gap, display: 'flex' }}>{children}</div>
}
