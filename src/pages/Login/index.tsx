import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonLogin from './Login.module';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: 'rgba(63, 81, 181, 0.89)',
	},
	form: {
		//position:'absolute',
		zIndex: 999,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(8),
		borderRadius: theme.spacing(3),
		backgroundColor: '#fff',
		boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.2)',
	},
	aluno: {
		position: 'absolute',
		bottom: '0.1%',
		left: '0.1%',
	},
	estacio: {
		position: 'absolute',
		top: '1%',
		right: '1%',
		width: '20vh',
		maxwidth: '80vh',
	},
	letraBranca: {
		position: 'sticky',
		color: '#fff',
		top: '0%'
	},
	textField: {
		marginBottom: theme.spacing(1),
		width: '100%',
	},
	error_message: {
		marginTop: '10px',
		color: 'red',
		fontWeight: 'bold',
	},
	button: {
		marginTop: theme.spacing(3)
	}
}));

export default function Login() {
	const classes = useStyles();
	const [login, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		axios.post('http://localhost:8080/login/logar', {login: login, password: password})
			.then(response => {
				setError('');
				const user = JSON.stringify(response.data);
				localStorage.setItem('user', user);
				localStorage.setItem('token', 'tokenFake');

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

	return (
		<div className={classes.root}>
			<img className={classes.aluno} src={process.env.PUBLIC_URL + '/assets/estacio/aluno.png'} alt="Aluno"/>
			<img className={classes.estacio} src={process.env.PUBLIC_URL + '/assets/estacio/estacio.png'} alt="Estacio"/>
			<h1 className={classes.letraBranca}> Prepara Enade Estácio</h1>
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextField
					className={classes.textField}
					id="login"
					label="Login"
					type="email"
					value={login}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<TextField
					className={classes.textField}
					id="password"
					label="Password"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<ButtonLogin
					className={classes.button}
					type="submit"
					variant="contained"
					color="primary"
				>
                    Login
				</ButtonLogin>
				<div className="error_message">{error}</div>
			</form>
		</div>
	);
}