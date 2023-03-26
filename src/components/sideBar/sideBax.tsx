import React from 'react';
import Usuario from '../../model/Usuario';
import './SideBar.module.scss';

export default function SideBar({user}: { user: Usuario }) {
	return (
		<div className="user-sidebar">
			{/*<img src={user.foto} alt={user.nome}/>*/}
			<h2>{user.id}</h2>
			<h2>{user.nome}</h2>
			<h3>{user.roles[0].nome}</h3>
			<a href="#">Editar Perfil</a>
			<a href="#">Sair</a>
		</div>
	);
}