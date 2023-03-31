import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import Menu from './components/menu/menu';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Aluno from './pages/Aluno';
import Calendario from './pages/Calendario';
import Coordenador from './pages/Coordenador';
import Curso from './pages/Curso';
import Dica from './pages/Dica';
import Disciplina from './pages/Disciplina';
import Enade from './pages/Enade';
import Etapa from './pages/Etapa';
import Evidencia from './pages/Evidencia';
import Exame from './pages/Exame';
import HomeAluno from './pages/Home/HomeAluno';
import HomeProfessor from 'pages/Home/HomeProfessor';
import HomeCoordenador from './pages/Home/HomeCoordenador';
import Instituicao from './pages/Instituicao';
import Midia from './pages/Midia';
import Professor from 'pages/Professor';
import Perfil from './pages/Perfil';
import Questionario from './pages/Questionario';
import Relatorio from './pages/Relatorio';
import Usuarios from './pages/Usuario';
import Unidade from './pages/Unidade';
import SideBar from './components/sideBar/sideBax';
import api from './services/api';

export default function AppRouter() {
	const [error, setError] = useState(false);
	const token = localStorage.getItem('token');
	const [userProps, setUser] = useState(null);
	const [roleProps, setRole] = useState('');
	api.post('/login/validar-token', {token: token})
		.then(response => {
			const userJSON = JSON.stringify(response.data);
			const userProps = response.data;
			const role = response.data.roles[0].nome;
			setRole(role);
			setUser(userProps);
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user', userJSON);
		})
		.catch((error) => {
			setError(error);
		});

	return (
		<>
			{error ? (
				<Route path='/login' element={<Login />} />
			) : (
				<>
					<Menu />
					{userProps ? (
						<SideBar user={userProps}/>
					) : null}
					<Routes>
						{roleProps === 'Aluno' && (
							<>
								<Route path='/' element={<HomeAluno />} />
								<Route path='/home-aluno' element={<HomeAluno />} />
								<Route path='/enade' element={<Enade />} />
								<Route path='/dica' element={<Dica />} />
								<Route path='/calendario' element={<Calendario />} />
								<Route path='/perfil' element={<Perfil />} />
								<Route path='/instituicao' element={<Instituicao />} />
							</>
						)}
						{roleProps === 'Professor' && (
							<>
								<Route path='/' element={<HomeProfessor />} />
								<Route path='/perfil' element={<Perfil />} />
								<Route path='/home-professor' element={<HomeProfessor />} />
							</>
						)}
						{roleProps === 'Coordenador' && (
							<>
								<Route path='/unidade' element={<Unidade />} />
								<Route path='/questionario' element={<Questionario />} />
								<Route path='/perfil' element={<Perfil />} />
								<Route path='/usuario' element={<Usuarios />} />
								<Route path='/' element={<Inicio />} />
								<Route path='/home-coordenador' element={<HomeCoordenador />} />
								<Route path='/exame' element={<Exame />} />
								<Route path='/professor' element={<Professor />} />
								<Route path='/alunos' element={<Aluno />} />
								<Route path='/coordenador' element={<Coordenador />} />
								<Route path='/midia' element={<Midia />} />
								<Route path='/disciplina' element={<Disciplina />} />
								<Route path='/curso' element={<Curso />} />
								<Route path='/etapa' element={<Etapa />} />
								<Route path='/evidencia' element={<Evidencia />} />
								<Route path='/relatorio' element={<Relatorio />} />
							</>
						)}
						<Route path='/login' element={<Login />} />
					</Routes>
				</>
			)}
		</>
	);
}
