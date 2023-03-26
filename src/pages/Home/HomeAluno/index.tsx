import React from 'react';
import './HomeAluno.module.scss';

export default function HomeAluno() {
	const user = localStorage.getItem('user');
	return (
		<div className="home_container">
			<div className="home-user-panel">
				<div className="home-user-photo">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJUeQCIV5gK-gudX5l3OIhRcmgnbtGDhExw&usqp=CAU"
						alt="User Photo"/>
				</div>
				<div className="home-user-info">
					<h3>{user.nome}</h3>
					<p>{user.roles[0].nome}</p>
				</div>
			</div>
			<div className="home-menu-panel">
				<ul className="home-menu-list">
					<li><a href="#">Home</a></li>
					<li><a href="#">Enade</a></li>
					<li><a href="#">Simulados</a></li>
					<li><a href="#">Dicas</a></li>
					<li><a href="#">Gabaritos</a></li>
					<li><a href="#">Documentos</a></li>
					<li><a href="#">Avaliações</a></li>
				</ul>
			</div>
		</div>
	);
}