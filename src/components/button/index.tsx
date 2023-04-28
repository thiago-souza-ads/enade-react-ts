import { MouseEventHandler, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import * as Styles from './style';

export default function Button(props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){
	return <Styles.Button onClick={props.onClick}>{props.title}</Styles.Button>;
}