import styles from './Item.module.scss';
import curso from '../itens.json';
import classNames from 'classnames';

type Props = typeof curso[0];

export default function Item(props: Props) {
	const {titulo, descricao, categoria, duracao, periodo, mensalidade, foto} = props;
	return (
		<div className={styles.item}>
			<div className={styles.item__imagem}>
				<img src={foto} alt={titulo}/>
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{titulo}</h2>
					<p>{descricao}</p>
					<div className={styles.item__tags}>
						<div className={classNames({
							[styles.item__tipo]: true,
							[styles[`item__tipo__${categoria.value.toLowerCase()}`]]: true,
						})}
						>
							{categoria.nome}
						</div>
						<div className={styles.item__duracao}>
							{duracao} anos
						</div>
						<div className={styles.item__periodo}>
							{periodo}
						</div>
						<div className={styles.item__mensalidade}>
                            R$ {mensalidade.toFixed(2)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}