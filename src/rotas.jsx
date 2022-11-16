import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home/Home'
import Filme from './pages/Filme/Filme'
import Error from './pages/Error/Error';


import Header from './components/Header/Header';


function rotas() {
  return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Filme/>}/>


            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default rotas;