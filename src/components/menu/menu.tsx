import styles from './Menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
	const rotas = [{
		label: 'Aulas',
		to:'/inicio'
	}, {
		label: 'Cursos',
		to:'/cursos'
	}, {
		label: 'Mapa 2023',
		to:'/inicio'
	}, {
		label: 'Dicas',
		to:'/cursos'
	}, {
		label: 'Sobre',
		to:'/inicio'
	}];
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>
				{rotas.map( (rota, index)=>
					<Link key={index} to={rota.to} className={styles.menu__list}>
						{rota.label}
					</Link>
				)}
			</ul>
		</nav>
	);

}