import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

//Estilizar uma pagina 404
const Pagina404 = () => (<div>Página 404</div>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/cadastro/video" element={<CadastroVideo/>}/>
      <Route path="/cadastro/categoria" element={<CadastroCategoria/>}/>
      <Route path="*" element={<Pagina404/>} />
    </Routes>
  </BrowserRouter>
);
