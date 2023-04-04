import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css';
import Router from './routes';
import Inicio from './pages/Inicio';
import Login from './pages/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router/>
	</React.StrictMode>
);