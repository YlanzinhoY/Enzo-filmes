import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home/Home'
import Filme from './pages/Filme/Filme'
import Error from './pages/Error/Error';


import Header from './components/Header/Header';
import NotFoundFilmes from './components/NotFoundFilmes/NotFoundFilmes';
import MeusFilmes from './pages/MeusFilmes/MeusFilmes';


function rotas() {
  return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Filme/>}/>
            <Route path='/MeusFilmes' element={<MeusFilmes/>}/>

            <Route path="*" element={<Error/>}/>
            <Route path="/not" element={<NotFoundFilmes/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default rotas;