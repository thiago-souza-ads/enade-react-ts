import * as Styles from './style';
import Button from 'components/button';
import {useNavigate} from 'react-router-dom';

interface Props {
	iconPath: string;
	title: string;
	text: string;
	linkPath: string;
}

export default function Board(props: Props) {
	const navigate = useNavigate();
	const handle = (event: any) => {	
		navigate(props.linkPath);
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
			<Button onClick={handle} title='Acessar painel' />
		</Styles.Main>
	);
}