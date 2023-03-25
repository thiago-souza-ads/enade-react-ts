import resultado from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import {useEffect, useState} from 'react';

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props) {
	const [lista, setLista] = useState(resultado);
	const { busca, filtro, ordenador } = props;

	function testaBusca(title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number) {
		if(filtro !== null) return filtro === id;
		return true;
	}

	function ordenar(novaLista: typeof resultado) {
		switch(ordenador) {
		case 'duracao':
			return novaLista.sort((a, b) => a.duracao > b.duracao ? 1 : -1);
		case 'periodo':
			return novaLista.sort((a,b) => a.periodo > b.periodo ? 1 : -1);
		case 'mensalidade':
			return novaLista.sort((a,b) => a.mensalidade > b.mensalidade ? 1 : -1);
		default:
			return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = resultado.filter(item => testaBusca(item.titulo) && testaFiltro(item.categoria.id));
		setLista(ordenar(novaLista));
	},[busca, filtro, ordenador]);

	return (
		<div className={styles.itens}>
			{lista.map(item => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
}