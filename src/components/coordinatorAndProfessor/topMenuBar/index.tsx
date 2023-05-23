import * as Styles from './style';
import Logo from '../../../assets/profCoord/aa.svg';
import Home from '../../../assets/profCoord/botaoHome.svg';

export default function TopMenuBar() {
	return(
        <Styles.Main>
			<Styles.HomeIconBox>
			<img src={Home}/>
			</Styles.HomeIconBox>
			<Styles.MenuBox>
				<Styles.MenuLink>
				<a href="https://www.w3schools.com/html/html_links.asp">Home</a>
				</Styles.MenuLink>
				<Styles.MenuLink>
				<a href="https://www.w3schools.com/html/html_links.asp">Professores/Coordenadores</a>
				</Styles.MenuLink>
				<Styles.MenuLink>
				<a href="/alunos">Alunos</a>
				</Styles.MenuLink>
				<Styles.MenuLink>
				<a href="https://www.w3schools.com/html/html_links.asp">Questões</a>
				</Styles.MenuLink>				
			</Styles.MenuBox>
			<Styles.EstacioLogoBox>
				<img src={Logo} alt='logo' width='150px'/>
			</Styles.EstacioLogoBox>
		</Styles.Main>	
	);
}