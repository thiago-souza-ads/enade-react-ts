import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "normalize.css";
import Cursos from "./pages/Curso";
import HomeAluno from "./pages/Home/HomeAluno";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<Cursos/>*/}
    {/*<HomeAluno/>*/}
    <Login/>
  </React.StrictMode>
);