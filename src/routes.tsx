import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cursos from './pages/Curso';
import Menu from './components/menu/menu';
import Login from './pages/Login';
import {isAuthenticated, getUser} from './auth';
import SideBar from './components/sideBar/sideBax';
import Usuario from './model/Usuario';

export default function AppRouter() {
	const userLocal = localStorage.getItem('user');
	const parsedUser = userLocal ? JSON.parse(userLocal) as Usuario : null;
	return (
		<Router>
			<Menu/>
			{parsedUser && <SideBar user={parsedUser} />}
			<Routes>
				<Route path='/' element={<Inicio/>}/>
				<Route path='/cursos' element={<Cursos/>}/>
				<Route path='/login' element={<Login/>}/>
			</Routes>
		</Router>
	);
}