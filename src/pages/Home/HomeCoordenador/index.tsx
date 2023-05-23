import * as Styles from './style';
import Board from 'components/coordinatorAndProfessor/board';
import Menu from 'components/coordinatorAndProfessor/topMenuBar';
import ProfessorIcon from '../../../assets/profCoord/chalkboard-user-solid.svg';
import StudentIcon from '../../../assets/profCoord/graduation-cap-solid.svg';
import QuestionIcon from '../../../assets/profCoord/question.svg';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et imperdiet nisl. Cras sed quam vulputate, laoreet dui gravida, interdum elit. Vivamus mattis egestas tortor id varius. Donec scelerisque sapien eu dolor consectetur sollicitudin. Vestibulum nec auctor odio. Donec in accumsan massa. Donec sit amet elit justo. Pellentesque tincidunt enim id nisi varius, non semper dolor placerat.';
export default function HomeCoordenador(){
	return (
		<Styles.Main>
			<Menu></Menu>
			<Styles.Container>
				<Styles.MessageBox>
					<h1>Bem vindo!</h1>
				</Styles.MessageBox>
				<Styles.BoardsBox>
					<Board iconPath={ProfessorIcon} title='Professores/Coordenadores' text={text} linkPath='/professor'></Board>
					<Board iconPath={StudentIcon} title='Alunos' text={text} linkPath='/alunos'></Board>
					<Board iconPath={QuestionIcon} title='Questões' text={text} linkPath='/questionario'></Board>
				</Styles.BoardsBox>
				
			</Styles.Container>
		</Styles.Main>
	);
}