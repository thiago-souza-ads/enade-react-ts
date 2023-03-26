import React from 'react';
import './SideBar.module.scss';
import Usuario from '../../model/Usuario';

export default function SideBar({user}: { user: Usuario }) {
	return (
		<div className="user-sidebar">
			<img src={user.nome} alt={user.nome}/>
			<h2>{user.id}</h2>
			<h2>{user.nome}</h2>
			<h3>{user.roles[0].nome}</h3>
			<a href="#">Editar Perfil</a>
			<a href="#">Sair</a>
		</div>
	);
}