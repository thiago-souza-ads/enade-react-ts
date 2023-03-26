import styles from './Menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
	const rotas = [
		{
			label: 'Alunos',
			to: '/aluno'
		}, {
			label: 'Calendário',
			to: '/calendario'
		}, {
			label: 'Coordenador',
			to: '/coordenador'
		}, {
			label: 'Cursos',
			to: '/curso'
		}, {
			label: 'Dicas',
			to: '/dica'
		}
		, {
			label: 'Disciplina',
			to: '/disciplina'
		}
		, {
			label: 'Enade',
			to: '/enade'
		}
		, {
			label: 'Etapa',
			to: '/etapa'
		}
		, {
			label: 'Evidencia',
			to: '/evidencia'
		}
		, {
			label: 'Exame',
			to: '/exame'
		},{
			label: 'HomePluno',
			to: '/home-aluno'
		}, {
			label: 'HomeProfessor',
			to: '/home-professor'
		}, {
			label: 'HomeAdministrador',
			to: '/home-administrador'
		}, {
			label: 'HomeCoordenador',
			to: '/home-coordenador'
		}, {
			label: 'home-professor',
			to: '/home-professor'
		}, {
			label: 'inicio',
			to: '/inicio'
		}
		, {
			label: 'instituicao',
			to: '/instituicao'
		}
		, {
			label: 'login',
			to: '/login'
		}
		, {
			label: 'midia',
			to: '/midia'
		}
		, {
			label: 'perfil',
			to: '/perfil'
		}
		, {
			label: 'professor',
			to: '/professor'
		},{
			label: 'questionario',
			to: '/questionario'
		}, {
			label: 'relatorio',
			to: '/relatorio'
		}, {
			label: 'unidade',
			to: '/unidade'
		}, {
			label: 'usuario',
			to: '/usuario'
		}];
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>
				{rotas.map((rota, index) =>
					<Link key={index} to={rota.to} className={styles.menu__list}>
						{rota.label}
					</Link>
				)}
			</ul>
		</nav>
	);

}