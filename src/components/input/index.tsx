import * as Styles from './style';

export default function Input(props: any) {
	return(    
		<Styles.Main>
			<input placeholder={props.placeholder} type={props.type} onChange={props.onChange} />	
		</Styles.Main>
	);
}