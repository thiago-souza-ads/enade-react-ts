import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import styles from './Login.module.scss';

export default function Login() {
    const [login, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

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
                    setError("Usuário ou senha inválidos.");
                } else {
                    setError("Não foi possível realizar o login. Tente novamente mais tarde.");
                }
            });
    }

    return (
        <div className={styles.root}>
            <img className={styles.aluno} src={process.env.PUBLIC_URL + "/assets/estacio/aluno.png"} alt="Aluno"/>
            <img className={styles.estacio} src={process.env.PUBLIC_URL + "/assets/estacio/estacio.png"} alt="Estacio"/>
            <h1 className={styles.letraBranca}> Prepara Enade Estácio</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    className={styles.textField}
                    id="login"
                    label="Login"
                    type="email"
                    value={login}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    className={styles.textField}
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    required={true}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    className={styles.button}
                    type="submit"
                    // variant="contained"
                    color="primary"
                >
                    Login
                </button>
                <div className="error_message">{error}</div>
            </form>
        </div>
    );
}
