import * as Styles from './style';
import Button from 'components/button';

interface Props {
	iconPath: string;
	title: string;
	text: string;
}

export default function Board(props: Props) {
	const handle = (event: any) => {
		console.log('teste');
	};
	return(    
		<Styles.Main>
			<Styles.IconBox>
				<img src={props.iconPath}/>
			</Styles.IconBox>
			<Styles.Title>
				<h2>{props.title}</h2>
			</Styles.Title>
			<Styles.Text>
				<p>{props.text}</p>
			</Styles.Text>
			<Button onClick={handle} title='teste' />
		</Styles.Main>
	);
}