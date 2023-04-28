import * as Styles from './style';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Input from 'components/input';
import Button from 'components/button';
import Logo from '../../assets/estacioWhiteBg.png';



export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event: any) => {
		event.preventDefault();
		axios.post('http://localhost:8080/login/logar', {login: email, password: password})
			.then(response => {
				setError('');
				const user = JSON.stringify(response.data);
				localStorage.setItem('user', user);
				localStorage.setItem('token', 'tokenFake');
				const role = response.data.roles[0].nome;
				if(role === 'Aluno'){
					navigate('/home-aluno');
				} else if(role === 'Coordenador') {
					navigate('/home-coordenador');
				} else if (role === 'Professor') {
					navigate('/home-professor');
				} else if (role === 'Administrador') {
					navigate('/home-administrador', {... response.data});
				}
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 400) {
					setError('Usuário ou senha inválidos.');
				} else {
					setError('Não foi possível realizar o login. Tente novamente mais tarde.');
				}
			});
	};

	const Login = () =>{
		console.log(email, password);
	};

	return (
		<Styles.Main>
			<Styles.Login>
				<Styles.LoginInput>
					<img src={Logo} alt='logo' width='150px' />
					<div className='InputsBox'>
						<Input placeholder='E-mail' type='email'  onChange={(event: any) => setEmail(event.target.value)}/>
						<Input placeholder='Senha' type='password'  onChange={(event: any) => setPassword(event.target.value)}/>
					</div>
					<Button onClick={handleSubmit} title='Logar' />
					<div className='error'>
						{error}
					</div>
				</Styles.LoginInput>
			</Styles.Login>
		</Styles.Main>
	);
}