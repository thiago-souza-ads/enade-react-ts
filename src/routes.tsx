import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cursos from './pages/Curso';
import Menu from './components/menu/menu';

export default function AppRouter() {
	return (
		<Router>
			<Menu/>
			<Routes>
				<Route path='/' element={<Inicio/>}/>
				<Route path='/cursos' element={<Cursos/>}/>
			</Routes>
		</Router>
	);
}