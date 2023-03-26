import styles from './Cursos.module.scss';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import {useState} from 'react';

export default function Cursos() {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');

	return (
		<main>
			<header className={styles.header}>
				<div className={styles.header__text}>
					<div className={styles.header__text}>Cursos</div>
				</div>
			</header>
			<section className={styles.cursos}>
				<h3 className={styles.cursos__titulo}>A Estácio tem os Cursos perfeitos para voce!</h3>
				<div className={styles.cursos__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro}/>
				</div>
				<div className={styles.linha}>
					<Buscador
						busca={busca}
						setBusca={setBusca}
					/>
					<Ordenador
						ordenador={ordenador}
						setOrdenador={setOrdenador}
					/>
				</div>
				<div className={styles.cursos}>
					<Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
				</div>
			</section>
		</main>
	);
}