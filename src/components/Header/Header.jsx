import React from 'react'
import './header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link className='logo' to="/">Enzo Filmes</Link> 
        <Link className='favoritos' to="/meusFilmes">Meus filmes</Link>
    </header>
  )
}

export default Header
