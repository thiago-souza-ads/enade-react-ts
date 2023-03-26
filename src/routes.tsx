import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Curso from './pages/Curso';
import Menu from './components/menu/menu';
import Login from './pages/Login';
import Usuario from './pages/Usuario';
import HomeAluno from './pages/Home/HomeAluno';
import Perfil from './pages/Perfil';
import Exame from './pages/Exame';
import Dica from './pages/Dica';
import Disciplina from './pages/Disciplina';
import Aluno from './pages/Aluno';
import Calendario from './pages/Calendario';
import Coordenador from './pages/Coordenador';
import Enade from './pages/Enade';
import Etapa from './pages/Etapa';
import Evidencia from './pages/Evidencia';
import Instituicao from './pages/Instituicao';
import Midia from './pages/Midia';
import Professor from './pages/Professor';
import Questionario from './pages/Questionario';
import Relatorio from './pages/Relatorio';
import Unidade from './pages/Unidade';
import HomeProfessor from './pages/Home/HomeProfessor';
import HomeCoordenador from './pages/Home/HomeCoordenador';
import HomeAdministrador from './pages/Home/HomeAdministrador';

export default function AppRouter() {
	// const userLocal = localStorage.getItem('user');
	// const parsedUser = userLocal ? JSON.parse(userLocal) as Usuario : null;
	return (
		<Router>
			<Menu/>
			{/*{parsedUser && <SideBar user={parsedUser} />}*/}
			<Routes>
				<Route path='/' element={<Inicio/>}/>
				<Route path='/aluno' element={<Aluno/>}/>
				<Route path='/calendario' element={<Calendario/>}/>
				<Route path='/coordenador' element={<Coordenador/>}/>
				<Route path='/curso' element={<Curso/>}/>
				<Route path='/dica' element={<Dica/>}/>
				<Route path='/disciplina' element={<Disciplina/>}/>
				<Route path='/enade' element={<Enade/>}/>
				<Route path='/etapa' element={<Etapa/>}/>
				<Route path='/evidencia' element={<Evidencia/>}/>
				<Route path='/exame' element={<Exame/>}/>
				<Route path='/home-aluno' element={<HomeAluno/>}/>
				<Route path='/home-professor' element={<HomeProfessor/>}/>
				<Route path='/home-administrador' element={<HomeAdministrador/>}/>
				<Route path='/home-coordenador' element={<HomeCoordenador/>}/>
				<Route path='/home-professor' element={<HomeProfessor/>}/>
				<Route path='/inicio' element={<Inicio/>}/>
				<Route path='/instituicao' element={<Instituicao/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/midia' element={<Midia/>}/>
				<Route path='/perfil' element={<Perfil/>}/>
				<Route path='/professor' element={<Professor/>}/>
				<Route path='/questionario' element={<Questionario/>}/>
				<Route path='/relatorio' element={<Relatorio/>}/>				<Route path='/login' element={<Login/>}/>
				<Route path='/unidade' element={<Unidade/>}/>
				<Route path='/usuario' element={<Usuario/>}/>
			</Routes>
		</Router>
	);
}