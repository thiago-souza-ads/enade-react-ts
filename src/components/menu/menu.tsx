import styles from './Menu.module.scss';

export default function Menu() {
	const rotas = [{
		label: 'Aulas',
		to:'/aulas'
	}, {
		label: 'Cursos',
		to:'/cursos'
	}, {
		label: 'Mapa 2023',
		to:'/mapa'
	}, {
		label: 'Dicas',
		to:'/'
	}, {
		label: 'Sobre',
		to:'/sobre'
	}];
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>
				{rotas.map( (rota, index)=>
					<a key={index} href={rota.to} className={styles.menu__list}>
						{rota.label}
					</a>
				)}
			</ul>
		</nav>
	);

}