import cursos from 'data/cursos.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
	let cursosRecomendados = [...cursos];
	cursosRecomendados = cursosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
	return (
		<section>
			<h3 className={styles.titulo}>Recomendações de Cursos</h3>
			<div className={styles.recomendados}>
				{cursosRecomendados.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.foto} alt={item.titulo}/>
						</div>
						<button className={styles.recomendado__botao}>
                                Ver mais
						</button>
					</div>
				)
				)}
			</div>
		</section>
	);
}
